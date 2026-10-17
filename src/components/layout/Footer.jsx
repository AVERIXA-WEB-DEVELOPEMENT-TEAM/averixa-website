import { socials } from '../../data/socials'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-navy-950/70">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-4 px-6 py-5 text-small">
        <Logo size="sm" />
        <div className="flex flex-wrap gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-3.5 py-2 text-xs font-semibold transition-colors duration-200 hover:border-primary hover:bg-navy-800"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}