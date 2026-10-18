import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-navy-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-6 py-3.5">
        <Link to="/" onClick={close}>
          <Logo />
        </Link>

        {/* Desktop nav: hidden below 1024px */}
        <nav className="hidden gap-1 rounded-full border border-line bg-navy-800 p-1 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-small font-semibold transition-colors duration-200 ${
                  isActive ? 'bg-primary text-white' : 'text-muted hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Button to="/services" size="sm">
              Book a session
            </Button>
          </div>

          {/* Menu button: only below 1024px */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-items-center rounded-lg border border-line lg:hidden"
          >
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Dropdown menu */}
      {open && (
        <nav className="border-t border-line px-6 pb-6 pt-2 lg:hidden">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end
              onClick={close}
              className={({ isActive }) =>
                `block border-b border-line/60 py-3.5 font-semibold ${
                  isActive ? 'text-white' : 'text-muted'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/services" size="sm" onClick={close} className="mt-5 w-full">
            Book a session
          </Button>
        </nav>
      )}
    </header>
  )
}