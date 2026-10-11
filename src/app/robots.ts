import type { MetadataRoute } from "next";

/**
 * Demos are noindex; a provisioned client site is not.
 *
 * TEMPLATES.md claimed every demo had been noindex since 2026-09-20. On
 * 2026-10-10 all eight were checked and all eight were serving "Allow: /"
 * with no meta robots tag — the decision was recorded but never implemented,
 * so fictional practitioners, invented fees and demo license numbers were
 * indexable under ICC's name the whole time.
 *
 * The gate is an explicit env var rather than a hostname check, so indexing a
 * real client site is a deliberate act (set ICC_ALLOW_INDEXING=true in that
 * deployment) and not something that happens the moment a domain is attached.
 */
const allowIndexing = process.env.ICC_ALLOW_INDEXING === "true";

export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/studio/"],
      },
    ],
  };
}
