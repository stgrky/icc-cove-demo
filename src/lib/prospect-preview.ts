import type {
  ContactPage,
  HomePage,
  ServicesPage,
  SiteSettings,
  Testimonial,
} from "@/sanity/types";

/**
 * SALES PREVIEW ONLY — branch `preview/open-heart-counseling`.
 *
 * A homepage mockup for a prospect (Open Heart Counseling of Austin PLLC),
 * shown on Cove to help her picture her own practice in it. Not a client
 * build, and never merged to master.
 *
 * Why a file instead of Sanity: Cove's demo reads the shared Cove dataset,
 * and writing a prospect's content there would change the live demo every
 * other prospect sees. Nothing in this preview touches Sanity.
 *
 * Every line of copy below is HER OWN, taken from openheartcounselingatx.com
 * and only shortened to fit Cove's sections. Nothing is invented: no fees, no
 * availability, no credentials she hasn't published. The two places her site
 * has nothing to lift from — a hero headline and a closing line — reuse
 * sentences she wrote elsewhere on the same page rather than new copy.
 */

const CONTACT_URL = "https://www.openheartcounselingatx.com/request-services.html";

export const prospectSettings: SiteSettings = {
  practiceName: "Open Heart Counseling of Austin",
  tagline: "Therapeutic services in Southwest Austin and online.",
  // Her brand teal, added to the palette on this branch only.
  palette: "openheart",
  fontPairing: "petrona",
  email: "hello@openheartcounselingatx.com",
  phone: "(512) 348-8976",
  addressLine: "8101 State Hwy 71, Austin, TX 78735",
  socialLinks: [],
  footerText:
    "Open Heart Counseling of Austin PLLC · Lacey Castilleja Fisher, LPC-S, RPT-S, PMH-C, RST-C/T. If this is a mental health emergency please call 988 or go to the nearest emergency room.",
  stickyCta: { label: "Request services", href: CONTACT_URL },
};

export const prospectHome: HomePage = {
  heroEyebrow: "Southwest Austin / Oak Hill · In person & telehealth",
  // Her own page heading, shortened from "THERAPEUTIC SERVICES AT OPEN HEART
  // COUNSELING OF AUSTIN".
  heroHeading: "Therapeutic services at Open Heart Counseling.",
  // Verbatim from her grief and perinatal sections, joined.
  heroSubhead:
    "Trauma, perinatal mental health, grief and loss, teens and families. I will listen open-heartedly as you talk, as many times as you need. I am here to sit with you through this journey.",
  heroImage: {
    demoUrl:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=1320&fit=crop&q=80",
    alt: "Close ripples moving across dark water at dusk",
  },
  primaryCta: { label: "Request services", href: CONTACT_URL },
  secondaryCta: { label: "Meet the team", href: CONTACT_URL },

  whatToExpectHeading: "Who we work with.",
  whatToExpectIntro:
    "All of our services are for anyBODY that identifies as a parent — and for teens, families, and the providers who care for everyone else.",
  whatToExpectSteps: [
    {
      icon: "🌊",
      title: "Trauma survivors",
      body:
        "Lacey specializes in this area and each of her associates are trained by Lacey in this area as well.",
    },
    {
      icon: "🌫️",
      title: "Teens, ages 15+, and their families",
      body:
        "They can come as individuals or as a family, and sandtray and expressive arts can be included.",
    },
    {
      icon: "〰️",
      title: "Therapists and first responders",
      body:
        "As mental health and medical professionals, we have increased risk of developing vicarious or secondary trauma. Please reach out to share your story.",
    },
  ],

  aboutTeaserHeading: "Open Heart Counseling Collective",
  aboutTeaserBody:
    "Founded by Lacey Castilleja Fisher, LPC-S, RPT-S, PMH-C, RST-C/T, with a team of supervised associates. Loss comes in many forms and each person's grieving process is different. Your grief process is unique and personal and you do not have to compare your loss to others' loss. It's okay if you go back and forth, up and down, inside out or in circles.",
  aboutTeaserImage: {
    demoUrl:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&h=1400&fit=crop&q=80",
    alt: "A quiet dock over a still, reflective lake",
  },

  // Her site publishes no fees, so the pricing block stays off rather than
  // inventing a number she would then have to correct.
  pricingHeading: undefined,
  pricingIntro: undefined,
  sessionFee: undefined,
  insuranceNote: undefined,
  slidingScaleNote: undefined,

  // Off: every stat Cove ships is a number about the practice, and we have
  // none of hers that are published.
  showTrustStrip: false,
  trustStats: [],
};

export const prospectServices: ServicesPage = {
  heading: "Therapeutic services",
  intro:
    "Areas we provide counseling for, in person in Southwest Austin and by telehealth across Texas.",
  services: [
    {
      title: "For trauma survivors",
      description:
        "Traumatic experiences can happen to anyone at any point in their lives. Even if a traumatic event happened earlier in your life, you can experience negative reminders, memories, emotions and other stress during various times in your life.",
      icon: "🌊",
    },
    {
      title: "Perinatal mental health",
      description:
        "Adjusting to parenting a new baby, whether it's your first or fourth, takes time. If you are experiencing symptoms that are not familiar to you, are excessive, or are interfering with your typical functioning, please reach out to talk.",
      icon: "🫧",
    },
    {
      title: "Grief & loss",
      description:
        "Fertility struggles, pregnancy loss, newborn and infant loss, stillbirth, pregnancy after loss, termination for medical reasons, pet loss, and traumatic or complicated grief.",
      icon: "💧",
    },
    {
      title: "Therapy for therapists",
      description:
        "Help for the helper: vicarious and secondary traumatic stress, compassion fatigue and burnout, counselor identity, imposter syndrome, and countertransference.",
      icon: "〰️",
    },
    {
      title: "Teens & families",
      description:
        "Anxiety, depression, grief and loss, body image, adoption and foster care, parent coaching, play therapy, sandtray therapy, and affirming care for trans and non-binary youth.",
      icon: "🌫️",
    },
    {
      title: "Couples, families & groups",
      description:
        "Couples and family counseling, postpartum couples counseling, poly-informed couples therapy, and support groups including the Ever Mother Support Circle.",
      icon: "🪨",
    },
  ],
};

export const prospectContact: ContactPage = {
  heading: "Request services",
  intro:
    "Southwest Austin / Oak Hill, and telehealth across Texas. If this is a mental health emergency please call 988 or go to the nearest emergency room.",
  email: "hello@openheartcounselingatx.com",
  phone: "(512) 348-8976",
  addressLine: "8101 State Hwy 71, Austin, TX 78735",
  hours: [],
  faqHeading: undefined,
  faqs: [],
};

// Cove's homepage renders testimonials; she publishes none, and inventing a
// client quote for a therapy practice is not a thing we do even in a mockup.
export const prospectTestimonials: Testimonial[] = [];

export const PROSPECT_CONTACT_URL = CONTACT_URL;
