import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import RoadmapTimeline from '../components/timeline/RoadmapTimeline'

export default function Timeline() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-40" />
        <Container className="relative py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              // event.roadmap()
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
              The TechFest Level Path
            </h1>
            <p className="mt-4 text-base text-white/70 md:text-lg">
              Every key date, mapped like a game you're already playing. Clear each checkpoint as
              TechFest 2026 unfolds.
            </p>
          </div>
        </Container>
      </section>

      {/* Roadmap */}
      <section className="section bg-white">
        <Container>
          <RoadmapTimeline />
        </Container>
      </section>

      {/* CTA */}
      <section className="section bg-surface">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
            <h3 className="font-display text-2xl font-semibold text-primary md:text-3xl">
              Don't miss a level
            </h3>
            <p className="text-sm text-ink/60 md:text-base">
              Registration closes Sep 05, 2026 — mark your calendar and lock in your team early.
            </p>
            <Button to="/contact" variant="secondary">
              Register Now
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}