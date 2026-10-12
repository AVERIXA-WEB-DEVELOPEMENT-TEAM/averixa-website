import { useId } from 'react'
import { budgets, timelines } from '../../data/serviceRequest'
import RequestField, { labelClass } from './RequestField'

// A label plus a row of chips where only one can be picked.
// equalWidth: chips sit in even columns (budget), otherwise they size to their text (timeline).
function OptionGroup({ label, options, value, onChange, equalWidth = false }) {
  const id = useId()

  const layout = equalWidth
    ? 'grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-x-10 md:gap-y-4 lg:gap-x-16'
    : 'flex flex-wrap gap-3 md:gap-x-7 lg:gap-x-[35px] lg:gap-y-5'

  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-[30px]">
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
              className={`rounded-[10px] border px-2.5 py-1.5 text-center text-sm font-medium text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:p-[10px] lg:text-xl ${
                selected ? 'border-secondary bg-secondary/10' : 'border-line-strong hover:border-primary'
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
        <h2 className="text-2xl font-extrabold md:text-[32px] lg:text-[40px]">Tell us about your project</h2>
        <p className="font-medium md:text-lg lg:text-xl">
          The more context you give us, the better our proposal will be.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-8 md:mt-12 md:px-[22px] lg:mt-[62px] lg:gap-[50px] lg:px-[18px]">
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