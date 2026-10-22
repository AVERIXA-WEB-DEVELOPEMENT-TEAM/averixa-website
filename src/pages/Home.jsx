
import Hero from '../sections/home/Hero'
import { Accent, Button, Card, CaseStudyCard, SectionHeading, Tag } from '../components/ui'
import { featuredWorks } from '../data/works'
import { growthSteps } from '../data/home'
import { services } from '../data/serviceRequest'
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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.id} className="flex h-full min-w-0 flex-col gap-4">
                <h3 className="text-sub">{service.title}</h3>
                <p className="flex-1 text-body text-muted">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </Card>
            ))}
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
            {growthSteps.map((step) => (
              <Card key={step.title} className="flex h-full min-w-0 flex-col gap-4">
                <h3 className="text-sub">{step.title}</h3>
                <p className="text-body text-muted">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The human part */}
      <section id="about" className="w-full scroll-mt-24 bg-navy-900 py-24">
        <div className="mx-auto max-w-site px-6">
          <div className="flex max-w-3xl flex-col gap-6">
            <p className="text-kicker uppercase text-secondary-text">
              The human parts
            </p>

            <h2 className="text-header">
              “The best work starts with listening, not a template.”
            </h2>

            <p className="text-body">
              You won't be passed through layers of account management.
              You'll work directly with the people shaping the strategy,
              designing the experience and measuring what happens next.
            </p>

            <p className="text-body text-muted">
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
