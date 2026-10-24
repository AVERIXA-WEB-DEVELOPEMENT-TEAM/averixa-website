// Privacy Policy content, written to the Nigeria Data Protection Act (NDPA) 2023
// and GDPR standard. Anything in [SQUARE BRACKETS] is a placeholder that still
// needs a real value; the page highlights them so they're easy to spot.
// Each block is a paragraph (string) or { list: [...] }.

export const privacyEmail = 'hello@averixadigital.com'

export const effectiveDate = 'October 2026'

export const privacySections = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    blocks: [
      'Averixa Digital ("we", "us") is a digital agency based in Nigeria. We build websites and help businesses with content, marketing and growth.',
      'We are the data controller for personal data collected through averixadigital.com. That means we decide how and why your data is used, and we are responsible for protecting it.',
      {
        list: [
          'Registered name: [REGISTERED COMPANY NAME]',
          'Registration number: [CAC REGISTRATION NUMBER]',
          'Address: [COMPANY ADDRESS]',
          `Email: ${privacyEmail}`,
        ],
      },
    ],
  },
  {
    id: 'what-we-collect',
    title: 'What data we collect',
    blocks: [
      'When you fill in our service request form, we collect:',
      {
        list: [
          'Your full name and email address',
          'Your company or brand name, if you give it',
          'The services you need, your budget range and timeline',
          'Your goals and anything else you choose to tell us',
          'Whether you want our monthly newsletter or occasional marketing emails',
        ],
      },
      'When you message us on WhatsApp or social media, we receive your name, phone number or profile, and your messages. Those platforms also process this data under their own privacy policies.',
      'When you visit the site, some technical data is processed automatically: your IP address, browser and device type, and the pages you request. This happens in our hosting provider’s server logs.',
      'We do not use analytics, advertising trackers or cookies. We do not ask for sensitive data such as health, religious or financial details, so please don’t include it in your messages.',
      'Our services are for businesses. We don’t knowingly collect personal data from anyone under 18.',
    ],
  },
  {
    id: 'why-we-collect-it',
    title: 'Why we collect it and our legal basis',
    blocks: [
      'We only use your data for the reasons below, and each one has a legal basis under the NDPA and GDPR.',
      {
        list: [
          'To reply to your request, prepare a proposal and send you a confirmation email. Legal basis: taking steps at your request before entering into a contract with you.',
          'To send our newsletter or marketing emails, only if you ticked the box for them. Legal basis: your consent, which you can withdraw at any time.',
          'To run, secure and fix problems with the website, which involves server logs. Legal basis: our legitimate interest in providing a working, secure website.',
          'To meet our legal obligations, such as keeping business records or responding to lawful requests from authorities. Legal basis: legal obligation.',
        ],
      },
      'We do not sell your data, and we do not make decisions about you by automated means alone.',
    ],
  },
  {
    id: 'how-long-we-keep-it',
    title: 'How long we keep it',
    blocks: [
      'We keep your data only for as long as we need it:',
      {
        list: [
          'Service requests and related emails: [RETENTION PERIOD FOR ENQUIRIES] after our last contact, unless you become a client.',
          'Client records: [RETENTION PERIOD FOR CLIENT RECORDS], or longer if the law requires it.',
          'Newsletter and marketing emails: until you unsubscribe or ask us to stop.',
          'Server logs: for the period our hosting provider keeps them, which is short and outside our control.',
        ],
      },
      'When we no longer need your data, we delete it.',
    ],
  },
  {
    id: 'who-we-share-it-with',
    title: 'Who we share it with',
    blocks: [
      'We share your data only with the service providers we need to run the site and reply to you. They may only use it to provide their service to us:',
      {
        list: [
          'Vercel, which hosts the website and processes your request when you submit the form.',
          'Resend, which delivers the emails our form sends.',
          '[EMAIL INBOX PROVIDER], which hosts the inbox where we receive your request.',
          'WhatsApp (Meta), if you choose to contact us there.',
        ],
      },
      'Some of these providers are based outside Nigeria, including in the United States. When your data is transferred abroad, we rely on the safeguards these providers offer, such as standard contractual clauses, so it is protected to the standard the NDPA and GDPR require.',
      'We may also share data if the law requires it, for example in response to a court order.',
    ],
  },
  {
    id: 'cookies-and-analytics',
    title: 'Cookies and analytics',
    blocks: [
      'This website does not set cookies and does not use analytics, advertising or tracking tools.',
      'Everything the site needs, including its fonts, is served from our own website. Your browser does not connect to Google or any other third party while you browse, unless you follow a link to another site such as WhatsApp or our social media pages.',
      'If we add analytics or other tools in future, we will update this policy and ask for your consent first where the law requires it.',
    ],
  },
  {
    id: 'data-security',
    title: 'Data security',
    blocks: [
      'The site is served over an encrypted (HTTPS) connection, form submissions are not stored on our website, and only the Averixa Digital team can access the requests we receive.',
      'No system is completely secure, but we take reasonable steps to protect your data. If a breach puts your rights at risk, we will report it to the Nigeria Data Protection Commission within 72 hours and tell you without undue delay where the law requires it.',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    blocks: [
      'Under the NDPA and GDPR, you have the right to:',
      {
        list: [
          'Access the personal data we hold about you and get a copy of it',
          'Correct data that is wrong or incomplete',
          'Ask us to delete your data',
          'Object to how we use your data, including for marketing at any time',
          'Ask us to restrict how we use your data',
          'Receive your data in a portable format',
          'Withdraw your consent at any time, without affecting anything we did before you withdrew it',
        ],
      },
      `To use any of these rights, email us at ${privacyEmail}. We may need to confirm your identity first. We aim to respond within one month.`,
      'If you are unhappy with how we handle your data, you can complain to the Nigeria Data Protection Commission (ndpc.gov.ng). If you are in the European Union, you can also complain to the data protection authority in your country. We would appreciate the chance to resolve your concern first, so please contact us.',
    ],
  },
  {
    id: 'contact-us',
    title: 'How to contact us',
    blocks: [
      'For any question about this policy or your data, contact us:',
      {
        list: [`Email: ${privacyEmail}`, 'Post: Averixa Digital, [COMPANY ADDRESS]'],
      },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    blocks: [
      'We may update this policy when our services, the law or the tools we use change. The date at the top of this page shows when it last changed. If a change significantly affects how we use your data, we will tell you by email where we have your address.',
    ],
  },
]
