// Minimal shared wrapper. Inline styles only — email clients don't load CSS files.
export function emailLayout({ heading, bodyHtml }) {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#0b1220;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#e7ecf3;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0b1220;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;background:#0f172a;border:1px solid #1e293b;border-radius:14px;overflow:hidden;">
            <tr>
              <td style="padding:28px 32px;border-bottom:1px solid #1e293b;">
                <span style="font-size:14px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#94a3b8;">Averixa Digital</span>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <h1 style="margin:0 0 20px;font-size:24px;line-height:1.3;color:#ffffff;">${escapeHtml(heading)}</h1>
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;border-top:1px solid #1e293b;font-size:12px;color:#64748b;">
                Sent from Averixa Digital · hello@averixa.com
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function escapeHtml(value) {
  if (value == null) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function row(label, value) {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #1e293b;font-size:13px;color:#94a3b8;vertical-align:top;width:140px;">${escapeHtml(label)}</td>
    <td style="padding:10px 0;border-bottom:1px solid #1e293b;font-size:14px;color:#e7ecf3;">${value}</td>
  </tr>`;
}
