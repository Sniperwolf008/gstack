/* =====================================================
   Dimasi Garage — FAQ-Chatbot
   100% clientseitig, kostenlos, keine Drittanbieter, kein Tracking.

   Aufbau bewusst modular:
   - DimasiBot.resolve(text)  = das "Gehirn" (Intent-Erkennung).
     Diese eine Funktion liesse sich spaeter durch einen KI-Aufruf
     (z. B. Gemini ueber eine Netlify-Funktion) als Fallback ersetzen,
     ohne die Oberflaeche unten anzufassen.
   - Der Rest baut nur das Widget und zeigt Nachrichten an.
   ===================================================== */
(function () {
  "use strict";

  var CONTACT = {
    phone: "+41912081545",
    phoneLabel: "091 208 15 45",
    email: "info.dimasigarage@gmail.com",
    waText: "Hallo Dimasi Garage, ich habe eine Frage zur Optimierung meines Fahrzeugs:",
    maps: "https://maps.google.com/?q=Z%C3%BCrcherstrasse%20300%2C%208406%20Winterthur"
  };

  /* --- Wiederverwendbare Kontakt-Bausteine --- */
  function callLink() { return '<a href="tel:' + CONTACT.phone + '">' + CONTACT.phoneLabel + "</a>"; }
  function mailLink() { return '<a href="mailto:' + CONTACT.email + '">' + CONTACT.email + "</a>"; }
  function waLink() {
    return '<a href="https://wa.me/' + CONTACT.phone.replace(/[^0-9]/g, "") +
      "?text=" + encodeURIComponent(CONTACT.waText) + '" target="_blank" rel="noopener">WhatsApp</a>';
  }

  var DEFAULT_CHIPS = [
    { label: "Leistungen & Stages", q: "leistungen" },
    { label: "Was kostet es?", q: "preis" },
    { label: "Wie lange dauert es?", q: "dauer" },
    { label: "Welche Autos?", q: "autos" },
    { label: "Kontakt", q: "kontakt" }
  ];
  var CONTACT_CHIPS = [
    { label: "Kostenlose Anfrage", action: "anfrage" },
    { label: "Anrufen", action: "call" }
  ];

  /* --- Textnormalisierung: klein, ohne Umlaute, ohne Satzzeichen --- */
  function normalize(s) {
    return (s || "")
      .toLowerCase()
      .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  /* --- Die Intents. Reihenfolge = Prioritaet (spezifisch vor allgemein). --- */
  var INTENTS = [
    { keys: ["hallo", "hi", "hey", "servus", "gruezi", "guten tag", "moin", "hallo zusammen"],
      reply: "Hallo! 👋 Ich bin der Assistent von <strong>Dimasi Garage</strong>. Frag mich zu Leistungen, Stages, Preisen, Ablauf oder Kontakt – oder tipp einfach los." },

    { keys: ["danke", "merci", "thx", "vielen dank", "super danke"],
      reply: "Gern! 🚗 Wenn du loslegen willst, stell einfach eine kostenlose Anfrage – meist gibt's noch am selben Tag eine Antwort.", chips: CONTACT_CHIPS },

    { keys: ["preis", "preise", "koste", "kostet", "teuer", "guenstig", "offerte", "angebot", "festpreis", "was kostet"],
      reply: "Der Preis haengt von <strong>Fahrzeug und Umfang</strong> ab – wir machen keine Pauschalpreise, sondern ein <strong>transparentes Festpreis-Angebot vorab</strong>. Stell einfach eine kostenlose Anfrage, meist bekommst du noch am selben Tag eine Antwort.",
      chips: CONTACT_CHIPS },

    { keys: ["stage 2", "stage2", "stage 3", "stage3", "stage zwei", "stage drei"],
      reply: "<strong>Stage 2 &amp; 3:</strong> Abstimmung fuer Hardware-Umbauten wie Downpipe, Ladeluftkuehler oder groesserer Turbo – maximale Performance, sauber kalibriert. Was faehrst du?",
      chips: CONTACT_CHIPS },

    { keys: ["stage 1", "stage1", "stage eins"],
      reply: "<strong>Stage 1:</strong> optimierte Software auf der Serienhardware – mehr PS und Drehmoment, besseres Ansprech- und Schaltverhalten, im sicheren Rahmen. Kein Umbau noetig.",
      chips: CONTACT_CHIPS },

    { keys: ["leistung", "leistungen", "stage", "chiptuning", "tuning", "mehr ps", "leistungssteigerung", "optimierung"],
      reply: "Wir bieten u. a.:<ul><li><strong>Stage 1</strong> – Software auf Serienhardware</li><li><strong>Stage 2 &amp; 3</strong> – mit Hardware-Umbauten</li><li><strong>Eco-Tuning</strong> – weniger Verbrauch</li><li>Getriebe &amp; Schaltverhalten</li><li>DPF/OPF, AGR/EGR, AdBlue/SCR</li><li>Pop &amp; Bang, Launch Control, Vmax/Limiter</li></ul>Welche Leistung interessiert dich?",
      chips: [{ label: "Stage 1", q: "stage 1" }, { label: "Stage 2/3", q: "stage 2" }, { label: "Eco-Tuning", q: "eco" }, { label: "Was kostet es?", q: "preis" }] },

    { keys: ["wie lange", "dauer", "dauert", "schnell", "wann fertig", "wie schnell"],
      reply: "Meist innerhalb von <strong>30 Minuten bis wenigen Stunden</strong> nach Eingang deiner Originaldatei. Komplexe Projekte stimmen wir vorher individuell ab." },

    { keys: ["sicher", "gefaehrlich", "motor kaputt", "schaden", "garantie", "risiko", "schadet", "haltbar"],
      reply: "Ja. Wir stimmen jede Datei in <strong>sicheren Toleranzen</strong> ab – Bauteilschutz, Abgaswerte und Fahrbarkeit bleiben im Blick. Stage 1 bleibt im Rahmen dessen, was die Hardware dauerhaft vertraegt. Deine Originaldatei sichern wir vorher." },

    { keys: ["zurueck", "serienstand", "serie", "original zurueck", "rueckbau", "rueckruest", "ruecksetzen"],
      reply: "Ja. Wir sichern deine Originaldatei vor der Optimierung – du kannst jederzeit wieder den <strong>Serienstand</strong> aufspielen, z. B. vor einem Werkstattbesuch oder Verkauf." },

    { keys: ["geraet", "auslese", "auslesen", "obd", "equipment", "tool", "was brauche", "brauche ich"],
      reply: "Du brauchst ein <strong>Auslesegeraet</strong>, um die Software deines Steuergeraets zu lesen und zurueckzuschreiben. Wir beraten dich, welches zu deinem Fahrzeug passt – oder vermitteln einen Partner in deiner Naehe." },

    { keys: ["welche auto", "welches auto", "fahrzeug", "marke", "audi", "bmw", "mercedes", "vw", "golf", "diesel", "benziner", "suv", "modell", "passt mein"],
      reply: "Wir sind auf <strong>PKW</strong> spezialisiert – Benziner und Diesel jeder Klasse: Kompakt &amp; Limousine, SUV &amp; Gelaendewagen, Sport &amp; Performance, Eco &amp; Vielfahrer. Sag mir gern dein Modell, dann passt's." },

    { keys: ["dpf", "opf", "egr", "agr", "adblue", "scr", "partikelfilter", "abgas"],
      reply: "Wir bieten Software-Loesungen rund um DPF/OPF, AGR/EGR und AdBlue/SCR. <strong>Wichtig:</strong> Filter- und Abgas-Optimierungen sind ausschliesslich fuer den <strong>Motorsport- und Exporteinsatz ausserhalb oeffentlicher Strassen</strong> bestimmt." },

    { keys: ["eco", "verbrauch", "sparen", "sprit", "spritspar", "weniger verbrauch"],
      reply: "<strong>Eco-Tuning:</strong> Spritspar-Optimierung – mehr Drehmoment im unteren Bereich fuer entspanntes Fahren bei weniger Verbrauch." },

    { keys: ["ablauf", "wie funktioniert", "wie laeuft", "prozess", "vorgehen", "schritte"],
      reply: "So laeuft's:<ul><li>1. Kostenlose Anfrage mit deinem Fahrzeug</li><li>2. Transparentes Festpreis-Angebot vorab</li><li>3. Originaldatei sichern &amp; optimieren</li><li>4. Datei aufspielen – fertig</li></ul>",
      chips: CONTACT_CHIPS },

    { keys: ["wo ", "wo seid", "wo finde", "standort", "adresse", "winterthur", "anfahrt", "werkstatt", "wo ist"],
      reply: 'Du findest uns in <strong>Winterthur</strong>:<br>Zuercherstrasse 300, 8406 Winterthur, Schweiz.<br><a href="' + CONTACT.maps + '" target="_blank" rel="noopener">Route in Google Maps</a>',
      chips: CONTACT_CHIPS },

    { keys: ["oeffnungszeit", "geoeffnet", "wann offen", "wann habt", "offen", "zeiten"],
      reply: "Feste Oeffnungszeiten haben wir online nicht hinterlegt. Am schnellsten geht's per Anfrage oder Anruf – Francesco meldet sich zuegig, meist am selben Tag.",
      chips: CONTACT_CHIPS },

    { keys: ["eintrag", "tuev", "tuv", "strassenverkehrsamt", "versicherung", "legal", "gesetz", "eingetragen"],
      reply: "Hinweis: Leistungssteigerungen muessen beim zustaendigen <strong>Strassenverkehrsamt</strong> eingetragen und der Versicherung gemeldet werden. Filter-/Abgas-Optimierungen sind nur fuer Motorsport/Export ausserhalb oeffentlicher Strassen bestimmt." },

    { keys: ["kontakt", "anrufen", "telefon", "nummer", "email", "mail", "whatsapp", "erreich", "termin", "buchen", "anfrage", "anfragen", "melden"],
      reply: "Gern! So erreichst du Dimasi Garage:<ul><li>📞 " + callLink() + "</li><li>✉️ " + mailLink() + "</li><li>💬 " + waLink() + "</li></ul>Oder direkt eine kostenlose Anfrage stellen:",
      chips: [{ label: "Kostenlose Anfrage", action: "anfrage" }] }
  ];

  var FALLBACK = {
    reply: "Das kann ich dir hier nicht sicher beantworten – aber Francesco hilft dir persoenlich weiter. Stell eine kostenlose Anfrage oder ruf an (" + callLink() + "), meist gibt's noch am selben Tag eine Antwort.",
    chips: [{ label: "Kostenlose Anfrage", action: "anfrage" }, { label: "Leistungen", q: "leistungen" }, { label: "Preis", q: "preis" }]
  };

  /* --- DAS GEHIRN: Text -> Antwort. Hier kaeme spaeter ein KI-Fallback rein. --- */
  var DimasiBot = {
    resolve: function (text) {
      var n = normalize(text);
      if (!n) return FALLBACK;
      var words = " " + n + " ";
      for (var i = 0; i < INTENTS.length; i++) {
        var it = INTENTS[i];
        for (var k = 0; k < it.keys.length; k++) {
          var key = it.keys[k];
          var hit = key.indexOf(" ") >= 0 ? n.indexOf(key) >= 0 : words.indexOf(" " + key + " ") >= 0;
          if (hit) return { reply: it.reply, chips: it.chips || DEFAULT_CHIPS };
        }
      }
      return FALLBACK;
    }
  };

  /* =====================================================
     Widget (Oberflaeche)
     ===================================================== */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  var ICON_CHAT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8A8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z"/></svg>';
  var ICON_CLOSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  var ICON_SEND = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>';

  var root, body, chipsBox, input, panel, started = false;

  function scrollDown() { body.scrollTop = body.scrollHeight; }

  function addMsg(html, who) {
    var m = el("div", "dg-msg dg-msg--" + who, html);
    body.appendChild(m);
    scrollDown();
    return m;
  }

  function renderChips(chips) {
    chipsBox.innerHTML = "";
    (chips || DEFAULT_CHIPS).forEach(function (c) {
      var b = el("button", "dg-chip", c.label);
      b.type = "button";
      b.addEventListener("click", function () {
        if (c.action) return doAction(c.action);
        addMsg(escapeHtml(c.label), "user");
        respond(c.q || c.label);
      });
      chipsBox.appendChild(b);
    });
  }

  function escapeHtml(s) {
    return (s || "").replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function doAction(action) {
    if (action === "anfrage") {
      var form = document.getElementById("kontakt");
      if (form) form.scrollIntoView({ behavior: "smooth", block: "start" });
      close();
      setTimeout(function () {
        var name = document.querySelector('#anfrageForm input[name="name"]');
        if (name) name.focus({ preventScroll: true });
      }, 600);
    } else if (action === "call") {
      window.location.href = "tel:" + CONTACT.phone;
    }
  }

  function respond(text) {
    var typing = addMsg('<span class="dg-typing"><span></span><span></span><span></span></span>', "bot");
    var res = DimasiBot.resolve(text);
    setTimeout(function () {
      typing.innerHTML = res.reply;
      renderChips(res.chips);
      scrollDown();
    }, 420);
  }

  function open() {
    root.classList.add("is-open");
    if (!started) {
      started = true;
      addMsg("Hallo! 👋 Ich bin der Assistent von <strong>Dimasi Garage</strong>. Wobei kann ich helfen?", "bot");
      renderChips(DEFAULT_CHIPS);
    }
    setTimeout(function () { input.focus({ preventScroll: true }); }, 250);
  }
  function close() { root.classList.remove("is-open"); }

  function build() {
    root = el("div", "dg-chat");

    var launcher = el("button", "dg-chat__launcher",
      ICON_CHAT + '<span class="dg-chat__launcher-label">Fragen? Chat</span>');
    launcher.type = "button";
    launcher.setAttribute("aria-label", "Chat oeffnen");
    launcher.addEventListener("click", open);

    panel = el("div", "dg-chat__panel");
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Dimasi Garage Chat");

    var head = el("div", "dg-chat__head",
      '<span class="dg-chat__avatar">DG</span>' +
      '<span><span class="dg-chat__title">Dimasi Garage</span>' +
      '<span class="dg-chat__status">Antwortet sofort</span></span>');
    var closeBtn = el("button", "dg-chat__close", ICON_CLOSE);
    closeBtn.type = "button";
    closeBtn.setAttribute("aria-label", "Chat schliessen");
    closeBtn.addEventListener("click", close);
    head.appendChild(closeBtn);

    body = el("div", "dg-chat__body");
    chipsBox = el("div", "dg-chat__chips");

    var form = el("form", "dg-chat__form");
    input = el("input", "dg-chat__input");
    input.type = "text";
    input.placeholder = "Frage eingeben …";
    input.setAttribute("aria-label", "Nachricht");
    input.autocomplete = "off";
    var send = el("button", "dg-chat__send", ICON_SEND);
    send.type = "submit";
    send.setAttribute("aria-label", "Senden");
    form.appendChild(input);
    form.appendChild(send);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = input.value.trim();
      if (!v) return;
      addMsg(escapeHtml(v), "user");
      input.value = "";
      respond(v);
    });

    var hint = el("div", "dg-chat__hint", "Automatische Antworten · für Verbindliches kurz anfragen");

    panel.appendChild(head);
    panel.appendChild(body);
    panel.appendChild(chipsBox);
    panel.appendChild(form);
    panel.appendChild(hint);

    root.appendChild(launcher);
    root.appendChild(panel);
    document.body.appendChild(root);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
