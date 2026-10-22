import { Accent, Button } from '../components/ui'
import PageMeta from '../components/layout/PageMeta'
import { pageMeta } from '../data/pages'
import { whatsapp } from '../data/socials'

// The growth chart with one step missing: the dashed bar is the page that wasn't found
const bars = [
  { height: '24%', className: 'bg-primary' },
  { height: '39%', className: 'bg-primary' },
  { height: '54%', className: 'bg-primary' },
  { height: '69%', className: 'border-2 border-dashed border-line-strong', missing: true },
  { height: '84%', className: 'bg-navy-700' },
  { height: '100%', className: 'bg-secondary' },
]

export default function NotFound() {
  return (
    <section className="mx-auto max-w-site px-6 py-24">
      <PageMeta {...pageMeta.notFound} />

      <div className="grid items-center gap-16 md:grid-cols-2">
        <div>
          <p className="text-kicker uppercase text-secondary-text">Error 404</p>
          <h1 className="mt-4 text-display">
            Looks like this step is <Accent>missing</Accent>.
          </h1>
          <p className="mt-6 text-lead text-muted">
            The page you're looking for doesn't exist or has moved. Let's get you back on the path to growth.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to="/">Back to Home</Button>
            <Button to="/portfolio" variant="secondary">
              See our work
            </Button>
          </div>

          <p className="mt-8 text-small text-muted">
            Still stuck?{' '}
            <a href={whatsapp.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline">
              Message us on WhatsApp
            </a>
          </p>
        </div>

        <div aria-hidden="true" className="rounded-card border border-line bg-navy-800 p-8">
          <div className="flex h-52 items-end justify-between gap-3">
            {bars.map((bar, index) => (
              <div
                key={index}
                className={`flex flex-1 items-center justify-center rounded-lg font-bold text-white ${bar.className}`}
                style={{ height: bar.height }}
              >
                {bar.missing ? '?' : null}
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between border-t border-line pt-3 text-small text-muted">
            <span>Visitors</span>
            <span>Customers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
