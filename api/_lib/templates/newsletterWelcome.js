import { emailLayout, escapeHtml } from "./layout.js";

export function newsletterWelcome(data) {
  const firstName = data.name.split(" ")[0] || "there";

  // Different copy depending on which box(es) they ticked.
  const topics = [];
  if (data.newsletterOptIn) topics.push("our monthly newsletter");
  if (data.marketingConsent) topics.push("occasional marketing emails");
  const topicLine = topics.join(" and ");

  const bodyHtml = `
    <p style="margin:0 0 16px;font-size:14px;color:#cbd5e1;">Hi ${escapeHtml(firstName)},</p>
    <p style="margin:0 0 16px;font-size:14px;color:#cbd5e1;">
      You're on the list. You'll receive ${escapeHtml(topicLine)} from Averixa Digital.
    </p>
    <p style="margin:0 0 16px;font-size:14px;color:#cbd5e1;">
      You can unsubscribe at any time using the link in any email we send.
    </p>
    <p style="margin:24px 0 0;font-size:14px;color:#cbd5e1;">— The Averixa Digital team</p>
  `;

  return {
    subject: "Welcome to Averixa Digital",
    html: emailLayout({ heading: "You're on the list", bodyHtml }),
    text: [
      `Hi ${firstName},`,
      "",
      `You're on the list. You'll receive ${topicLine} from Averixa Digital.`,
      "",
      "You can unsubscribe at any time using the link in any email we send.",
      "",
      "— The Averixa Digital team",
    ].join("\n"),
  };
}
