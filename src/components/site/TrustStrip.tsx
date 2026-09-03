"use client";

import NumberFlow from "@number-flow/react";
import { useInView } from "framer-motion";
import { useRef } from "react";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import type { HomePage } from "@/sanity/types";

/**
 * COVE — the same quiet-numbers idea as Anchor's trust strip (plain
 * figures that answer "experienced? available? affordable?"), rehoused in
 * soft glass instead of a hard-bordered poster card.
 */
export function TrustStrip({ home }: { home: HomePage }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const stats = home.trustStats ?? [];
  if (stats.length === 0) return null;

  return (
    <section className="border-b border-[var(--color-subtle)]/60 bg-[var(--color-surface)] py-14 md:py-16">
      <Container>
        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label ?? i} delay={0.05 * i} className="h-full">
              <div className="mist-card h-full p-6 text-center lg:text-left">
                <p className="font-serif text-4xl font-medium text-[var(--color-foreground)] md:text-[2.6rem]">
                  <NumberFlow
                    value={inView ? stat.value ?? 0 : 0}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    transformTiming={{ duration: 800, easing: "ease-out" }}
                  />
                </p>
                <p className="mt-1.5 text-sm font-semibold leading-snug text-[var(--color-muted)]">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
