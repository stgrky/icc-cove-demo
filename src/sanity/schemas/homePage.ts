import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    // ── Hero ─────────────────────────────────────────────
    defineField({
      name: "heroEyebrow",
      title: "Hero eyebrow",
      description:
        "Small label above the headline (e.g. 'Therapy in Austin' or 'Now accepting new clients'). Optional.",
      type: "string",
    }),
    defineField({
      name: "heroHeading",
      title: "Hero heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSubhead",
      title: "Hero subhead",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      description:
        "Sits behind the tide-ripple animation, heavily blurred by design — any water, stone, or light photo works well since fine detail won't be visible. Leave blank to fall back to a plain soft wash.",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineField({
      name: "primaryCta",
      title: "Primary CTA",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "href", type: "string", title: "Link" },
      ],
    }),
    defineField({
      name: "secondaryCta",
      title: "Secondary CTA",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "href", type: "string", title: "Link" },
      ],
    }),

    // ── What to expect ───────────────────────────────────
    defineField({
      name: "whatToExpectHeading",
      title: "What to expect — heading",
      type: "string",
    }),
    defineField({
      name: "whatToExpectIntro",
      title: "What to expect — intro",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "whatToExpectSteps",
      title: "What to expect — steps",
      description:
        "Three short cards walking a prospective client through what happens. Keep each body to a sentence or two.",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "body", type: "text", rows: 3, title: "Body" },
            {
              name: "icon",
              type: "string",
              title: "Icon (emoji)",
              description: "A single emoji or short symbol.",
            },
          ],
          preview: {
            select: { title: "title", subtitle: "body" },
          },
        },
      ],
      validation: (rule) => rule.max(4),
    }),

    // ── About teaser ─────────────────────────────────────
    defineField({
      name: "aboutTeaserHeading",
      title: "About teaser heading",
      type: "string",
    }),
    defineField({
      name: "aboutTeaserBody",
      title: "About teaser body",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "aboutTeaserImage",
      title: "About teaser image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),

    // ── Pricing & insurance ──────────────────────────────
    defineField({
      name: "pricingHeading",
      title: "Pricing & insurance — heading",
      type: "string",
    }),
    defineField({
      name: "pricingIntro",
      title: "Pricing & insurance — intro",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "sessionFee",
      title: "Session fee",
      description: "e.g. '$175 per 50-min session'",
      type: "string",
    }),
    defineField({
      name: "insuranceNote",
      title: "Insurance note",
      description:
        "A sentence or two on insurance accepted, out-of-network reimbursement, etc.",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "slidingScaleNote",
      title: "Sliding scale note",
      description: "A short statement about sliding scale availability.",
      type: "text",
      rows: 2,
    }),

    // ── Trust strip ──────────────────────────────────────
    defineField({
      name: "showTrustStrip",
      title: "Show the trust strip (stats)",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "trustStats",
      title: "Trust stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "number", title: "Number" },
            { name: "prefix", type: "string", title: "Prefix (e.g. '$')" },
            { name: "suffix", type: "string", title: "Suffix (e.g. ' yrs')" },
            { name: "label", type: "string", title: "Label" },
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Home Page" }) },
});
