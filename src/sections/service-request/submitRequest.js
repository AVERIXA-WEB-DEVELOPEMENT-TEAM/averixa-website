// Sends a service request to the backend, which:
//  - emails the company (hello@averixa.com) with the full request,
//  - emails the client a confirmation,
//  - emails the client a newsletter welcome if they opted in.
// Throws on non-2xx so the form can show the retry state.
export async function submitServiceRequest(formData) {
  const res = await fetch('/api/service-request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`)
  }

  return res.json()
}