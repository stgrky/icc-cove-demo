import { Container } from "@/components/Container";
import { SanityImg } from "@/components/SanityImg";
import { Reveal } from "@/components/motion/Reveal";
import type { SanityImageWithAlt } from "@/sanity/types";

type Props = {
  image?: SanityImageWithAlt;
  statement?: string;
  attribution?: string;
};

/**
 * A full-bleed photograph with one line of type over it.
 *
 * Cove ran ten white cards on a pale tint between the hero and the about
 * teaser — a stat strip, three modality cards, three step cards — with no
 * photography anywhere in 4,400px. Individually each section is fine;
 * stacked, they read as a B2B product page rather than a therapy practice.
 *
 * This is the interruption: edge to edge, no card, no border, one sentence.
 * It is the only place on the page where the image is the content rather
 * than decoration beside it, which is what makes the sections either side of
 * it feel like deliberate choices instead of a single repeating pattern.
 *
 * Hidden entirely without a photograph, so a client who has none keeps the
 * page they have rather than getting a band of empty colour.
 */
export function StillwaterBand({ image, statement, attribution }: Props) {
  if (!image?.asset || !statement) return null;

  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative min-h-[26rem] md:min-h-[32rem]">
        <SanityImg
          image={image}
          alt={image.alt ?? ""}
          width={2200}
          height={1100}
          className="absolute inset-0 h-full w-full object-cover"
          sizes="100vw"
        />
        {/* Two scrims rather than one: a flat tint would grey the water out,
            while a gradient weighted to the bottom keeps the surface bright
            where the light is and earns contrast only where the type sits. */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in srgb, var(--color-foreground) 18%, transparent) 0%, color-mix(in srgb, var(--color-foreground) 55%, transparent) 100%)",
          }}
        />
        <div className="relative flex min-h-[26rem] items-end md:min-h-[32rem]">
          <Container className="py-14 md:py-20">
            <Reveal distance={18} duration={1.1}>
              <blockquote className="max-w-3xl font-serif text-[clamp(1.5rem,3.2vw,2.5rem)] leading-[1.3] text-white [text-wrap:balance]">
                {statement}
              </blockquote>
            </Reveal>
            {attribution ? (
              <Reveal delay={0.12} distance={12}>
                <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/75">
                  {attribution}
                </p>
              </Reveal>
            ) : null}
          </Container>
        </div>
      </div>
    </section>
  );
}
