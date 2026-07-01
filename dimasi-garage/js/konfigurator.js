/* =====================================================
   Dimasi Garage — Tuning-Konfigurator
   Kaskadierende Auswahl Marke -> Modell -> Motor, zeigt Serie- gegen
   Getunt-Werte (PS/Nm) und uebergibt die Konfiguration ans Anfrageformular.
   Reine Client-Logik, keine externen Aufrufe.
   ===================================================== */
(function () {
  "use strict";

  var DATA = window.DIMASI_TUNING || {};
  var mk = document.getElementById("kMarke");
  var md = document.getElementById("kModell");
  var mo = document.getElementById("kMotor");
  var empty = document.getElementById("kEmpty");
  var panel = document.getElementById("kPanel");
  if (!mk || !md || !mo || !panel || !empty) return;

  function opt(value, text) {
    var o = document.createElement("option");
    o.value = value;
    o.textContent = text;
    return o;
  }
  function fill(sel, items, placeholder) {
    sel.innerHTML = "";
    sel.appendChild(opt("", placeholder));
    items.forEach(function (it) { sel.appendChild(opt(it, it)); });
  }
  function reset() {
    panel.hidden = true;
    empty.hidden = false;
  }

  // Marken initial befuellen
  fill(mk, Object.keys(DATA), "Marke wählen …");

  mk.addEventListener("change", function () {
    var brand = mk.value;
    mo.innerHTML = "";
    mo.appendChild(opt("", "Zuerst Modell wählen"));
    mo.disabled = true;
    if (!brand) {
      md.innerHTML = "";
      md.appendChild(opt("", "Zuerst Marke wählen"));
      md.disabled = true;
      reset();
      return;
    }
    fill(md, Object.keys(DATA[brand]), "Modell wählen …");
    md.disabled = false;
    reset();
  });

  md.addEventListener("change", function () {
    var brand = mk.value, model = md.value;
    mo.innerHTML = "";
    if (!model) {
      mo.appendChild(opt("", "Zuerst Modell wählen"));
      mo.disabled = true;
      reset();
      return;
    }
    mo.appendChild(opt("", "Motor wählen …"));
    DATA[brand][model].forEach(function (m, i) { mo.appendChild(opt(String(i), m.label)); });
    mo.disabled = false;
    reset();
  });

  mo.addEventListener("change", function () {
    var idx = mo.value;
    if (idx === "") { reset(); return; }
    render(mk.value, md.value, DATA[mk.value][md.value][parseInt(idx, 10)]);
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

  function render(brand, model, m) {
    panel.innerHTML =
      '<div class="konfig__vehicle">' + brand + " " + model +
        "<span>" + m.label + " · Stage 1 (Richtwert)</span></div>" +
      metric("Leistung", "PS", m.ps[0], m.ps[1]) +
      metric("Drehmoment", "Nm", m.nm[0], m.nm[1]) +
      '<a href="#kontakt" class="btn btn--primary btn--large btn--block" id="kCta">' +
        "Diese Konfiguration anfragen" +
        '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>';
    empty.hidden = true;
    panel.hidden = false;

    // Balken von 0 auf Zielbreite animieren
    requestAnimationFrame(function () {
      panel.querySelectorAll(".konfig__track > b").forEach(function (b) {
        b.style.width = b.dataset.w;
      });
    });

    var cta = document.getElementById("kCta");
    if (cta) cta.addEventListener("click", function () { prefill(brand, model, m); });
  }

  function prefill(brand, model, m) {
    var form = document.querySelector('form[name="anfrage"]');
    if (!form) return;
    var f = form.querySelector('[name="fahrzeug"]');
    var l = form.querySelector('[name="leistung"]');
    var n = form.querySelector('[name="nachricht"]');
    if (f) f.value = brand + " " + model + " " + m.label;
    if (l) {
      for (var i = 0; i < l.options.length; i++) {
        if (/stage 1/i.test(l.options[i].text)) { l.selectedIndex = i; break; }
      }
    }
    if (n && !n.value) {
      n.value = "Konfigurator: " + brand + " " + model + " " + m.label +
        " → Stage 1 ca. " + m.ps[1] + " PS / " + m.nm[1] + " Nm. Bitte um ein Angebot.";
    }
  }
})();
