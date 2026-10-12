export default function Tag({ children }) {
  return (
    <span className="inline-flex rounded-full bg-navy-700 px-3 py-1 text-basic text-white">
      {children}
    </span>
  )
}