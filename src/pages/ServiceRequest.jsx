import { useState } from 'react'
import { Accent } from '../components/ui'
import RequestStepper from '../sections/service-request/RequestStepper'
import ServicePicker from '../sections/service-request/ServicePicker'
import FormFooter from '../sections/service-request/FormFooter'

const TOTAL_STEPS = 3

// Every answer in the form, all in one place. Empty to start.
const initialForm = {
  service: '',
  budget: '',
  timeline: '',
  goals: '',
  name: '',
  email: '',
  company: '',
  notes: '',
}

export default function ServiceRequest() {
  // Step 5 adds the functions that change the step.
  const [step] = useState(1)
  const [formData, setFormData] = useState(initialForm)

  // Changes one answer and keeps all the others.
  function updateField(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Continue only becomes active once the current step is answered.
  const canContinue = step === 1 ? formData.service !== '' : false

  return (
    <section className="mx-auto max-w-site px-6 py-16 md:py-20">
      {/* Top text block */}
      <header className="flex max-w-3xl flex-col gap-8">
        <div className="flex flex-col gap-6 md:gap-8">
          <p className="text-lg font-extrabold text-secondary md:text-[22px]">Request a Service</p>
          <h1 className="text-header">
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
          {step === 1 && (
            <ServicePicker value={formData.service} onChange={(id) => updateField('service', id)} />
          )}
        </div>

        <FormFooter step={step} total={TOTAL_STEPS} canContinue={canContinue} />
      </div>
    </section>
  )
}