import { services } from '../../data/serviceRequest'
import ServiceCard from './ServiceCard'

export default function ServicePicker({ value, onChange }) {
  return (
    <div>
      <div className="flex max-w-[796px] flex-col gap-4 md:gap-[26px]">
        <h2 id="service-step-title" className="text-2xl font-extrabold md:text-[32px] lg:text-[40px]">
          What do you need help with?
        </h2>
        <p className="font-medium md:text-lg lg:text-xl">
          Select the primary service you’d like to request. We’ll tailor your proposal from here.
        </p>
      </div>

      <div
        role="group"
        aria-labelledby="service-step-title"
        className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:mt-[62px] lg:gap-x-[46px] lg:gap-y-[60px]"
      >
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            tags={service.tags}
            selected={value === service.id}
            onSelect={() => onChange(service.id)}
          />
        ))}
      </div>
    </div>
  )
}