export default function PillGroup({ options, value, onChange, label }) {
  return (
    <div role="group" aria-label={label} className="inline-flex flex-wrap gap-1 rounded-full border border-line bg-navy-800 p-1">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={option === value}
          onClick={() => onChange(option)}
          className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors duration-200 ${
            option === value ? 'bg-primary text-white' : 'text-muted hover:text-white'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}