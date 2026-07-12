import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-accent text-primary hover:bg-accent-dark shadow-sm shadow-accent/30',
  secondary: 'bg-primary text-white hover:bg-primary-light',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-primary',
  outlinePrimary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  ghost: 'text-primary hover:bg-primary/5',
}

/**
 * Reusable button. Renders a <Link> when `to` is provided, an <a> when
 * `href` is provided, otherwise a native <button>.
 */
export default function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-sm md:text-base transition-colors duration-200 ${
    variants[variant] || variants.primary
  } ${className}`

  if (to) {
    return (
      <Link to={to} className={base} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={base} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  )
}