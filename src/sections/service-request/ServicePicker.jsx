import { services } from '../../data/serviceRequest'
import ServiceCard from './ServiceCard'

export default function ServicePicker({ value, onChange }) {
  return (
    <div>
      <div className="flex max-w-[796px] flex-col gap-4 md:gap-[26px]">
        <h2 id="service-step-title" className="text-header">
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
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            tags={service.tags}
            selected={value.includes(service.id)}
            onSelect={() => onChange(service.id)}
          />
        ))}
      </div>
    </div>
  )
}