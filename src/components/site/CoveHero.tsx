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
 * line-art sprig, Cove's right panel is a photograph of still water with
 * TideRipple's concentric rings settling at its centre.
 *
 * It used to be blurred to abstraction — `blur-2xl scale-125` plus a tint
 * wash, so that nothing was ever in focus. The intent was atmosphere; the
 * effect was a gradient blob that read as an unloaded placeholder, and it
 * was the main reason this layout felt like a SaaS landing page rather than
 * a therapy practice. The softness now comes from a light blur, the Float
 * drift and the wash — not from hiding the picture.
 * The whole panel drifts a few px on Float — nothing here snaps or holds
 * a hard edge.
 */
export function CoveHero({ home }: Props) {
  const hasImage = Boolean(home.heroImage?.asset || home.heroImage?.demoUrl);

  return (
    <section className="relative overflow-hidden bg-[var(--color-background)]">
      <Container className="grid gap-14 py-20 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-12 md:py-28">
        <div>
          {home.heroEyebrow ? (
            <Reveal delay={0.05} distance={12} duration={0.7}>
              <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--color-accent-strong)]">
                {home.heroEyebrow}
              </p>
            </Reveal>
          ) : null}

          <h1 className="mt-5 font-serif text-4xl leading-[1.15] tracking-tight text-[var(--color-foreground)] md:text-[3.3rem]">
            <WordReveal text={home.heroHeading ?? ""} />
          </h1>

          {home.heroSubhead ? (
            <Reveal delay={0.4} distance={18} duration={0.9}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
                {home.heroSubhead}
              </p>
            </Reveal>
          ) : null}

          <Reveal delay={0.6} distance={14} duration={0.8}>
            <div className="mt-10 flex flex-wrap gap-4">
              {home.primaryCta?.label ? (
                <MagneticButton
                  href={home.primaryCta.href ?? "/contact"}
                  className="mist-btn inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-medium text-white"
                >
                  {home.primaryCta.label}
                  <span aria-hidden>→</span>
                </MagneticButton>
              ) : null}
              {home.secondaryCta?.label ? (
                <MagneticButton
                  href={home.secondaryCta.href ?? "/about"}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-subtle)] bg-[var(--color-surface)]/70 px-7 py-3.5 text-sm font-medium text-[var(--color-foreground)] backdrop-blur-sm transition hover:border-[var(--color-accent)]"
                >
                  {home.secondaryCta.label}
                </MagneticButton>
              ) : null}
            </div>
          </Reveal>
        </div>

        {/* Still decorative rather than informational, and still hidden below
            md: on a phone it cost a screenful of scrolling before the reader
            reached anything useful. */}
        <div className="relative hidden md:block">
          <Float duration={11} distance={6}>
            <div className="relative aspect-[10/11] w-full overflow-hidden rounded-[2.5rem]">
              {hasImage ? (
                <SanityImg
                  image={home.heroImage}
                  alt=""
                  width={1100}
                  height={1210}
                  priority
                  className="h-full w-full scale-[1.04] object-cover blur-[1.5px] saturate-[1.05]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              ) : (
                <div className="water-glow h-full w-full" style={{ background: "var(--color-accent-soft)" }} />
              )}
              {/* Tint wash — ties the photograph to the palette and keeps
                  the ripple legible over it. Lightened along with the blur;
                  at its old strength it was doing most of the hiding. */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, color-mix(in srgb, var(--color-background) 26%, transparent), color-mix(in srgb, var(--color-accent-soft) 22%, transparent))",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <TideRipple size={230} />
              </div>
            </div>
          </Float>
        </div>
      </Container>
    </section>
  );
}
