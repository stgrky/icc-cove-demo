import Link from "next/link";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { PostCard } from "@/components/PostCard";
import { BookingBand } from "@/components/site/BookingBand";
import { CoveHero } from "@/components/site/CoveHero";
import { ModalitiesTeaser } from "@/components/site/ModalitiesTeaser";
import { PricingBlock } from "@/components/site/PricingBlock";
import { StickyAbout } from "@/components/site/StickyAbout";
import { TestimonialRotator } from "@/components/site/TestimonialRotator";
import { TrustStrip } from "@/components/site/TrustStrip";
import { WhatToExpect } from "@/components/site/WhatToExpect";
// PREVIEW BRANCH: every section below is fed from the prospect file instead of
// Sanity, so this page makes no request to Cove's dataset at all.
import {
  prospectContact,
  prospectHome,
  prospectServices,
  prospectTestimonials,
} from "@/lib/prospect-preview";
import type { PostListItem } from "@/sanity/types";



export default async function HomePageRoute() {
  const [home, services, contact, recentPosts, testimonials] =
    await Promise.all([
      Promise.resolve(prospectHome),
      Promise.resolve(prospectServices),
      Promise.resolve(prospectContact),
      // No blog on a homepage mockup — she has no posts to show.
      Promise.resolve([] as PostListItem[]),
      Promise.resolve(prospectTestimonials),
    ]);

  return (
    <>
      <CoveHero home={home} />

      {home.showTrustStrip !== false ? <TrustStrip home={home} /> : null}

      <ModalitiesTeaser services={services} />

      <WhatToExpect
        heading={home.whatToExpectHeading}
        intro={home.whatToExpectIntro}
        steps={home.whatToExpectSteps}
      />

      <StickyAbout home={home} />

      <TestimonialRotator testimonials={testimonials} />

      <PricingBlock home={home} />

      <BookingBand contact={contact} />

      {recentPosts.length > 0 ? (
        <section className="bg-[var(--color-background)] py-24 md:py-32">
          <Container>
            <div className="flex items-end justify-between">
              <Reveal>
                <h2 className="font-serif text-3xl leading-[1.15] text-[var(--color-foreground)] md:text-[2.2rem]">
                  From the blog
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <Link
                  href="/blog"
                  className="text-sm font-medium text-[var(--color-accent-strong)] transition-colors hover:text-[var(--color-foreground)]"
                >
                  All posts →
                </Link>
              </Reveal>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {recentPosts.map((post, i) => (
                <Reveal
                  key={post._id}
                  delay={0.1 + i * 0.1}
                  className="h-full"
                >
                  <PostCard post={post} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}
