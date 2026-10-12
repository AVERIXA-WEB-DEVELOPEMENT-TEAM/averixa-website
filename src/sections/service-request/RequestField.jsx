import { useId } from 'react'

// Shared by the step 2 and step 3 labels, so they always match.
export const labelClass = 'text-sm font-medium uppercase text-white md:text-base lg:text-xl'

const controlClass =
  'w-full rounded-[10px] border bg-transparent px-4 py-3 text-sm font-medium text-white placeholder:text-muted ' +
  'transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 lg:px-[15px] lg:text-lg'

export default function RequestField({ label, multiline = false, bare = false, error, className = '', inputClassName = '', ...props }) {
  const id = useId()
  const errorId = `${id}-error`
  const Control = multiline ? 'textarea' : 'input'

  return (
    <div className={`flex flex-col gap-3 lg:gap-[30px] ${className}`}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <Control
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`${controlClass} ${error ? 'border-red-400' : bare ? 'border-transparent' : 'border-line-strong'} ${multiline ? 'resize-y' : ''} ${inputClassName}`}
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