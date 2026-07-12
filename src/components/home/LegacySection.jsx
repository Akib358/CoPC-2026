import { gallery } from '../../data/gallery'
import Container from '../ui/Container'

// Maps each item's `span` to responsive grid placement classes for the
// asymmetric bento layout. Mobile always stacks to a single column.
const spanClasses = {
  feature: 'md:col-span-2 md:row-span-2',
  wide: 'md:col-span-2 md:row-span-1',
  normal: 'md:col-span-1 md:row-span-1',
  strip: 'md:col-span-4 md:row-span-1',
}

const heightClasses = {
  feature: 'h-72 md:h-full',
  wide: 'h-56 md:h-full',
  normal: 'h-56 md:h-full',
  strip: 'h-48 md:h-40',
}

function GalleryTile({ item, delay = 0 }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 animate-fade-in-up ${spanClasses[item.span]} ${heightClasses[item.span]}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Dark overlay — present by default, lifts on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent transition-opacity duration-500 group-hover:opacity-60" />

      {/* Neon rim on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-neon-cyan/60 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Year tag — always visible */}
      <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/80 backdrop-blur-sm">
        {item.year}
      </span>

      {/* Caption — slides up from bottom on hover */}
      <div className="absolute inset-x-0 bottom-0 translate-y-8 p-5 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
        <p className="font-mono text-[10px] uppercase tracking-widest text-neon-cyan">
          TechFest Archive
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold text-white">{item.title}</h3>
        <p className="mt-1 text-sm text-white/70">{item.caption}</p>
      </div>

      {/* Static title — visible by default, fades out on hover to let caption take over */}
      <div className="absolute inset-x-0 bottom-0 p-5 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
      </div>
    </div>
  )
}

export default function LegacySection() {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-20 md:py-28">
      {/* Decorative backdrop */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-30" />
      <div className="absolute right-0 top-1/3 h-72 w-72 translate-x-1/3 rounded-full bg-neon-violet/10 blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-0 left-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-neon-cyan/10 blur-3xl animate-pulse-glow"
        style={{ animationDelay: '2s' }}
      />
      <span
        className="pointer-events-none absolute -right-8 top-8 select-none font-mono text-9xl font-bold text-white/[0.03] animate-float"
        style={{ animationDelay: '1s' }}
      >
        {'</>'}
      </span>

      <Container className="relative">
        {/* Header */}
        <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-3 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-neon-violet">
            // archive.replay()
          </span>
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            Glimpses of the TechFest Era
          </h2>
          <p className="text-base text-white/60 md:text-lg">
            Three years of algorithms solved, prototypes shipped, and all-nighters that turned
            into award nights. Here's a rewind.
          </p>
        </div>

        {/* Asymmetric bento gallery */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-[repeat(3,minmax(0,1fr))] md:auto-rows-[minmax(0,1fr)]">
          {gallery.map((item, index) => (
            <GalleryTile key={item.id} item={item} delay={index * 120} />
          ))}
        </div>
      </Container>
    </section>
  )
}