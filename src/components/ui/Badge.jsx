// Verdict-pill style badge — inspired by judge-system statuses (Accepted / Pending).
const tones = {
  accepted: 'bg-success/10 text-success border-success/30',
  pending: 'bg-accent/10 text-accent-dark border-accent/40',
  info: 'bg-primary/10 text-primary border-primary/30',
  neutral: 'bg-ink/5 text-ink/60 border-ink/10',
}

export default function Badge({ children, tone = 'info', className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs font-medium uppercase tracking-wide ${
        tones[tone] || tones.info
      } ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  )
}