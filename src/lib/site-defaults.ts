import type {
  AboutPage,
  Announcement,
  ContactPage,
  HomePage,
  PostListItem,
  RecentPost,
  ServicesPage,
  SiteSettings,
  Testimonial,
} from "@/sanity/types";

/**
 * COVE — Stillness & Settling.
 * Demo persona: Tidewater Therapy / Dana Okafor, LMFT (fictional) —
 * trauma-informed, somatic therapy in Port Townsend, WA. Mist palette
 * (seafoam-blue-gray), soft-edged Petrona serif + calm Karla body. Where
 * Haven is photography-led and Willow is line-art-led, Cove is built on
 * soft, blurred macro texture — nothing on the page is ever in sharp
 * focus. The signature mechanic (TideRipple) is ambient, external calm:
 * the space itself settling, not a breath the visitor is asked to match.
 */

export const defaultSiteSettings: SiteSettings = {
  practiceName: "Tidewater Therapy",
  tagline: "Trauma-informed, somatic therapy in a space built for stillness.",
  palette: "mist",
  fontPairing: "petrona",
  email: "hello@example.com",
  phone: "(555) 771-0439",
  addressLine: "214 Water St, Port Townsend, WA",
  socialLinks: [],
  footerText:
    "Dana Okafor, LMFT (WA #LF61042). Trauma-informed, somatic therapy for adults. This site is informational and not a substitute for professional care. In crisis? Call or text 988, anytime.",
  stickyCta: { label: "Reach out when you're ready", href: "/contact" },
};

export const defaultHomePage: HomePage = {
  heroEyebrow: "Tidewater Therapy · Port Townsend, WA",
  heroHeading: "Where the water settles.",
  heroSubhead:
    "I'm Dana — a trauma-informed, somatic therapist. We work at the pace your nervous system can actually keep, not the pace the calendar suggests. Nothing here needs to be explained all at once.",
  heroImage: {
    demoUrl:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=1320&fit=crop&q=80",
    alt: "Close ripples moving across dark water at dusk",
  },
  primaryCta: { label: "Reach out when you're ready", href: "/contact" },
  secondaryCta: { label: "How we might work together", href: "/services" },
  whatToExpectHeading: "Getting started, at a pace that stays manageable.",
  whatToExpectIntro:
    "No forms about your history before we've even met. Three unhurried steps, none of them a commitment.",
  whatToExpectSteps: [
    {
      icon: "〰️",
      title: "Reach out, however feels easiest",
      body:
        "Email, call, or use the contact form. You'll hear back within a few days — no forms about your history required yet.",
    },
    {
      icon: "🌫️",
      title: "A quiet first conversation",
      body:
        "A free 15-minute call to see whether this feels like a fit. No pressure either way, and no obligation to explain more than you want to.",
    },
    {
      icon: "🌊",
      title: "Begin at your own pace",
      body:
        "Weekly 50-minute sessions, in Port Townsend or by video. The pace and the plan both adjust as you do — nothing is fixed in advance.",
    },
  ],
  aboutTeaserHeading: "Hi — I'm Dana",
  aboutTeaserBody:
    "I'm a licensed marriage and family therapist working with trauma through the body as much as through talking. Ten years in, I still think the most useful thing I offer isn't a technique — it's pacing. Most people who've been through something hard have also, at some point, been rushed through processing it. My work is the opposite of that. We slow down until your system can actually catch up.",
  aboutTeaserImage: {
    demoUrl:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&h=1400&fit=crop&q=80",
    alt: "A quiet dock over a still, reflective lake",
  },
  pricingHeading: "Simple, honest pricing.",
  pricingIntro: "One flat rate, a clear insurance path, and no surprises before your first appointment.",
  sessionFee: "$165 per 50-minute session · Sliding scale available",
  insuranceNote:
    "Currently out-of-network. I provide a superbill for every session, which many PPO plans reimburse at 40–80% — one phone call to your insurer confirms your specific rate.",
  slidingScaleNote:
    "A handful of sliding-scale spots are held at any given time. Ask — no explanation needed, and the worst answer is 'not currently.'",
  showTrustStrip: true,
  trustStats: [
    { value: 10, suffix: " yrs", label: "in trauma-informed, somatic practice" },
    { value: 50, suffix: " min", label: "sessions — never rushed to fit a slot" },
    { value: 4, label: "sliding-scale spots held at any given time" },
    { value: 3, suffix: " days", label: "typical time to hear back, at most" },
  ],
};

