import { timeline } from '../../data/timeline'

const statusStyles = {
  completed: {
    bubble: 'bg-success text-white',
    line: 'border-solid border-success',
    label: 'text-success',
  },
  current: {
    bubble: 'bg-accent text-primary',
    line: 'border-solid border-accent',
    label: 'text-accent-dark',
  },
  upcoming: {
    bubble: 'bg-white text-ink/30 border-2 border-dashed border-ink/15',
    line: 'border-dashed border-ink/15',
    label: 'text-ink/30',
  },
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v4h8z"
      />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function TrophyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 21h8m-4-4v4M6 5h12v3a6 6 0 01-12 0V5zM3 5h3v2a3 3 0 01-3 3V5zm18 0h-3v2a3 3 0 003 3V5z"
      />
    </svg>
  )
}

/**
 * Gamified "level path" roadmap. Each timeline milestone renders as a
 * level node — cleared (checkmark), current (pulsing "you are here"), or
 * locked (dimmed, lock icon) — connected by a vertical progress spine.
 *
 * @param {boolean} compact - tighter spacing, no description text, no
 *   legend. Used on the Home page; pass `false` (default) for the full
 *   Timeline page.
 */
export default function RoadmapTimeline({ compact = false }) {
  const completedCount = timeline.filter((item) => item.status === 'completed').length
  const progressPercent = Math.round((completedCount / timeline.length) * 100)

  return (
    <div className="mx-auto max-w-3xl">
      {/* Progress bar */}
      <div className="mb-14 flex flex-col items-center gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-ink/50">
          {completedCount} / {timeline.length} Levels Cleared
        </span>
        <div className="h-2 w-full max-w-xs overflow-hidden rounded-full bg-ink/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-success to-accent transition-all duration-1000 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Level path */}
      <div className="flex flex-col items-center">
        {timeline.map((item, index) => {
          const styles = statusStyles[item.status]
          const sideOffset =
            index % 2 === 0
              ? 'md:items-start md:text-left md:translate-x-10'
              : 'md:items-end md:text-right md:-translate-x-10'

          return (
            <div key={item.id} className="flex w-full flex-col items-center">
              {/* Level bubble */}
              <div
                className={`relative flex items-center justify-center rounded-full transition-transform duration-300 ${
                  compact ? 'h-12 w-12' : 'h-14 w-14'
                } ${styles.bubble}`}
              >
                {item.status === 'current' && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50" />
                )}
                <span className="relative z-10">
                  {item.status === 'completed' && <CheckIcon />}
                  {item.status === 'current' && <PlayIcon />}
                  {item.status === 'upcoming' && <LockIcon />}
                </span>
              </div>

              {/* Connector to next node */}
              <div
                className={`w-0.5 border-l-2 ${styles.line}`}
                style={{ minHeight: compact ? '2.25rem' : '3.25rem' }}
              />

              {/* Info card */}
              <div
                className={`mb-2 flex w-full max-w-sm flex-col items-center text-center transition-opacity duration-300 ${
                  item.status === 'upcoming' ? 'opacity-60' : ''
                } ${!compact ? sideOffset : ''}`}
              >
                <span className={`font-mono text-[10px] uppercase tracking-widest ${styles.label}`}>
                  Level {String(index + 1).padStart(2, '0')} · {item.date}
                </span>
                <h4 className={`mt-1 font-display font-semibold text-primary ${compact ? 'text-sm' : 'text-lg'}`}>
                  {item.title}
                </h4>
                {!compact && <p className="mt-1 text-sm leading-relaxed text-ink/60">{item.description}</p>}
                {item.status === 'current' && (
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent-dark">
                    <span className="h-1.5 w-1.5 animate-blink rounded-full bg-accent-dark" />
                    You Are Here
                  </span>
                )}
              </div>
            </div>
          )
        })}

        {/* Finish marker */}
        <div className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-accent shadow-lg shadow-primary/30 ring-4 ring-primary/10">
            <TrophyIcon />
          </div>
          <span className="mt-3 font-display text-sm font-semibold text-primary">
            TechFest 2026 — Wrapped 🎉
          </span>
        </div>
      </div>

      {/* Legend */}
      {!compact && (
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-ink/5 pt-8 font-mono text-xs text-ink/50">
          <span className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success text-white">
              <CheckIcon />
            </span>
            Cleared
          </span>
          <span className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-primary">
              <PlayIcon />
            </span>
            In Progress
          </span>
          <span className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-dashed border-ink/20 text-ink/30">
              <LockIcon />
            </span>
            Locked
          </span>
        </div>
      )}
    </div>
  )
}