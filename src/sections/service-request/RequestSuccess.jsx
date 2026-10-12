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
    <div className="flex w-full flex-col items-center gap-10 rounded-[14px] border border-line bg-navy-800 px-5 py-12 text-center md:py-16">
      <span className="grid size-20 place-items-center rounded-full border border-secondary/30 bg-secondary/20 text-base font-bold text-secondary-text md:size-24">
        Done
      </span>

      <div className="flex flex-col items-center gap-8 md:gap-[60px]">
        <h2 ref={headingRef} tabIndex={-1} className="text-[28px] font-extrabold leading-tight tracking-normal outline-none">
          Request Received
        </h2>
        <p className="max-w-3xl text-base leading-[1.6] text-muted">
          We’ll review your{' '}
          <strong className="font-bold text-white">
            {selectedServices.length > 0 ? selectedServices.join(', ') : 'service'}
          </strong>{' '}
          request and be in touch within one business day.
          <br />
          Check your inbox – we’ll send your confirmation shortly.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:gap-16 md:gap-[130px]">
        <Button to="/">Back to Home</Button>
        <Button to="/portfolio" variant="secondary">
          View Our Work
        </Button>
      </div>
    </div>
  )
}