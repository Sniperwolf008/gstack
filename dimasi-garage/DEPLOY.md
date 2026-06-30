# Deploy — Dimasi Garage

Die Seite wird **kostenlos und automatisch** zu Netlify veroeffentlicht.
Jeder Push, der etwas unter `dimasi-garage/` aendert, loest einen Deploy aus.

- **Live-URL (Produktion):** https://dimasi-garage.netlify.app
- **Plattform:** Netlify (Free-Plan, kein Build-Schritt — reine statische Seite)
- **Mechanik:** GitHub Actions Workflow `.github/workflows/deploy-dimasi-garage.yml`
- **Netlify-Site:** `dimasi-garage` (Site-ID `50ee92ef-b038-490c-8466-c7101235243e`)

## Wie der Auto-Deploy funktioniert

| Auf welchem Branch? | Was passiert? |
|---------------------|----------------|
| Push auf `main`     | Produktions-Deploy auf https://dimasi-garage.netlify.app |
| Push auf anderen Branch | Deploy-Preview mit eigener Vorschau-URL (in den Action-Logs) |
| Manuell             | Tab **Actions** -> *Deploy Dimasi Garage* -> *Run workflow* |

Das Kontaktformular (`data-netlify="true"`) wird von Netlify beim ersten Deploy
automatisch erkannt; Einsendungen erscheinen dann im Netlify-Dashboard unter
**Forms**.

## Einmalige Einrichtung (1 Schritt)

Damit GitHub Actions bei Netlify deployen darf, braucht es **ein** Secret —
einen persoenlichen Netlify-Token:

1. **Netlify-Token erstellen:** https://app.netlify.com/user/applications#personal-access-tokens
   -> *New access token* -> Name z. B. `github-actions-dimasi-garage` -> Token kopieren.
2. **Als Repo-Secret hinterlegen:** im GitHub-Repo
   **Settings -> Secrets and variables -> Actions -> New repository secret**
   - Name: `NETLIFY_AUTH_TOKEN`
   - Value: der kopierte Token
3. Fertig. Beim naechsten Push auf `main` (oder via *Run workflow*) geht die
   Seite live. Die Site-ID steht bereits im Workflow, ist nicht geheim und
   muss nicht hinterlegt werden.

> Solange das Secret fehlt, bricht der Workflow mit einer klaren Fehlermeldung
> ab und veroeffentlicht nichts.

## Alternative: natives Netlify-Git (ohne GitHub Actions)

Wer ganz ohne Actions-Minuten auskommen will, kann die Seite im
Netlify-Dashboard direkt ans Repo binden:

1. https://app.netlify.com -> **Add new site -> Import an existing project** ->
   GitHub -> Repo `Sniperwolf008/gstack` waehlen.
2. **Base directory** auf `dimasi-garage` setzen, **Publish directory** auf `.`,
   **Build command** leer lassen (steht alles schon in `netlify.toml`).
3. Deploy. Danach deployt Netlify bei jedem Push selbst — der GitHub-Actions-
   Workflow wird dann nicht mehr gebraucht und kann entfernt werden.

Beide Wege sind kostenlos. Der Actions-Weg lebt komplett im Repo (versioniert,
nachvollziehbar); der native Weg spart Actions-Minuten und liefert
Deploy-Previews fuer Pull Requests automatisch.
