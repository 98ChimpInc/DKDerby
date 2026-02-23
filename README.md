# Dunning-Kruger Derby — Landing Page

Landing page for [Dunning-Kruger Derby](https://www.98chimp.com/DKDerby/), a daily confidence calibration game built on peer-reviewed neuroscience research.

**Live:** https://www.98chimp.com/DKDerby/

## What is DK Derby?

Rate your confidence before you answer. See exactly where your knowledge ends and your overconfidence begins. Built on decades of research into metacognition, confidence calibration, and the Dunning-Kruger effect.

## Tech Stack

- Three self-contained HTML files (no framework, no build step)
- Vanilla CSS with custom properties
- Vanilla JS (modal, form validation, carousel, exit alerts)
- Google Fonts: Fraunces, DM Sans, Space Mono
- Form submissions POST to Google Apps Script (Google Sheets backend)

## Files

```
index.html      Main landing page (9 sections + signup modal)
terms.html      Terms of Use
privacy.html    Privacy Policy
assets/         Static assets (founder headshot)
```

## Local Development

```bash
python3 -m http.server 8000
# open http://localhost:8000/
```

## Deployment

Deployed via GitHub Pages from the `main` branch root. Pushes to `main` trigger automatic rebuilds.

## Related Repos

- [`98ChimpInc/dkderby-app-ios`](https://github.com/98ChimpInc/dkderby-app-ios) — DK Derby iOS app
- [`98ChimpInc/98chimpinc.github.io`](https://github.com/98ChimpInc/98chimpinc.github.io) — 98chimp.com parent site

---

Built by [98%Chimp](https://www.98chimp.com)
