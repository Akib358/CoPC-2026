import { useEffect, useRef, useState } from 'react'
import Button from '../ui/Button'
import Container from '../ui/Container'

const stats = [
  { label: 'Prize Pool', value: '$8,000+' },
  { label: 'Teams Expected', value: '250+' },
  { label: 'Hours of Hacking', value: '24' },
]

// Lines the terminal "types" out, one at a time, then loops.
const terminalLines = [
  { text: '> initializing techfest_2026...', color: 'text-white/50' },
  { text: '> loading contest_engine... OK', color: 'text-neon-cyan' },
  { text: '$ solve(problem="A")', color: 'text-white/80' },
  { text: '  status: Accepted ✓', color: 'text-success' },
  { text: '$ team.deploy("HackNova")', color: 'text-white/80' },
  { text: '  build: successful 🚀', color: 'text-accent' },
]

/**
 * Self-contained typewriter effect. Types each line of `terminalLines`
 * character-by-character, pauses, then loops. Falls back to showing all
 * lines statically (no animation) when the user prefers reduced motion.
 */
function TypingTerminal() {
  const [displayedLines, setDisplayedLines] = useState([])
  const [reducedMotion, setReducedMotion] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    if (mediaQuery.matches) {
      setDisplayedLines(terminalLines.map((line) => line.text))
      return
    }

    let lineIndex = 0
    let charIndex = 0
    let currentLines = []

    const typeNextChar = () => {
      const currentLine = terminalLines[lineIndex]

      if (charIndex <= currentLine.text.length) {
        currentLines = [
          ...currentLines.slice(0, lineIndex),
          currentLine.text.slice(0, charIndex),
        ]
        setDisplayedLines(currentLines)
        charIndex += 1
        timeoutRef.current = setTimeout(typeNextChar, 28)
      } else if (lineIndex < terminalLines.length - 1) {
        lineIndex += 1
        charIndex = 0
        timeoutRef.current = setTimeout(typeNextChar, 250)
      } else {
        // Full sequence typed — pause, then restart the loop.
        timeoutRef.current = setTimeout(() => {
          lineIndex = 0
          charIndex = 0
          currentLines = []
          setDisplayedLines([])
          timeoutRef.current = setTimeout(typeNextChar, 400)
        }, 2200)
      }
    }

    timeoutRef.current = setTimeout(typeNextChar, 500)
    return () => clearTimeout(timeoutRef.current)
  }, [])

  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-primary/10 bg-primary-dark shadow-2xl shadow-primary/20">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-2 font-mono text-xs text-white/40">judge_terminal — zsh</span>
      </div>

      {/* Body */}
      <div className="min-h-[220px] px-5 py-5 font-mono text-sm leading-relaxed">
        {terminalLines.map((line, index) => {
          const shown = displayedLines[index]
          if (shown === undefined) return null
          const isCurrentlyTyping = !reducedMotion && index === displayedLines.length - 1
          return (
            <p key={index} className={line.color}>
              {shown}
              {isCurrentlyTyping && <span className="ml-0.5 inline-block h-4 w-2 -translate-y-0.5 animate-blink bg-current align-middle" />}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* Decorative light backdrop */}
      <div className="absolute inset-0 bg-grid-pattern-navy bg-grid-sm opacity-60" />
      <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
      <div
        className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl animate-pulse-glow"
        style={{ animationDelay: '1.5s' }}
      />
      <span className="pointer-events-none absolute left-6 top-8 select-none font-mono text-7xl font-bold text-primary/[0.06] animate-float">
        {'</>'}
      </span>
      <span
        className="pointer-events-none absolute bottom-10 right-8 select-none font-mono text-8xl font-bold text-primary/[0.06] animate-float"
        style={{ animationDelay: '2s' }}
      >
        {'{ }'}
      </span>

      <Container className="relative py-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* Left — copy */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-accent" />
              Registrations Open — Sep 05, 2026 Deadline
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-primary sm:text-5xl md:text-6xl">
              TechFest 2026
              <span className="block text-accent-dark">Code. Build. Compete.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base text-ink/60 md:text-lg">
              A university-wide celebration of algorithmic thinking and rapid prototyping —
              featuring <span className="font-semibold text-primary">CodeStorm</span>, an
              ICPC-style programming contest, and{' '}
              <span className="font-semibold text-primary">HackNova</span>, a 24-hour hackathon.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button to="/programming-contest" variant="primary">
                Explore Programming Contest
              </Button>
              <Button to="/hackathon" variant="outlinePrimary">
                Explore Hackathon
              </Button>
            </div>

            <div className="mt-14 grid w-full grid-cols-3 gap-4 border-t border-primary/10 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center lg:items-start">
                  <span className="font-mono text-2xl font-semibold text-primary md:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs text-ink/50 md:text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — animated terminal */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <TypingTerminal />
          </div>
        </div>
      </Container>
    </section>
  )
}