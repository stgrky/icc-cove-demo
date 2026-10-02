import Link from "next/link";

import type { SanityImageWithAlt } from "@/sanity/types";

import { Container } from "./Container";
import { SanityImg } from "./SanityImg";

/**
 * PREVIEW BRANCH — homepage mockup only.
 *
 * The other routes still hold Cove's demo persona (Dana Okafor, Port Townsend),
 * so linking to them from a page carrying this prospect's name would show her
 * someone else's practice. Anything that isn't the homepage points at her own
 * live site instead.
 */
const HER_SITE = "https://www.openheartcounselingatx.com";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: `${HER_SITE}/meettheteam.html`, label: "Meet the Team" },
  { href: `${HER_SITE}/`, label: "Services" },
  { href: `${HER_SITE}/request-services.html`, label: "Request Services" },
];

type Props = {
  practiceName: string;
  logo?: SanityImageWithAlt;
};

export function Header({ practiceName }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-subtle)]/60 bg-[var(--color-background)]/85 backdrop-blur">
      <Container className="flex items-center justify-between gap-6 py-5">
        <Link
          href="/"
          className="flex items-center text-[var(--color-foreground)]"
          aria-label={practiceName}
        >
          {/* PREVIEW BRANCH: her own mark, lifted from her site, beside the
              practice name. Hers is a 100px circle, so it's shown small and
              paired with type rather than stretched to a header logo. */}
          <span className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/prospect/logo.png"
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 rounded-full object-contain md:h-10 md:w-10"
            />
            <span className="font-serif text-lg leading-tight tracking-tight md:text-xl">
              {practiceName}
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="https://www.openheartcounselingatx.com/request-services.html"
          className="hidden rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm text-white transition hover:bg-[var(--color-accent-strong)] md:inline-flex"
        >
          Book a consult
        </Link>
      </Container>
      <Container className="flex justify-between gap-4 pb-3 md:hidden">
        <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
