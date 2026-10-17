/**
 * Attach one demo photograph to a homePage image field.
 *
 * Patch, not createOrReplace: these demo datasets hold hand-tuned persona
 * content and replacing the document would discard it. `set` touches the one
 * field and leaves everything else alone.
 *
 * Usage: node --env-file=.env.local scripts/seed-image.mjs <photoId> "<alt>" [field]
 */
import { createClient } from "@sanity/client";

const [photoId, alt, field = "heroImage"] = process.argv.slice(2);
if (!photoId || !alt) throw new Error("usage: seed-image.mjs <photoId> <alt> [field]");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_WRITE_TOKEN;
if (!projectId || !token) throw new Error("missing project id or write token");

const client = createClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  token,
  apiVersion: "2024-09-01",
  useCdn: false,
});

const url = `https://images.unsplash.com/${photoId}?w=1400&h=1100&fit=crop&auto=format&q=72`;
const res = await fetch(url);
if (!res.ok) throw new Error(`fetch ${res.status} for ${photoId}`);

const asset = await client.assets.upload("image", Buffer.from(await res.arrayBuffer()), {
  filename: `${photoId}.jpg`,
});

const home = await client.fetch(`*[_type == "homePage"][0]{_id}`);
if (!home?._id) throw new Error("no homePage document found");

await client
  .patch(home._id)
  .set({
    [field]: {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
      alt,
    },
  })
  .commit();

console.log(`${projectId}: set ${field} on ${home._id} -> ${asset._id}`);
