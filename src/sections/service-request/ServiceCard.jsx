export default function ServiceCard({ title, description, tags, selected, onSelect }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={`flex w-full flex-col items-start gap-5 rounded-[10px] border px-5 py-6 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:gap-[22px] lg:py-[26px] ${
        selected ? 'border-secondary bg-secondary/10' : 'border-line-strong hover:border-primary'
      }`}
    >
      <span className="flex flex-col gap-3 lg:gap-[21px]">
        <span className="text-base font-extrabold text-white md:text-lg lg:text-[22px]">{title}</span>
        <span className="text-sm font-medium text-white md:text-[15px] lg:text-xl">{description}</span>
      </span>

      <span className="flex flex-wrap gap-3 lg:gap-[25px]">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[10px] border border-line-strong px-2.5 py-1.5 text-sm font-medium text-white lg:p-[10px] lg:text-xl"
          >
            {tag}
          </span>
        ))}
      </span>
    </button>
  )
}