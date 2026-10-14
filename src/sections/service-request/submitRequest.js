// Sends a service request.
// PLACEHOLDER: it waits a moment and pretends it worked, so the success screen can be built and tested.
// Fortunatus replaces the body with the real API call, for example:
//
// Backend contract: accept newsletterOptIn and marketingConsent as independent
// booleans. Subscribe/send marketing only for the corresponding true value,
// and store each consent with its timestamp and source. Neither is required
// to create the service request.
// Return a 2xx response when the request is accepted and a non-2xx response
// on failure; the form uses that status to show success or let the user retry.
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