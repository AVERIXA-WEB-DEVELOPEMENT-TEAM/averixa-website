export default function ServiceCard({ title, description, tags, selected, onSelect }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={`flex w-full flex-col items-start gap-5 rounded-card border bg-navy-800 px-5 py-6 text-left transition-all duration-[250ms] hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
        selected ? 'border-secondary bg-secondary/10' : 'border-line hover:border-primary'
      }`}
    >
      <span className="flex flex-col gap-2">
        <span className="text-lg font-bold text-white">{title}</span>
        <span className="text-body text-muted">{description}</span>
      </span>

      <span className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg border border-line-strong bg-navy-700 px-2.5 py-1.5 text-xs font-semibold text-white"
          >
            {tag}
          </span>
        ))}
      </span>
    </button>
  )
}