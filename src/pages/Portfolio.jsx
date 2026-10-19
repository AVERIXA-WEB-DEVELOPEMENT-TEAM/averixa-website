import { useState } from 'react'
import { Accent, Button, Card, CaseStudyCard, PillGroup, SectionHeading } from '../components/ui'
import PageMeta from '../components/layout/PageMeta'
import { pageMeta } from '../data/pages'
import { categories, works } from '../data/works'

export default function Portfolio() {
  const [category, setCategory] = useState('All')
  const shown = category === 'All' ? works : works.filter((work) => work.industry === category)

  return (
    <>
      <PageMeta {...pageMeta.portfolio} />

      <section className="mx-auto max-w-site px-6 py-16 md:py-20">
        <SectionHeading
          as="h1"
          kicker="Case studies"
          title={
            <>
              Brands we've helped <Accent>grow</Accent>
            </>
          }
          intro="Good work is collaborative. Explore what we made together, what changed and the results that followed."
        />

        <div className="mt-10">
          <PillGroup label="Filter projects by category" options={categories} value={category} onChange={setCategory} />
        </div>

        {shown.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((work) => (
              <CaseStudyCard key={work.name} {...work} />
            ))}
          </div>
        ) : (
          <Card interactive={false} className="mt-8 text-center">
            <p className="text-body text-muted">No projects in this category yet.</p>
            <Button variant="secondary" size="sm" className="mt-4" onClick={() => setCategory('All')}>
              Show all projects
            </Button>
          </Card>
        )}
      </section>

      <section className="border-t border-line bg-navy-900">
        <div className="mx-auto flex max-w-site flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <SectionHeading
            title="Have a project in mind?"
            intro="Tell us where you are and what you want to change. We'll reply within one business day."
          />
          <Button to="/services" className="shrink-0">
            Start your project
          </Button>
        </div>
      </section>
    </>
  )
}
