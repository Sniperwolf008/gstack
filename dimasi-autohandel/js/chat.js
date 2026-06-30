/* =====================================================
   AURION Automobile — FAQ-Chatbot
   100% clientseitig, kostenlos, keine Drittanbieter, kein Tracking.

   Aufbau bewusst modular:
   - AurionBot.resolve(text)  = das "Gehirn" (Intent-Erkennung).
     Diese eine Funktion liesse sich spaeter durch einen KI-Aufruf
     (z. B. ueber eine Netlify-Funktion) als Fallback ersetzen,
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
    { label: "Auto kaufen", q: "kaufen" },
    { label: "Auto verkaufen", q: "verkaufen" },
    { label: "Eintausch", q: "eintausch" },
    { label: "Welche Fahrzeuge?", q: "bestand" },
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
      reply: "Hallo! 👋 Ich bin der Assistent von <strong>AURION Automobile</strong>. Frag mich zu Kaufen, Verkaufen, Eintausch, Bestand oder Kontakt – oder tipp einfach los." },

    { keys: ["danke", "merci", "thx", "vielen dank", "super danke"],
      reply: "Gern! 🚗 Wenn du loslegen willst, stell einfach eine kostenlose Anfrage – meist gibt's noch am selben Tag eine Antwort.", chips: CONTACT_CHIPS },

    { keys: ["eintausch", "eintauschen", "in zahlung", "altes auto", "tausch", "umtausch"],
      reply: "<strong>Eintausch:</strong> Du gibst dein aktuelles Auto in Zahlung, wir bewerten es fair und verrechnen den Eintauschwert direkt mit deinem neuen Fahrzeug – du zahlst nur die Differenz. Ummeldung übernehmen wir.",
      chips: CONTACT_CHIPS },

    { keys: ["verkaufen", "ankauf", "ankaufen", "auto loswerden", "mein auto verkaufen", "verkauf"],
      reply: "<strong>Verkauf an uns:</strong> Schick uns Modell, Jahr, Kilometer und Zustand – wir bewerten dein Auto fair, machen ein Angebot und wickeln Zahlung sowie Ummeldung sauber ab. Bar oder Überweisung.",
      chips: CONTACT_CHIPS },

    { keys: ["kaufen", "occasion", "occasionen", "gebraucht", "suchen", "suche", "fahrzeug kaufen", "auto kaufen"],
      reply: "<strong>Kauf:</strong> Wir führen geprüfte Occasionen. Sag mir, was du suchst (Marke, Budget, Antrieb) – passt nichts im aktuellen Bestand, nehmen wir einen Suchauftrag auf und melden uns, sobald etwas Passendes da ist.",
      chips: [{ label: "Welche Fahrzeuge?", q: "bestand" }, { label: "Suchauftrag", action: "anfrage" }] },

    { keys: ["preis", "preise", "koste", "kostet", "teuer", "guenstig", "offerte", "angebot", "festpreis", "was kostet", "bewertung kosten"],
      reply: "Anfrage und Bewertung sind <strong>kostenlos und unverbindlich</strong>. Kauf- und Ankaufspreise kalkulieren wir marktgerecht und nennen sie dir vorab – ohne versteckte Kosten. Stell einfach eine kostenlose Anfrage.",
      chips: CONTACT_CHIPS },

    { keys: ["bestand", "welche auto", "welches auto", "welche fahrzeuge", "auswahl", "im angebot", "verfuegbar", "lager"],
      reply: "Unser Bestand wechselt laufend – aktuell typische Occasionen wie VW Golf, Audi Q5, BMW 320d, Mercedes A-Klasse oder Škoda Octavia. Sag mir dein Wunschmodell, dann sage ich dir, ob etwas Passendes da ist.",
      chips: [{ label: "Suchauftrag stellen", action: "anfrage" }, { label: "Kontakt", q: "kontakt" }] },

    { keys: ["probefahrt", "testfahrt", "probe fahren", "anschauen", "besichtigen", "vorbeikommen"],
      reply: "Klar – eine <strong>Probefahrt</strong> ist jederzeit möglich. Vereinbare einfach einen Termin über das Anfrageformular oder ruf uns an.",
      chips: CONTACT_CHIPS },

    { keys: ["mfk", "geprueft", "pruefung", "zustand", "garantie", "service", "scheckheft", "unfall"],
      reply: "Jedes Fahrzeug wird vor dem Verkauf <strong>kontrolliert und ehrlich beschrieben</strong>. Auf Wunsch besprechen wir eine frische MFK oder zeigen dir die Serviceunterlagen.",
      chips: CONTACT_CHIPS },

    { keys: ["ablauf", "wie funktioniert", "wie laeuft", "prozess", "vorgehen", "schritte", "wie geht"],
      reply: "So läuft's:<ul><li>1. Kostenlose Anfrage (kaufen, verkaufen oder eintauschen)</li><li>2. Faire Bewertung &amp; konkretes Angebot</li><li>3. Probefahrt oder Begutachtung vor Ort</li><li>4. Vertrag, Zahlung &amp; Ummeldung – fertig</li></ul>",
      chips: CONTACT_CHIPS },

    { keys: ["ummeldung", "anmeldung", "abmeldung", "papiere", "vertrag", "kaufvertrag", "nummernschild"],
      reply: "Den Papierkram übernehmen wir: <strong>Kaufvertrag, Zahlung und Ummeldung</strong> wickeln wir sauber und schriftlich ab. Beim Ankauf kümmern wir uns auch um die Abmeldung." },

    { keys: ["zahlung", "bar", "barzahlung", "ueberweisung", "finanzierung", "raten", "leasing"],
      reply: "Auszahlung beim Ankauf per <strong>Bar oder Überweisung</strong>. Für Finanzierungsfragen beim Kauf sprich uns einfach direkt an – wir finden eine Lösung.",
      chips: CONTACT_CHIPS },

    { keys: ["wo ", "wo seid", "wo finde", "standort", "adresse", "winterthur", "anfahrt", "wo ist"],
      reply: 'Du findest uns in <strong>Winterthur</strong>:<br>Zürcherstrasse 300, 8406 Winterthur, Schweiz.<br><a href="' + CONTACT.maps + '" target="_blank" rel="noopener">Route in Google Maps</a>',
      chips: CONTACT_CHIPS },

    { keys: ["oeffnungszeit", "geoeffnet", "wann offen", "wann habt", "offen", "zeiten"],
      reply: "<strong>Anrufen</strong> am besten während der Arbeitszeiten. Rund um die Uhr erreichst du uns über das <strong>Anfrageformular</strong> – wir melden uns zügig, meist am selben Tag.",
      chips: CONTACT_CHIPS },

    { keys: ["kontakt", "anrufen", "telefon", "nummer", "email", "mail", "whatsapp", "erreich", "termin", "buchen", "anfrage", "anfragen", "melden"],
      reply: "So erreichst du AURION Automobile:<ul><li>✉️ " + mailLink() + " <em>(jederzeit)</em></li><li>📞 " + callLink() + " <em>(nur während der Arbeitszeiten)</em></li></ul>Am schnellsten geht eine <strong>kostenlose Anfrage</strong> – rund um die Uhr:",
      chips: [{ label: "Kostenlose Anfrage", action: "anfrage" }, { label: "Anrufen", action: "call" }] }
  ];

  var FALLBACK = {
    reply: "Das kann ich dir hier nicht sicher beantworten – aber wir helfen dir persönlich weiter. Am besten mit einer <strong>kostenlosen Anfrage</strong> (rund um die Uhr); Anrufe am besten während der Arbeitszeiten. Meist gibt's noch am selben Tag eine Antwort.",
    chips: [{ label: "Kostenlose Anfrage", action: "anfrage" }, { label: "Anrufen", action: "call" }, { label: "Eintausch", q: "eintausch" }]
  };

  /* --- DAS GEHIRN: Text -> Antwort. Hier kaeme spaeter ein KI-Fallback rein. --- */
  var AurionBot = {
    resolve: function (text) {
      var n = normalize(text);
      if (!n) return FALLBACK;
      var words = " " + n + " ";
      for (var i = 0; i < INTENTS.length; i++) {
        var it = INTENTS[i];
        for (var k = 0; k < it.keys.length; k++) {
          var key = it.keys[k];
          // Wortstamm-Treffer (Substring) fuer laengere/zusammengesetzte Schluessel,
          // wortgenau nur fuer kurze (<=3), damit z. B. "hi" nicht in "eintausch" trifft.
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
    var res = AurionBot.resolve(text);
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
      addMsg("Hallo! 👋 Ich bin der Assistent von <strong>AURION Automobile</strong>. Möchtest du kaufen, verkaufen oder eintauschen?", "bot");
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
    panel.setAttribute("aria-label", "AURION Automobile Chat");

    var head = el("div", "dg-chat__head",
      '<span class="dg-chat__avatar">DA</span>' +
      '<span><span class="dg-chat__title">AURION Automobile</span>' +
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
