export default function ChoiceChip({ selected = false, children, ...props }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={`rounded-lg border px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 ${
        selected ? 'border-secondary bg-secondary/10' : 'border-line bg-navy-900 hover:border-line-strong'
      }`}
      {...props}
    >
      {children}
    </button>
  )
}