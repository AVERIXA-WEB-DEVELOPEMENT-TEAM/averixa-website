import { SERVICE_TITLES } from "../constants/services.js";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates the service-request payload.
 * Returns { valid: true, data } or { valid: false, errors: { field: message } }.
 */
export function validateServiceRequest(body) {
  const errors = {};
  const data = {};

  if (!body || typeof body !== "object") {
    return { valid: false, errors: { _: "Missing request body." } };
  }

  // --- service: must be a non-empty array of known IDs
  if (!Array.isArray(body.service) || body.service.length === 0) {
    errors.service = "Select at least one service.";
  } else {
    const unknown = body.service.filter((id) => !SERVICE_TITLES[id]);
    if (unknown.length > 0) {
      errors.service = "One or more selected services are not recognised.";
    } else {
      data.service = body.service;
    }
  }

  // --- budget / timeline / goals: required strings
  data.budget = requiredString(
    body.budget,
    "budget",
    errors,
    "Select a budget range.",
  );
  data.timeline = requiredString(
    body.timeline,
    "timeline",
    errors,
    "Select a timeline.",
  );
  data.goals = requiredString(
    body.goals,
    "goals",
    errors,
    "Tell us about your goals.",
  );

  // --- name / email
  data.name = requiredString(
    body.name,
    "name",
    errors,
    "Please enter your full name.",
  );

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (email === "") {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  } else {
    data.email = email;
  }

  // --- optional strings
  data.company = optionalString(body.company);
  data.notes = optionalString(body.notes);

  // --- booleans (default false; must be actual booleans if present)
  data.newsletterOptIn = body.newsletterOptIn === true;
  data.marketingConsent = body.marketingConsent === true;

  if (Object.keys(errors).length > 0) return { valid: false, errors };
  return { valid: true, data };
}

function requiredString(value, field, errors, message) {
  const s = typeof value === "string" ? value.trim() : "";
  if (s === "") {
    errors[field] = message;
    return "";
  }
  return s;
}

function optionalString(value) {
  return typeof value === "string" ? value.trim() : "";
}
