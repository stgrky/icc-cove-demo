import { Container } from "@/components/Container";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Reveal } from "@/components/motion/Reveal";
import type { ContactPage } from "@/sanity/types";

type Props = {
  contact: ContactPage;
};

/**
 * COVE — the booking band. Still unmissable (a full-width band, every
 * contact method one tap away), but the surface is a soft accent wash
 * with a translucent card floating on top, not Anchor's flat solid-color
 * block with a hard poster button.
 */
export function BookingBand({ contact }: Props) {
  return (
    <section
      className="water-glow py-16 md:py-20"
      style={{ background: "var(--color-accent-soft)" }}
    >
      <Container>
        <div className="mist-card grid items-center gap-10 p-9 md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div>
            <Reveal>
              <h2 className="font-serif text-3xl leading-[1.15] text-[var(--color-foreground)] md:text-[2.4rem]">
                Ready when you are — usually within the week.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-7 flex flex-col gap-3 text-[var(--color-foreground)]/85 sm:flex-row sm:flex-wrap sm:gap-x-10">
                {contact.phone ? (
                  <a
                    href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                    className="text-lg font-medium underline-offset-4 hover:underline"
                  >
                    {contact.phone}
                  </a>
                ) : null}
                {contact.email ? (
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-lg font-medium underline-offset-4 hover:underline"
                  >
                    {contact.email}
                  </a>
                ) : null}
              </div>
            </Reveal>
            {contact.hours?.length ? (
              <Reveal delay={0.16}>
                <p className="mt-4 text-sm text-[var(--color-muted)]">
                  {contact.hours
                    .map((h) => `${h.day}: ${h.time}`)
                    .join("  ·  ")}
                </p>
              </Reveal>
            ) : null}
          </div>

          <Reveal delay={0.15}>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <MagneticButton
                href="/contact"
                className="mist-btn inline-flex items-center gap-3 bg-[var(--color-accent)] px-10 py-5 text-base font-medium text-white"
              >
                Book a first session
                <span aria-hidden>→</span>
              </MagneticButton>
              <p className="text-sm text-[var(--color-muted)] md:text-right">
                Free 15-minute fit check first — no commitment.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
