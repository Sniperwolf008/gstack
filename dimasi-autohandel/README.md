# Dimasi Automobile — Autohandel Landing Page

Eine vollständige, responsive Landing Page für **Dimasi Automobile** (Autohandel in
Winterthur). Fokus: **Kauf, Verkauf und Eintausch** von Fahrzeugen.

Eigenständiges Projekt. Das Design-System (Tokens, Layout, Effekte) orientiert sich am
Schwesterprojekt *Dimasi Garage*, die Inhalte sind aber komplett auf den Fahrzeughandel
zugeschnitten. Da es sich um ein Geschäft im Aufbau handelt, enthält die Seite bewusst
**keine erfundenen Statistiken oder Bewertungen** — stattdessen ehrliche Argumente und
Beispiel-Inserate, die klar als Beispiele gekennzeichnet sind.

## Was die Seite enthält

- **Hero** mit Logo, Headline (Kaufen · Verkaufen · Eintauschen) und Handels-Übersicht
- **Marken-Strip** (Audi, BMW, Mercedes …) als laufendes Band
- **Werte-Tiles** (geprüft, schnell, fair, Eintausch) — ohne erfundene Zahlen
- **Angebot**: drei Wege — Fahrzeug kaufen, verkaufen, eintauschen
- **Fahrzeuge**: Bestands-Vorschau mit Beispiel-Inseraten (klar gekennzeichnet)
- **Ablauf** in 4 Schritten (Anfrage → Bewertung → Probefahrt → Abschluss)
- **Eintausch** mit Beispiel-Rechnung (Neupreis – Eintauschwert = Restbetrag)
- **Vorteile** und **Vertrauen** (ehrliche Beratung, saubere Abwicklung, faire Preise)
- **FAQ** (Accordion)
- **Kontakt/CTA** mit Anfrageformular (Anliegen: kaufen/verkaufen/eintauschen)
- **Footer** inkl. rechtlichem Hinweis (Angaben ohne Gewähr, Zwischenverkauf vorbehalten)
- **FAQ-Chatbot** (clientseitig, kostenlos, kein Tracking)

## Lokal ansehen

Einfach `index.html` im Browser öffnen, oder ein kleiner Server:

```bash
cd dimasi-autohandel
python3 -m http.server 8080
# http://localhost:8080
```

## Struktur

```
dimasi-autohandel/
├── index.html        # Seitenstruktur & Inhalte
├── css/styles.css    # Design-System & Layout (+ Inserate, Eintausch-Rechnung)
├── css/chat.css      # Styles für den FAQ-Chatbot
├── js/main.js        # Animationen, Counter, Navigation, Formular
├── js/chat.js        # FAQ-Chatbot (Kauf/Verkauf/Eintausch)
├── impressum.html    # Impressum (Schweiz)
├── datenschutz.html  # Datenschutzerklärung (revDSG)
├── 404.html          # Fehlerseite
├── netlify.toml      # Hosting-Config (Publish-Pfad + Header)
├── __forms.html      # Netlify-Formular-Erkennung
├── assets/img/       # SVG-Logo, Emblem, Favicon (+ PNG-Fallbacks, OG-Bild)
│   ├── logo.svg          # Gestapeltes Logo (Emblem + Schriftzug) — Hero, Footer, 404
│   ├── emblem.svg        # Auto-Emblem — Navigation
│   ├── favicon.svg       # Favicon (+ favicon-32.png als Fallback)
│   ├── apple-touch-icon.png  # iOS-Homescreen-Icon
│   └── og-image.png      # Social-Share-Vorschaubild (1200×630)
└── README.md
```

## Echte Inhalte einsetzen

- **Fahrzeuge**: Ersetze die Beispiel-Inserate in `index.html` (Abschnitt `#fahrzeuge`)
  durch echte Fahrzeuge mit Fotos. Lege Fotos in `assets/img/` ab und tausche die
  `listing__media`-Platzhalter gegen `<img>`-Elemente.
- **Texte/Angebot**: direkt in `index.html`.
- **Farben/Schriften**: Tokens oben in `css/styles.css` (`:root`).
- **Kontaktadresse**: E-Mail und Telefon in `index.html`, `js/main.js`, `js/chat.js`
  und den Rechtsseiten anpassen.

## Kontaktformular

Vorbereitet für **Netlify Forms** (`data-netlify`, verstecktes `form-name`, Honeypot).
Zusätzlich versendet `js/main.js` direkt über **FormSubmit** (AJAX), mit
`mailto:`-Fallback. Bei lokaler `file://`-Vorschau wird nur eine Demo-Bestätigung
gezeigt, nichts versendet.
