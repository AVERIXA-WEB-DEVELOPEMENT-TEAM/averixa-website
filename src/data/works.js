// Portfolio content for the Portfolio page and the Selected works section on Home.
// `industry` is the category the filter pills use.
// `tags` are the services we delivered, using the titles from src/data/serviceRequest.js.
// `featured: true` puts a project in the Case studies section on Home.
// No invented numbers: only add a figure to `result` when the client has confirmed it.

export const categories = ['All', 'Education', 'E-commerce', 'Web apps', 'Web3', 'Websites', 'Content']

export const works = [
  // Education
  {
    initials: 'UC',
    name: 'UniClear Clearance Portal',
    industry: 'Education',
    tags: ['Website Development'],
    result: 'Clearance across five departments, fully paperless',
    description:
      'A clearance portal built for a university. Students submit one request, track approvals in real time and download a PDF certificate once cleared.',
    href: 'https://trinity-clearance-portal.vercel.app',
    featured: true,
  },
  {
    initials: 'EV',
    name: 'Campus E-Voting',
    industry: 'Education',
    tags: ['Website Development'],
    result: 'Elections with no paper ballots and no manual counting',
    description:
      "A secure voting platform built for a university's student elections. Students vote from any device and results are tallied automatically.",
    href: 'https://e-voting-web-app.vercel.app',
  },
  {
    initials: 'QS',
    name: 'QuickScan',
    industry: 'Education',
    tags: ['Website Development'],
    result: 'Attendance recorded in real time from one QR scan',
    description:
      'A QR attendance system. A lecturer generates a code, students scan it on their phones, and paper sign-in sheets disappear.',
    href: 'https://quickscan-zeta.vercel.app',
  },
  {
    initials: 'FF',
    name: 'FocusFlow',
    industry: 'Education',
    tags: ['Website Development'],
    result: 'Focus timer with streaks and study-hour analytics',
    description:
      'A study app for university students that pairs a distraction-free Pomodoro timer with weekly streaks and progress breakdowns.',
    href: 'https://focus-flow-navy-tau.vercel.app',
  },

  // E-commerce
  {
    initials: 'CB',
    name: 'ClareBags',
    industry: 'E-commerce',
    tags: ['Website Development'],
    result: 'Owner manages the collection without touching code',
    description:
      'A bespoke handbag store built from scratch, with an editorial storefront, a real cart and a password-protected admin panel.',
    href: 'https://clarebags1.vercel.app',
    featured: true,
  },
  {
    initials: 'AC',
    name: 'Amara & Co',
    industry: 'E-commerce',
    tags: ['Website Development'],
    result: 'A bespoke Shopify theme, not a stock template',
    description:
      'A custom Shopify storefront for a jewellery brand, with product pages, collections and cart shaped around the brand.',
    href: 'https://amara-co-xkd9y8gn.myshopify.com',
  },

  // Web apps
  {
    initials: 'EM',
    name: 'Event Management System',
    industry: 'Web apps',
    tags: ['Website Development'],
    result: 'Secure login, and users manage only their own events',
    description:
      'A full CRUD app for creating and managing events, with JWT authentication, a protected navbar and route guards.',
    href: 'https://frontend-peach-rho-82.vercel.app',
  },
  {
    initials: 'NC',
    name: 'Community Newsletter CMS',
    industry: 'Web apps',
    tags: ['Website Development'],
    result: 'Editors draft, organise and publish in one workflow',
    description:
      'A content-management system for community newsletters, with its own client and backend.',
    href: 'https://community-newsletter-cms-client.vercel.app',
  },
  {
    initials: 'WB',
    name: 'Workout Buddy',
    industry: 'Web apps',
    tags: ['Website Development'],
    result: 'Workouts, sets and history saved through a REST API',
    description: 'A full-stack fitness tracker where users log workouts and manage their training history.',
    href: 'https://mern-workout-app-five.vercel.app',
  },

  // Web3
  {
    initials: 'FB',
    name: 'Fresh Bounty',
    industry: 'Web3',
    tags: ['Website Development'],
    result: 'Contributors paid instantly, settled on-chain',
    description:
      'A Web3 bounties platform. Contributors connect a wallet, pick up bounties matched to their skills and get paid in crypto.',
    href: 'https://fresh-bounty.vercel.app',
    featured: true,
  },

  // Websites
  {
    initials: 'CL',
    name: 'Capstone Lab Website',
    industry: 'Websites',
    tags: ['Website Development'],
    result: 'Near-instant load times on a corporate marketing site',
    description: 'The marketing website for a data and technology consultancy, presenting the firm to prospective clients.',
    href: 'https://capstone-lab-website.vercel.app',
  },
  {
    initials: 'AM',
    name: 'Alma Mira Portfolio',
    industry: 'Websites',
    tags: ['Website Development'],
    result: 'Frontend, design and data work in one portfolio',
    description: 'A personal portfolio for a web developer and designer, with featured projects and contact details.',
    href: 'https://almamira-7b9672.netlify.app',
  },

  // Content
  {
    initials: 'SC',
    name: 'Averixa Sales and Content Scripts',
    industry: 'Content',
    tags: ['Content Creation', 'Business Development'],
    result: 'Clearer messaging across Averixa departments',
    description: 'Sales and content scripts for Averixa, covering research, scripting and hook development.',
  },
  {
    initials: 'GD',
    name: '30-Day Graphic Design Programme',
    industry: 'Content',
    tags: ['Branding', 'Content Creation'],
    result: 'A month-long visual design plan for brand visibility',
    description: "A 30-day graphic design instruction programme for Averixa's design team.",
  },
  {
    initials: 'YT',
    name: 'YouTube Script',
    industry: 'Content',
    tags: ['Content Creation'],
    result: 'Research-led script built around a strong hook',
    description: 'A YouTube video script covering research, hook development and storytelling.',
  },
]

export const featuredWorks = works.filter((work) => work.featured)
