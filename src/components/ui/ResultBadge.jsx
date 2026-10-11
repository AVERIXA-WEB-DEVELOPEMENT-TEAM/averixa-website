export default function ResultBadge({ children }) {
  return (
    <p className="flex items-start gap-2 rounded-lg border border-secondary/40 bg-secondary/10 px-3 py-2 text-sm font-semibold text-secondary-text">
      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary-text" />
      {children}
    </p>
  )
}