/* =====================================================
   Dimasi Automobile — Interaktionen
   Scroll-Reveal, animierte Counter, Navigation,
   Scroll-Progress und Formular-Feedback.
   ===================================================== */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- Mobile-Navigation --- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Menü schliessen" : "Menü öffnen");
    });
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* --- Nav-Hintergrund + Scroll-Progress --- */
  const nav = document.getElementById("nav");
  const progress = document.getElementById("scrollProgress");
  let scrollTicking = false;
  function updateScroll() {
    scrollTicking = false;
    const y = window.scrollY || document.documentElement.scrollTop;
    if (nav) nav.classList.toggle("is-scrolled", y > 12);
    if (progress) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
  }
  function onScroll() {
    if (!scrollTicking) { scrollTicking = true; requestAnimationFrame(updateScroll); }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  updateScroll();

  /* --- Animierte Counter --- */
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target || "0");
    const suffix = el.dataset.suffix || "";
    if (prefersReduced) {
      el.textContent = formatNum(target) + suffix;
      return;
    }
    const duration = 1600;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = formatNum(Math.round(target * eased)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  function formatNum(n) {
    return n.toLocaleString("de-CH");
  }

  /* --- Reveal + Counter via IntersectionObserver --- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  const counters = document.querySelectorAll(".counter");

  if ("IntersectionObserver" in window && !prefersReduced) {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          entry.target.querySelectorAll?.(".counter").forEach(animateCounter);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = Math.min((i % 4) * 70, 210) + "ms";
      io.observe(el);
    });
    // Counter, die nicht in einem reveal-Container liegen, separat beobachten
    counters.forEach((c) => io.observe(c));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
    counters.forEach(animateCounter);
  }

  /* --- Anfrageformular: Versand direkt auf der Seite ueber FormSubmit ---
     POST an den FormSubmit-AJAX-Endpoint -> Anfrage kommt per E-Mail an,
     ohne dass sich die Mail-App oeffnet. Faellt der Online-Versand aus,
     bieten wir ein vorausgefuelltes E-Mail als Netz an. */
  const form = document.getElementById("anfrageForm");
  const note = document.getElementById("formNote");
  const FORM_ENDPOINT = "https://formsubmit.co/ajax/info.dimasigarage@gmail.com";

  function mailtoFallback(data) {
    const subject = encodeURIComponent(
      "Anfrage Dimasi Automobile" + (data.name ? " - " + data.name : "")
    );
    const body = encodeURIComponent(
      "Name: " + (data.name || "") + "\n" +
      "E-Mail: " + (data.email || "") + "\n" +
      "Anliegen: " + (data.anliegen || "") + "\n" +
      "Fahrzeug: " + (data.fahrzeug || "") + "\n" +
      "Nachricht: " + (data.nachricht || "")
    );
    return "mailto:info.dimasigarage@gmail.com?subject=" + subject + "&body=" + body;
  }

  if (form && note) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        note.textContent = "Bitte fülle Name, E-Mail und Fahrzeug aus.";
        note.className = "form__note is-err";
        form.reportValidity();
        return;
      }

      const data = {};
      new FormData(form).forEach((value, key) => { data[key] = value; });

      // Lokale Vorschau (file://) -> Demo-Bestaetigung ohne echten Versand.
      if (location.protocol === "file:") {
        note.textContent = "Danke! Deine Anfrage ist eingegangen. (Lokale Vorschau – kein echter Versand.)";
        note.className = "form__note is-ok";
        form.reset();
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      note.textContent = "Wird gesendet …";
      note.className = "form__note";

      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            _subject: "Neue Anfrage – Dimasi Automobile",
            _template: "table",
            _captcha: "false",
            _replyto: data.email || "",
            Name: data.name || "",
            "E-Mail": data.email || "",
            Anliegen: data.anliegen || "",
            Fahrzeug: data.fahrzeug || "",
            Nachricht: data.nachricht || "",
          }),
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || !(json.success === "true" || json.success === true)) {
          throw new Error("send failed");
        }
        note.textContent = "Danke! Deine Anfrage ist eingegangen. Wir melden uns schnellstmöglich bei dir.";
        note.className = "form__note is-ok";
        form.reset();
      } catch (err) {
        note.innerHTML =
          "Online-Versand klappt gerade nicht. " +
          '<a href="' + mailtoFallback(data) + '">Anfrage per E-Mail senden</a>' +
          " – ein Klick, dein Mailprogramm öffnet sich mit allen Angaben.";
        note.className = "form__note is-err";
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  /* ============ Moderne Effekte (Stil 21st.dev) ============ */
  if (!prefersReduced) {
    const tiltSel = ".card, .vehicle, .gallery__item, .listing";
    const spotSel = ".card, .vehicle, .gallery__item, .stat, .listing";

    document.querySelectorAll(spotSel).forEach((el) => {
      const tiltable = el.matches(tiltSel);
      let raf = 0;
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        el.style.setProperty("--mx", (x / r.width) * 100 + "%");
        el.style.setProperty("--my", (y / r.height) * 100 + "%");
        if (!tiltable) return;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const rx = (0.5 - y / r.height) * 6;
          const ry = (x / r.width - 0.5) * 6;
          el.style.transform =
            "perspective(800px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) translateY(-4px)";
        });
      });
      if (tiltable) {
        el.addEventListener("pointerleave", () => {
          if (raf) cancelAnimationFrame(raf);
          el.style.transform = "";
        });
      }
    });

    // Magnetische Buttons
    document.querySelectorAll(".btn--primary").forEach((btn) => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const mx = e.clientX - r.left - r.width / 2;
        const my = e.clientY - r.top - r.height / 2;
        btn.style.transform = "translate(" + mx * 0.18 + "px," + my * 0.3 + "px)";
      });
      btn.addEventListener("pointerleave", () => { btn.style.transform = ""; });
    });

    // Meteor-Effekt in die CTA-Karte
    const ctaBox = document.querySelector(".cta__box");
    if (ctaBox) {
      const layer = document.createElement("div");
      layer.className = "meteors";
      for (let i = 0; i < 12; i++) {
        const m = document.createElement("span");
        m.className = "meteor";
        m.style.left = Math.round((i / 12) * 100 + (i % 3) * 4) + "%";
        m.style.animationDuration = 3 + (i % 4) + "s";
        m.style.animationDelay = i * 0.6 + "s";
        layer.appendChild(m);
      }
      ctaBox.insertBefore(layer, ctaBox.firstChild);
    }
  }

  // Zurück-nach-oben-Button
  const toTop = document.getElementById("toTop");
  if (toTop) {
    const toggleTop = () => toTop.classList.toggle("is-visible", (window.scrollY || 0) > 600);
    window.addEventListener("scroll", toggleTop, { passive: true });
    toggleTop();
    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
    });
  }

  /* ============ Interaktiver Hexagon-Spotlight (Maus + Finger) ============ */
  const hex = document.getElementById("hexFx");
  if (hex) {
    let hx = 0, hy = 0, raf = 0;
    const apply = () => {
      raf = 0;
      hex.style.setProperty("--hx", hx + "px");
      hex.style.setProperty("--hy", hy + "px");
    };
    const move = (x, y) => {
      hx = x; hy = y;
      hex.classList.add("is-active");
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const hide = () => hex.classList.remove("is-active");

    window.addEventListener("pointermove", (e) => move(e.clientX, e.clientY), { passive: true });
    window.addEventListener("pointerdown", (e) => move(e.clientX, e.clientY), { passive: true });
    // Finger losgelassen -> Leuchtpunkt ausblenden (wie ins Wasser getippt)
    window.addEventListener("pointerup", (e) => { if (e.pointerType !== "mouse") hide(); }, { passive: true });
    window.addEventListener("pointercancel", hide, { passive: true });
    // Maus verlässt die Seite -> ausblenden
    document.addEventListener("mouseleave", hide);
  }

})();
