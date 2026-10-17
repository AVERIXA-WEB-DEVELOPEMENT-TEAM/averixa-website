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
    <div className={`rounded-card border border-line bg-navy-800 p-4 md:p-6 ${className}`}>
      <div>
        <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white">Your request summary</h3>
        <dl className="mt-4 flex flex-col gap-3">
          {rows.map(([label, value]) => (
            <div key={label} className="flex items-start justify-between gap-4 border-t border-line pt-3 sm:items-center">
              <dt className="shrink-0 text-sm text-muted">{label}</dt>
              <dd className="text-right text-sm font-semibold text-white">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}