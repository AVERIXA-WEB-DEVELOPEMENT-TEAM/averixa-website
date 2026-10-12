import { Button } from '../../components/ui'

export default function FormFooter({ step, total, onBack, onNext, canContinue, nextLabel = 'Continue' }) {
  return (
    <div className="mt-12 flex items-center justify-between gap-4 border-t border-line pt-8 md:pt-12">
      <Button variant="secondary" onClick={onBack} disabled={step === 1}>
        Back
      </Button>
      <p className="font-medium md:text-xl">
        Step {step} of {total}
      </p>
      <Button onClick={onNext} disabled={!canContinue}>
        {nextLabel}
      </Button>
    </div>
  )
}