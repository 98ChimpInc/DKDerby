# Claude Code — Dunning-Kruger Derby Landing Page

Build a single-file HTML landing page for Dunning-Kruger Derby at `dkderby/index.html`.

Use `loomi.kids` as the functional reference for page structure and feature set — not as a visual reference. DK Derby has its own distinct brand identity defined below. Do not import or borrow any Loomi assets.

---

## Technical Constraints

- Single HTML file — all CSS and JS inline, no external files except Google Fonts and any CDN assets
- No framework, no build step
- Vanilla CSS with custom properties
- Vanilla JS only
- Must work without a backend — form submissions handled via Google Sheets script (setup instructions at bottom of this doc)
- Fully responsive — mobile first

---

## Brand Identity

### Colors
```css
--cream:       #F5F1EB;   /* page background */
--orange:      #E67E22;   /* primary accent, CTAs */
--orange-dark: #C0392B;   /* hover states */
--blue:        #667eea;   /* secondary accent */
--dark:        #2C2C2C;   /* footer, dark sections */
--text:        #1a1a1a;   /* body text */
--muted:       #6c757d;   /* secondary text */
--card-bg:     #FFFFFF;   /* card backgrounds */
```

### Typography
- Headings: Cormorant Garamond (Google Fonts)
- Body: DM Sans (Google Fonts)
- Import both in `<head>`

### Aesthetic
- Wordle-inspired minimalism — clean, uncluttered, confident
- Warm academic notebook feel — cream backgrounds, generous whitespace
- Hand-drawn / sketchy details where appropriate (CSS borders, subtle textures)
- No gradients, no glassmorphism, no dark mode
- Corner radius: 8px standard, 16px for larger cards

---

## Page Sections (in order)

---

### 1. Nav

- Left: DK Derby wordmark (text-based, Cormorant Garamond, orange)
- Right: single CTA button — "Get Early Access" — scrolls to signup form
- Sticky on scroll, cream background, subtle bottom border
- Mobile: hamburger collapses to full-width CTA

---

### 2. Hero

**Headline:**
> Think you know what you know?

**Subheadline:**
> Dunning-Kruger Derby is a daily confidence calibration game. Rate your certainty before you answer. See exactly where your knowledge ends and your overconfidence begins.

**CTA button:** "Join Early Access" — opens the signup modal

**Below the button — social proof line:**
> Built on peer-reviewed neuroscience. Designed to humble you gently.

**Visual:** A simple illustrated DK curve (the classic inverted U showing confidence vs. competence) — render this as an inline SVG. Style it to feel hand-sketched... use stroke rather than fill, slightly imperfect curves, label the axes simply: "Confidence" (y) and "Competence" (x). Mark "Mount Stupid" near the peak with a small flag emoji or text callout. This is the hero visual — give it room to breathe.

---

### 3. How It Works

Three-step horizontal flow (stacks vertically on mobile):

**Step 1 — Rate Your Confidence**
Icon: a simple slider or dial SVG
Copy: Before you see the answer options, you commit to a confidence level from 0 to 100%. No hedging.

**Step 2 — Answer the Question**
Icon: a simple multiple choice SVG
Copy: Questions are designed to trigger overconfidence. Trivia you think you know. Facts that feel familiar. Statistics that fool everyone.

**Step 3 — See the Gap**
Icon: a simple gap/delta SVG
Copy: Your confidence versus your accuracy, visualized in real time. This is where the Dunning-Kruger effect becomes personal.

Style: numbered steps, clean, generous padding, cream background.

---

### 4. The Science

**Section headline:**
> Not just a trivia game. A calibration tool.

**Intro paragraph:**
> Dunning-Kruger Derby is built on decades of research into metacognition... our ability to think about our own thinking. The game uses a technique called confidence calibration, originally developed in forecasting research and cognitive psychology, to measure not just what you know — but how accurately you know what you know.

**Three science pillars** (same layout pattern as loomi.kids three-pillar section):

**Metacognition**
The brain's ability to monitor its own knowledge is a learnable skill. Most of us have never been given the tools to practice it.

**Confidence Calibration**
Measured using the Brier score — the same method used to evaluate weather forecasters and intelligence analysts. A well-calibrated mind is a more effective mind.

