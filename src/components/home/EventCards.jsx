import { events } from '../../data/events'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'
import Card from '../ui/Card'
import Button from '../ui/Button'

const icons = {
  code: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3M13 5l-2 14" />
    </svg>
  ),
  bolt: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
}

export default function EventCards() {
  return (
    <section className="section bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Two Tracks, One Fest"
          title="Choose Your Challenge"
          subtitle="Race the clock in an ICPC-style contest, or build something new from scratch in a 24-hour hackathon."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {events.map((event) => (
            <Card key={event.id} className="flex flex-col">
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {icons[event.icon]}
                </span>
                <Badge tone="pending">{event.tag}</Badge>
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-primary">{event.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{event.summary}</p>

              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-ink/5 pt-5 font-mono text-xs text-ink/60">
                <div>
                  <span className="block text-ink/40">Team Size</span>
                  {event.teamSize}
                </div>
                <div>
                  <span className="block text-ink/40">Duration</span>
                  {event.duration}
                </div>
                <div>
                  <span className="block text-ink/40">Scope</span>
                  {event.scope}
                </div>
                <div>
                  <span className="block text-ink/40">Prize</span>
                  {event.prize}
                </div>
              </div>

              <Button to={event.link} variant="ghost" className="mt-6 w-full justify-between px-4">
                View Details
                <span aria-hidden>→</span>
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}