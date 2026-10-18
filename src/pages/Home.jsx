
import Hero from '../sections/home/Hero'
import { Accent, Button, Card, CaseStudyCard, SectionHeading, Tag } from '../components/ui'
import { featuredWorks } from '../data/works'
import PageMeta from '../components/layout/PageMeta'
import { pageMeta } from '../data/pages'


export default function Home() {
  return (
    <>
      <PageMeta {...pageMeta.home} />
      <Hero />

      {/* What we do */}
      <section className="w-full bg-navy-900 py-16 md:py-20">
        <div className="mx-auto max-w-site px-6">
          <h2 className="text-header mb-10">
            What we do to <Accent>grow</Accent> your brand
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
           

            {/* First card */}
            <Card className="flex h-full min-w-0 flex-col gap-4">
              <h3 className="text-sub">Website Development</h3>

              <p className="flex-1 text-body text-muted">
                Fast modern websites built to turn visitors into customers.
              </p>

              <div className="flex flex-wrap gap-2">
                <Tag>
                  Design
                </Tag>
                
                <Tag>
                  Build
                </Tag>
              </div>
            </Card>

            {/* Second card */}
            <Card className="flex h-full min-w-0 flex-col gap-4">
              <h3 className="text-sub">Content Creation</h3>

              <p className="flex-1 text-body text-muted">
                Posts, scripts and visuals that stop the scroll and keep your
                audience coming back.
              </p>

              <div className="flex flex-wrap gap-2">
                <Tag>
                  Social
                </Tag>
                <Tag>
                  Copy
                </Tag>
              </div>
            </Card>

            {/* Third card */}
            <Card className="flex h-full min-w-0 flex-col gap-4">
              <h3 className="text-sub">Digital Marketing</h3>

              <p className="flex-1 text-body text-muted">
                Campaigns and strategies that put your brand in front of the
                right people.
              </p>

              <div className="flex flex-wrap gap-2">
                <Tag>Strategy</Tag>
                
                <Tag>Growth</Tag>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Growing in four steps */}
      <section className="w-full bg-navy-950 py-24">
        <div className="mx-auto max-w-site px-6">
          <h2 className="text-header mb-10">
            From stuck to <Accent>growing</Accent> in four steps
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <Card className="flex h-full min-w-0 flex-col gap-4">
              <h3 className="text-sub">Listen</h3>

              <p className="text-body text-muted">
                We understand your goals, your audience and what's getting in
                the way.
              </p>
            </Card>

            {/* Card 2 */}
            <Card className="flex h-full min-w-0 flex-col gap-4">
              <h3 className="text-sub">Shape</h3>

              <p className="text-body text-muted">
                We turn what we learn into a focused, practical plan.
              </p>
            </Card>

            {/* Card 3 */}
            <Card className="flex h-full min-w-0 flex-col gap-4">
              <h3 className="text-sub">Create</h3>

              <p className="text-body text-muted">
                We bring the strategy to life with thoughtful creative work.
              </p>
            </Card>

            {/* Card 4 */}
            <Card className="flex h-full min-w-0 flex-col gap-4">
              <h3 className="text-sub">Grow</h3>

              <p className="text-body text-muted">
                We learn from real results and keep making the work stronger.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* The human part */}
      <section id="about" className="w-full scroll-mt-24 bg-navy-900 py-24">
        <div className="mx-auto flex max-w-site px-6 flex-col gap-8 md:flex-row md:items-center">
          {/* Image */}
          <img
            src="https://picsum.photos/600/400"
            alt="Team collaborating on creative work"
            className="h-64 w-full shrink-0 rounded object-cover md:h-auto md:w-1/2"
          />

          {/* Text content */}
          <div className="flex flex-1 flex-col gap-6">
            <p className="text-kicker uppercase text-secondary-text">
              The human parts
            </p>

            <h2 className="text-header">
              “The best work starts with listening, not a template.”
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

      {/* Case studies */}
      <section className="w-full bg-navy-950 py-24">
        <div className="mx-auto max-w-site px-6">
          <SectionHeading
            kicker="Case studies"
            title={
              <>
                Growth you can <Accent>see</Accent>
              </>
            }
            intro="The partnerships, the thinking and the outcomes."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredWorks.map((work) => (
              <CaseStudyCard key={work.name} {...work} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button to="/portfolio" variant="secondary">
              View all case studies
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
