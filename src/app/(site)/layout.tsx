import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { StickyCta } from "@/components/site/StickyCta";
import { defaultAnnouncement } from "@/lib/site-defaults";
// PREVIEW BRANCH: the prospect's own details stand in for Sanity, so nothing
// is written to Cove's dataset and the live demo is untouched.
import { prospectSettings } from "@/lib/prospect-preview";
import { safeFetch } from "@/sanity/client";
import { announcementQuery } from "@/sanity/queries";
import type { Announcement } from "@/sanity/types";

// Render every request fresh against Sanity so content edits in Studio
// (publish/edit/delete) reflect on the live site immediately. The therapist
// who owns this site should never need a developer to push an update.
export const dynamic = "force-dynamic";

async function getSiteSettings() {
  return prospectSettings;
}

async function getAnnouncement(): Promise<Announcement> {
  return safeFetch<Announcement>(announcementQuery, {}, defaultAnnouncement);
}

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, announcement] = await Promise.all([
    getSiteSettings(),
    getAnnouncement(),
  ]);
  return (
    <>
      {/* Cursor flourishes are opt-in per template, never default. */}
      <SmoothScroll />
      <AnnouncementBar announcement={announcement} />
      <Header
        practiceName={settings.practiceName ?? "Therapy Practice"}
        logo={settings.logo}
      />
      <main className="flex-1">{children}</main>
      <Footer settings={settings} />
      <StickyCta
        label={settings.stickyCta?.label}
        href={settings.stickyCta?.href}
      />
    </>
  );
}
