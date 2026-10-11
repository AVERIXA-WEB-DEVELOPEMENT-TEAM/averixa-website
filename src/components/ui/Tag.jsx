export default function Tag({ children }) {
  return (
    <span className="inline-flex rounded-full bg-navy-700 px-3 py-1 text-xs font-medium text-white">
      {children}
    </span>
  )
}