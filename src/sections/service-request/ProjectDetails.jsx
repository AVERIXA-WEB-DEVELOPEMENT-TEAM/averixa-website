import { useId } from 'react'
import { budgets, timelines } from '../../data/serviceRequest'
import RequestField, { labelClass } from './RequestField'

// A label plus a row of chips where only one can be picked.
// equalWidth: chips sit in even columns (budget), otherwise they size to their text (timeline).
function OptionGroup({ label, options, value, onChange, equalWidth = false }) {
  const id = useId()

  const layout = equalWidth
    ? 'grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5'
    : 'flex flex-wrap gap-3'

  return (
    <div className="flex flex-col gap-4">
      <p id={id} className={labelClass}>
        {label}
      </p>
      <div role="group" aria-labelledby={id} className={layout}>
        {options.map((option) => {
          const selected = value === option

          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option)}
              className={`rounded-lg border px-3 py-2 text-center text-sm font-semibold text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                selected ? 'border-secondary bg-secondary/10' : 'border-line-strong bg-navy-900 hover:border-primary'
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function ProjectDetails({ formData, onChange }) {
  return (
    <div>
      <div className="flex max-w-[796px] flex-col gap-4 md:gap-[26px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-normal md:text-[40px]">Tell us about your project</h2>
        <p className="text-base leading-[1.6] text-muted">
          The more context you give us, the better our proposal will be.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-8 md:mt-10 md:px-6 lg:gap-12">
        <OptionGroup
          label="Budget range"
          options={budgets}
          value={formData.budget}
          onChange={(value) => onChange('budget', value)}
          equalWidth
        />
        <OptionGroup
          label="Timeline"
          options={timelines}
          value={formData.timeline}
          onChange={(value) => onChange('timeline', value)}
        />
        <RequestField
          label="Your goals"
          multiline
          bare
          rows={6}
          value={formData.goals}
          onChange={(e) => onChange('goals', e.target.value)}
          placeholder="What does success look like? What’s not working right now? What have you tried before?"
          inputClassName="min-h-60 md:min-h-[400px]"
        />
      </div>
    </div>
  )
}