import { useState } from 'react'
import { schedule } from '../../data/schedule'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(0)
  const current = schedule[activeDay]

  return (
    <section className="section bg-surface">
      <Container>
        <SectionHeading eyebrow="Run of Show" title="Full Schedule" subtitle="Tap a day to see the detailed run-down." />

        <div className="mx-auto max-w-3xl">
          {/* Day tabs */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {schedule.map((day, index) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(index)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  activeDay === index ? 'bg-primary text-white' : 'bg-white text-ink/60 hover:bg-primary/5'
                }`}
              >
                {day.day}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm md:p-8">
            <h4 className="font-display text-lg font-semibold text-primary">{current.date}</h4>

            <ul className="mt-6 flex flex-col divide-y divide-ink/5">
              {current.events.map((item) => (
                <li key={`${item.time}-${item.title}`} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:gap-6">
                  <span className="w-24 shrink-0 font-mono text-sm font-semibold text-accent-dark">{item.time}</span>
                  <div>
                    <p className="font-medium text-ink">{item.title}</p>
                    <p className="text-xs text-ink/50">{item.location}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}