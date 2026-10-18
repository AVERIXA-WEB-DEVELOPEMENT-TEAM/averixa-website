import { useState } from 'react'
import { Field } from '../../components/ui'
import RequestSummary from './RequestSummary'
import ConsentOptions from './ConsentOptions'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Returns a message for each field that's wrong. An empty object means everything is fine.
export function getContactErrors(formData) {
  const errors = {}

  if (formData.name.trim() === '') {
    errors.name = 'Please enter your full name.'
  }

  if (formData.email.trim() === '') {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_PATTERN.test(formData.email.trim())) {
    errors.email = 'Please enter a valid email address, like jane@gmail.com.'
  }

  return errors
}

export default function ContactDetails({ formData, onChange }) {
  // Which fields the person has already left. Errors only show for these.
  const [touched, setTouched] = useState({})
  const errors = getContactErrors(formData)

  function markTouched(field) {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  return (
    <div>
      <div className="flex max-w-3xl flex-col gap-3">
        <h2 className="text-sub">How should we reach you?</h2>
        <p className="text-body text-muted">
          We’ll review your request and get back to you within one business day.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 md:gap-x-6 lg:gap-y-8">
        <Field
          label="Full name"
          autoComplete="name"
          required
          value={formData.name}
          onChange={(e) => onChange('name', e.target.value)}
          onBlur={() => markTouched('name')}
          placeholder="Jane Nora Smith"
          error={touched.name ? errors.name : undefined}
        />
        <Field
          label="Email address"
          type="email"
          autoComplete="email"
          required
          value={formData.email}
          onChange={(e) => onChange('email', e.target.value)}
          onBlur={() => markTouched('email')}
          placeholder="Jane@gmail.com"
          error={touched.email ? errors.email : undefined}
        />
        <Field
          className="md:col-span-2"
          label="Company or brand"
          autoComplete="organization"
          value={formData.company}
          onChange={(e) => onChange('company', e.target.value)}
          placeholder="Averixa Digital"
        />
        <Field
          className="md:col-span-2"
          label="Anything else?"
          multiline
          rows={4}
          value={formData.notes}
          onChange={(e) => onChange('notes', e.target.value)}
          placeholder="Links, context, references – anything helpful..."
          inputClassName="min-h-32"
        />
        <RequestSummary className="md:col-span-2" formData={formData} />
        <ConsentOptions
          newsletterOptIn={formData.newsletterOptIn}
          marketingConsent={formData.marketingConsent}
          onChange={onChange}
        />
      </div>
    </div>
  )
}