import { ChevronRight, PenLine, Search, TrendingUp } from 'lucide-react'

const STEPS = [
  { icon: Search, title: 'Spot the problem' },
  { icon: PenLine, title: 'Build the fix' },
  { icon: TrendingUp, title: 'Grow what matters', highlight: true },
]

const FUNNEL = ['Visitors', 'Leads', 'Customers']

// Entrance timing, in seconds (keyframes live in index.css)
const STEP_START = 0.3
const STEP_GAP = 0.35
const RESULT_START = 1.4
const PILL_GAP = 0.15
const PULSE_START = 2.4 // the looping pulse begins once everything has arrived
const PULSE_SEGMENT = 1.2 // half of --animate-travel, so each line picks up where the last one ended

const delay = (seconds) => ({ animationDelay: `${seconds}s` })

// "How Averixa works" at a glance: three steps, ending in customers rather than traffic.
// Every animation uses motion-safe:, so people who prefer reduced motion get the finished diagram.
export default function HeroDiagram() {
  return (
    <div className="relative isolate w-full max-w-110 motion-safe:animate-rise">
      {/* Soft glow behind the card */}
      <div className="absolute -inset-6 -z-10 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />

      <div className="rounded-card border border-line bg-navy-800/90 p-5 shadow-2xl shadow-black/30 sm:p-7">
        <div className="mb-6 flex items-center justify-between gap-3 motion-safe:animate-rise" style={delay(0.15)}>
          <p className="text-kicker uppercase text-muted">How Averixa works</p>
          <span className="rounded-full bg-navy-700 px-2.5 py-1 text-kicker font-medium tracking-normal text-white">3 steps</span>
        </div>

        <ol>
          {STEPS.map(({ icon: Icon, title, highlight }, i) => {
            const last = i === STEPS.length - 1
            const start = STEP_START + i * STEP_GAP
            return (
              <li key={title} className="group relative grid grid-cols-[auto_1fr] gap-4 pb-8 last:pb-0">
                {/* Line joining this step to the next: draws in, then carries a pulse downwards */}
                {!last && (
                  <span
                    className="absolute left-5.5 top-11 bottom-0 w-px origin-top bg-line-strong motion-safe:animate-draw"
                    style={delay(start + 0.2)}
                    aria-hidden="true"
                  >
                    <span
                      className="absolute -left-0.75 size-1.75 -translate-y-1/2 rounded-full bg-primary-hover opacity-0 shadow-[0_0_10px_2px] shadow-primary motion-safe:animate-travel"
                      style={delay(PULSE_START + i * PULSE_SEGMENT)}
                    />
                  </span>
                )}

                <span
                  className={`flex size-11 items-center justify-center rounded-full border transition duration-250 motion-safe:animate-pop ${
                    highlight
                      ? 'border-secondary bg-secondary/15 text-secondary-text group-hover:bg-secondary/25'
                      : 'border-line-strong bg-navy-900 text-white group-hover:border-primary group-hover:text-primary-hover'
                  }`}
                  style={delay(start)}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>

                <div className="pt-0.5 motion-safe:animate-rise" style={delay(start + 0.05)}>
                  <div className="transition duration-250 motion-safe:group-hover:translate-x-1">
                    <p className="text-kicker font-semibold tracking-[0.1em] text-muted">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className={`text-body font-bold ${highlight ? 'text-secondary-text' : ''}`}>{title}</h3>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>

        {/* The outcome: traffic narrowing down to customers */}
        <div className="mt-6 border-t border-line pt-5">
          <p
            className="mb-3 text-kicker uppercase text-muted motion-safe:animate-rise"
            style={delay(RESULT_START)}
          >
            The result
          </p>
          <div className="flex flex-wrap items-center gap-1.5">
            {FUNNEL.map((stage, i) => {
              const last = i === FUNNEL.length - 1
              const start = RESULT_START + 0.2 + i * PILL_GAP
              return (
                <div key={stage} className="flex items-center gap-1.5">
                  {/* The Customers pill keeps glowing; its timing is baked into --animate-glow */}
                  <span
                    className={`rounded-full px-3 py-1 text-basic font-semibold ${
                      last
                        ? 'bg-secondary text-navy-950 motion-safe:animate-glow'
                        : 'bg-navy-700 text-white motion-safe:animate-rise'
                    }`}
                    style={last ? undefined : delay(start)}
                  >
                    {stage}
                  </span>
                  {!last && (
                    <ChevronRight
                      className="size-4 text-muted motion-safe:animate-rise"
                      style={delay(start + 0.08)}
                      aria-hidden="true"
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
