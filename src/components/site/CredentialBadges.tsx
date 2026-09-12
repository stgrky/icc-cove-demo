import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SanityImg } from "@/components/SanityImg";
import type { SanityImageWithAlt } from "@/sanity/types";

/**
 * Certification and membership marks, centred on their own, the way practices
 * usually display them -- standing apart rather than tucked into a list.
 * Hides itself when there are none, so templates with no badges render exactly
 * as they did before this section existed.
 *
 * Upload these with transparent backgrounds. A badge saved as a JPEG carries a
 * baked-in white square that reads as a white box against any tinted section.
 */
export function CredentialBadges({
  badges,
}: {
  badges?: SanityImageWithAlt[];
}) {
  if (!badges?.length) return null;

  // No vertical padding of its own: the credentials card above tightens its
  // bottom padding when badges are present, and the section below carries its
  // own top padding. Adding a third helping here strands the badge in the
  // middle of a large empty band.
  return (
    <section className="bg-[var(--color-background)]">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {badges.map((badge, i) => (
              <SanityImg
                key={badge.asset?._ref ?? i}
                image={badge}
                alt={badge.alt ?? "Credential badge"}
                width={480}
                height={480}
                fit="max"
                className="h-28 w-auto object-contain md:h-32"
                sizes="240px"
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
