import { emailLayout, escapeHtml, row } from "./layout.js";
import { serviceTitlesFromIds } from "../constants/services.js";

export function companyNotification(data) {
  const serviceTitles = serviceTitlesFromIds(data.service);
  const servicesText = serviceTitles.join(", ");

  const consentLine = (label, flag) =>
    `${label}: <strong style="color:${flag ? "#6ee7b7" : "#94a3b8"};">${flag ? "Yes" : "No"}</strong>`;

  const bodyHtml = `
    <p style="margin:0 0 20px;font-size:14px;color:#cbd5e1;">A new service request just came in.</p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
      ${row("Name", escapeHtml(data.name))}
      ${row("Email", `<a href="mailto:${escapeHtml(data.email)}" style="color:#93c5fd;text-decoration:none;">${escapeHtml(data.email)}</a>`)}
      ${row("Company", escapeHtml(data.company) || "—")}
      ${row("Services", escapeHtml(servicesText))}
      ${row("Budget", escapeHtml(data.budget))}
      ${row("Timeline", escapeHtml(data.timeline))}
      ${row("Goals", `<div style="white-space:pre-wrap;">${escapeHtml(data.goals)}</div>`)}
      ${row("Notes", data.notes ? `<div style="white-space:pre-wrap;">${escapeHtml(data.notes)}</div>` : "—")}
      ${row("Newsletter opt-in", consentLine("Newsletter", data.newsletterOptIn))}
      ${row("Marketing consent", consentLine("Marketing", data.marketingConsent))}
    </table>
    <p style="margin:24px 0 0;font-size:13px;color:#94a3b8;">Reply directly to this email to reach the client.</p>
  `;

  return {
    subject: `New service request — ${data.name} (${serviceTitles.join(" · ")})`,
    html: emailLayout({ heading: "New service request", bodyHtml }),
    text: [
      "New service request",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company || "—"}`,
      `Services: ${servicesText}`,
      `Budget: ${data.budget}`,
      `Timeline: ${data.timeline}`,
      "",
      "Goals:",
      data.goals,
      "",
      "Notes:",
      data.notes || "—",
      "",
      `Newsletter opt-in: ${data.newsletterOptIn ? "Yes" : "No"}`,
      `Marketing consent: ${data.marketingConsent ? "Yes" : "No"}`,
    ].join("\n"),
    replyTo: data.email,
  };
}
