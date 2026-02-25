# Dunning-Kruger Derby — Landing Page

> **CLAUDE.md** — Project context for Claude Code autonomous development
> Global engineering principles, workflow, and git conventions live in ~/.claude/CLAUDE.md
> For product context (game mechanics, scoring, content standards) see the DK Derby iOS CLAUDE.md

---

## Project Overview

Three-file HTML landing page for Dunning-Kruger Derby — the first consumer
confidence calibration game, built on neuroscience research. Captures early
access signups via a modal form connected to Google Sheets. No framework,
no build step — vanilla HTML, CSS, and JS only.

### Product Positioning
Closes the gap between what you *think* you know and what you *actually* know.

### Files
```
DKDerby/
├── index.html     ← main landing page
├── terms.html     ← terms of use
├── privacy.html   ← privacy policy
└── assets/
    └── headshot.jpg  ← founder photo
```

All three files share the same nav and footer markup. Duplicate rather than
abstract — keeping each file self-contained is more important than DRY here.

---

## Technical Stack

- Three self-contained HTML files — no framework, no build process
- Vanilla CSS with custom properties
- Vanilla JS only — modal, form submission, carousel scroll
- Google Fonts via `<link>` import
- Form submissions POST to Google Sheets Apps Script (see Integration section)

### Local Development

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

---

## Design Tokens

### Colors
```css
--cream:        #F5F1EB;   /* page background */
--orange:       #E67E22;   /* primary accent, CTAs */
--orange-dark:  #C0392B;   /* hover states */
--blue:         #667eea;   /* secondary accent */
--dark:         #2C2C2C;   /* footer, dark sections */
--text:         #1a1a1a;   /* body text */
--muted:        #6c757d;   /* secondary text */
--card-bg:      #FFFFFF;   /* card backgrounds */
```

### Typography

DK Derby uses a distinct three-font system — different from 98chimp.ca.
The product has its own personality: sharp, confident, slightly irreverent,
academically grounded. The typography should feel like that.

```css
--font-heading: 'Fraunces', serif;        /* wonky optical serif, academic + personality */
--font-body:    'DM Sans', sans-serif;    /* clean, legible, neutral */
--font-mono:    'Space Mono', monospace;  /* scores, percentages, data values */
```

**Import all three from Google Fonts in `<head>`:**
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=DM+Sans:wght@400;500&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

**Usage rules:**
- All headings: Fraunces
- All body copy: DM Sans
- All numbers, percentages, scores, calibration data: Space Mono
- Labels on the DK curve SVG: Space Mono
- "Mount Stupid" callout on DK curve: Fraunces italic

### Spacing & Radius
- Corner radius: 8px standard, 16px for larger cards
- Base spacing unit: 8px
- Section padding: minimum 80px top and bottom
- Max content width: 1100px, centered

### Wordmark
Text-based, not SVG. Fraunces, orange (`#E67E22`), set in regular weight.
Do not import or reference any asset from the 98chimp parent site.

---

## Site Structure (index.html)

```
index.html
├── Nav — DK Derby wordmark + "Get Early Access" CTA
├── Hero — headline, subhead, CTA, DK curve SVG
├── How It Works — three-step flow
├── The Science — intro + three pillars
├── Research Citations — horizontally scrolling carousel (8 cards)
├── Who Is This For — three columns
├── About the Creator — founder copy + headshot
├── Early Access CTA — email signup section + modal
└── Footer — wordmark, links, App Store badge (coming soon state)
```

---

## DK Curve SVG (Hero Visual)

Render as inline SVG — hand-sketched aesthetic, stroke-based not fill-based.
Slightly imperfect curves to feel drawn rather than generated.

- Y axis label: "Confidence" — Space Mono, small, muted
- X axis label: "Competence" — Space Mono, small, muted
- Curve peak label: "Mount Stupid" — Fraunces italic, orange, with a small
  flag or caret marker
- Valley label: "Valley of Despair" — Space Mono, small, muted
- Right plateau label: "Slope of Enlightenment" — Space Mono, small, muted
- Stroke color: `#2C2C2C`, stroke-width: 2px, no fill
- Give it generous whitespace — this is the hero visual, not a diagram

---

## Signup Modal

**Fields:**
- First Name (text, required)
- Email (email, required)
- I'm joining as: (select or radio)
  - Just curious
  - Educator or researcher
  - Corporate / team training
  - Press or media

**Submit button:** "Count Me In"

**Micro-copy below button:**
> No spam. No dark patterns. Just a notification when we launch.

**Success state:** "You're on the list. Prepare to be humbled."
**Error state:** "Something went wrong. Please try again or email us at hello@98chimp.ca"
**Auto-close:** 2 seconds after success message displays

---

## Google Sheets Integration

URL placeholder — clearly marked, easy to find and replace:

```javascript
const GOOGLE_SHEET_URL = 'REPLACE_WITH_GOOGLE_APPS_SCRIPT_URL';
```

Payload shape on submit:

```javascript
{
  timestamp: new Date().toISOString(),
  firstName: '',
  email: '',
  joiningAs: ''
}
```

Do not hardcode any URL. Do not remove the placeholder comment.
The Google Apps Script will later trigger a receipt email to the signee.

---

## Copy Standards (NON-NEGOTIABLE)

- Ellipses (`...`) not em-dashes (`—`) throughout all copy
- No Lorem Ipsum anywhere in any file
- Numbers, percentages, and calibration scores always in Space Mono
- Do not invent citations — use only the eight verified citations (see citations addendum)
- All citation cards must link to verified DOI URLs and show an exit alert before navigating
- "DK Derby" not "Dunning-Kruger Derby" in nav and short-form contexts
- Full name "Dunning-Kruger Derby" in hero headline and formal copy

---

## Terms and Privacy Pages

`terms.html` and `privacy.html` follow the same nav and footer as `index.html`.
Single column, max-width 720px, DM Sans body, Fraunces headings.

Key requirements:
- Terms must include this disclaimer prominently near the top:
  *"DK Derby is an educational and entertainment application. It is not a
  psychological assessment tool and should not be used as a substitute for
  professional evaluation."*
- Privacy must disclose: Google Sheets (early access list), Firebase Analytics
  (app usage), and confirm no data is sold or shared with advertisers
- Both pages must link back to `index.html` from the nav wordmark

---

## Deployment

- Repo: `98ChimpInc/DKDerby` under the 98ChimpInc GitHub org
- Live at `https://www.98chimp.ca/DKDerby/` via GitHub Pages (legacy deploy from `main` branch root)
- HTTPS enforced
- iOS app repo: `98ChimpInc/dkderby-app-ios`

---

## Relationship to Other Projects

- **98chimp.ca** — parent portfolio site; DK Derby card on that site links here
- **DK Derby iOS app** — product this page promotes; see iOS CLAUDE.md for
  game mechanics, scoring algorithm, and content accuracy standards
- **Loomi** — sibling product; `loomi.kids` is the functional reference for
  page structure (not visual style)

---

*Last updated: February 2026*
