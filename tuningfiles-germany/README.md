# TuningFiles Germany — Premium Landing Page

Eine vollständige, responsive Landing Page für Leistungssteigerung & Chiptuning,
gebaut nach dem Leitfaden „Claude Design baut dir Premium Webseiten" (skalieren.com / Deniz Deke).

Vorbild für den Funktionsumfang: **tuningfilesgermany.de** (Leistungssteigerung +
komplettes Service-Angebot). Umgesetzt mit eigenem, konsistentem Design-System.

## Was die Seite enthält

- **Hero** mit Headline, Subheadline, Trust-Punkten und animiertem Leistungs-Gauge
- **Marken-Strip** (Audi, BMW, Mercedes …) als laufendes Band
- **Stats** mit animierten Zählern
- **Leistungen**: Stage 1/2/3, Eco-Tuning, DPF/OPF, AGR/EGR, AdBlue/SCR,
  Pop & Bang / Launch Control, Vmax/Limiter, DTC/Fehlercodes
- **Fahrzeugtypen**: PKW, LKW, Landmaschinen, Motorrad/Marine
- **Ablauf** in 4 Schritten
- **Warum wir** mit animiertem Prüfstand-Diagramm (SVG)
- **Bewertungen** (Testimonials + Sterne)
- **FAQ** (Accordion)
- **Kontakt/CTA** mit Anfrageformular
- **Footer** inkl. rechtlichem Hinweis

## Design-System (Tokens in `css/styles.css`)

- **Farben**: dunkles Premium-Theme + Orange-Verlauf als Akzent
- **Schriften**: `Space Grotesk` (Headlines) + `Inter` (Body) — wie im Leitfaden empfohlen
- **Abstände**: 8px-Raster
- Konsequente Wiederverwendung über CSS-Custom-Properties

## Lokal ansehen

Einfach `index.html` im Browser öffnen, oder ein kleiner Server:

```bash
cd tuningfiles-germany
python3 -m http.server 8080
# http://localhost:8080
```

## Hosting (wie im Leitfaden, Kapitel 07)

- **Netlify**: Account erstellen, den Ordner `tuningfiles-germany/` per Drag & Drop
  ins Deploy-Feld ziehen — sofort live mit kostenloser Subdomain.
- **Vercel**: Repository verbinden, Vercel deployed automatisch bei jedem Push.

## Struktur

```
tuningfiles-germany/
├── index.html        # Seitenstruktur & Inhalte
├── css/styles.css    # Design-System & Layout
├── js/main.js        # Animationen, Counter, Navigation, Formular
└── README.md
```

## Anpassen

- **Texte/Angebot**: direkt in `index.html`
- **Farben/Schriften**: Tokens oben in `css/styles.css` (`:root`)
- **Echte Bilder** statt Icons einsetzen (Profil, Fahrzeuge, Ergebnisse) — laut
  Leitfaden der größte Hebel gegen den „KI-Look".
- **Formular** ist derzeit nur Frontend-Demo. Für echte Anfragen an einen
  Form-Service (Netlify Forms, Formspree o. ä.) anbinden.
