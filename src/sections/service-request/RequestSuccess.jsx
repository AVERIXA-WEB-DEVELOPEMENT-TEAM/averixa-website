import { useEffect, useRef } from 'react'
import { Button } from '../../components/ui'
import { services } from '../../data/serviceRequest'

export default function RequestSuccess({ serviceId }) {
  const headingRef = useRef(null)
  const service = services.find((item) => item.id === serviceId)

  // Move focus to the heading so screen readers announce the result straight away.
  useEffect(() => {
    headingRef.current.focus()
  }, [])

  return (
    <div className="flex w-full flex-col items-center gap-10 rounded-[10px] border border-line px-5 py-12 text-center md:gap-[60px] md:py-[50px]">
      <span className="grid h-[100px] w-[124px] place-items-center rounded-full border border-secondary/30 bg-secondary/20 text-lg font-extrabold text-secondary-text md:h-[135px] md:w-[166px] md:text-xl">
        Done
      </span>

      <div className="flex flex-col items-center gap-8 md:gap-[60px]">
        <h2 ref={headingRef} tabIndex={-1} className="text-xl font-extrabold outline-none md:text-[22px]">
          Request Received
        </h2>
        <p className="max-w-3xl font-medium md:text-lg">
          We’ll review your <strong className="font-extrabold">{service ? service.title : 'service'}</strong> request
          and be in touch within one business day.
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