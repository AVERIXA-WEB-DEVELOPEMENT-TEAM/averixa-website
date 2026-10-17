import { emailLayout, escapeHtml } from "./layout.js";
import { serviceTitlesFromIds } from "../constants/services.js";

export function clientConfirmation(data) {
  const serviceTitles = serviceTitlesFromIds(data.service);
  const servicesText = serviceTitles.join(", ");
  const firstName = data.name.split(" ")[0] || "there";

  const bodyHtml = `
    <p style="margin:0 0 16px;font-size:14px;color:#cbd5e1;">Hi ${escapeHtml(firstName)},</p>
    <p style="margin:0 0 16px;font-size:14px;color:#cbd5e1;">
      Thanks for reaching out. We've received your request for
      <strong style="color:#ffffff;">${escapeHtml(servicesText)}</strong>
      and we'll get back to you within one business day.
    </p>
    <p style="margin:0 0 16px;font-size:14px;color:#cbd5e1;">
      If anything changes in the meantime, just reply to this email.
    </p>
    <p style="margin:24px 0 0;font-size:14px;color:#cbd5e1;">— The Averixa Digital team</p>
  `;

  return {
    subject: "We received your request — Averixa Digital",
    html: emailLayout({ heading: "Request received", bodyHtml }),
    text: [
      `Hi ${firstName},`,
      "",
      `Thanks for reaching out. We've received your request for ${servicesText} and we'll get back to you within one business day.`,
      "",
      "If anything changes in the meantime, just reply to this email.",
      "",
      "— The Averixa Digital team",
    ].join("\n"),
  };
}
