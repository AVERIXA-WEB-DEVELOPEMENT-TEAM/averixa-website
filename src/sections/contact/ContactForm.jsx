import { useState } from 'react'
import { Info, Send } from 'lucide-react'
import { Button, Field } from '../../components/ui'
import { budgets, services } from '../../data/serviceRequest'
import { responseNote } from '../../data/contact'
import { whatsapp } from '../../data/socials'

const emptyForm = { name: '', business: '', service: '', budget: '', message: '' }

// Turns the form into a WhatsApp message, so it lands in the same chat as "Chat on WhatsApp".
function buildMessage({ name, business, service, budget, message }) {
  const lines = [`Hi Averixa Digital, I'm ${name.trim()}${business.trim() ? ` from ${business.trim()}` : ''}.`]
  if (service) lines.push(`Service: ${service}`)
  if (budget) lines.push(`Budget: ${budget}`)
  lines.push('', message.trim())
  return lines.join('\n')
}

export default function ContactForm({ className = '' }) {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [opened, setOpened] = useState(false)

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const found = {}
    if (form.name.trim() === '') found.name = 'Please enter your name.'
    if (form.message.trim() === '') found.message = 'Tell us a little about your project.'
    setErrors(found)
    if (Object.keys(found).length > 0) return

    window.open(`${whatsapp.href}?text=${encodeURIComponent(buildMessage(form))}`, '_blank', 'noopener,noreferrer')
    setOpened(true)
  }

  return (
    <form noValidate onSubmit={handleSubmit} className={className}>
      <h2 className="text-lead font-bold">Send us a message</h2>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          autoComplete="name"
          placeholder="Your full name"
          value={form.name}
          onChange={update('name')}
          error={errors.name}
        />
        <Field
          label="Business"
          autoComplete="organization"
          placeholder="Your business or company"
          value={form.business}
          onChange={update('business')}
        />
        <Field
          label="Service"
          options={services.map((service) => service.title)}
          placeholder="Select a service"
          value={form.service}
          onChange={update('service')}
        />
        <Field
          label="Budget"
          options={budgets}
          placeholder="Select a budget range"
          value={form.budget}
          onChange={update('budget')}
        />
        <Field
          label="Message"
          multiline
          rows={4}
          className="sm:col-span-2"
          placeholder="Tell us about your project, goals and timeline..."
          value={form.message}
          onChange={update('message')}
          error={errors.message}
        />
      </div>

      <p className="mt-4 flex items-start gap-2 text-small text-muted">
        <Info size={16} strokeWidth={1.5} aria-hidden="true" className="mt-0.5 shrink-0" />
        {responseNote}
      </p>

      <Button type="submit" variant="success" className="mt-5 w-full">
        Send Message
        <Send size={16} strokeWidth={1.5} aria-hidden="true" />
      </Button>

      <p role="status" className="mt-3 text-small text-secondary-text">
        {opened ? 'WhatsApp has opened with your message. Press send there to reach us.' : ''}
      </p>
    </form>
  )
}
