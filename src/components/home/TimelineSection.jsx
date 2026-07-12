import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import RoadmapTimeline from '../timeline/RoadmapTimeline'
import Button from '../ui/Button'

export default function TimelineSection() {
  return (
    <section id="timeline" className="section bg-white">
      <Container>
        <SectionHeading
          eyebrow="Key Dates"
          title="Event Roadmap"
          subtitle="Track TechFest 2026 like a level path — clear each checkpoint as the date arrives."
        />

        <RoadmapTimeline compact />

        <div className="mt-10 flex justify-center">
          <Button to="/timeline" variant="ghost">
            View Full Timeline
            <span aria-hidden>→</span>
          </Button>
        </div>
      </Container>
    </section>
  )
}