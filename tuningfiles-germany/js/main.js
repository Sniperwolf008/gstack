/* =====================================================
   TuningFiles Germany — Interaktionen
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
      navToggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
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
  function onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    if (nav) nav.classList.toggle("is-scrolled", y > 12);
    if (progress) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

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
    return n.toLocaleString("de-DE");
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

  /* --- Formular-Feedback (Demo, keine echte Übertragung) --- */
  const form = document.getElementById("anfrageForm");
  const note = document.getElementById("formNote");
  if (form && note) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        note.textContent = "Bitte fülle Name, E-Mail und Fahrzeug aus.";
        note.className = "form__note is-err";
        form.reportValidity();
        return;
      }
      const name = (form.elements.namedItem("name") || {}).value || "";
      note.textContent = `Danke${name ? ", " + name.split(" ")[0] : ""}! Deine Anfrage ist eingegangen. Wir melden uns meist innerhalb von 30 Minuten.`;
      note.className = "form__note is-ok";
      form.reset();
    });
  }
})();
