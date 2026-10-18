import { useId } from 'react'

export default function ConsentOptions({ newsletterOptIn, marketingConsent, onChange }) {
  const id = useId()

  return (
    <fieldset className="md:col-span-2 border-t border-line pt-6">
      <legend className="mb-4 text-kicker uppercase text-muted">
        Optional email preferences
      </legend>
      <div className="flex flex-col gap-4">
        <label htmlFor={`${id}-newsletter`} className="flex cursor-pointer items-start gap-3">
          <input
            id={`${id}-newsletter`}
            type="checkbox"
            checked={newsletterOptIn}
            onChange={(event) => onChange('newsletterOptIn', event.target.checked)}
            className="mt-1 size-4 shrink-0 accent-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          />
          <span>
            <span className="block text-control font-semibold text-white">Monthly newsletter</span>
            <span className="mt-1 block text-small text-muted">
              Send me Averixa Digital’s monthly newsletter.
            </span>
          </span>
        </label>

        <label htmlFor={`${id}-marketing`} className="flex cursor-pointer items-start gap-3">
          <input
            id={`${id}-marketing`}
            type="checkbox"
            checked={marketingConsent}
            onChange={(event) => onChange('marketingConsent', event.target.checked)}
            className="mt-1 size-4 shrink-0 accent-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          />
          <span>
            <span className="block text-control font-semibold text-white">Marketing emails</span>
            <span className="mt-1 block text-small text-muted">
              I agree to receive occasional marketing emails from Averixa Digital.
            </span>
          </span>
        </label>
      </div>
    </fieldset>
  )
}