/* =====================================================
   Dimasi Garage — Tuning-Konfigurator
   Kaskade Marke -> Modell -> Baujahr -> Motor, zeigt Serie gegen
   Getunt (PS/Nm) je Stage und uebergibt die Wahl ans Anfrageformular.
   Reine Client-Logik, keine externen Aufrufe.
   ===================================================== */
(function () {
  "use strict";

  var DATA = window.DIMASI_TUNING || {};
  var mk = document.getElementById("kMarke");
  var md = document.getElementById("kModell");
  var bj = document.getElementById("kBaujahr");
  var mo = document.getElementById("kMotor");
  var empty = document.getElementById("kEmpty");
  var panel = document.getElementById("kPanel");
  if (!mk || !md || !bj || !mo || !panel || !empty) return;

  var current = null;   // aktuell gewaehlter Motor
  var currentStage = null;
  var currentLabel = "";

  // Beschreibungen der optionalen Zusatzleistungen. Welche Add-ons ein
  // Motor hat, steht pro Motor im Datensatz (Feld "addons").
  var ADDON_DESC = {
    "E85 Flexfuel": "Umbau für E85-Bioethanol – mehr Leistung und günstigerer Sprit.",
    "Pop & Bang": "Knallen und Fehlzündungen beim Gaswegnehmen – sportlicher Sound.",
    "Vmax OFF": "Werkseitige Geschwindigkeits-Abriegelung aufheben.",
    "Launch Control": "Optimaler Ampelstart mit definierter Drehzahl.",
    "DTC OFF": "Bereinigung gespeicherter Fehlercodes im Steuergerät.",
    "Exhaust flaps open": "Abgasklappen dauerhaft geöffnet – kräftigerer Sound.",
    "Lambda OFF": "Lambda-/Katalysator-Überwachung aus (Motorsport / Export).",
    "Adblue OFF": "AdBlue-System deaktiviert (Motorsport / Export).",
    "DPF OFF": "Dieselpartikelfilter-Überwachung aus (Motorsport / Export).",
    "EGR OFF": "Abgasrückführung (AGR) deaktiviert (Motorsport / Export).",
    "OPF OFF": "Ottopartikelfilter-Überwachung aus (Motorsport / Export).",
    "Start Stop OFF": "Automatische Start-Stopp-Funktion dauerhaft deaktiviert.",
    "CAT OFF": "Katalysator-Überwachung aus (Motorsport / Export).",
    "Hard Cut limiter": "Harte Drehzahlbegrenzung – knackiger Schaltsound und definiertes Limit.",
    "Sportdisplay Calibration": "Sportanzeige im Kombiinstrument freigeschaltet und kalibriert."
  };
  var selectedAddons = [];

  function opt(value, text) {
    var o = document.createElement("option");
    o.value = value; o.textContent = text;
    return o;
  }
  function fill(sel, items, placeholder) {
    sel.innerHTML = "";
    sel.appendChild(opt("", placeholder));
    items.forEach(function (it) { sel.appendChild(opt(it, it)); });
  }
  function disable(sel, placeholder) {
    sel.innerHTML = "";
    sel.appendChild(opt("", placeholder));
    sel.disabled = true;
  }
  function reset() { panel.hidden = true; empty.hidden = false; current = null; }

  fill(mk, Object.keys(DATA), "Marke wählen …");

  mk.addEventListener("change", function () {
    var brand = mk.value;
    disable(bj, "Zuerst Modell wählen");
    disable(mo, "Zuerst Baujahr wählen");
    if (!brand) { disable(md, "Zuerst Marke wählen"); reset(); return; }
    fill(md, Object.keys(DATA[brand]), "Modell wählen …");
    md.disabled = false;
    reset();
  });

  md.addEventListener("change", function () {
    var brand = mk.value, model = md.value;
    disable(mo, "Zuerst Baujahr wählen");
    if (!model) { disable(bj, "Zuerst Modell wählen"); reset(); return; }
    var years = Object.keys(DATA[brand][model]);
    fill(bj, years, "Baujahr wählen …");
    bj.disabled = false;
    reset();
    // Nur ein Baujahr? Direkt auswaehlen und Motoren laden.
    if (years.length === 1) { bj.value = years[0]; loadMotors(); }
  });

  bj.addEventListener("change", function () { loadMotors(); });

  function loadMotors() {
    var brand = mk.value, model = md.value, year = bj.value;
    mo.innerHTML = "";
    if (!year) { disable(mo, "Zuerst Baujahr wählen"); reset(); return; }
    mo.appendChild(opt("", "Motor wählen …"));
    DATA[brand][model][year].forEach(function (m, i) { mo.appendChild(opt(String(i), m.label)); });
    mo.disabled = false;
    reset();
  }

  mo.addEventListener("change", function () {
    var idx = mo.value;
    if (idx === "") { reset(); return; }
    var m = DATA[mk.value][md.value][bj.value][parseInt(idx, 10)];
    currentLabel = mk.value + " " + md.value + " " + m.label;
    render(m);
  });

  function bar(label, width, value, tuned) {
    return '<div class="konfig__bar' + (tuned ? " konfig__bar--tuned" : "") + '">' +
      "<i>" + label + "</i>" +
      '<span class="konfig__track"><b data-w="' + width + '%"></b></span>' +
      "<em>" + value + "</em></div>";
  }
  function metric(name, unit, serie, tuned) {
    var gain = tuned - serie;
    var pct = Math.round((gain / serie) * 100);
    var serieW = Math.round((serie / tuned) * 100);
    return '<div class="konfig__metric">' +
      '<div class="konfig__metric-head"><span>' + name + "</span>" +
      '<strong class="konfig__delta">+' + gain + " " + unit + " · +" + pct + "%</strong></div>" +
      '<div class="konfig__bars">' +
        bar("Serie", serieW, serie + " " + unit, false) +
        bar("Getunt", 100, tuned + " " + unit, true) +
      "</div></div>";
  }

  function render(m) {
    current = m;
    selectedAddons = [];
    var stageNames = Object.keys(m.stages);
    currentStage = stageNames.indexOf(currentStage) >= 0 ? currentStage : stageNames[0];

    var tabs = stageNames.map(function (s) {
      return '<button type="button" class="konfig__stage' + (s === currentStage ? " is-active" : "") +
        '" data-stage="' + s + '">' + s + "</button>";
    }).join("");

    var engineAddons = m.addons || [];
    var addonChips = engineAddons.map(function (name) {
      var desc = ADDON_DESC[name] || "";
      return '<button type="button" class="konfig__addon" data-addon="' + name + '">' +
        '<span class="konfig__addon-name">' + name + "</span>" +
        (desc ? '<span class="konfig__addon-desc">' + desc + "</span>" : "") +
        '<span class="konfig__addon-check" aria-hidden="true"></span>' +
      "</button>";
    }).join("");

    panel.innerHTML =
      '<div class="konfig__vehicle">' + mk.value + " " + md.value +
        "<span>" + m.label + (m.fuel ? " · " + m.fuel : "") + " · Richtwert</span></div>" +
      (stageNames.length > 1 ? '<div class="konfig__stages" role="tablist">' + tabs + "</div>" : "") +
      '<div id="kMetrics"></div>' +
      (engineAddons.length ? '<div class="konfig__addons"><span class="konfig__addons-title">Add-ons (optional)</span>' +
        '<div class="konfig__addon-list">' + addonChips + "</div></div>" : "") +
      '<a href="#kontakt" class="btn btn--primary btn--large btn--block" id="kCta">' +
        "Diese Konfiguration anfragen" +
        '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>';
    empty.hidden = true;
    panel.hidden = false;

    panel.querySelectorAll(".konfig__stage").forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentStage = btn.dataset.stage;
        panel.querySelectorAll(".konfig__stage").forEach(function (b) { b.classList.toggle("is-active", b === btn); });
        renderMetrics();
      });
    });
    panel.querySelectorAll(".konfig__addon").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var a = btn.dataset.addon;
        var i = selectedAddons.indexOf(a);
        if (i >= 0) { selectedAddons.splice(i, 1); btn.classList.remove("is-active"); }
        else { selectedAddons.push(a); btn.classList.add("is-active"); }
      });
    });
    document.getElementById("kCta").addEventListener("click", prefill);
    renderMetrics();
  }

  function renderMetrics() {
    if (!current) return;
    var s = current.stages[currentStage];
    var box = document.getElementById("kMetrics");
    box.innerHTML = metric("Leistung", "PS", current.ps, s.ps) + metric("Drehmoment", "Nm", current.nm, s.nm);
    requestAnimationFrame(function () {
      box.querySelectorAll(".konfig__track > b").forEach(function (b) { b.style.width = b.dataset.w; });
    });
  }

  function prefill() {
    var form = document.querySelector('form[name="anfrage"]');
    if (!form || !current) return;
    var f = form.querySelector('[name="fahrzeug"]');
    var l = form.querySelector('[name="leistung"]');
    var n = form.querySelector('[name="nachricht"]');
    var s = current.stages[currentStage];
    if (f) f.value = currentLabel;
    if (l) {
      var want = /stage 2/i.test(currentStage) ? /stage 2/i : /stage 1/i;
      for (var i = 0; i < l.options.length; i++) {
        if (want.test(l.options[i].text)) { l.selectedIndex = i; break; }
      }
    }
    if (n && !n.value) {
      n.value = "Konfigurator: " + currentLabel + " → " + currentStage +
        " ca. " + s.ps + " PS / " + s.nm + " Nm" +
        (selectedAddons.length ? ". Add-ons: " + selectedAddons.join(", ") : "") +
        ". Bitte um ein Angebot.";
    }
  }
})();
