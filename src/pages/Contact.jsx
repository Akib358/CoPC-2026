import { useState } from 'react'
import { contactInfo } from '../data/contactInfo'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

const infoCards = [
  { label: 'Email', value: (c) => c.email },
  { label: 'Phone', value: (c) => c.phone },
  { label: 'Address', value: (c) => c.address },
  { label: 'Office Hours', value: (c) => c.officeHours },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Frontend-only placeholder handler — no backend/API call.
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-40" />
        <Container className="relative py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">// contact.committee</span>
            <h1 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">Contact Us</h1>
            <p className="mt-4 text-base text-white/70 md:text-lg">
              Questions about registration, rules, or logistics? The organizing committee is here to help.
            </p>
          </div>
        </Container>
      </section>

      {/* Info cards */}
      <section className="section bg-surface">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card) => (
              <div key={card.label} className="rounded-xl border border-ink/5 bg-white p-5 text-center">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent-dark">{card.label}</p>
                <p className="mt-2 text-sm font-medium text-ink/80">{card.value(contactInfo)}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Form + Map placeholder */}
      <section className="section bg-white">
        <Container>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-ink/5 bg-surface p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold text-primary">Send a Message</h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-xs font-medium text-ink/60">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-ink/10 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-xs font-medium text-ink/60">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@university.edu"
                    className="w-full rounded-lg border border-ink/10 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1 block text-xs font-medium text-ink/60">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Question about team registration"
                  className="w-full rounded-lg border border-ink/10 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-xs font-medium text-ink/60">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full resize-none rounded-lg border border-ink/10 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>

              <Button type="submit" variant="secondary" className="mt-2 w-full">
                Send Message
              </Button>

              {submitted && (
                <p className="text-center font-mono text-xs text-success">
                  ✓ Message queued — this is a frontend demo, no data is sent.
                </p>
              )}
            </form>

            {/* Map placeholder */}
            <div className="flex flex-col gap-4">
              <div className="flex h-64 items-center justify-center rounded-2xl border border-ink/5 bg-primary/5 md:h-full">
                <div className="flex flex-col items-center gap-2 text-center text-primary/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="font-mono text-xs">Map placeholder — {contactInfo.address}</p>
                </div>
              </div>

              <div className="rounded-xl border border-ink/5 bg-surface p-5">
                <p className="font-mono text-xs uppercase tracking-widest text-accent-dark">Follow Us</p>
                <div className="mt-3 flex gap-3">
                  {contactInfo.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      aria-label={social.name}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 font-mono text-xs text-primary transition-colors hover:border-accent hover:bg-accent hover:text-primary"
                    >
                      {social.short}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}