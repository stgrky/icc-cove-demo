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
import {
  defaultContactPage,
  defaultHomePage,
  defaultPosts,
  defaultServicesPage,
  defaultTestimonials,
} from "@/lib/site-defaults";
import { safeFetch } from "@/sanity/client";
import {
  allPostsQuery,
  contactPageQuery,
  featuredTestimonialsQuery,
  homePageQuery,
  servicesPageQuery,
} from "@/sanity/queries";
import type {
  ContactPage,
  HomePage,
  PostListItem,
  ServicesPage,
  Testimonial,
} from "@/sanity/types";

async function getHome() {
  return safeFetch<HomePage>(homePageQuery, {}, defaultHomePage);
}

async function getRecentBlogPosts() {
  const posts = await safeFetch<PostListItem[]>(allPostsQuery, {}, defaultPosts);
  return posts.slice(0, 3);
}

async function getTestimonials() {
  return safeFetch<Testimonial[]>(
    featuredTestimonialsQuery,
    {},
    defaultTestimonials
  );
}

export default async function HomePageRoute() {
  const [home, services, contact, recentPosts, testimonials] =
    await Promise.all([
      getHome(),
      safeFetch<ServicesPage>(servicesPageQuery, {}, defaultServicesPage),
      safeFetch<ContactPage>(contactPageQuery, {}, defaultContactPage),
      getRecentBlogPosts(),
      getTestimonials(),
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
