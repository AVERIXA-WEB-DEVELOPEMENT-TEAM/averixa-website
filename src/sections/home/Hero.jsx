import { Button } from '../../components/ui'
import HeroDiagram from './HeroDiagram'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-site flex-col items-center gap-12 px-6 py-14 lg:flex-row lg:gap-10">
        {/* Left: copy */}
        <div className="flex flex-1 flex-col gap-10">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-7">
              <p className="font-serif text-eyebrow italic text-secondary-text">Digital Growth Agency</p>

              <h1 className="text-balance text-hero">
                More traffic isn't the goal.{' '}
                <em className="font-serif font-normal tracking-normal text-secondary-text">More customers</em> is.
              </h1>
            </div>

            <p className="max-w-160 text-pretty text-lead text-muted">
              Averixa Digital helps brands spot what's holding them back online, then builds the content and strategy
              to fix it.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-10">
            <Button to="/contact" pill>Book a free growth call</Button>
            <Button to="/portfolio" variant="secondary" pill>See our work</Button>
          </div>
        </div>

        {/* Right: what Averixa does, at a glance */}
        <div className="flex shrink-0 justify-center">
          <HeroDiagram />
        </div>
      </div>
    </section>
  )
}
