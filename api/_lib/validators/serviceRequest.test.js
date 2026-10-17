import { test } from "node:test";
import assert from "node:assert/strict";
import { validateServiceRequest } from "./serviceRequest.js";

// A known-good payload we can mutate per case.
function basePayload(overrides = {}) {
  return {
    service: ["website-development"],
    budget: "$1k – $5k",
    timeline: "1 Month",
    goals: "Ship a new marketing site.",
    name: "Jane Smith",
    email: "oselufortunatus@gmail.com",
    company: "Acme Co",
    notes: "Async comms preferred.",
    newsletterOptIn: false,
    marketingConsent: false,
    ...overrides,
  };
}

test("accepts a well-formed payload", () => {
  const result = validateServiceRequest(basePayload());
  assert.equal(result.valid, true);
  assert.equal(result.data.email, "oselufortunatus@gmail.com");
  assert.deepEqual(result.data.service, ["website-development"]);
  assert.equal(result.data.newsletterOptIn, false);
  assert.equal(result.data.marketingConsent, false);
});

test("rejects a missing body", () => {
  const result = validateServiceRequest(undefined);
  assert.equal(result.valid, false);
  assert.ok(result.errors._);
});

test("rejects an empty service array", () => {
  const result = validateServiceRequest(basePayload({ service: [] }));
  assert.equal(result.valid, false);
  assert.ok(result.errors.service);
});

test("rejects an unknown service id", () => {
  const result = validateServiceRequest(basePayload({ service: ["not-real"] }));
  assert.equal(result.valid, false);
  assert.ok(result.errors.service);
});

test("rejects a blank name", () => {
  const result = validateServiceRequest(basePayload({ name: "   " }));
  assert.equal(result.valid, false);
  assert.ok(result.errors.name);
});

test("rejects a malformed email", () => {
  const result = validateServiceRequest(basePayload({ email: "not-an-email" }));
  assert.equal(result.valid, false);
  assert.ok(result.errors.email);
});

test("rejects a blank email", () => {
  const result = validateServiceRequest(basePayload({ email: "" }));
  assert.equal(result.valid, false);
  assert.ok(result.errors.email);
});

test("rejects missing budget / timeline / goals", () => {
  const result = validateServiceRequest(
    basePayload({ budget: "", timeline: "", goals: "" }),
  );
  assert.equal(result.valid, false);
  assert.ok(result.errors.budget);
  assert.ok(result.errors.timeline);
  assert.ok(result.errors.goals);
});

test("trims optional fields, defaults empty strings", () => {
  const result = validateServiceRequest(
    basePayload({ company: "  Acme  ", notes: undefined }),
  );
  assert.equal(result.valid, true);
  assert.equal(result.data.company, "Acme");
  assert.equal(result.data.notes, "");
});

test("coerces non-boolean consent flags to false", () => {
  const result = validateServiceRequest(
    basePayload({ newsletterOptIn: "yes", marketingConsent: 1 }),
  );
  assert.equal(result.valid, true);
  assert.equal(result.data.newsletterOptIn, false);
  assert.equal(result.data.marketingConsent, false);
});

test("accepts both consent flags independently", () => {
  const result = validateServiceRequest(
    basePayload({ newsletterOptIn: true, marketingConsent: true }),
  );
  assert.equal(result.valid, true);
  assert.equal(result.data.newsletterOptIn, true);
  assert.equal(result.data.marketingConsent, true);
});
