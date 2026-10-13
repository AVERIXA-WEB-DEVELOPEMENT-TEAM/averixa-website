export function Accent({ children }) {
  return <em className="font-serif font-normal">{children}</em>
}

export default function SectionHeading({ kicker, title, intro, as: Heading = 'h2', className = '' }) {
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${className}`}>
      {kicker && (
        <p className="text-kicker uppercase text-secondary-text">{kicker}</p>
      )}
      <Heading className="text-header">
        {title}
      </Heading>
      {intro && <p className="text-body text-muted">{intro}</p>}
    </div>
  )
}