import { Link } from 'react-router-dom'
import { contactInfo } from '../../data/contactInfo'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Timeline', path: '/timeline' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
]

const eventLinks = [
  { name: 'Programming Contest', path: '/programming-contest' },
  { name: 'Hackathon', path: '/hackathon' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/70">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-mono text-sm font-bold text-primary">
              {'</>'}
            </span>
            <span className="font-display text-lg font-semibold text-white">
              TechFest<span className="text-accent">'26</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            An ICPC-style university tech fest bringing together competitive programmers and builders for a week of
            algorithms, prototypes, and live judging.
          </p>
          <div className="mt-6 flex gap-3">
            {contactInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 font-mono text-xs transition-colors hover:border-accent hover:text-accent"
              >
                {social.short}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="transition-colors hover:text-accent">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Events */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">Events</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {eventLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="transition-colors hover:text-accent">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="mt-6 font-display text-sm font-semibold uppercase tracking-wide text-white">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{contactInfo.email}</li>
            <li>{contactInfo.phone}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="mx-auto w-full max-w-7xl px-4 text-center font-mono text-xs text-white/40 sm:px-6 lg:px-8">
          © 2026 TechFest — Department of Computer Science & Engineering. Placeholder content for demo purposes.
        </p>
      </div>
    </footer>
  )
}