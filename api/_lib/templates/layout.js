const BRAND_NAME = "Averixa Digital";
const CONTACT_EMAIL = "averixadigitalhq@gmail.com";
const SITE_URL = "https://www.averixadigital.com";
const TAGLINE =
  "Websites, content and campaigns that turn visitors into customers.";

/**
 * @param {object} opts
 * @param {string} opts.heading
 * @param {string} opts.bodyHtml
 * @param {'none'|'brand'|'contact'|'legal'} [opts.footer='brand']
 *   - 'none'    : no footer (use for internal/owner notifications)
 *   - 'brand'   : accent line + brand + tagline + "reply" prompt (default)
 *   - 'contact' : accent line + brand + contact links
 *   - 'legal'   : minimal + unsubscribe line (use for newsletters/marketing)
 */
export function emailLayout({ heading, bodyHtml, footer = "brand" }) {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#0b1220;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#e7ecf3;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0b1220;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;background:#0f172a;border:1px solid #1e293b;border-radius:14px;overflow:hidden;">
            <tr>
              <td style="padding:28px 32px;border-bottom:1px solid #1e293b;">
                <span style="font-size:14px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#94a3b8;">${escapeHtml(BRAND_NAME)}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <h1 style="margin:0 0 20px;font-size:24px;line-height:1.3;color:#ffffff;">${escapeHtml(heading)}</h1>
                ${bodyHtml}
              </td>
            </tr>
            ${renderFooter(footer)}
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function renderFooter(variant) {
  if (variant === "none") return "";

  if (variant === "contact") {
    return `<tr>
      <td style="padding:24px 32px;border-top:1px solid #1e293b;background:#0b1220;">
        ${accentLine()}
        ${brandLine()}
        <div style="margin-top:6px;font-size:12px;line-height:1.6;color:#94a3b8;">
          <a href="mailto:${CONTACT_EMAIL}" style="color:#93c5fd;text-decoration:none;">${escapeHtml(CONTACT_EMAIL)}</a>
          &nbsp;·&nbsp;
          <a href="${SITE_URL}" style="color:#93c5fd;text-decoration:none;">Visit our website</a>
        </div>
      </td>
    </tr>`;
  }

  if (variant === "legal") {
    return `<tr>
      <td style="padding:20px 32px;border-top:1px solid #1e293b;background:#0b1220;font-size:12px;line-height:1.6;color:#64748b;">
        <div style="margin-bottom:6px;">
          ${escapeHtml(BRAND_NAME)} · <a href="mailto:${CONTACT_EMAIL}" style="color:#93c5fd;text-decoration:none;">${escapeHtml(CONTACT_EMAIL)}</a>
        </div>
        <div>
          You're receiving this email because you opted in to Averixa Digital updates.
          <a href="${SITE_URL}/unsubscribe?email={{recipient_email}}" style="color:#93c5fd;text-decoration:underline;">Unsubscribe</a>
        </div>
      </td>
    </tr>`;
  }

  // default: 'brand'
  return `<tr>
    <td style="padding:24px 32px;border-top:1px solid #1e293b;background:#0b1220;">
      ${accentLine()}
      ${brandLine()}
      <div style="margin-top:8px;font-size:12px;line-height:1.6;color:#94a3b8;">
        ${escapeHtml(TAGLINE)}
      </div>
      <div style="margin-top:12px;font-size:12px;line-height:1.6;color:#64748b;">
        Questions? Just reply to this email — we read every one.
      </div>
    </td>
  </tr>`;
}

function accentLine() {
  return `<div style="margin-bottom:10px;">
    <span style="display:inline-block;width:32px;height:2px;background:#6ee7b7;border-radius:2px;"></span>
  </div>`;
}

function brandLine() {
  return `<div style="font-size:13px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#e7ecf3;">
    ${escapeHtml(BRAND_NAME)}
  </div>`;
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
