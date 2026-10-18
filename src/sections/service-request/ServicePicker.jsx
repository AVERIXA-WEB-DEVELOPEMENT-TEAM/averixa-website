import { SelectCard } from '../../components/ui'
import { services } from '../../data/serviceRequest'

export default function ServicePicker({ value, onChange }) {
  return (
    <div>
      <div className="flex max-w-3xl flex-col gap-3">
        <h2 id="service-step-title" className="text-sub">
          What do you need help with?
        </h2>
        <p className="text-body text-muted">
          Select all the services you need. We’ll tailor your proposal from here.
        </p>
      </div>

      <div
        role="group"
        aria-labelledby="service-step-title"
        className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-6"
      >
        {services.map((service) => (
          <SelectCard
            key={service.id}
            title={service.title}
            description={service.description}
            tags={service.tags}
            selected={value.includes(service.id)}
            onClick={() => onChange(service.id)}
          />
        ))}
      </div>
    </div>
  )
}
