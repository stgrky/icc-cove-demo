import Link from "next/link";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import type { ServicesPage } from "@/sanity/types";

type Props = {
  services: ServicesPage;
};

/**
 * COVE — modalities as soft, floating cards (contrast Anchor's hard-ruled
 * numbered LIST and Haven's "gentle cards" — these lean further into
 * translucency via .mist-card, with no numbering at all: nothing here is
 * meant to feel like a checklist).
 */
export function ModalitiesTeaser({ services }: Props) {
  const list = services.services ?? [];
  if (list.length === 0) return null;

  return (
    <section className="bg-[var(--color-background)] py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
              Ways we can work together
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-3xl leading-[1.15] text-[var(--color-foreground)] md:text-[2.4rem]">
              {services.heading ?? "How I can help"}
            </h2>
          </Reveal>
          {services.intro ? (
            <Reveal delay={0.16}>
              <p className="mt-5 text-lg leading-relaxed text-[var(--color-muted)]">
                {services.intro}
              </p>
            </Reveal>
          ) : null}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {list.slice(0, 3).map((service, i) => (
            <Reveal key={service.title} delay={0.1 + i * 0.08} className="h-full">
              <div className="mist-card flex h-full flex-col p-8 transition-transform duration-500 hover:-translate-y-1.5">
                {service.icon ? (
                  <div
                    aria-hidden
                    className="flex h-12 w-12 items-center justify-center rounded-full text-xl"
                    style={{ background: "var(--color-accent-soft)" }}
                  >
                    {service.icon}
                  </div>
                ) : null}
                <h3 className="mt-6 font-serif text-xl leading-snug text-[var(--color-foreground)]">
                  {service.title}
                </h3>
                {service.description ? (
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
                    {service.description}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <Link
            href="/services"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent-strong)] transition-colors hover:text-[var(--color-foreground)]"
          >
            See every way we can work together
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
