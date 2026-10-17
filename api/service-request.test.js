// api/service-request.test.js
import { test } from "node:test";
import assert from "node:assert/strict";
import handler from "./service-request.js";

// A fake email service we control.
function makeFakeEmailService() {
  const sentEmails = [];
  return {
    sentEmails,
    deps: {
      sendEmail: async (opts) => {
        sentEmails.push(opts);
        return { id: "stub" };
      },
      getOwnerEmail: () => "oselufortunatus@gmail.com",
      getFromEmail: () => "onboarding@resend.dev",
    },
  };
}

function makeRes() {
  return {
    statusCode: 200,
    headers: {},
    body: undefined,
    setHeader(k, v) {
      this.headers[k] = v;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    },
  };
}

const goodPayload = {
  service: ["branding"],
  budget: "$1k – $5k",
  timeline: "1 Month",
  goals: "Rebrand.",
  name: "Jane Smith",
  email: "osfoceaquill@gmail.com",
  company: "",
  notes: "",
  newsletterOptIn: false,
  marketingConsent: false,
};

test("no opt-in → exactly 2 emails, 200", async () => {
  const { sentEmails, deps } = makeFakeEmailService();
  const res = makeRes();
  await handler({ method: "POST", body: goodPayload }, res, deps);
  assert.equal(res.statusCode, 200);
  assert.equal(sentEmails.length, 2);
  assert.equal(sentEmails[0].to, "oselufortunatus@gmail.com");
  assert.equal(sentEmails[1].to, "osfoceaquill@gmail.com");
});

test("newsletter opt-in → 3 emails, 200", async () => {
  const { sentEmails, deps } = makeFakeEmailService();
  const res = makeRes();
  await handler(
    { method: "POST", body: { ...goodPayload, newsletterOptIn: true } },
    res,
    deps,
  );
  assert.equal(res.statusCode, 200);
  assert.equal(sentEmails.length, 3);
  // The third email is the newsletter welcome.
  assert.match(sentEmails[2].subject, /Welcome/i);
});

test("marketing consent only → 3 emails, 200", async () => {
  const { sentEmails, deps } = makeFakeEmailService();
  const res = makeRes();
  await handler(
    { method: "POST", body: { ...goodPayload, marketingConsent: true } },
    res,
    deps,
  );
  assert.equal(res.statusCode, 200);
  assert.equal(sentEmails.length, 3);
});

test("both consents → still 3 emails (one newsletter, not two)", async () => {
  const { sentEmails, deps } = makeFakeEmailService();
  const res = makeRes();
  await handler(
    {
      method: "POST",
      body: { ...goodPayload, newsletterOptIn: true, marketingConsent: true },
    },
    res,
    deps,
  );
  assert.equal(res.statusCode, 200);
  assert.equal(sentEmails.length, 3);
});

test("bad payload → 400, no emails", async () => {
  const { sentEmails, deps } = makeFakeEmailService();
  const res = makeRes();
  await handler(
    { method: "POST", body: { ...goodPayload, email: "nope" } },
    res,
    deps,
  );
  assert.equal(res.statusCode, 400);
  assert.equal(sentEmails.length, 0);
});

test("GET → 405", async () => {
  const { sentEmails, deps } = makeFakeEmailService();
  const res = makeRes();
  await handler({ method: "GET", body: {} }, res, deps);
  assert.equal(res.statusCode, 405);
  assert.equal(sentEmails.length, 0);
});

test("company email failure → 502", async () => {
  const deps = {
    sendEmail: async () => {
      throw new Error("boom");
    },
    getOwnerEmail: () => "oselufortunatus@gmail.com",
    getFromEmail: () => "onboarding@resend.dev",
  };
  const res = makeRes();
  await handler({ method: "POST", body: goodPayload }, res, deps);
  assert.equal(res.statusCode, 502);
});

test("client email failure → still 200 (company already notified)", async () => {
  let call = 0;
  const deps = {
    sendEmail: async () => {
      call += 1;
      if (call === 2) throw new Error("client email failed");
      return { id: "stub" };
    },
    getOwnerEmail: () => "oselufortunatus@gmail.com",
    getFromEmail: () => "onboarding@resend.dev",
  };
  const res = makeRes();
  await handler({ method: "POST", body: goodPayload }, res, deps);
  assert.equal(res.statusCode, 200);
});
