import { useEffect } from 'react'

// Sets the browser tab title and the meta description for the current page.
export default function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])

  return null
}
