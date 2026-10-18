"use client";

import { Container } from "@/components/Container";
import { Float } from "@/components/motion/Float";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Reveal } from "@/components/motion/Reveal";
import { WordReveal } from "@/components/motion/WordReveal";
import { SanityImg } from "@/components/SanityImg";
import type { HomePage } from "@/sanity/types";

import { TideRipple } from "./TideRipple";

type Props = {
  home: HomePage;
};

/**
 * COVE structural signature — the tide hero. Where Haven's hero is a
 * full-bleed sharp photo and Willow's is generous negative space around a
 * line-art sprig, Cove opens on a full-bleed photograph of still water with
 * TideRipple settling over it and the type sitting directly on the picture.
 *
 * Two earlier versions of this: a contained panel beside the copy, and before
 * that the same photograph blurred to abstraction under a heavy wash. The
 * blur made it read as an unloaded placeholder; the panel made it read as a
 * product screenshot. Edge to edge is the only one of the three where the
 * water is the page rather than an illustration next to it.
 *
 * The scrim is weighted left because the type sets left. It has to earn
 * contrast over open water at any crop, so it is deliberately stronger than
 * it looks necessary on this particular image — a client will replace it.
 */
export function CoveHero({ home }: Props) {
  const hasImage = Boolean(home.heroImage?.asset || home.heroImage?.demoUrl);

  return (
    <section className="relative isolate flex min-h-[clamp(34rem,78svh,46rem)] items-center overflow-hidden bg-[var(--color-background)]">
      {hasImage ? (
        <div aria-hidden className="absolute inset-0 -z-10">
          <SanityImg
            image={home.heroImage}
            alt=""
            width={2400}
            height={1400}
            priority
            className="h-full w-full object-cover"
            sizes="100vw"
          />
          {/* Left-weighted scrim for the type, plus a soft lift at the foot so
              the section melts into the page rather than stopping on a line. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, color-mix(in srgb, var(--color-background) 92%, transparent) 0%, color-mix(in srgb, var(--color-background) 72%, transparent) 42%, color-mix(in srgb, var(--color-background) 18%, transparent) 78%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-32"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--color-background))",
            }}
          />
          <div className="absolute inset-y-0 right-[8%] hidden items-center md:flex">
            <Float duration={11} distance={6}>
              <TideRipple size={260} />
            </Float>
          </div>
        </div>
      ) : (
        <div aria-hidden className="water-glow absolute inset-0 -z-10" />
      )}

      <Container className="py-24 md:py-32">
        <div className="max-w-2xl">
          {home.heroEyebrow ? (
            <Reveal immediate delay={0.05} distance={12} duration={0.7}>
              <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--color-accent-strong)]">
                {home.heroEyebrow}
              </p>
            </Reveal>
          ) : null}

          <h1 className="mt-5 font-serif text-4xl leading-[1.15] tracking-tight text-[var(--color-foreground)] md:text-[3.4rem]">
            <WordReveal text={home.heroHeading ?? ""} />
          </h1>

          {home.heroSubhead ? (
            <Reveal immediate delay={0.4} distance={18} duration={0.9}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
                {home.heroSubhead}
              </p>
            </Reveal>
          ) : null}

          <Reveal immediate delay={0.6} distance={14} duration={0.8}>
            <div className="mt-10 flex flex-wrap gap-4">
              {home.primaryCta?.label ? (
                <MagneticButton
                  href={home.primaryCta.href ?? "/contact"}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-strong)]"
                >
                  {home.primaryCta.label}
                </MagneticButton>
              ) : null}
              {home.secondaryCta?.label ? (
                <a
                  href={home.secondaryCta.href ?? "/services"}
                  className="inline-flex items-center rounded-full border border-[var(--color-subtle)] bg-[var(--color-surface)]/80 px-7 py-3.5 text-sm font-semibold text-[var(--color-foreground)] backdrop-blur transition-colors hover:border-[var(--color-accent)]"
                >
                  {home.secondaryCta.label}
                </a>
              ) : null}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
