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
├── assets/img/       # Bilder (Platzhalter zum Austauschen)
│   ├── favicon.svg
│   ├── hero.svg          # Hero-Visual
│   ├── workshop.svg      # Werkstatt/Team in „Warum wir“
│   └── result-1…4.svg    # Galerie / Ergebnisse
└── README.md
```

## Echte Bilder einsetzen (wichtigster Qualitäts-Hebel)

Im Projekt liegen markenkonforme **Platzhalter** mit Maßangaben. Tausche sie 1:1
gegen deine echten Fotos – das nimmt sofort den „KI-Look“ (siehe Leitfaden, Kapitel 05).

So geht's:

1. Lege deine Fotos in `assets/img/` ab.
2. Behalte entweder die Dateinamen bei (`hero.svg` → `hero.jpg` etc.) und passe die
   `src`-Endung in `index.html` an, **oder** überschreibe direkt die Platzhalter.
3. Empfohlene Größen stehen im Platzhalter selbst:
   - **hero** ~1600×1100, **workshop** ~1100×880, **result-1…4** ~900×700
4. Echte Fotos von dir, deinem Team, deiner Werkstatt und Kundenfahrzeugen wirken
   am besten – keine Stockfotos.

## Kontaktformular (Netlify Forms)

Das Formular ist bereits für **Netlify Forms** vorbereitet (`data-netlify`,
verstecktes `form-name`-Feld, Honeypot gegen Spam).

- **Auf Netlify gehostet:** Anfragen landen automatisch im Netlify-Dashboard unter
  *Forms → „anfrage"*. Dort kannst du E-Mail-Benachrichtigungen einrichten
  (*Form notifications*). Es ist **kein** Server-Code nötig.
- **Lokale Vorschau (`file://`):** Es wird nur eine Demo-Bestätigung gezeigt,
  nichts wird versendet.
- **Anderer Host (z. B. Vercel/eigener Server):** Netlify Forms funktioniert nur
  auf Netlify. Binde das Formular dort sonst an einen Dienst wie Formspree oder
  eine eigene API an (Endpoint im `fetch`-Aufruf in `js/main.js` anpassen).

Ersetze außerdem die Beispiel-Adresse `info@tuningfiles-germany.de` durch deine
echte Kontaktadresse (in `index.html` und `js/main.js`).

## Anpassen

- **Texte/Angebot**: direkt in `index.html`
- **Farben/Schriften**: Tokens oben in `css/styles.css` (`:root`)
- **Echte Bilder** statt Platzhalter einsetzen (siehe Abschnitt oben) — laut
  Leitfaden der größte Hebel gegen den „KI-Look".
- **Formular** ist für Netlify Forms vorbereitet (siehe Abschnitt oben).
