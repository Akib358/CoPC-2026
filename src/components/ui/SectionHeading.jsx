export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false }) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <div className={`flex flex-col ${alignClass} gap-3 mb-12`}>
      {eyebrow && (
        <span className={`font-mono text-xs md:text-sm tracking-widest uppercase ${light ? 'text-accent' : 'text-accent-dark'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display font-semibold text-3xl md:text-4xl ${light ? 'text-white' : 'text-primary'}`}>{title}</h2>
      {subtitle && (
        <p className={`max-w-2xl text-base md:text-lg ${light ? 'text-white/70' : 'text-ink/60'}`}>{subtitle}</p>
      )}
    </div>
  )
}