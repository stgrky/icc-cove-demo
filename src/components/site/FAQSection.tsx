"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { Container } from "@/components/Container";
import { EASE_EDITORIAL } from "@/components/motion/easings";
import { Reveal } from "@/components/motion/Reveal";
import type { FaqItem } from "@/sanity/types";

type Props = {
  heading?: string;
  faqs?: FaqItem[];
  /** Eyebrow label above the heading. Defaults to "FAQ". */
  eyebrow?: string;
};

/**
 * FAQ — standard section going forward on every ICC template, starting
 * with Cove (per product decision, 2026-09). Deliberately page-agnostic:
 * takes plain `heading` + `faqs` props rather than a whole page/document
 * type, so it can be dropped onto any page's Sanity schema (Contact here;
 * Services or Home elsewhere) without the component itself caring where
 * the data comes from. Copy this file + the {question, answer} array
 * pattern in schemas/*.ts into the next template — nothing here is
 * Cove-specific except the visual treatment.
 *
 * Cove's treatment: soft glass panels (.mist-card), no ink borders or
 * offset shadows (contrast Anchor's FaqAccordion, which this supersedes
 * for new builds).
 */
export function FAQSection({ heading, faqs, eyebrow = "Questions people usually have" }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();
  const items = faqs ?? [];
  if (items.length === 0) return null;

  return (
    <section className="bg-[var(--color-background)] py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
              {eyebrow}
            </p>
          </Reveal>
          {heading ? (
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-serif text-3xl leading-[1.15] text-[var(--color-foreground)] md:text-[2.4rem]">
                {heading}
              </h2>
            </Reveal>
          ) : null}

          <div className="mt-10 space-y-3">
            {items.map((faq, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={faq.question ?? i} delay={0.05 * i}>
                  <div className="mist-card overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-7 py-5 text-left"
                    >
                      <span className="font-serif text-lg text-[var(--color-foreground)]">
                        {faq.question}
                      </span>
                      <motion.span
                        aria-hidden
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.4, ease: EASE_EDITORIAL }}
                        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-lg text-[var(--color-accent-strong)]"
                        style={{ background: "var(--color-accent-soft)" }}
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          key="body"
                          initial={reduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                          animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                          exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
                        >
                          <p className="px-7 pb-6 text-[15px] leading-relaxed text-[var(--color-muted)]">
                            {faq.answer}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
