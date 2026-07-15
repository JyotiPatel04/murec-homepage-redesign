
import {
  ShieldCheck,
  Leaf,
  Compass,
  Handshake,
  HeartHandshake,
  Gem,
  Eye,
  Sparkles,
} from 'lucide-react';

export const nav = {
  brandName: 'MUREC',
  links: [
    { label: 'Legacy', href: '#legacy' },
    { label: 'Why MUREC', href: '#why-murec' },
    { label: 'Forest Walk', href: '#collection' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: { label: 'Enquire Now', href: '#contact' },
};

export const hero = {
  eyebrow: 'Madhusudan Urban Real Estate Collection',
  headlineLines: ['Live Rare.', 'Live Rooted.'],
  subheadline: 'A Sanctuary Shaped by Landscape',
  description:
    'Seven decades of legacy, reimagined as a living forest ecosystem on the edge of Delhi NCR.',
  primaryCta: { label: 'Explore Forest Walk', href: '#collection' },
  secondaryCta: { label: 'Enquire Now', href: '#contact' },
};

export const introduction = {
  eyebrow: 'Who We Are',
  title: 'Building With Intent, For Seven Decades',
  body: "MUREC — the Madhusudan Urban Real Estate Collection — carries forward 78+ years of the Madhusudan Group's legacy into a new era of urban living. Every project is guided by one oath: quality before profit, trust before everything.",
};

export const legacy = {
  eyebrow: 'Our Legacy',
  title: 'The Legacy, Beyond Compare',
  body: 'For over seven decades, we stood for perseverance, integrity, and nation-building through enterprise. Every step was guided by one oath: quality before profit, trust before everything.',
  statValue: '78+',
  statLabel: 'Years of Legacy',
  cta: { label: 'See Why MUREC', href: '#why-murec' },
};

export const whyMurec = {
  eyebrow: 'Why MUREC',
  title: 'Reasons Rooted in Seven Decades',
  body: 'What sets a MUREC address apart is not a single feature — it is the discipline behind every decision.',
  items: [
    {
      icon: ShieldCheck,
      title: 'Seven Decades of Trust',
      desc: "78+ years of the Madhusudan Group's legacy, guided by one oath — quality before profit, trust before everything.",
    },
    {
      icon: Leaf,
      title: 'IGBC-Certified Sustainability',
      desc: 'The first MUREC collection is envisioned to align with IGBC certification standards — efficient resource planning and healthier living, built in from day one.',
    },
    {
      icon: Compass,
      title: 'Design Led by Industry Leaders',
      desc: 'Architectural vision by Goonmeet Ji, interiors by Bobby Mukherjee — a collaboration shaping a landmark of enduring character.',
    },
    {
      icon: Handshake,
      title: 'Transparent, Quality-First Process',
      desc: 'Every decision is shaped by trust, quality delivery, transparency, and innovation — never by shortcuts.',
    },
  ],
};

export const featuredCollection = {
  eyebrow: 'The MUREC Collection',
  title: 'Forest Walk, Dasna',
  subtitle: 'Live Rare. Live Rooted.',
  intro:
    'Forest Walk is a premium gated villa community envisioned as a living forest ecosystem, not just a plotted development. Designed around natural mounds, cascading water features, shaded trails, and immersive green corridors, it offers a rare balance between connectivity and calm. Set right on NH-24 at the Eastern Peripheral Expressway, with only 97 exclusive villas on independent plots, Forest Walk blends privacy, sustainability, and refined design into one cohesive living experience.',
  cta: { label: 'Enquire Now', href: '#contact' },
  rows: [
    {
      tag: '97 Exclusive Villas',
      title: 'Limited Residences. Infinite Privacy.',
      body: 'Designed at an intentional scale, Forest Walk offers rare breathing room in a world of excess density — only 97 exclusive villas, each on an independent plot with a private lawn.',
      imageKey: 'villas',
    },
    {
      tag: 'Masterplan',
      title: 'A Masterplan That Flows Like a Forest',
      body: 'Forest Walk is choreographed through three immersive zones — The Hidden Forest, The Water Miracle, and The Street Forest — layering greens, water, and movement into one fluid ecosystem.',
      imageKey: 'masterplan',
    },
    {
      tag: 'Amenities',
      title: 'Designed for Ritual, Reflection & Recreation',
      body: 'Curated lifestyle spaces nurture body, mind, and community — from multi-level stepped water bodies to shaded forest trails and green pockets throughout.',
      imageKey: 'wellness',
    },
  ],
  connectivity: {
    title: 'From Delhi to Forest Walk. A Straight Story.',
    items: [
      'Direct highway entry without any service lanes or detours',
      '30 minutes from Akshardham',
      'Seamless connectivity to Noida, Meerut & Indirapuram',
      'Landmark visibility on NH-24',
    ],
  },
};

export const philosophy = {
  eyebrow: 'Design Philosophy',
  title: 'Living By Principles',
  body: 'MUREC is guided by values that shape every decision — building trust, delivering quality, practicing transparency, and embracing innovation as the foundation of everything we create.',
  values: [
    {
      icon: HeartHandshake,
      title: 'Trust',
      desc: 'The foundation of every relationship we build — with residents, partners, and communities.',
    },
    {
      icon: Gem,
      title: 'Quality',
      desc: 'Quality before profit — an oath honored across seven decades of building.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      desc: 'Open, honest processes at every stage, from planning to possession.',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      desc: 'Embracing new ideas in sustainability, design, and community living.',
    },
  ],
};

export const stats = [
  { value: '78+', label: 'Years of Legacy' },
  { value: '97', label: 'Exclusive Villas at Forest Walk' },
  { value: 'IGBC', label: 'Certified Design Standards' },
  { value: '9+', label: 'Industry Associations & Partners' },
];

export const partners = {
  eyebrow: 'Our Associations',
  title: 'Trusted By, Built With',
  testimonialsTitle: 'From Our Partners',
  testimonials: [
    {
      name: 'Malchand',
      role: 'Scale Modeling',
      photoKey: 'malchand',
      quote:
        'The scale model for Murec will serve as a tangible representation of the proposed development.',
    },
    {
      name: 'Bobby Mukherrji',
      role: 'Interior Design',
      photoKey: 'bobbyMukherrji',
      quote:
        "We are engaged to conceptualize the interiors for Murec's clubhouse and tower lobbies, with a focus on refined luxury and strong spatial identity.",
    },
    {
      name: 'Goonmeet Ji',
      role: 'Architectural Vision',
      photoKey: 'goonmeetJi',
      quote:
        'We are engaged to sculpt the architectural vision for Murec as a contemporary residential landmark — an address conceived for refined urban living, where design elegance is thoughtfully interwoven with functional planning.',
    },
    {
      name: 'Shivam Patodia',
      role: 'Brand Strategy, Propacity',
      photoKey: 'shivamPatodia',
      quote:
        'Propacity is proud to partner with MUREC as its mandate-led growth partner. From brand launch to project marketing and consulting enablement, the collaboration reflects strategic thinking and a shared vision.',
    },
  ],
};

export const contact = {
  eyebrow: 'Get in Touch',
  title: 'Looking to Collaborate, Invest, or Simply Know More?',
  body: "Reach out and let's connect.",
  cta: { label: 'Contact Us', href: 'mailto:info@murec.com' },
  address: 'Madhusudan, 2nd Floor, Riana Towers, 51–52, Noida Sector 136, Uttar Pradesh – 201301',
  email: 'info@murec.com',
  phone: '+91 97177 73229',
  phoneHref: 'tel:+919717773229',
};

export const footer = {
  disclaimer:
    'This website is purely conceptual and not a legal document. All layouts, specifications, amenities, and visuals are subject to change as may be decided by MUREC or the competent authority. No information herein shall be construed as an offer, solicitation, or invitation to purchase. Interested parties are requested to verify all details, including approvals, specifications, and prices, directly with MUREC before making any commitments.',
  copyright: `Copyright © ${new Date().getFullYear()} MUREC. All rights reserved.`,
};
