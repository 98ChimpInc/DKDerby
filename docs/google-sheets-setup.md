# Google Sheets Integration — Setup Guide

## Architecture

- **Frontend:** `fetch()` POST with `mode: 'no-cors'` to Apps Script URL
- **Backend:** Google Apps Script `doPost` deployed as "Execute as me / Anyone"
- **Sheet tab:** `DK Derby` (new tab in existing 98%Chimp signups sheet)
- **Columns:** Timestamp | First Name | Email | Joining As | Source
- **Bot protection:** Honeypot field (hidden `website` input, checked client + server side)
- **Emails:** Branded confirmation to user + internal notification to hello@98chimp.com

## Step 1: Add Tab to Existing Sheet

1. Open the existing 98%Chimp signups Google Sheet
2. Add a new tab named exactly `DK Derby`
3. In Row 1, add these column headers:

| A | B | C | D | E |
|---|---|---|---|---|
| Timestamp | First Name | Email | Joining As | Source |

## Step 2: Deploy the Apps Script

### Option A: Using clasp (recommended)

```bash
cd apps-script/
# Create .clasp.json with the existing script ID
clasp push
clasp deploy --description "DK Derby Signup v1"
```

### Option B: Manual paste

1. In the spreadsheet, go to **Extensions → Apps Script**
2. Paste the contents of `apps-script/Code.js`
3. Ensure `appsscript.json` scopes match (especially `https://mail.google.com/`)

## Step 3: Deploy as Web App

1. Click **Deploy → New deployment**
2. Select type: **Web app**
3. Set:
   - **Description:** DK Derby Early Access Signup
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy** and authorize
5. Copy the Web app URL

## Step 4: Update the Frontend

Replace the placeholder in `index.html`:

```javascript
const GOOGLE_SHEET_URL = 'REPLACE_WITH_GOOGLE_APPS_SCRIPT_URL';
```

## Gotchas

1. **Each `clasp deploy` creates a NEW URL** — update the frontend fetch URL every time
2. **Close the Apps Script editor before `clasp push`** — the editor caches and can overwrite
3. **After changing `appsscript.json` scopes**, revoke access at myaccount.google.com/permissions and re-authorize
4. **`mode: 'no-cors'` means you can't read the response** — success is shown optimistically
5. **Use `https://mail.google.com/`** scope, NOT `gmail.send` — the `from:` alias requires it

## Testing

```bash
curl -X POST "YOUR_URL_HERE" \
  -H "Content-Type: application/json" \
  -d '{"timestamp":"2026-02-24T00:00:00Z","firstName":"Test","email":"test@example.com","joiningAs":"Just curious","source":"DKDerby"}'
```

Check the `DK Derby` tab — a new row should appear. Check your inbox for the confirmation email.

To test the confirmation email independently, run `testConfirmation()` from the Apps Script editor.

---

*Setup guide prepared February 2026*
