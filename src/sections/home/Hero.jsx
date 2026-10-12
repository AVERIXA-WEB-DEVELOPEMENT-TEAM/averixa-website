import { Button } from '../../components/ui'
import HeroDiagram from './HeroDiagram'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-site flex-col items-center gap-12 px-6 py-14 lg:flex-row lg:gap-10">
        {/* Left: copy */}
        <div className="flex flex-1 flex-col gap-10 lg:px-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-7">
              <p className="font-serif text-[clamp(1.25rem,2.2vw,1.75rem)] italic text-secondary-text">Digital Growth Agency</p>

              <h1 className="text-balance text-[clamp(2.5rem,5.4vw,4.125rem)] font-bold leading-[1.12] tracking-[-0.02em]">
                More traffic isn't the goal.{' '}
                <em className="font-serif font-normal tracking-normal text-secondary-text">More customers</em> is.
              </h1>
            </div>

            <p className="max-w-160 text-pretty text-[clamp(1.0625rem,2vw,1.625rem)] leading-snug text-muted">
              Averixa Digital helps brands spot what's holding them back online, then builds the content and strategy
              to fix it.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-10">
            <Button to="/services" size="lg" pill>Book a free growth call</Button>
            <Button to="/portfolio" variant="secondary" size="lg" pill>See our work</Button>
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
