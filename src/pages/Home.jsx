
import Hero from '../sections/home/Hero'
import { Card, Button, Tag} from '../components/ui'
import { Link } from 'react-router'


export default function Home() {
  return (
    <>
      <Hero />

      {/* About / What we do */}
      <section
        id="about"
        className="w-full scroll-mt-24 bg-navy-900 px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-site">
          <h2 className="text-header mb-10">
            What we do to{' '}
            <em className="font-serif font-normal tracking-[-0.01em] text-secondary-text">
              grow
            </em>{' '}
            your brand
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
           

            {/* First card */}
            <Card className="flex h-full min-w-0 flex-col bg-navy-950">
              <h3 className="text-sub font-sans">Website Development</h3>

              <p className="my-4 flex-1 py-2 text-muted">
                Fast modern websites built to turn visitors into customers.
              </p>

              <div className="mt-auto flex gap-2 ">
                <Tag>
                  Design
                </Tag>
                
                <Tag>
                  Build
                </Tag>
              </div>
            </Card>

            {/* Second card */}
            <Card className="flex h-full min-w-0 flex-col bg-navy-950">
              <h3 className="text-sub font-sans">Content Creation</h3>

              <p className="my-4 flex-1 py-2 text-muted">
                Posts, scripts and visuals that stop the scroll and keep your
                audience coming back.
              </p>

              <div className="mt-auto flex gap-2">
                <Tag>
                  Social
                </Tag>
                <Tag>
                  Copy
                </Tag>
              </div>
            </Card>

            {/* Third card */}
            <Card className="flex h-full min-w-0 flex-col bg-navy-950">
              <h3 className="text-sub font-sans">Digital Marketing</h3>

              <p className="my-4 flex-1 py-2 text-muted">
                Campaigns and strategies that put your brand in front of the
                right people.
              </p>

              <div className="mt-auto flex gap-2">
                <Tag>Strategy</Tag>
                
                <Tag>Growth</Tag>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Growing in four steps */}
      <section className="w-full bg-navy-950 px-6 py-24">
        <div className="mx-auto max-w-site">
          <h2 className="text-header font-sans mb-10">
            From stuck to{' '}
            <em className="font-serif font-normal tracking-[-0.01em] text-secondary-text">
              growing
            </em>{' '}
            in four steps
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <Card className="flex h-full flex-col bg-navy-900">
              <h3 className="text-center text-sub font-sans">Listen</h3>

              <p className="my-4 flex-1 text-muted font-sans">
                We understand your goals, your audience and what's getting in
                the way.
              </p>
            </Card>

            {/* Card 2 */}
            <Card className="flex h-full flex-col bg-navy-900">
              <h3 className="text-center text-sub font-sans">Shape</h3>

              <p className="my-4 flex-1 text-muted font-sans">
                We turn what we learn into a focused, practical plan.
              </p>
            </Card>

            {/* Card 3 */}
            <Card className="flex h-full flex-col bg-navy-900">
              <h3 className="text-center text-sub font-sans">Create</h3>

              <p className="my-4 flex text-muted font-sans">
                We bring the strategy to life with thoughtful creative work.
              </p>
            </Card>

            {/* Card 4 */}
            <Card className="flex h-full flex-col bg-navy-900">
              <h3 className="text-center text-sub font-sans">Grow</h3>

              <p className="my-4 flex-1 text-muted">
                We learn from real results and keep making the work stronger.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* The human part */}
      <section className="w-full bg-navy-900 px-6 py-24">
        <div className="mx-auto flex max-w-site flex-col gap-8 md:flex-row md:items-center">
          {/* Image */}
          <img
            src="https://picsum.photos/600/400"
            alt="Team collaborating on creative work"
            className="h-64 w-full shrink-0 rounded object-cover md:h-auto md:w-1/2"
          />

          {/* Text content */}
          <div className="flex flex-1 flex-col gap-6">
            <p className="text-body text-secondary">
              THE HUMAN PARTS
            </p>

            <h2 className="text-header">
              "The best work starts with listening and not a template".
            </h2>

            <p className=" text-body">
              You won't be passed through layers of account management.
              You'll work directly with the people shaping the strategy,
              designing the experience and measuring what happens next.
            </p>

            <p className="text-muted">
              Clear thinking, honest conversations, no theatre.
            </p>
          </div>
        </div>
      </section>

      {/* Selected works */}
      <section className="w-full bg-navy-950 px-6 py-24">
        <div className="mx-auto max-w-site">
          <p className="mb-4 text-body text-secondary">
            SELECTED WORKS
          </p>


          <div className= 'flex w-full items-center justify-between gap-4'>
          <h2 className="text-header font-sans mb-6 ">
            Growth you can{' '}
            <em className="font-serif font-normal tracking-[-0.01em] text-secondary-text">
              see
            </em>
          </h2>
        <Link to="/Portfolio">
        <Button className='shrink-0 border border-secondary bg-transparent text-secondary hover:bg-secondary/10'>View All Brands</Button>
        </Link>
          
          </div>
          

          <p className="text-body font-sans">
            The partnerships, the thinking and the outcomes.
          </p>
        </div>
      </section>
    </>
  )
}
