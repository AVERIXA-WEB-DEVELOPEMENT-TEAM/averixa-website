import { Link } from 'react-router'
import { SocialIcon } from '../ui'
import { socials } from '../../data/socials'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-navy-950/70">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-4 px-6 py-5 text-small">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Logo size="sm" />
          <Link to="/privacy-policy" className="text-muted transition-colors duration-200 hover:text-white">
            Privacy Policy
          </Link>
        </div>
        <ul className="flex flex-wrap gap-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                aria-label={`${s.label} (opens in a new tab)`}
                className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors duration-200 hover:border-primary hover:bg-navy-800 hover:text-white"
              >
                <SocialIcon name={s.label} className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}