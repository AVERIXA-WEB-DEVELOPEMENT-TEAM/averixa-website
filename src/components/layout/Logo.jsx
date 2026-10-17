export default function Logo({ size = 'md' }) {
  const mark = size === 'sm' ? 'h-6' : 'h-8'
  const text = size === 'sm' ? 'text-small' : 'text-body'

  return (
    <span className={`flex items-center gap-2.5 font-bold tracking-tight ${text}`}>
      <img src="/logo-mark.png" alt="" width="720" height="412" className={`${mark} w-auto`} />
      Averixa Digital
    </span>
  )
}
