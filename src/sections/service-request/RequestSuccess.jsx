import { useEffect, useRef } from 'react'
import { Button } from '../../components/ui'
import { services } from '../../data/serviceRequest'

export default function RequestSuccess({ serviceIds }) {
  const headingRef = useRef(null)
  const selectedServices = services
    .filter((item) => serviceIds.includes(item.id))
    .map((item) => item.title)

  // Move focus to the heading so screen readers announce the result straight away.
  useEffect(() => {
    headingRef.current.focus()
  }, [])

  return (
    <div className="flex w-full flex-col items-center gap-10 rounded-card border border-line bg-navy-800 px-5 py-12 text-center md:py-16">
      <span className="grid size-20 place-items-center rounded-full border border-secondary/30 bg-secondary/20 text-body font-bold text-secondary-text md:size-24">
        Done
      </span>

      <div className="flex flex-col items-center gap-6">
        <h1 ref={headingRef} tabIndex={-1} className="text-header outline-none">
          Request Received
        </h1>
        <p className="max-w-3xl text-body text-muted">
          We’ll review your{' '}
          <strong className="font-bold text-white">
            {selectedServices.length > 0 ? selectedServices.join(', ') : 'service'}
          </strong>{' '}
          request and be in touch within one business day.
          <br />
          Check your inbox – we’ll send your confirmation shortly.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button to="/">Back to Home</Button>
        <Button to="/portfolio" variant="secondary">
          View Our Work
        </Button>
      </div>
    </div>
  )
}