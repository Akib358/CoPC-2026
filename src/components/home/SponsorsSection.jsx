import { sponsors } from '../../data/sponsors'
import Container from '../ui/Container'

const tierConfig = {
  Title: {
    label: 'Title Sponsor',
    grid: 'grid-cols-1',
    cardHeight: 'h-40 md:h-48',
    logoSize: 'h-16 w-16 text-xl',
    nameSize: 'text-xl md:text-2xl',
  },
  Platinum: {
    label: 'Platinum Partners',
    grid: 'grid-cols-2 md:grid-cols-3',
    cardHeight: 'h-32',
    logoSize: 'h-12 w-12 text-base',
    nameSize: 'text-sm md:text-base',
  },
  Gold: {
    label: 'Gold Partners',
    grid: 'grid-cols-2 md:grid-cols-4',
    cardHeight: 'h-28',
    logoSize: 'h-10 w-10 text-sm',
    nameSize: 'text-xs md:text-sm',
  },
}

const tierOrder = ['Title', 'Platinum', 'Gold']

/**
 * Spotlight-hover sponsor card.
 * Hovering ANY card in a tier dims its siblings (via `group/tier`); the
 * hovered card itself snaps into focus — scales up and inverts from a
 * dark glass tile to a solid white tile with navy text.
 */
function SponsorCard({ sponsor, config, delay = 0 }) {
  return (
    <div
      className={`group/card relative flex cursor-default flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 backdrop-blur-sm transition-all duration-300 ease-out animate-fade-in-up group-hover/tier:scale-[0.97] group-hover/tier:opacity-50 hover:!scale-105 hover:!opacity-100 hover:z-10 hover:border-transparent hover:bg-white hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.45)] ${config.cardHeight}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span
        className={`flex items-center justify-center rounded-xl bg-white/10 font-mono font-bold text-accent transition-colors duration-300 group-hover/card:bg-primary/10 group-hover/card:text-primary ${config.logoSize}`}
      >
        {sponsor.logoText}
      </span>
      <span
        className={`text-center font-display font-semibold text-white transition-colors duration-300 group-hover/card:text-primary ${config.nameSize}`}
      >
        {sponsor.name}
      </span>
    </div>
  )
}

/** Open "slot" card inviting future sponsors. */
function OpenSlotCard({ delay = 0 }) {
  return (
    <div
      className="flex h-28 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 text-white/30 transition-colors duration-300 hover:border-accent/50 hover:text-accent/80 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="font-mono text-xl leading-none">+</span>
      <span className="font-mono text-[10px] uppercase tracking-widest">Your Logo Here</span>
    </div>
  )
}

export default function SponsorsSection() {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-20 md:py-28">
      {/* Decorative backdrop */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-30" />
      <div className="absolute left-1/4 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-neon-cyan/10 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 translate-x-1/3 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <span className="pointer-events-none absolute -left-4 top-10 select-none font-mono text-8xl font-bold text-white/[0.03] animate-float">
        {'</>'}
      </span>
      <span
        className="pointer-events-none absolute -right-6 bottom-6 select-none font-mono text-9xl font-bold text-white/[0.03] animate-float"
        style={{ animationDelay: '2s' }}
      >
        {'{ }'}
      </span>

      <Container className="relative">
        {/* Header */}
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center gap-3 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-neon-cyan">
            // alliance.init()
          </span>
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            Backing the Future
          </h2>
          <p className="text-base text-white/60 md:text-lg">
            Strategic partners fueling TechFest 2026 — from title sponsor to every ally compiling
            this fest into reality.
          </p>
        </div>

        {/* Tiers */}
        <div className="flex flex-col gap-14">
          {tierOrder.map((tierName) => {
            const config = tierConfig[tierName]
            const tierSponsors = sponsors.filter((s) => s.tier === tierName)
            if (tierSponsors.length === 0) return null

            return (
              <div key={tierName}>
                <p className="mb-6 text-center font-mono text-xs uppercase tracking-widest text-white/40">
                  {config.label}
                </p>
                <div className={`group/tier mx-auto grid max-w-5xl gap-5 ${config.grid}`}>
                  {tierSponsors.map((sponsor, index) => (
                    <SponsorCard
                      key={sponsor.id}
                      sponsor={sponsor}
                      config={config}
                      delay={index * 100}
                    />
                  ))}
                  {tierName === 'Gold' && <OpenSlotCard delay={tierSponsors.length * 100} />}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}