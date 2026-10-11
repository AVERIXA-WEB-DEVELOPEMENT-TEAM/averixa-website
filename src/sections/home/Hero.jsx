import { Button } from '../../components/ui'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-site flex-wrap items-center gap-8 px-6 pb-16 pt-18">
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

        {/* Right: the 3D sculpture goes here in step 2 */}
        <div className="grid min-h-115 flex-[1_1_380px] place-items-center self-stretch rounded-card border border-dashed border-line text-sm text-muted">
          3D sculpture
        </div>
      </div>
    </section>
  )
}