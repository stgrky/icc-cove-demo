import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Fraunces,
  Inter,
  Karla,
  Libre_Franklin,
  Lora,
  Marcellus,
  Mulish,
  Nunito_Sans,
  Petrona,
  Plus_Jakarta_Sans,
} from "next/font/google";

import { defaultSiteSettings } from "@/lib/site-defaults";
import { safeFetch } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { siteSettingsQuery } from "@/sanity/queries";
import type { SiteSettings } from "@/sanity/types";

import "./globals.css";

// ── Font Library ── every pairing in TEMPLATES.md is loaded so the active
// `data-fonts` value (set from Sanity) can switch the display/body fonts at
// runtime with no rebuild. When a template is provisioned for a real client,
// trim this list to just their chosen pairing to cut payload.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});
const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-libre-franklin",
  display: "swap",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});
const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
  display: "swap",
});
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mulish",
  display: "swap",
});
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});
// Anchor's pairing — warm serif + soft humanist sans ("therapy, not SaaS")
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito-sans",
  display: "swap",
});
// Cove's pairing — a soft-edged, quiet serif + calm humanist sans. Distinct
// from every other template's fonts in TEMPLATES.md and from Willow's
// Newsreader/Nunito Sans.
const petrona = Petrona({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-petrona",
  display: "swap",
});
const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-karla",
  display: "swap",
});

const fontVariables = [
  inter,
  cormorant,
  libreFranklin,
  fraunces,
  marcellus,
  mulish,
  plusJakarta,
  lora,
  nunitoSans,
  petrona,
  karla,
]
  .map((font) => font.variable)
  .join(" ");

// Read practice name + favicon from Sanity so the browser-tab title and icon
// reflect whatever the therapist publishes in Studio. Falls back to defaults
// when Sanity is unreachable or empty.
export async function generateMetadata(): Promise<Metadata> {
  const settings = await safeFetch<SiteSettings>(
    siteSettingsQuery,
    {},
    defaultSiteSettings
  );

  const practiceName = settings.practiceName ?? "Therapy Practice";
  const description =
    settings.tagline ??
    "Trauma-informed, somatic therapy in a calm, unhurried space.";

  const faviconUrl = settings.favicon
    ? urlFor(settings.favicon)?.width(512).height(512).fit("max").url()
    : null;

  return {
    title: {
      default: practiceName,
      template: `%s · ${practiceName}`,
    },
    description,
    icons: faviconUrl
      ? {
          icon: [{ url: faviconUrl, sizes: "any" }],
          apple: [{ url: faviconUrl }],
        }
      : undefined,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Active theme is data-driven: the palette + font pairing chosen in Sanity
  // set attributes on <html>, which globals.css maps to the --p-* / --f-*
  // layers. Unknown/missing values fall through to the Sage + Cormorant
  // defaults defined in :root.
  const settings = await safeFetch<SiteSettings>(
    siteSettingsQuery,
    {},
    defaultSiteSettings
  );
  const palette = settings.palette ?? "mist";
  const fontPairing = settings.fontPairing ?? "petrona";

  return (
    <html
      lang="en"
      data-palette={palette}
      data-fonts={fontPairing}
      className={`${fontVariables} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
