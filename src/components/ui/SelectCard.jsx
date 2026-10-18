import Tag from './Tag'

export default function SelectCard({ title, description, tags = [], selected = false, ...props }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={`flex w-full flex-col items-start gap-4 rounded-card border p-5 text-left transition duration-250 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none ${
        selected
          ? 'border-secondary bg-secondary/10'
          : 'border-line bg-navy-800 hover:-translate-y-1 hover:border-primary motion-reduce:hover:translate-y-0'
      }`}
      {...props}
    >
      <span className="flex flex-col gap-2">
        <span className="text-sub text-white">{title}</span>
        {description && <span className="text-body text-muted">{description}</span>}
      </span>

      {tags.length > 0 && (
        <span className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </span>
      )}
    </button>
  )
}
