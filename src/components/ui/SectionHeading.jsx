export function Accent({ children }) {
  return <em className="font-serif font-normal">{children}</em>
}

export default function SectionHeading({ kicker, title, intro, as: Heading = 'h2', className = '' }) {
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${className}`}>
      {kicker && (
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary-text">{kicker}</p>
      )}
      <Heading className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-extrabold leading-tight tracking-tight">
        {title}
      </Heading>
      {intro && <p className="text-muted">{intro}</p>}
    </div>
  )
}