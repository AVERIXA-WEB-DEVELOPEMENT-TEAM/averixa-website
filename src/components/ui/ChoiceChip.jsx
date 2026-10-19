export default function ChoiceChip({ selected = false, className = '', children, ...props }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={`rounded-lg border px-4 py-2.5 text-small font-semibold text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
        selected ? 'border-secondary bg-secondary/10' : 'border-line-strong bg-navy-900 hover:border-primary'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
