import { useId } from 'react'

// Shared by the step 2 and step 3 labels, so they always match.
export const labelClass = 'text-xs font-bold uppercase tracking-[0.14em] text-white'

const controlClass =
  'w-full rounded-lg border bg-navy-900 px-4 py-3 text-base leading-6 text-white placeholder:text-muted ' +
  'transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30'

export default function RequestField({ label, multiline = false, bare: _bare = false, error, className = '', inputClassName = '', ...props }) {
  const id = useId()
  const errorId = `${id}-error`
  const Control = multiline ? 'textarea' : 'input'

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <Control
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`${controlClass} ${error ? 'border-red-400' : 'border-line-strong'} ${multiline ? 'resize-y' : ''} ${inputClassName}`}
        {...props}
      />
      {error && (
        <p id={errorId} className="text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  )
}