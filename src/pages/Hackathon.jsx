import { events } from '../data/events'
import Container from '../components/ui/Container'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const tracks = ['Health', 'Climate', 'EdTech', 'FinTech', 'Open Innovation']

export default function Hackathon() {
  const event = events.find((e) => e.id === 'hackathon')

  if (!event) return null

  const quickFacts = [
    { label: 'Format', value: event.format },
    { label: 'Team Size', value: event.teamSize },
    { label: 'Duration', value: event.duration },
    { label: 'Tracks', value: event.scope },
    { label: 'Prize Pool', value: event.prize },
    { label: 'Venue', value: event.venue },
  ]

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-40" />
        <Container className="relative py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge tone="pending" className="mx-auto">
              {event.tag}
            </Badge>
            <h1 className="mt-5 font-display text-4xl font-bold text-white md:text-5xl">{event.title}</h1>
            <p className="mt-4 text-base text-white/70 md:text-lg">{event.description}</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button to="/contact" variant="primary">
                Register a Team
              </Button>
              <Button to="/timeline" variant="outline">
                View Timeline
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick facts */}
      <section className="section bg-surface">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-ink/5 bg-white p-4 text-center">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent-dark">{fact.label}</p>
                <p className="mt-1 text-sm font-semibold text-primary">{fact.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tracks */}
      <section className="section bg-white">
        <Container>
          <h2 className="mb-8 text-center font-display text-3xl font-semibold text-primary">Choose Your Track</h2>
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
            {tracks.map((track) => (
              <span
                key={track}
                className="rounded-full border border-primary/15 bg-surface px-5 py-2.5 text-sm font-medium text-primary"
              >
                {track}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Rounds */}
      <section className="section bg-surface">
        <Container>
          <h2 className="mb-8 text-center font-display text-3xl font-semibold text-primary">How It Works</h2>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            {event.rounds.map((round, index) => (
              <Card key={round.name} className="bg-white">
                <span className="font-mono text-xs text-accent-dark">Stage {index + 1}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-primary">{round.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{round.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Rules + Judging */}
      <section className="section bg-white">
        <Container>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-display text-xl font-semibold text-primary">Rules</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {event.rules.map((rule) => (
                  <li key={rule} className="flex items-start gap-3 text-sm text-ink/70">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/10 font-mono text-[10px] font-bold text-success">
                      ✓
                    </span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-primary">Judging Criteria</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {event.judgingCriteria.map((criteria, index) => (
                  <li key={criteria} className="flex items-start gap-3 text-sm text-ink/70">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-[10px] font-bold text-primary">
                      {index + 1}
                    </span>
                    {criteria}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border border-primary/10 bg-surface p-5">
                <p className="font-mono text-xs uppercase tracking-widest text-accent-dark">Eligibility</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{event.eligibility}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section bg-primary">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
            <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">Got an idea worth building?</h3>
            <p className="text-sm text-white/70 md:text-base">
              Gather your team of 2–4 and bring your idea to life in 24 hours.
            </p>
            <Button to="/contact" variant="primary">
              Register Now
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}