import { useId } from 'react'
import { Link } from 'react-router'

// Required before the request can be sent. Not part of formData, so the API payload is unchanged.
export default function PrivacyConsent({ checked, onChange, error, inputRef }) {
  const id = useId()
  const errorId = `${id}-error`

  return (
    <div className="md:col-span-2 border-t border-line pt-6">
      <div className="flex items-start gap-3">
        <input
          ref={inputRef}
          id={id}
          type="checkbox"
          required
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`mt-1 size-4 shrink-0 accent-secondary focus-visible:outline-none focus-visible:ring-2 ${
            error ? 'ring-2 ring-red-400' : 'focus-visible:ring-primary/50'
          }`}
        />
        <label htmlFor={id} className="cursor-pointer text-control font-semibold text-white">
          I agree to the{' '}
          <Link
            to="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-text underline underline-offset-2 hover:text-white"
          >
            Privacy Policy
          </Link>
          <span className="sr-only"> (opens in a new tab)</span>
        </label>
      </div>
      {error && (
        <p id={errorId} role="alert" className="mt-2 pl-7 text-small text-red-300">
          Please agree to the Privacy Policy to send your request.
        </p>
      )}
    </div>
  )
}