export const defaultTestimonials: Testimonial[] = [
  {
    _id: "default-1",
    quote:
      "I'd tried therapy twice before and both times felt like being interviewed. This felt like being met instead. Six months in, my shoulders have genuinely come down from around my ears.",
    attribution: "R., 41",
    context: "Somatic work, ongoing",
    displayOrder: 1,
  },
  {
    _id: "default-2",
    quote:
      "Dana never once made me feel behind schedule. I needed four sessions before I said the actual thing I came in for, and not once did that feel like a problem.",
    attribution: "J., 29",
    context: "Trauma-informed therapy",
    displayOrder: 2,
  },
  {
    _id: "default-3",
    quote:
      "The grounding tools alone were worth it, but the bigger shift is quieter than that — I don't brace for the next thing the way I used to.",
    attribution: "M., 52",
    context: "Telehealth · nervous system work",
    displayOrder: 3,
  },
];

export const defaultAboutPage: AboutPage = {
  heading: "About Dana",
  intro:
    "I'm Dana Okafor, a licensed marriage and family therapist in Port Townsend, Washington. My work sits at the intersection of trauma-informed talk therapy and somatic, body-based practice — because a hard week doesn't only live in your thoughts, and it rarely resolves through thinking alone.",
  portrait: {
    demoUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1000&h=1200&fit=crop&q=80",
    alt: "Dana Okafor, LMFT",
  },
  body: [],
  credentials: [
    "M.A., Marriage & Family Therapy — Seattle University",
    "Licensed Marriage and Family Therapist (WA)",
    "10 years in practice",
    "Trained in Somatic Experiencing and EMDR",
    "Trauma-informed, nervous-system-focused approach",
    "Telehealth available across Washington state",
  ],
};

export const defaultServicesPage: ServicesPage = {
  heading: "Ways we can work together",
  intro:
    "Every approach here starts from the same place: the body keeps score, so the work has to include it. If you're not sure which of these fits, the free 15-minute call is built exactly for that question.",
  services: [
    {
      title: "Somatic Experiencing",
      description:
        "A body-based approach to releasing stored survival responses — the tightness, bracing, and hypervigilance that talking alone often can't reach. Gentle, gradual, and always at a pace your system can tolerate.",
      icon: "🌊",
    },
    {
      title: "Trauma-informed talk therapy",
      description:
        "Traditional conversation, paced deliberately: no requirement to recount painful events before you're ready, and constant attention to what's happening in your body as we talk, not just what you're saying.",
      icon: "🌫️",
    },
    {
      title: "EMDR",
      description:
        "Eye Movement Desensitization and Reprocessing, used to help specific memories lose their charge — useful for single hard events as well as longer patterns. We move at a pace you set, session to session.",
      icon: "〰️",
    },
    {
      title: "Nervous system regulation",
      description:
        "Practical, embodied tools for widening your window of tolerance — the range in which you can think clearly and respond instead of react. Skills you keep long after sessions end.",
      icon: "🫧",
    },
    {
      title: "Anxiety & hypervigilance",
      description:
        "For when your body stays on alert long after the danger has passed. We work on teaching your nervous system that the alarm can stand down, not just managing the symptoms it produces.",
      icon: "💧",
    },
    {
      title: "Life transitions",
      description:
        "Loss, relocation, career change, new caregiving — even welcome change can destabilize a nervous system. Support for finding steady footing again, without rushing the adjustment.",
      icon: "🪨",
    },
  ],
};

export const defaultContactPage: ContactPage = {
  heading: "Reach out when you're ready",
  intro:
    "Email or call, whichever feels easiest. There's no wrong way to start, and no information you're required to share yet.",
  email: "hello@example.com",
  phone: "(555) 771-0439",
  addressLine: "214 Water St, Port Townsend, WA",
  hours: [
    { day: "Tue – Thu", time: "9:00 am – 5:30 pm" },
    { day: "Fri", time: "9:00 am – 1:00 pm" },
  ],
  faqHeading: "Questions people usually have",
  // Empty on purpose. FAQ answers state a practice's own policies (insurance,
  // location, confidentiality), so they must come from the client -- a seeded
  // demo answer nearly shipped under a real therapist's name. Hidden-but-seeded
  // content still reaches the page payload, so there is none to seed.
  faqs: [],
};

// Demo blog content (4 unhurried posts) — see src/lib/demo-posts.ts
export { demoPostList as defaultPosts, demoRecentPosts as defaultRecentPosts } from "./demo-posts";

export const defaultAnnouncement: Announcement = {
  enabled: false,
  message: "",
  variant: "info",
};
