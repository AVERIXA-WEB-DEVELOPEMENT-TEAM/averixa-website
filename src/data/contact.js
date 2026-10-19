// Copy for the Contact page. Social links and the WhatsApp number live in socials.js.
import { CircleCheck, FileText, MessagesSquare } from 'lucide-react'

export const contactIntro = 'WhatsApp is the fastest way to reach us. We reply within one business day.'

// Shown under "Connect with us"
export const mainHandle = '@averixadigital'

// Points detailed enquiries to the service request form
export const requestPrompt = {
  title: 'Have a project in mind?',
  text: "Tell us what you need, your budget and timeline. We'll send you a tailored proposal.",
  cta: 'Start a request',
}

export const nextSteps = [
  {
    icon: CircleCheck,
    title: 'We review',
    description: 'We read your message and review your business details within one business day.',
  },
  {
    icon: MessagesSquare,
    title: 'Strategy call',
    description: 'We schedule a quick call to understand your goals and opportunities.',
  },
  {
    icon: FileText,
    title: 'Proposal & next steps',
    description: 'You receive a tailored plan and proposal to grow your business.',
  },
]

export const trustNote = 'Secure · No spam · 100% confidential'
