import { Check } from 'lucide-react'

export default function Stepper({ total, current }) {
  const steps = Array.from({ length: total }, (_, i) => i + 1)

  return (
    <ol className="flex items-center" aria-label={`Step ${current} of ${total}`}>
      {steps.map((n) => {
        const done = n < current
        const now = n === current

        return (
          <li key={n} className={`flex items-center ${n < total ? 'flex-1' : ''}`} aria-current={now ? 'step' : undefined}>
            {done ? (
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-navy-950 md:size-13">
                <span className="sr-only">Step {n} complete</span>
                <Check size={20} strokeWidth={1.5} aria-hidden="true" />
              </span>
            ) : (
              <span
                className={`grid size-10 shrink-0 place-items-center rounded-lg text-small font-semibold text-white md:size-13 md:text-body ${
                  now ? 'bg-primary' : 'border border-line-strong bg-navy-900'
                }`}
              >
                {n}
              </span>
            )}

            {n < total && <span aria-hidden="true" className={`h-px flex-1 ${done ? 'bg-secondary' : 'bg-line-strong'}`} />}
          </li>
        )
      })}
    </ol>
  )
}
