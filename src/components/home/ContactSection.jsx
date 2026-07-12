import { useState } from 'react'
import { contactInfo } from '../../data/contactInfo'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

const infoRows = [
  { label: 'Email', value: (c) => c.email },
  { label: 'Phone', value: (c) => c.phone },
  { label: 'Address', value: (c) => c.address },
  { label: 'Office Hours', value: (c) => c.officeHours },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Frontend-only placeholder handler — no backend/API call.
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section bg-white">
      <Container>
        <SectionHeading eyebrow="Get In Touch" title="Contact the Organizing Committee" />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
          {/* Info */}
          <div className="flex flex-col gap-5">
            {infoRows.map((row) => (
              <div key={row.label} className="rounded-xl border border-ink/5 bg-surface p-4">
                <p className="font-mono text-xs uppercase tracking-widest text-accent-dark">{row.label}</p>
                <p className="mt-1 text-sm text-ink/70">{row.value(contactInfo)}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-xl border border-ink/5 bg-surface p-6">
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
            <div>
              <label htmlFor="message" className="mb-1 block text-xs font-medium text-ink/60">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
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
              <p className="text-center font-mono text-xs text-success">✓ Message queued — this is a frontend demo, no data is sent.</p>
            )}
          </form>
        </div>
      </Container>
    </section>
  )
}