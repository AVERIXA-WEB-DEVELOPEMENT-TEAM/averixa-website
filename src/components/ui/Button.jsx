import { Link } from 'react-router'

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  secondary: 'border border-line-strong text-white hover:border-primary hover:bg-navy-800',
  success: 'bg-secondary text-navy-950 hover:brightness-110',
}

const sizes = {
  sm: 'px-4 py-2.5 text-[13px]',
  md: 'px-6 py-3.5 text-[15px]',
}

export default function Button({ variant = 'primary', size = 'md', to, href, className = '', children, ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition duration-200 hover:-translate-y-px disabled:pointer-events-none disabled:opacity-40 ${variants[variant]} ${sizes[size]} ${className}`

  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>
  if (href) return <a href={href} target="_blank" rel="noopener" className={classes} {...props}>{children}</a>
  return <button type="button" className={classes} {...props}>{children}</button>
}