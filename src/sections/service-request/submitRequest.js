// Sends a service request.
// PLACEHOLDER: it waits a moment and pretends it worked, so the success screen can be built and tested.
// Fortunatus replaces the body with the real API call, for example:
//
//   const res = await fetch('/api/service-request', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(formData),
//   })
//   if (!res.ok) throw new Error('Request failed')

export async function submitServiceRequest(formData) {
  await new Promise((resolve) => setTimeout(resolve, 1200))
  return { ok: true }
}