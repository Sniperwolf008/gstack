/* =====================================================
   Dimasi Garage — FAQ-Chatbot
   100% clientseitig, kostenlos, keine Drittanbieter, kein Tracking.

   Aufbau bewusst modular:
   - DimasiBot.resolve(text)  = das "Gehirn" (Intent-Erkennung).
     Diese eine Funktion liesse sich spaeter durch einen KI-Aufruf
     (z. B. Gemini ueber eine Netlify-Funktion) als Fallback ersetzen,
     ohne die Oberflaeche unten anzufassen.
   - Der Rest baut nur das Widget und zeigt Nachrichten an.

   Hinweis: Die Schluesselwoerter (keys) stehen absichtlich OHNE Umlaute,
   weil normalize() die Nutzereingabe ebenfalls auf ae/oe/ue umstellt.
   Die sichtbaren Antworten nutzen korrekte Umlaute (ä/ö/ü); Schweizer
   "ss" (Strasse, ausschliesslich) bleibt erhalten.
   ===================================================== */
(function () {
  "use strict";

  var CONTACT = {
    phone: "+41912081545",
    phoneLabel: "091 208 15 45",
    email: "info.dimasigarage@gmail.com",
    maps: "https://maps.google.com/?q=Z%C3%BCrcherstrasse%20300%2C%208406%20Winterthur"
  };

  /* --- Wiederverwendbare Kontakt-Bausteine --- */
  function callLink() { return '<a href="tel:' + CONTACT.phone + '">' + CONTACT.phoneLabel + "</a>"; }
  function mailLink() { return '<a href="mailto:' + CONTACT.email + '">' + CONTACT.email + "</a>"; }

  var DEFAULT_CHIPS = [
    { label: "Tuning & Stages", q: "leistungen" },
    { label: "Frontscheiben", q: "frontscheibe" },
    { label: "An- & Verkauf", q: "verkaufen" },
    { label: "Preis", q: "preis" },
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

    { keys: ["frontscheibe", "scheibe", "scheiben", "steinschlag", "riss", "glas", "windschutz", "sprung"],
      reply: "Steinschlag oder Riss in der Frontscheibe? Wir <strong>reparieren kleine Steinschläge</strong> und <strong>tauschen beschädigte Frontscheiben</strong> fachgerecht – inklusive Kalibrierung der Kamera- und Assistenzsysteme. Steinschlag ist über die Teilkasko oft gedeckt – wir wickeln die Versicherung ab und übernehmen je nach Fall sogar deinen <strong>Selbstbehalt</strong> (ganz oder teilweise). Termine gibt's kurzfristig.",
      chips: [{ label: "Kostenlose Anfrage", action: "anfrage" }, { label: "Anrufen", action: "call" }] },

    { keys: ["verkaufen", "verkauf", "ankauf", "auto loswerden"],
      reply: "Wir <strong>kaufen dein Auto an</strong> – faire, marktgerechte Bewertung, unkompliziert und transparent. Sag uns einfach, was du fährst (Modell, Jahr, km), dann bekommst du ein ehrliches Angebot.",
      chips: [{ label: "Auto bewerten lassen", action: "anfrage" }, { label: "Anrufen", action: "call" }] },

    { keys: ["auto kaufen", "fahrzeug kaufen", "gebrauchtwagen", "occasion", "kaufen"],
      reply: "Wir vermitteln <strong>geprüfte Fahrzeuge</strong> zu fairen Preisen und helfen bei der Wunschsuche. Aktuelle Angebote gibt's auf Anfrage – sag uns, was du suchst.",
      chips: [{ label: "Kostenlose Anfrage", action: "anfrage" }, { label: "Anrufen", action: "call" }] },

    { keys: ["preis", "preise", "koste", "kostet", "teuer", "guenstig", "offerte", "angebot", "festpreis", "was kostet"],
      reply: "Der Preis hängt von <strong>Fahrzeug und Umfang</strong> ab – wir machen keine Pauschalpreise, sondern ein <strong>transparentes Festpreis-Angebot vorab</strong>. Stell einfach eine kostenlose Anfrage, meist bekommst du noch am selben Tag eine Antwort.",
      chips: CONTACT_CHIPS },

    { keys: ["stage 2", "stage2", "stage 3", "stage3", "stage zwei", "stage drei"],
      reply: "<strong>Stage 2 &amp; 3:</strong> Abstimmung für Hardware-Umbauten wie Downpipe, Ladeluftkühler oder grösserer Turbo – maximale Performance, sauber kalibriert. Was fährst du?",
      chips: CONTACT_CHIPS },

    { keys: ["stage 1", "stage1", "stage eins"],
      reply: "<strong>Stage 1:</strong> optimierte Software auf der Serienhardware – mehr PS und Drehmoment, besseres Ansprech- und Schaltverhalten, im sicheren Rahmen. Kein Umbau nötig.",
      chips: CONTACT_CHIPS },

    { keys: ["wie lange", "dauer", "dauert", "schnell", "wann fertig", "wie schnell"],
      reply: "Meist innerhalb von <strong>30 Minuten bis wenigen Stunden</strong> nach Eingang deiner Originaldatei. Komplexe Projekte stimmen wir vorher individuell ab." },

    { keys: ["sicher", "gefaehrlich", "motor kaputt", "schaden", "garantie", "risiko", "schadet", "haltbar"],
      reply: "Ja. Wir stimmen jede Datei in <strong>sicheren Toleranzen</strong> ab – Bauteilschutz, Abgaswerte und Fahrbarkeit bleiben im Blick. Stage 1 bleibt im Rahmen dessen, was die Hardware dauerhaft verträgt. Deine Originaldatei sichern wir vorher." },

    { keys: ["zurueck", "serienstand", "serie", "original zurueck", "rueckbau", "rueckruest", "ruecksetzen"],
      reply: "Ja. Wir sichern deine Originaldatei vor der Optimierung – du kannst jederzeit wieder den <strong>Serienstand</strong> aufspielen, z. B. vor einem Werkstattbesuch oder Verkauf." },

    { keys: ["geraet", "auslese", "auslesen", "obd", "equipment", "tool", "was brauche", "brauche ich"],
      reply: "Du brauchst ein <strong>Auslesegerät</strong>, um die Software deines Steuergeräts zu lesen und zurückzuschreiben. Wir beraten dich, welches zu deinem Fahrzeug passt – oder vermitteln einen Partner in deiner Nähe." },

    { keys: ["welche auto", "welches auto", "fahrzeug", "marke", "audi", "bmw", "mercedes", "vw", "golf", "diesel", "benziner", "suv", "modell", "passt mein"],
      reply: "Wir sind auf <strong>PKW</strong> spezialisiert – Benziner und Diesel jeder Klasse: Kompakt &amp; Limousine, SUV &amp; Geländewagen, Sport &amp; Performance, Eco &amp; Vielfahrer. Sag mir gern dein Modell, dann passt's." },

    { keys: ["dpf", "opf", "egr", "agr", "adblue", "scr", "partikelfilter", "abgas"],
      reply: "Wir bieten Software-Lösungen rund um DPF/OPF, AGR/EGR und AdBlue/SCR. <strong>Wichtig:</strong> Filter- und Abgas-Optimierungen sind ausschliesslich für den <strong>Motorsport- und Exporteinsatz ausserhalb öffentlicher Strassen</strong> bestimmt." },

    { keys: ["eco", "verbrauch", "sparen", "sprit", "spritspar", "weniger verbrauch"],
      reply: "<strong>Eco-Tuning:</strong> Spritspar-Optimierung – mehr Drehmoment im unteren Bereich für entspanntes Fahren bei weniger Verbrauch." },

    { keys: ["ablauf", "wie funktioniert", "wie laeuft", "prozess", "vorgehen", "schritte"],
      reply: "So läuft's:<ul><li>1. Kostenlose Anfrage mit deinem Fahrzeug</li><li>2. Transparentes Festpreis-Angebot vorab</li><li>3. Originaldatei sichern &amp; optimieren</li><li>4. Datei aufspielen – fertig</li></ul>",
      chips: CONTACT_CHIPS },

    { keys: ["wo ", "wo seid", "wo finde", "standort", "adresse", "winterthur", "anfahrt", "werkstatt", "wo ist"],
      reply: 'Du findest uns in <strong>Winterthur</strong>:<br>Zürcherstrasse 300, 8406 Winterthur, Schweiz.<br><a href="' + CONTACT.maps + '" target="_blank" rel="noopener">Route in Google Maps</a>',
      chips: CONTACT_CHIPS },

    { keys: ["oeffnungszeit", "geoeffnet", "wann offen", "wann habt", "offen", "zeiten"],
      reply: "<strong>Öffnungszeiten:</strong><ul><li>Mo, Mi, Fr: 18:00–22:00 Uhr</li><li>Sa: 08:00–14:00 Uhr</li></ul>Rund um die Uhr erreichst du uns über das <strong>Anfrageformular</strong> – Francesco meldet sich zügig, meist am selben Tag.",
      chips: CONTACT_CHIPS },

    { keys: ["eintrag", "tuev", "tuv", "strassenverkehrsamt", "versicherung", "legal", "gesetz", "eingetragen"],
      reply: "Hinweis: Leistungssteigerungen müssen beim zuständigen <strong>Strassenverkehrsamt</strong> eingetragen und der Versicherung gemeldet werden. Filter-/Abgas-Optimierungen sind nur für Motorsport/Export ausserhalb öffentlicher Strassen bestimmt." },

    { keys: ["galerie", "projekte", "bilder", "fotos", "instagram", "insta", "beispiele", "referenzen"],
      reply: "Unsere <strong>echten Projekte</strong> zeigen wir auf Instagram – schau gern rein: <a href=\"https://www.instagram.com/dimasigarage\" target=\"_blank\" rel=\"noopener\">@DimasiGarage auf Instagram</a>.",
      chips: CONTACT_CHIPS },

    { keys: ["zahlung", "zahlungsart", "bezahlen", "zahlen", "twint", "barzahlung", "kreditkarte", "ec karte"],
      reply: "Bei uns kannst du <strong>bar, per TWINT oder mit Karte</strong> bezahlen – ganz wie's dir passt.",
      chips: CONTACT_CHIPS },

    { keys: ["leistung", "leistungen", "stage", "chiptuning", "tuning", "mehr ps", "leistungssteigerung", "optimierung", "bietet", "anbieten", "service", "was macht ihr", "was koennt ihr"],
      reply: "Wir bieten <strong>individuelle Software-Optimierung</strong> – das komplette Angebot:<ul>" +
        "<li><strong>Stage 1</strong> Leistungssteigerung – mehr Leistung</li>" +
        "<li><strong>Stage 2 &amp; Stage 3</strong> – Hardware-abgestimmt</li>" +
        "<li><strong>Eco-Tuning</strong> – weniger Verbrauch</li>" +
        "<li><strong>DPF / OPF Optimierung</strong> – Motorsport / Export</li>" +
        "<li><strong>AGR / EGR Optimierung</strong> – weniger Verkokung</li>" +
        "<li><strong>AdBlue / SCR Optimierung</strong> – Diesel / Export</li>" +
        "<li><strong>Pop &amp; Bang / Launch Control</strong> – Sound &amp; Sport</li>" +
        "<li><strong>Vmax &amp; Limiter</strong> – individuell</li>" +
        "<li><strong>Getriebe &amp; Schaltverhalten</strong> – besseres Schalten</li>" +
        "</ul>Ausserdem: <strong>Frontscheiben-Service</strong> (Steinschlag/Riss) und <strong>Fahrzeug An- &amp; Verkauf</strong>. Welche Leistung interessiert dich?",
      chips: [{ label: "Stage 1", q: "stage 1" }, { label: "Stage 2/3", q: "stage 2" }, { label: "Eco-Tuning", q: "eco" }, { label: "Was kostet es?", q: "preis" }] },

    { keys: ["kontakt", "anrufen", "telefon", "nummer", "email", "mail", "whatsapp", "erreich", "termin", "buchen", "anfrage", "anfragen", "melden"],
      reply: "So erreichst du Dimasi Garage:<ul><li>✉️ " + mailLink() + " <em>(jederzeit)</em></li><li>📞 " + callLink() + " <em>(nur während der Arbeitszeiten)</em></li></ul>Am schnellsten geht eine <strong>kostenlose Anfrage</strong> – rund um die Uhr:",
      chips: [{ label: "Kostenlose Anfrage", action: "anfrage" }, { label: "Anrufen", action: "call" }] }
  ];

  var FALLBACK = {
    reply: "Das kann ich dir hier nicht sicher beantworten – aber Francesco hilft dir persönlich weiter. Am besten mit einer <strong>kostenlosen Anfrage</strong> (rund um die Uhr); Anrufe am besten während der Arbeitszeiten. Meist gibt's noch am selben Tag eine Antwort.",
    chips: [{ label: "Kostenlose Anfrage", action: "anfrage" }, { label: "Anrufen", action: "call" }, { label: "Preis", q: "preis" }]
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
          // Wortstamm-Treffer (Substring) fuer laengere/zusammengesetzte Schluessel,
          // wortgenau nur fuer kurze (<=3), damit z. B. "hi" nicht in "chiptuning" trifft.
          var hit = (key.indexOf(" ") >= 0 || key.length >= 4)
            ? n.indexOf(key) >= 0
            : words.indexOf(" " + key + " ") >= 0;
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
    launcher.setAttribute("aria-label", "Chat öffnen");
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
