import { Button, SectionHeading } from '../components/ui'
import PageMeta from '../components/layout/PageMeta'
import { pageMeta } from '../data/pages'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-site px-6 py-24">
      <PageMeta {...pageMeta.notFound} />
      <SectionHeading
        as="h1"
        kicker="404"
        title="Page not found"
        intro="The page you were looking for doesn't exist or has moved."
      />
      <div className="mt-8 flex flex-wrap gap-4">
        <Button to="/">Back to Home</Button>
        <Button to="/portfolio" variant="secondary">
          See our work
        </Button>
      </div>
    </section>
  )
}
