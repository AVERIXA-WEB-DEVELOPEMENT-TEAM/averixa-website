import { Button } from '../../components/ui'

export default function FormFooter({ step, total, onBack, onNext, canContinue, nextLabel = 'Continue' }) {
  return (
    <div className="mt-10 flex items-center justify-between gap-4 border-t border-line pt-6 md:mt-12 md:pt-8">
      <Button variant="secondary" onClick={onBack} disabled={step === 1}>
        Back
      </Button>
      <p className="hidden text-small font-medium text-muted sm:block">
        Step {step} of {total}
      </p>
      <Button onClick={onNext} disabled={!canContinue}>
        {nextLabel}
      </Button>
    </div>
  )
}