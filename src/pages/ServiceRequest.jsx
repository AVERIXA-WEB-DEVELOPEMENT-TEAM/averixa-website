import { useState } from 'react'
import { Accent } from '../components/ui'
import RequestStepper from '../sections/service-request/RequestStepper'
import ServicePicker from '../sections/service-request/ServicePicker'
import FormFooter from '../sections/service-request/FormFooter'

const TOTAL_STEPS = 3

export default function ServiceRequest() {
  // Only reading the step for now. Step 5 adds the functions that change it.
  const [step] = useState(1)

  return (
    <section className="mx-auto max-w-site px-6 py-16 md:py-20">
      {/* Top text block */}
      <header className="flex max-w-3xl flex-col gap-8">
        <div className="flex flex-col gap-6 md:gap-8">
          <p className="text-lg font-extrabold text-secondary md:text-[22px]">Request a Service</p>
          <h1 className="text-[28px] font-extrabold leading-tight md:text-[40px]">
            Let’s build something{' '}
            <span className="text-secondary">
              <Accent>great</Accent>
            </span>
          </h1>
        </div>
        <p className="font-medium md:text-[17px]">
          Tell us where you are, what feels stuck and what you want to change. We’ll take it from there.
        </p>
      </header>

      {/* Form card */}
      <div className="mt-12 rounded-[10px] border border-line px-5 py-8 md:mt-[74px] md:px-12 md:py-12 lg:px-[62px]">
        <RequestStepper total={TOTAL_STEPS} current={step} />

        <div className="mt-10">
          {step === 1 && <ServicePicker />}
        </div>

        <FormFooter step={step} total={TOTAL_STEPS} canContinue={false} />
      </div>
    </section>
  )
}