**The Dunning-Kruger Effect**
First documented by Kruger & Dunning (1999) at Cornell. People with limited knowledge in a domain systematically overestimate their competence. Awareness is the first step out.

---

### 5. Research Citations

Horizontally scrolling card carousel — same pattern as loomi.kids journal section.

Use these eight citations. Each card shows: journal name, paper title, authors + year, one-line summary.

1. **Psychological Science** — *Unskilled and Unaware of It* — Kruger & Dunning, 1999 — The original paper establishing the Dunning-Kruger effect

2. **Psychological Review** — *Confidence in Judgment* — Lichtenstein et al., 1982 — Foundational work on overconfidence bias in human judgment

3. **Journal of Personality and Social Psychology** — *Knowing What You Don't Know* — Dunning et al., 2003 — How metacognitive deficits compound overconfidence

4. **Cognitive Psychology** — *The Calibration of Expert Judgment* — Fischhoff & MacGregor, 1982 — Expert overconfidence is measurable and trainable

5. **Psychological Science** — *Overprecision in Judgment* — Moore & Healy, 2008 — People are more confident in their answers than accuracy warrants

6. **Trends in Cognitive Sciences** — *Metacognition: An Introduction* — Fleming & Dolan, 2012 — Neural basis of metacognitive monitoring in the prefrontal cortex

7. **Journal of Experimental Psychology** — *Illusions of Competence* — Jacoby et al., 1994 — Fluency of processing mistaken for depth of understanding

8. **Frontiers in Psychology** — *Training Metacognitive Accuracy* — Morales et al., 2018 — Calibration training measurably improves self-assessment accuracy

Style: cards with cream background, orange left border, journal name in small caps, title bold, authors + year muted. Infinite scroll loop on desktop. Swipeable on mobile.

---

### 6. Who Is This For

**Section headline:**
> You, probably.

Three columns (stacks on mobile):

**The Curious**
You've always suspected you might know less than you think. Now you can find out — one question at a time.

**The Competitive**
Your calibration score is public. Your friends' calibration scores are public. There is a leaderboard. You have been warned.

**The Professional**
Decision-makers, analysts, forecasters, and leaders — anyone whose job depends on knowing the limits of their own knowledge.

---

### 7. About the Creator

**Section headline:**
> Built by a neuroscientist who learned to code.

**Copy:**
Shahin Zangenehpour spent years studying the brain at McGill University — from the molecular architecture of cortical neurons to the systems-level dynamics of multisensory integration, using molecular markers, behavioural methods, and neuroimaging (PET and fMRI). His postdoctoral work at the Montreal Neurological Institute was supervised by Robert Zatorre, one of the world's leading auditory neuroscientists.

Then he learned to code. Not as a career change... as a change of substrate. The same questions about how information systems process, integrate, and make meaning from the world — just applied to different materials.

Dunning-Kruger Derby is where those two careers converge. The science is real. The game is real. The humbling is optional but inevitable.

