import { validateServiceRequest } from "./_lib/validators/serviceRequest.js";
import * as defaultEmailService from "./_lib/services/emailService.js";
import { companyNotification } from "./_lib/templates/companyNotification.js";
import { clientConfirmation } from "./_lib/templates/clientConfirmation.js";
import { newsletterWelcome } from "./_lib/templates/newsletterWelcome.js";

export default async function handler(req, res, deps = defaultEmailService) {
  const { sendEmail, getOwnerEmail } = deps;

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { valid, errors, data } = validateServiceRequest(req.body);
  if (!valid) {
    return res.status(400).json({ error: "Invalid request", details: errors });
  }

  const owner = getOwnerEmail();
  if (!owner) {
    console.error("[service-request] OWNER_EMAIL is not configured");
    return res.status(500).json({ error: "Server misconfigured" });
  }

  // --- 1) Company notification (required — its failure fails the request)
  try {
    const { subject, html, text, replyTo } = companyNotification(data);
    await sendEmail({ to: owner, subject, html, text, replyTo });
  } catch (err) {
    console.error("[service-request] Company notification failed:", err);
    return res.status(502).json({ error: "Could not deliver request" });
  }

  // --- 2) Client confirmation (required for the UX copy on RequestSuccess)
  try {
    const { subject, html, text } = clientConfirmation(data);
    await sendEmail({ to: data.email, subject, html, text, replyTo: owner });
  } catch (err) {
    // Company already notified. Log but don't fail the request — the owner
    // can still follow up manually if the confirmation didn't land.
    console.error("[service-request] Client confirmation failed:", err);
  }

  // --- 3) Newsletter welcome (optional, consent-gated)
  if (data.newsletterOptIn || data.marketingConsent) {
    try {
      const { subject, html, text } = newsletterWelcome(data);
      await sendEmail({ to: data.email, subject, html, text, replyTo: owner });
    } catch (err) {
      console.error("[service-request] Newsletter welcome failed:", err);
    }
  }

  return res.status(200).json({ ok: true });
}


// {
//   "rewrites": [{ "source": "/((?!api/).*)", "destination": "/index.html" }]
// }