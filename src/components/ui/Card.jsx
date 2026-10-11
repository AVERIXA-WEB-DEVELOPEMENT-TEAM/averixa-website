export default function Card({ accent = 'primary', interactive = true, className = '', children }) {
  const hover = interactive
    ? `transition duration-250 hover:-translate-y-1 ${accent === 'secondary' ? 'hover:border-secondary' : 'hover:border-primary'}`
    : ''

  return (
    <div className={`rounded-card border border-line bg-navy-800 p-6 ${hover} ${className}`}>
      {children}
    </div>
  )
}