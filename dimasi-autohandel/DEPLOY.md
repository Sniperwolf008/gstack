# Deploy — AURION Automobile

Die Seite ist eine **reine statische Seite** (kein Build-Schritt) und lässt sich
kostenlos hosten. Empfohlen: **Netlify**.

## Variante A: Netlify per Drag & Drop (am schnellsten)

1. Account auf https://app.netlify.com erstellen.
2. Den Ordner `dimasi-autohandel/` per Drag & Drop ins Deploy-Feld ziehen.
3. Sofort live mit kostenloser Subdomain. Das Kontaktformular (`data-netlify="true"`)
   wird automatisch erkannt; Einsendungen erscheinen unter **Forms → „anfrage"**.

## Variante B: Netlify ans Repo binden (Auto-Deploy bei jedem Push)

1. https://app.netlify.com → **Add new site → Import an existing project** → GitHub →
   dieses Repository wählen.
2. **Base directory** auf `dimasi-autohandel` setzen, **Publish directory** auf `.`,
   **Build command** leer lassen (steht alles schon in `netlify.toml`).
3. Deploy. Danach veröffentlicht Netlify bei jedem Push automatisch und liefert
   Deploy-Previews für Pull Requests.

## Variante C: Vercel / GitHub Pages

Funktioniert ebenfalls (statische Dateien). Hinweis: **Netlify Forms** läuft nur auf
Netlify. Auf anderen Hosts versendet die Seite über **FormSubmit** (bereits in
`js/main.js` eingerichtet); ggf. die Empfänger-Adresse im `fetch`-Aufruf anpassen.

## Formular-Empfänger ändern

Standard-Empfänger ist `info.dimasigarage@gmail.com`. Zum Ändern:

- `js/main.js` → Konstante `FORM_ENDPOINT` und `mailtoFallback()`
- `index.html` und die Rechtsseiten → Kontaktangaben
