import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "text",
      rows: 3,
    }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({
      name: "addressLine",
      title: "Address",
      type: "string",
      description: "Leave blank for telehealth-only practices.",
    }),
    defineField({
      name: "schedulingUrl",
      title: "Scheduling URL",
      type: "url",
      description:
        "Optional. Paste your full Calendly or Cal.com link (e.g. https://calendly.com/your-practice/consult or https://cal.com/your-practice/consult). The scheduler will embed directly on the contact page so visitors can book without leaving the site.",
    }),
    defineField({
      name: "hours",
      title: "Hours",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", type: "string", title: "Day(s)" },
            { name: "time", type: "string", title: "Time" },
          ],
          preview: { select: { title: "day", subtitle: "time" } },
        },
      ],
    }),

    // ── FAQ ──────────────────────────────────────────────
    // Standard on every ICC template starting with Cove: a client-editable
    // array of {question, answer} pairs, never hardcoded in the component.
    // Lives on the Contact page here (not Home) — see FAQSection.tsx.
    defineField({
      name: "faqHeading",
      title: "FAQ — heading",
      type: "string",
      initialValue: "Questions people usually have",
    }),
    defineField({
      name: "faqs",
      title: "FAQ — questions",
      description:
        "Shown at the bottom of the Contact page, right before someone reaches out. Edit freely — add, remove, or reorder.",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", type: "string", title: "Question" },
            { name: "answer", type: "text", rows: 4, title: "Answer" },
          ],
          preview: { select: { title: "question" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Contact Page" }) },
});
