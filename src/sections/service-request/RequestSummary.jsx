import { services } from '../../data/serviceRequest'

export default function RequestSummary({ formData, className = '' }) {
  const selectedServices = services
    .filter((item) => formData.service.includes(item.id))
    .map((item) => item.title)

  const rows = [
    ['Services', selectedServices.length > 0 ? selectedServices.join(', ') : '—'],
    ['Budget', formData.budget || '—'],
    ['Timeline', formData.timeline || '—'],
  ]

  return (
    <div className={`rounded-[10px] border border-line-strong p-3 lg:p-4 ${className}`}>
      <div className="rounded-md border border-line-strong p-3 lg:p-4">
        <h3 className="text-sm font-extrabold uppercase text-white lg:text-lg">Your request summary</h3>
        <dl className="mt-4 flex flex-col gap-3 lg:gap-4">
          {rows.map(([label, value]) => (
            <div key={label} className="flex items-center justify-between gap-4">
              <dt className="text-sm text-muted lg:text-lg">{label}</dt>
              <dd className="text-right text-sm font-extrabold text-white lg:text-lg">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}