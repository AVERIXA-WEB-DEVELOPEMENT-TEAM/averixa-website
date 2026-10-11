import { Button } from '../../components/ui'
import HeroDiagram from './HeroDiagram'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-site flex-wrap items-center gap-12 px-6 pb-16 pt-18">
        {/* Left: copy */}
        <div className="flex max-w-145 flex-[1_1_460px] flex-col gap-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary-text">
            Digital growth agency
          </p>

          <h1 className="text-balance text-[clamp(2.375rem,5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em]">
            More traffic isn't the goal.{' '}
            <em className="font-serif font-normal tracking-[-0.01em] text-secondary-text">More customers</em> is.
          </h1>

          <p className="max-w-120 text-pretty text-[17px] leading-relaxed text-muted">
            Averixa Digital helps brands spot what's holding them back online, then builds the content and strategy
            to fix it.
          </p>

          <div className="flex flex-wrap gap-3 pt-1.5">
            <Button to="/services">Book a free growth call</Button>
            <Button to="/portfolio" variant="secondary">See our work</Button>
          </div>
        </div>

        {/* Right: what Averixa does, at a glance */}
        <div className="flex flex-[1_1_340px] justify-center lg:justify-end">
          <HeroDiagram />
        </div>
      </div>
    </section>
  )
}
