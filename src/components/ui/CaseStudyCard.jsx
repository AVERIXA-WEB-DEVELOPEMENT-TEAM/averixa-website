import Card from './Card'
import Tag from './Tag'
import ResultBadge from './ResultBadge'

export default function CaseStudyCard({ initials, name, industry, result, tags = [] }) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-navy-700 font-bold text-[#8fb0ff]">
          {initials}
        </span>
        {industry && <span className="text-basic text-muted">{industry}</span>}
      </div>

      <h3 className="text-sub">{name}</h3>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}

      <div className="mt-auto">
        <ResultBadge>{result}</ResultBadge>
      </div>
    </Card>
  )
}