import { useId } from 'react'
import { ChoiceChip, Field } from '../../components/ui'
import { budgets, timelines } from '../../data/serviceRequest'

// A label plus a row of chips where only one can be picked.
// equalWidth: chips sit in even columns (budget), otherwise they size to their text (timeline).
function OptionGroup({ label, options, value, onChange, equalWidth = false }) {
  const id = useId()

  const layout = equalWidth
    ? 'grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5'
    : 'flex flex-wrap gap-3'

  return (
    <div className="flex flex-col gap-3">
      <p id={id} className="text-kicker uppercase text-muted">
        {label}
      </p>
      <div role="group" aria-labelledby={id} className={layout}>
        {options.map((option) => (
          <ChoiceChip key={option} selected={value === option} onClick={() => onChange(option)} className="text-center">
            {option}
          </ChoiceChip>
        ))}
      </div>
    </div>
  )
}

export default function ProjectDetails({ formData, onChange }) {
  return (
    <div>
      <div className="flex max-w-3xl flex-col gap-3">
        <h2 className="text-sub">Tell us about your project</h2>
        <p className="text-body text-muted">
          The more context you give us, the better our proposal will be.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-8 md:mt-10 lg:gap-10">
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
        <Field
          label="Your goals (required)"
          multiline
          required
          rows={6}
          value={formData.goals}
          onChange={(e) => onChange('goals', e.target.value)}
          placeholder="What does success look like? What’s not working right now? What have you tried before?"
          inputClassName="min-h-60"
        />
      </div>
    </div>
  )
}
