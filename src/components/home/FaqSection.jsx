import { useState } from 'react'
import { faqs } from '../../data/faqs'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

export default function FaqSection() {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null)

  return (
    <section id="faq" className="section bg-surface">
      <Container>
        <SectionHeading eyebrow="Got Questions?" title="Frequently Asked Questions" />

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
  )
}