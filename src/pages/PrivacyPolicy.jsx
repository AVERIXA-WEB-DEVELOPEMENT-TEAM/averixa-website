import { SectionHeading } from '../components/ui'
import PageMeta from '../components/layout/PageMeta'
import { pageMeta } from '../data/pages'
import { effectiveDate, privacyEmail, privacySections } from '../data/privacyPolicy'

const linkClass = 'font-semibold text-white underline underline-offset-2 hover:text-primary-soft'

// Turns the email address and the NDPC website into links, and highlights [PLACEHOLDERS].
function RichText({ text }) {
  return text.split(/(\[[A-Z0-9 ]+\]|hello@averixadigital\.com|ndpc\.gov\.ng)/).map((part, i) => {
    if (part === privacyEmail) {
      return (
        <a key={i} href={`mailto:${privacyEmail}`} className={linkClass}>
          {part}
        </a>
      )
    }
    if (part === 'ndpc.gov.ng') {
      return (
        <a key={i} href="https://ndpc.gov.ng" target="_blank" rel="noopener noreferrer" className={linkClass}>
          {part}
        </a>
      )
    }
    if (/^\[[A-Z0-9 ]+\]$/.test(part)) {
      return (
        <mark key={i} className="rounded bg-secondary/15 px-1 font-semibold text-secondary-text">
          {part}
        </mark>
      )
    }
    return part
  })
}

export default function PrivacyPolicy() {
  return (
    <section className="mx-auto max-w-site px-6 py-16 md:py-20">
      <PageMeta {...pageMeta.privacy} />

      <SectionHeading
        as="h1"
        kicker="Legal"
        title="Privacy Policy"
        intro={`Effective ${effectiveDate}. This policy explains what personal data Averixa Digital collects through this website, why, and the rights you have over it.`}
      />

      {/* Contents */}
      <nav aria-label="On this page" className="mt-10 max-w-3xl rounded-card border border-line bg-navy-800 p-6">
        <p className="text-kicker uppercase text-muted">On this page</p>
        <ol className="mt-4 grid gap-2 text-control sm:grid-cols-2">
          {privacySections.map((section, i) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="text-muted transition-colors duration-200 hover:text-white">
                {i + 1}. {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-12 flex max-w-3xl flex-col gap-12">
        {privacySections.map((section, i) => (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <h2 className="text-sub">
              {i + 1}. {section.title}
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-body text-muted">
              {section.blocks.map((block, j) =>
                typeof block === 'string' ? (
                  <p key={j}>
                    <RichText text={block} />
                  </p>
                ) : (
                  <ul key={j} className="flex list-disc flex-col gap-2 pl-5 marker:text-secondary-text">
                    {block.list.map((item) => (
                      <li key={item}>
                        <RichText text={item} />
                      </li>
                    ))}
                  </ul>
                ),
              )}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}
