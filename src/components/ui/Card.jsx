export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`rounded-2xl border border-ink/5 bg-white p-6 shadow-sm ${
        hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}