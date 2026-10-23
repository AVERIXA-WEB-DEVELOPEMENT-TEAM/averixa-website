import { useEffect, useRef, useState } from 'react'
import { Accent, SectionHeading, Stepper } from '../components/ui'
import PageMeta from '../components/layout/PageMeta'
import { pageMeta } from '../data/pages'
import ServicePicker from '../sections/service-request/ServicePicker'
import ProjectDetails from '../sections/service-request/ProjectDetails'
import ContactDetails, { getContactErrors } from '../sections/service-request/ContactDetails'
import FormFooter from '../sections/service-request/FormFooter'
import RequestSuccess from '../sections/service-request/RequestSuccess'
import { submitServiceRequest } from '../sections/service-request/submitRequest'
import './ServiceRequest.css'

const TOTAL_STEPS = 3

// Every answer in the form, all in one place. Empty to start.
const initialForm = {
  service: [],
  budget: '',
  timeline: '',
  goals: '',
  name: '',
  email: '',
  company: '',
  notes: '',
  newsletterOptIn: false,
  marketingConsent: false,
}

export default function ServiceRequest() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState(initialForm)
  // 'idle' → 'sending' → 'success' or 'error'
  const [status, setStatus] = useState('idle')
  // Privacy Policy consent is required to submit, but isn't sent with the request
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [privacyError, setPrivacyError] = useState(false)
  const privacyRef = useRef(null)

  const cardRef = useRef(null)
  const hasNavigated = useRef(false)

  // Changes one answer and keeps all the others.
  function updateField(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Is this step answered?
  function isStepComplete(n) {
    if (n === 1) return formData.service.length > 0
    // The API requires goals too, so step 2 can't be skipped without them
    if (n === 2) return formData.budget !== '' && formData.timeline !== '' && formData.goals.trim() !== ''
    if (n === 3) return Object.keys(getContactErrors(formData)).length === 0
    return false
  }

  function goNext() {
    if (!isStepComplete(step) || step === TOTAL_STEPS) return
    hasNavigated.current = true
    setStep(step + 1)
  }

  function goBack() {
    if (step === 1 || status === 'sending') return
    hasNavigated.current = true
    setStep(step - 1)
  }

  async function handleSubmit() {
    if (!isStepComplete(TOTAL_STEPS) || status === 'sending') return
    if (!privacyAccepted) {
      setPrivacyError(true)
      privacyRef.current?.focus()
      return
    }
    setStatus('sending')
    try {
      await submitServiceRequest(formData)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  // After Back or Continue, bring the top of the form card into view and move
  // keyboard focus there, so the new step isn't hidden below the fold.
  useEffect(() => {
    if (!hasNavigated.current) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    cardRef.current.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    cardRef.current.focus({ preventScroll: true })
  }, [step])

  // The success screen starts at the top of the page.
  useEffect(() => {
    if (status === 'success') window.scrollTo(0, 0)
  }, [status])

  const meta = <PageMeta {...pageMeta.services} />

  if (status === 'success') {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-site items-center px-6 py-16 md:py-20">
        {meta}
        <RequestSuccess serviceIds={formData.service} />
      </section>
    )
  }

  const onLastStep = step === TOTAL_STEPS
  const sending = status === 'sending'

  return (
    <section className="mx-auto max-w-site px-6 py-16 md:py-20">
      {meta}
      <SectionHeading
        as="h1"
        kicker="Request a service"
        title={
          <>
            Let’s build something <Accent>great</Accent>
          </>
        }
        intro="Tell us where you are, what feels stuck and what you want to change. We’ll take it from there."
      />

      {/* Form card */}
      <div
        ref={cardRef}
        tabIndex={-1}
        className="mt-12 scroll-mt-28 rounded-card border border-line bg-navy-900/40 px-5 py-8 outline-none md:mt-16 md:px-12 md:py-12 lg:px-16"
      >
        <Stepper total={TOTAL_STEPS} current={step} />

        <div key={step} className="service-step-panel mt-10">
          {step === 1 && (
            <ServicePicker
              value={formData.service}
              onChange={(id) =>
                updateField(
                  'service',
                  formData.service.includes(id)
                    ? formData.service.filter((serviceId) => serviceId !== id)
                    : [...formData.service, id],
                )
              }
            />
          )}
          {step === 2 && <ProjectDetails formData={formData} onChange={updateField} />}
          {step === 3 && (
            <ContactDetails
              formData={formData}
              onChange={updateField}
              privacy={{
                checked: privacyAccepted,
                onChange: (checked) => {
                  setPrivacyAccepted(checked)
                  if (checked) setPrivacyError(false)
                },
                error: privacyError,
                inputRef: privacyRef,
              }}
            />
          )}
        </div>

        {status === 'error' && (
          <p
            role="alert"
            className="mt-8 rounded-lg border border-red-400/50 bg-red-400/10 px-4 py-3 text-small text-red-300"
          >
            We couldn’t send your request. Please check your connection and try again.
          </p>
        )}

        <FormFooter
          step={step}
          total={TOTAL_STEPS}
          canContinue={isStepComplete(step) && !sending}
          onBack={goBack}
          onNext={onLastStep ? handleSubmit : goNext}
          nextLabel={onLastStep ? (sending ? 'Sending…' : 'Submit Request') : 'Continue'}
        />
      </div>
    </section>
  )
}