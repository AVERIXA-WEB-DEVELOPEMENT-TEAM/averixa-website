import { ArrowUpRight } from 'lucide-react'
import Card from './Card'
import Tag from './Tag'
import ResultBadge from './ResultBadge'

export default function CaseStudyCard({ initials, name, industry, result, tags = [], description, builtBy, href }) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-navy-700 font-bold text-primary-soft">
          {initials}
        </span>
        {industry && <span className="text-basic text-muted">{industry}</span>}
      </div>

      <h3 className="text-sub">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-primary-soft"
          >
            {name}
            <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" className="ml-1.5 inline align-middle" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : (
          name
        )}
      </h3>

      {description && <p className="text-body text-muted">{description}</p>}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}

      {builtBy && <p className="text-basic text-muted">Built by {builtBy}</p>}

      <div className="mt-auto">
        <ResultBadge>{result}</ResultBadge>
      </div>
    </Card>
  )
}