**Below copy — link:**
> Learn more about 98%Chimp and the full product portfolio → [98chimp.com](https://www.98chimp.com)

**Founder image:** `../assets/headshot.jpg` — display as a circle, ~120px diameter, left-aligned beside the copy on desktop, centered above on mobile.

---

### 8. Early Access Signup (inline section + modal)

**Inline section headline:**
> Be among the first to discover your overconfidence.

**Subtext:**
> DK Derby launches soon on iOS. Join the early access list and we'll notify you the moment it's available.

**Single CTA button:** "Join Early Access" — opens modal

---

**Modal — "Join Early Access"**

Fields:
- First Name (text, required)
- Email (email, required)
- I'm joining as: (radio or select)
  - Just curious
  - Educator or researcher
  - Corporate / team training
  - Press or media

**Submit button:** "Count Me In"

**Below submit — micro-copy:**
> No spam. No dark patterns. Just a notification when we launch.

**On submit:**
- Validate fields client-side
- POST to Google Sheets script URL (see integration section below)
- Show inline success message: "You're on the list. Prepare to be humbled."
- Show inline error if submission fails: "Something went wrong. Please try again or email us at hello@98chimp.com"
- Close modal after 2 seconds on success

---

### 9. Footer

- Left: DK Derby wordmark
- Center: links — Privacy Policy · Terms of Use · 98chimp.com
- Right: App Store badge (greyed out / "Coming Soon" state)
- Bottom line: © 2026 98%Chimp. All rights reserved.
- Background: `#2C2C2C`, text: white, links: orange on hover

---

## Terms of Use Page

Create `dkderby/terms.html` — linked from footer.

Use the same nav and footer as `index.html`. Single column, max-width 720px, generous padding.

Include the following sections with appropriate legal language:

1. **Acceptance of Terms** — use of the app constitutes acceptance
2. **Description of Service** — confidence calibration game, educational/entertainment purposes
3. **User Conduct** — no misuse, no automated access, no reverse engineering
4. **Intellectual Property** — all content, questions, scoring algorithms owned by 98%Chimp
5. **Disclaimer of Warranties** — provided as-is, educational purposes only, not a clinical tool
6. **Limitation of Liability** — standard limitation clause
7. **Changes to Terms** — right to modify with notice
8. **Contact** — hello@98chimp.com

Add this note prominently near the top:
> DK Derby is an educational and entertainment application. It is not a psychological assessment tool and should not be used as a substitute for professional evaluation.

---

## Privacy Policy Page

Create `dkderby/privacy.html` — linked from footer.

Same layout as terms page. Include:

1. **Information We Collect**
   - Email address and name (from early access signup)
   - Gameplay data (questions answered, confidence scores, accuracy)
   - Device information and usage analytics (Firebase)
   - No sensitive personal data collected

2. **How We Use Your Information**
   - To notify you of launch and updates
   - To improve question quality and calibration algorithms
   - To generate anonymized aggregate research insights
   - We do not sell your data. We do not share it with advertisers.

3. **Data Storage**
   - Early access list stored in Google Sheets (secured, access-controlled)
   - Gameplay data stored in Firebase (Google Cloud infrastructure)

4. **Your Rights**
   - Right to access, correct, or delete your data
   - Contact hello@98chimp.com for any data requests

5. **Analytics**
   - Firebase Analytics used for app performance and usage tracking
   - No cross-app tracking, no advertising identifiers

6. **Children's Privacy**
   - DK Derby is intended for users 13 and older
   - We do not knowingly collect data from children under 13

7. **Changes to This Policy** — right to update with notice

8. **Contact** — hello@98chimp.com

---

## Google Sheets Integration

The signup form will POST to a Google Apps Script web app URL. This URL is not yet available — leave a clearly marked placeholder:

```javascript
const GOOGLE_SHEET_URL = 'REPLACE_WITH_GOOGLE_APPS_SCRIPT_URL';
```

The payload sent on form submit should be a JSON object:

```javascript
{
  timestamp: new Date().toISOString(),
  firstName: '',
  email: '',
  joiningAs: ''
}
```

The script will later be connected to a Google Sheet with a running Apps Script to send a receipt email to the signee. Build the form submission handler to be ready for that connection — just swap in the URL when available.

---

## File Structure on Completion

```
dkderby/
├── index.html       ← main landing page
├── terms.html       ← terms of use
└── privacy.html     ← privacy policy
```

All three files share the same nav and footer markup. Extract into a JS-rendered include or duplicate markup — whichever is simpler given the single-file constraint.

---

## Verification Checklist

- [ ] All three files exist and are internally linked correctly
- [ ] Nav CTA scrolls to or opens signup modal
- [ ] DK curve SVG renders in hero, hand-sketched style, labelled correctly
- [ ] How It Works three steps render correctly on mobile and desktop
- [ ] Research carousel scrolls horizontally on desktop, swipes on mobile
- [ ] Signup modal opens, validates, submits, and shows success/error state
- [ ] Google Sheets URL placeholder is clearly marked and easy to find
- [ ] Terms and Privacy pages are complete with all sections
- [ ] Footer links to terms, privacy, and 98chimp.com
- [ ] No em-dashes anywhere in copy — ellipses only
- [ ] No Lorem Ipsum anywhere
- [ ] Passes basic accessibility check — all images have alt text, form fields have labels

---

*Prepared for Claude Code handoff — February 2026*
