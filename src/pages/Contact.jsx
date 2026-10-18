import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Accent, Button, SocialIcon } from '../components/ui'
import PageMeta from '../components/layout/PageMeta'
import { contactIntro, mainHandle, nextSteps, requestPrompt, trustNote } from '../data/contact'
import { pageMeta } from '../data/pages'
import { socials, whatsapp } from '../data/socials'

// Frosted panel that lets the background glow show through
const panel = 'rounded-card border border-line bg-navy-800/60 p-6 backdrop-blur-md md:p-7'

const brandTile = {
  Instagram: 'bg-linear-to-tr from-brand-instagram-from via-brand-instagram-via to-brand-instagram-to',
  LinkedIn: 'bg-brand-linkedin',
  X: 'bg-black',
  Facebook: 'bg-brand-facebook',
  YouTube: 'bg-brand-youtube',
  TikTok: 'bg-black',
  'WhatsApp Channel': 'bg-brand-whatsapp',
}

const stepTone = ['bg-secondary/20 text-secondary-text', 'bg-primary/25 text-primary-soft', 'bg-navy-700 text-white']

export default function Contact() {
  return (
    <section className="relative isolate overflow-hidden">
      <PageMeta {...pageMeta.contact} />

      {/* Background glow */}
      <div aria-hidden="true" className="absolute -left-40 top-56 -z-10 size-96 rounded-full bg-secondary/15 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-32 top-0 -z-10 size-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="mx-auto grid max-w-site gap-6 px-6 py-16 md:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
        {/* Left: talk to us */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-header">
              Let's talk about your <span className="text-secondary-text"><Accent>growth</Accent></span>
            </h1>
            <p className="text-body text-muted">
              {contactIntro}{' '}
              <SocialIcon name="WhatsApp" className="inline size-4 align-[-0.125em] text-secondary-text" />
            </p>
          </div>

          <div className={`${panel} flex flex-wrap items-center gap-5`}>
            <div className="flex min-w-max flex-1 items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-whatsapp text-white">
                <SocialIcon name="WhatsApp" className="size-6" />
              </span>
              <div>
                <p className="text-small text-muted">{whatsapp.label} · Direct chat</p>
                <p className="whitespace-nowrap text-lead font-bold">{whatsapp.number}</p>
              </div>
            </div>
            <Button href={whatsapp.href} pill className="w-full shrink-0 sm:w-auto">
              <SocialIcon name="WhatsApp" className="size-4" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>

          <div className={panel}>
            <h2 className="text-lead font-bold">{requestPrompt.title}</h2>
            <p className="mt-2 text-body text-muted">{requestPrompt.text}</p>
            <Button to="/services" variant="success" className="mt-5 w-full sm:w-auto">
              {requestPrompt.cta}
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Right: socials and what happens next */}
        <div className="flex flex-col gap-6">
          <div className={panel}>
            <h2 className="text-lead font-bold">Connect with us</h2>
            <p className="mt-1 text-small text-secondary-text">{mainHandle}</p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    aria-label={`${social.label}, ${social.handle} (opens in a new tab)`}
                    className="grid size-12 place-items-center rounded-xl border border-line bg-navy-900/60 transition duration-200 hover:-translate-y-0.5 hover:border-primary"
                  >
                    <span className={`grid size-8 place-items-center rounded-lg text-white ${brandTile[social.label]}`}>
                      <SocialIcon name={social.label} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={panel}>
            <h2 className="text-lead font-bold">What happens next</h2>
            <ol className="mt-6">
              {nextSteps.map(({ icon: Icon, title, description }, i) => (
                <li key={title} className="relative grid grid-cols-[auto_1fr] gap-4 pb-7 last:pb-0">
                  {i < nextSteps.length - 1 && (
                    <span aria-hidden="true" className="absolute bottom-1 left-5 top-12 border-l border-dashed border-line-strong" />
                  )}
                  <span className={`grid size-10 place-items-center rounded-xl ${stepTone[i]}`}>
                    <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-body font-bold">{title}</h3>
                    <p className="mt-1 text-small text-muted">{description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-7 flex items-center justify-center gap-2 rounded-lg border border-line bg-navy-900/60 px-4 py-3 text-small text-muted">
              <ShieldCheck size={16} strokeWidth={1.5} aria-hidden="true" />
              {trustNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
