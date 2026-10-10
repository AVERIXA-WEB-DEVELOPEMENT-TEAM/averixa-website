export default function Logo({ size = 'md' }) {
  const circle = size === 'sm' ? 'size-6 text-[11px]' : 'size-8 text-[15px]'

  return (
    <span className="flex items-center gap-2.5 font-bold tracking-tight">
      <span className={`grid place-items-center rounded-full bg-white font-extrabold text-navy-900 ${circle}`}>
        A
      </span>
      Averixa Digital
    </span>
  )
}