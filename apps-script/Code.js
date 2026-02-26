function doPost(e) {
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('DK Derby');
    var data = JSON.parse(e.postData.contents);

    // Honeypot check — if filled, it's a bot
    if (data.website) {
      output.setContent(JSON.stringify({
        result: 'error',
        message: 'Bot detected'
      }));
      return output;
    }

    sheet.appendRow([
      new Date(),
      data.firstName || '',
      data.email,
      data.joiningAs || '',
      data.source || 'DKDerby'
    ]);

    // Internal notification
    sendNotification(data.firstName, data.email, data.joiningAs);

    // User confirmation
    sendConfirmation(data.firstName, data.email, data.joiningAs);

    output.setContent(JSON.stringify({
      result: 'success',
      message: 'Signup recorded'
    }));
    return output;

  } catch (error) {
    output.setContent(JSON.stringify({
      result: 'error',
      message: error.toString()
    }));
    return output;
  }
}

function doGet(e) {
  return ContentService.createTextOutput('DK Derby Signup API is running.');
}

// ── Internal notification ──────────────────────────
function sendNotification(name, email, joiningAs) {
  var subject = 'New DK Derby signup: ' + (name || email);
  var body = 'New early access signup on DK Derby\n\n'
    + 'Name: ' + (name || '(not provided)') + '\n'
    + 'Email: ' + email + '\n'
    + 'Joining as: ' + (joiningAs || 'not specified') + '\n\n'
    + 'View all signups: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl();

  GmailApp.sendEmail('hello@98chimp.com', subject, body, {
    from: 'hello@98chimp.com',
    name: 'DK Derby'
  });
}

// ── User confirmation ──────────────────────────────
function sendConfirmation(name, email, joiningAs) {
  var greeting = name ? ('Hi ' + name + '!') : 'Hi there!';

  var joiningLabel = joiningAs || 'Early access';

  var subject = "You're on the list — DK Derby";

  var htmlBody = '<!DOCTYPE html>'
    + '<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>'
    + '<body style="margin:0;padding:0;background:#F5F1EB;font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,sans-serif;">'
    + '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F5F1EB;">'
    + '<tr><td align="center" style="padding:40px 20px;">'
    + '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:540px;background:#ffffff;border-radius:20px;border:1px solid rgba(0,0,0,0.06);">'

    // Header
    + '<tr><td style="padding:40px 40px 24px;text-align:center;">'
    + '<span style="color:#E67E22;font-size:28px;font-weight:700;">DK Derby</span>'
    + '</td></tr>'

    // Greeting
    + '<tr><td style="padding:0 40px;">'
    + '<h1 style="color:#1a1a1a;font-size:24px;font-weight:600;margin:0 0 16px;">' + greeting + '</h1>'
    + '<p style="color:#555;font-size:16px;line-height:1.6;margin:0 0 24px;">'
    + 'You\'re on the early access list for Dunning-Kruger Derby. '
    + 'We\'ll notify you the moment it\'s ready. Prepare to be humbled.</p>'
    + '</td></tr>'

    // Joining-as box
    + '<tr><td style="padding:0 40px;">'
    + '<table role="presentation" width="100%" cellspacing="0" cellpadding="0">'
    + '<tr><td style="background:rgba(230,126,34,0.08);border:1px solid rgba(230,126,34,0.2);border-radius:12px;padding:20px;">'
    + '<p style="color:#1a1a1a;font-size:14px;font-weight:600;margin:0 0 8px;">You signed up as:</p>'
    + '<p style="color:#555;font-size:14px;line-height:1.8;margin:0;">&#10022; ' + joiningLabel + '</p>'
    + '</td></tr></table>'
    + '</td></tr>'

    // Sign-off
    + '<tr><td style="padding:24px 40px 40px;">'
    + '<p style="color:#555;font-size:14px;line-height:1.6;margin:0;">'
    + 'No spam. No dark patterns. Just a notification when we launch.</p>'
    + '<p style="color:#555;font-size:14px;line-height:1.6;margin:8px 0 0;">'
    + 'Questions? Just reply to this email.</p>'
    + '</td></tr>'

    // Footer
    + '<tr><td style="padding:20px 40px;border-top:1px solid rgba(0,0,0,0.06);text-align:center;">'
    + '<p style="color:#999;font-size:12px;margin:0;">\u00A9 ' + new Date().getFullYear() + ' 98% Chimp Inc.</p>'
    + '<a href="https://www.98chimp.ca/DKDerby/" style="color:#E67E22;font-size:12px;text-decoration:none;">www.98chimp.ca/DKDerby</a>'
    + '</td></tr>'

    + '</table></td></tr></table></body></html>';

  var plainBody = greeting + '\n\n'
    + 'You\'re on the early access list for Dunning-Kruger Derby. '
    + 'We\'ll notify you the moment it\'s ready. Prepare to be humbled.\n\n'
    + 'You signed up as: ' + joiningLabel + '\n\n'
    + 'No spam. No dark patterns. Just a notification when we launch.\n'
    + 'Questions? Just reply to this email.\n\n'
    + '— The DK Derby Team\n'
    + 'www.98chimp.ca/DKDerby';

  GmailApp.sendEmail(email, subject, plainBody, {
    htmlBody: htmlBody,
    from: 'hello@98chimp.com',
    name: 'DK Derby'
  });
}

// ── Test function ──────────────────────────────────
function testConfirmation() {
  sendConfirmation('Test User', 'shahinz@mac.com', 'Just curious');
}
