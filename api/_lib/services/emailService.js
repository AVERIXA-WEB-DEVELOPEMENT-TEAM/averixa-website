import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// Lazily construct the Resend client on first use, so importing this module
// (e.g. from tests, or from any environment without env vars set) does not
// throw. Resend itself throws in its constructor if the key is missing.
let _client = null
function getClient() {
  if (_client) return _client
  const key = process.env.RESEND_API_KEY
  if (!key) {
    throw new Error('RESEND_API_KEY is not set')
  }
  _client = new Resend(key)
  return _client
}

const FROM = process.env.FROM_EMAIL;
const OWNER = process.env.OWNER_EMAIL;

if (!process.env.RESEND_API_KEY) {
  // Fail loudly at cold-start so misconfiguration is obvious.
  console.error("[emailService] RESEND_API_KEY is not set.");
}

/**
 * Send one email. Throws on failure so callers can surface a 5xx.
 * @param {{ to: string|string[], subject: string, html: string, text: string, replyTo?: string }} opts
 */
export async function sendEmail({ to, subject, html, text, replyTo }) {
  const { data, error } = await getClient().emails.send({
    from: FROM,
    to,
    subject,
    html,
    text,
    ...(replyTo ? { reply_to: replyTo } : {}),
  });

  if (error) {
    console.error("[emailService] Resend error:", error);
    throw new Error(error.message || "Email send failed");
  }
  return data;
}

export function getOwnerEmail() {
  return OWNER;
}

export function getFromEmail() {
  return FROM;
}
