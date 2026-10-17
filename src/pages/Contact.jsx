import { ArrowUpRight } from 'lucide-react'
import { Accent, Button, Card, SectionHeading } from '../components/ui'
import PageMeta from '../components/layout/PageMeta'
import { pageMeta } from '../data/pages'
import { socials, whatsapp } from '../data/socials'

export default function Contact() {
  return (
    <section className="mx-auto max-w-site px-6 py-16 md:py-20">
      <PageMeta {...pageMeta.contact} />

      <SectionHeading
        as="h1"
        kicker="Contact"
        title={
          <>
            Let's talk about your <span className="text-secondary-text"><Accent>growth</Accent></span>
          </>
        }
        intro="The fastest way to reach us is WhatsApp. Send a message and the team will reply directly."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* WhatsApp chat */}
        <div className="flex flex-col gap-3 rounded-card border border-secondary/60 bg-navy-800 p-6 sm:col-span-2 md:p-8 lg:col-span-1 lg:row-span-2">
          <p className="text-kicker uppercase text-secondary-text">{whatsapp.label}</p>
          <p className="text-sub">{whatsapp.number}</p>
          <p className="text-body text-muted">Tell us what you need. We usually reply within one business day.</p>
          <div className="mt-3">
            <Button href={whatsapp.href}>Chat on WhatsApp</Button>
          </div>
        </div>

        {/* One card per social profile */}
        {socials.map((social) => (
          <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="group block">
            <Card className="flex h-full items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-kicker uppercase text-muted">{social.label}</p>
                <p className="mt-1 truncate text-control font-semibold">{social.handle}</p>
              </div>
              <span className="flex shrink-0 items-center gap-1 text-small text-muted transition-colors duration-200 group-hover:text-white">
                Follow
                <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </span>
            </Card>
          </a>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-start gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-body text-muted">Prefer to send the details in writing?</p>
        <Button to="/services" variant="secondary">
          Request a service
        </Button>
      </div>
    </section>
  )
}
