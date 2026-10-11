import { useId } from 'react'

const control =
  'w-full rounded-lg border border-line bg-navy-900 px-4 py-3 text-[15px] text-white placeholder:text-muted/60 ' +
  'transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30'

export default function Field({ label, multiline = false, error, className = '', ...props }) {
  const id = useId()
  const Input = multiline ? 'textarea' : 'input'

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
        {label}
      </label>
      <Input
        id={id}
        aria-invalid={!!error}
        className={`${control} ${multiline ? 'min-h-28 resize-y' : ''} ${error ? 'border-red-400' : ''}`}
        {...props}
      />
      {error && <p className="text-sm text-red-300">{error}</p>}
    </div>
  )
}