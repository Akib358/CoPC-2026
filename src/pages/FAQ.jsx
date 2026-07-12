import { useState } from 'react'
import { faqs } from '../data/faqs'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function FAQ() {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null)

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-40" />
        <Container className="relative py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">// support.faq</span>
            <h1 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">Frequently Asked Questions</h1>
            <p className="mt-4 text-base text-white/70 md:text-lg">
              Everything you need to know about registering for and participating in TechFest 2026.
            </p>
          </div>
        </Container>
      </section>

      {/* Full FAQ list */}
      <section className="section bg-surface">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-3">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id
              return (
                <div key={faq.id} className="overflow-hidden rounded-xl border border-ink/5 bg-white">
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-ink">{faq.question}</span>
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-sm leading-relaxed text-ink/60">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
            <h3 className="font-display text-2xl font-semibold text-primary md:text-3xl">Still have questions?</h3>
            <p className="text-sm text-ink/60 md:text-base">Reach out to the organizing committee and we'll get back to you.</p>
            <Button to="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}