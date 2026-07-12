import { useEffect, useState } from 'react'
import Container from '../ui/Container'

// Placeholder target date — contest kickoff.
const TARGET_DATE = new Date('2026-09-18T09:00:00')

function getTimeLeft() {
  const diff = Math.max(0, TARGET_DATE.getTime() - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <section className="section bg-surface">
      <Container>
        <div className="mx-auto max-w-3xl rounded-2xl border border-primary/10 bg-white p-8 shadow-sm md:p-12">
          <div className="mb-8 flex flex-col items-center gap-2 text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-dark">// system.countdown</span>
            <h3 className="font-display text-2xl font-semibold text-primary md:text-3xl">CodeStorm Kicks Off In</h3>
          </div>

          <div className="grid grid-cols-4 gap-3 md:gap-6">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="flex flex-col items-center rounded-xl bg-primary py-4 md:py-6"
              >
                <span className="font-mono text-2xl font-bold text-accent md:text-4xl">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-wide text-white/60 md:text-xs">{unit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}