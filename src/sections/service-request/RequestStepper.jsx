export default function RequestStepper({ total, current }) {
  const steps = Array.from({ length: total }, (_, i) => i + 1)

  return (
    <ol className="flex items-center" aria-label={`Step ${current} of ${total}`}>
      {steps.map((n) => {
        const done = n < current
        const now = n === current

        return (
          <li
            key={n}
            className={`flex items-center ${n < total ? 'flex-1' : ''}`}
            aria-current={now ? 'step' : undefined}
          >
            {done ? (
              <span className="grid h-10 shrink-0 place-items-center rounded-[10px] bg-secondary px-3 text-sm font-semibold text-white md:h-[53px] md:px-[14px] md:text-xl">
                <span className="sr-only">Step {n} </span>Done
              </span>
            ) : (
              <span
                className={`grid size-10 shrink-0 place-items-center rounded-full text-sm font-medium text-white md:size-[54px] md:text-xl ${
                  now ? 'bg-secondary' : 'border border-line-strong'
                }`}
              >
                {n}
              </span>
            )}

            {n < total && (
              <span aria-hidden="true" className={`h-px flex-1 ${done ? 'bg-secondary' : 'bg-line-strong'}`} />
            )}
          </li>
        )
      })}
    </ol>
  )
}