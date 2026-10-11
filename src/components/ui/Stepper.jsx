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
            <span
              className={`grid size-9 shrink-0 place-items-center rounded-full border-2 text-sm font-bold ${
                done ? 'border-secondary bg-secondary text-white' : now ? 'border-secondary text-white' : 'border-line text-muted'
              }`}
            >
              {done ? <Check size={16} strokeWidth={2.5} /> : n}
            </span>
            {n < total && <span className={`mx-2 h-0.5 flex-1 rounded ${done ? 'bg-secondary' : 'bg-line'}`} />}
          </li>
        )
      })}
    </ol>
  )
}