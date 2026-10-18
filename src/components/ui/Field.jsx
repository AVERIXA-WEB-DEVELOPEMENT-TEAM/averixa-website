import { useId } from 'react'
import { ChevronDown } from 'lucide-react'

const control =
  'w-full rounded-lg border border-line bg-navy-900 px-4 py-3 text-control text-white placeholder:text-muted/60 ' +
  'transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30'

// Pass `options` to get a dropdown; `placeholder` then becomes its empty first choice.
export default function Field({ label, multiline = false, options, error, className = '', ...props }) {
  const id = useId()
  const errorId = `${id}-error`
  const shared = {
    id,
    'aria-invalid': !!error,
    'aria-describedby': error ? errorId : undefined,
  }
  const errorBorder = error ? 'border-red-400' : ''

  let input
  if (options) {
    const { placeholder, ...rest } = props
    input = (
      <div className="relative">
        <select
          {...shared}
          className={`${control} appearance-none pr-10 ${rest.value ? 'text-white' : 'text-muted/60'} ${errorBorder}`}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option} value={option} className="text-white">
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
        />
      </div>
    )
  } else {
    const Input = multiline ? 'textarea' : 'input'
    input = (
      <Input
        {...shared}
        className={`${control} text-white ${multiline ? 'min-h-28 resize-y' : ''} ${errorBorder}`}
        {...props}
      />
    )
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-kicker uppercase text-muted">
        {label}
      </label>
      {input}
      {error && (
        <p id={errorId} className="text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  )
}
