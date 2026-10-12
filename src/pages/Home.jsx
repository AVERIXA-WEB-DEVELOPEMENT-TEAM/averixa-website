import Hero from '../sections/home/Hero'
import { Card } from '../components/ui'


export default function Home() {
  return (
    <>
      <Hero />

      {/* Albert's sections go here. The nav's About link scrolls to id="about". */}
      <section id="about" className="mx-auto max-w-site scroll-mt-24 px-6 py-24">
        <h2 className="text-balance text-[clamp(2.375rem,5vw,3.75rem)] font-light leading-[1.04] tracking-[-0.03em]">What we do to  <em className="font-serif font-normal tracking-[-0.01em] text-secondary-text">grow</em> your brand</h2>
        <div className="m-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-2">
          {/*First card */}
          <Card className="flex h-full min-w-0 flex-col">
        <h2 className="text-xl font-bold">Website Development</h2>

        <p className="my-4 flex-1 text-gray-300 py-5">
          Fast modern websites built to turn visitors into to customers
        </p>

        <div className=" mt-auto flex gap-2">
          <button className="flex-1 rounded border p-2">
            Design
          </button>
          <button className="flex-1 rounded border p-2 text-white">
            Build
          </button>
        </div>
      </Card>

      {/*Second card */}
       <Card className="flex flex-col">
        <h2 className="text-xl font-bold">Content Creation</h2>

        <p className="my-4 flex-1 text-gray-300 py-1">
          Post scripts and visuals that stop the scroll and keep your audience coming back.
        </p>

        <div className=" mt-auto flex gap-2">
          <button className="flex-1 rounded border p-2">
            Social
          </button>
          <button className="flex-1 rounded border p-2 text-white">
            Copy
          </button>
        </div>
      </Card>

      {/*Third Card */}

      <Card className="flex flex-col">
        <h2 className="text-xl font-bold">Digital Marketing</h2>

        <p className="my-4 flex-1 text-gray-300">
          Campaign and strategy that pit your brand in front of the right people.
        </p>

        <div className="mt-auto flex gap-2">
          <button className="flex-1 rounded border p-2">
            Strategy
          </button>
          <button className="flex-1 rounded border p-2 text-white">
            Growth
          </button>
        </div>
      </Card>
        </div>

    {/*Growing in four steps section */}
        <h2 className="text-balance text-[clamp(2.375rem,5vw,3.75rem)] font-light leading-[1.04] tracking-[-0.03em]">From stuck to<em className="font-serif font-normal tracking-[-0.01em] text-secondary-text">growing</em> in four steps</h2>
        
        <div className='"m-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-2'>
          {/*Card 1 */}
          <Card className="flex flex-col">
        <h2 className="text-xl font-bold flex items-center justify-center">Listen</h2>

        <p className="my-4 flex-1 text-gray-300">
          We understand goals, your audience and what's getting in the way.
        </p>

        </Card>

        {/*Card 2 */}
        <Card className="flex flex-col">
        <h2 className="text-xl font-bold flex items-center justify-center">Shape</h2>

        <p className="my-4 flex-1 text-gray-300">
          We turn what we learn into a focused, practical plan.
        </p>

        </Card>

        {/*Card 3 */}
        <Card className="flex flex-col">
        <h2 className="text-xl font-bold flex items-center justify-center">Create</h2>

        <p className="my-4 flex-1 text-gray-300">
          We bring the strategy to life with thoughtful creative work.
        </p>

        </Card>

        {/*Card 4 */}
         <Card className="flex flex-col">
        <h2 className="text-xl font-bold flex items-center justify-center">Grow</h2>

        <p className="my-4 flex-1 text-gray-300">
          We learn from real results and keep making the work stronger.
        </p>

        </Card>
        </div>
        


      <div className="flex flex-col md:flex-row gap-6">
      {/* Image */}
      <img
        src="https://picsum.photos/600/400"
        alt="Side by side image"
        className="w-full md:w-auto h-64 md:h-full object-cover shrink-0 rounded"
      />

      {/* Text container with sections */}
      <div className="flex-1 flex flex-col gap-4">
        <section>
          <h2 className="text-3xl font-bold mb-2 ">The human parts</h2>
          <p>Some text here…</p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-1">Section 2</h3>
          "The best work starts with listening and not a template".
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-1">Section 3</h3>
          <p>You won't be passed through layers of account management. You'll work directly with the people
          shaping the strategy, designing the expereince and measuring what happens next</p>
        </section>
        <p className='mb-2'>Clear thinking, honest conversations, no theatre</p>
      </div>
    </div>   

    

      </section>

      
      

      
    </>
  )
}