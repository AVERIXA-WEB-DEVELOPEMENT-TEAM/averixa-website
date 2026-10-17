// Server-side copy of the service ID → title map.
// IMPORTANT: keep in sync with src/data/serviceRequest.js.
export const SERVICE_TITLES = {
  "website-development": "Website Development",
  "content-creation": "Content Creation",
  "digital-marketing": "Digital Marketing",
  "video-editing": "Video Editing",
  advertising: "Advertising", // e.g. Google Ads, Facebook Ads
  "social-media-management": "Social Media Management",
  branding: "Branding", // e.g. logo, brand identity
  "business-development": "Business Development",
};

export function serviceTitlesFromIds(ids = []) {
  return ids.map((id) => SERVICE_TITLES[id] ?? id);
}
