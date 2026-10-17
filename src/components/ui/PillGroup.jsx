export default function PillGroup({ options, value, onChange, label }) {
  return (
    <div role="group" aria-label={label} className="inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-navy-800 p-1">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={option === value}
          onClick={() => onChange(option)}
          className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-small font-semibold transition-colors duration-200 ${
            option === value ? 'bg-primary text-white' : 'text-muted hover:text-white'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}