export default function SelectCard({ title, description, selected = false, ...props }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={`flex w-full flex-col gap-2 rounded-card border p-5 text-left transition duration-250 ${
        selected
          ? 'border-secondary bg-secondary/10'
          : 'border-line bg-navy-800 hover:-translate-y-1 hover:border-primary'
      }`}
      {...props}
    >
      <span className="text-lg font-bold text-white">{title}</span>
      {description && <span className="text-sm text-muted">{description}</span>}
    </button>
  )
}