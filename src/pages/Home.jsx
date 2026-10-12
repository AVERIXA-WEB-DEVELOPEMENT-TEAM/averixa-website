import Hero from '../sections/home/Hero'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Albert's sections go here. The nav's About link scrolls to id="about". */}
      <section id="about" className="mx-auto max-w-site scroll-mt-24 px-6 py-24">
        <h2 className="text-header">The human parts</h2>
      </section>
    </>
  )
}