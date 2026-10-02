"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import type { WhatToExpectStep } from "@/sanity/types";

type Props = {
  heading?: string;
  intro?: string;
  steps?: WhatToExpectStep[];
};

export function WhatToExpect({ heading, intro, steps }: Props) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--color-accent-strong)]">
              Who we work with
            </p>
          </Reveal>
          {heading ? (
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-serif text-3xl leading-[1.15] text-[var(--color-foreground)] md:text-[2.4rem]">
                {heading}
              </h2>
            </Reveal>
          ) : null}
          {intro ? (
            <Reveal delay={0.16}>
              <p className="mt-5 text-lg leading-relaxed text-[var(--color-muted)]">
                {intro}
              </p>
            </Reveal>
          ) : null}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-7">
          {steps.map((step, i) => (
            <Reveal
              key={`${step.title ?? "step"}-${i}`}
              delay={0.15 + i * 0.12}
              distance={28}
            >
              <article className="mist-card group relative h-full p-7 transition-transform duration-500 hover:-translate-y-1">
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full text-2xl transition-transform duration-500 group-hover:scale-110"
                  style={{ background: "var(--color-accent-soft)" }}
                  aria-hidden
                >
                  {step.icon ?? "•"}
                </div>
                <p className="mt-5 text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--color-muted)]">
                  {/* PREVIEW BRANCH: this section lists who she works with,
                      not a sequence, so the step number is suppressed. */}
                </p>
                <h3 className="mt-2 font-serif text-xl leading-tight text-[var(--color-foreground)] md:text-[1.55rem]">
                  {step.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-muted)]">
                  {step.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
