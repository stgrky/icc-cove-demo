import type { PortableTextBlock } from "@portabletext/react";

import type {
  BlogIndexResult,
  PostDetail,
  PostListItem,
  RecentPost,
} from "@/sanity/types";

/**
 * COVE demo blog — four unhurried, plain-spoken pieces in Dana's voice.
 * Shorter sentences, more white space in the prose itself — the writing
 * mirrors the site's pacing. Defaults fallback now; Sanity seed content
 * later.
 */

let keyCounter = 0;
const key = () => `demo-${(keyCounter += 1)}`;

function para(text: string): PortableTextBlock {
  return {
    _type: "block",
    _key: key(),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: key(), text, marks: [] }],
  } as PortableTextBlock;
}

function h2(text: string): PortableTextBlock {
  return {
    _type: "block",
    _key: key(),
    style: "h2",
    markDefs: [],
    children: [{ _type: "span", _key: key(), text, marks: [] }],
  } as PortableTextBlock;
}

const AUTHOR = {
  _id: "demo-author",
  name: "Dana Okafor, LMFT",
  credentials: "M.A., LMFT",
  photo: {
    demoUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop&q=80",
    alt: "Dana Okafor",
  },
  bio: [
    para(
      "Dana is a licensed marriage and family therapist in Port Townsend, specializing in trauma-informed, somatic work. She writes the way she works — slowly, plainly, with no pressure to arrive anywhere by the end."
    ),
  ],
};

function cat(title: string): { _id: string; title: string; slug: string } {
  return {
    _id: `demo-cat-${title}`,
    title,
    slug: title.toLowerCase().replace(/[^a-z]+/g, "-"),
  };
}

export const demoPosts: PostDetail[] = [
  {
    _id: "demo-post-1",
    title: "What \"somatic\" actually means",
    slug: "what-somatic-actually-means",
    featuredImage: {
      demoUrl:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1600&h=960&fit=crop&q=80",
      alt: "A wave softened into blur by morning light",
    },
    excerpt:
      "Not just deep breathing, and not a euphemism for \"woo.\" A plain explanation of what body-based therapy is actually doing, and why it matters for trauma.",
    publishedAt: "2026-07-11",
    author: AUTHOR,
    categories: [cat("Somatic work")],
    body: [
      para(
        "\"Somatic\" gets used loosely enough that it's stopped meaning much to a lot of people — a synonym for yoga breathing, or a vague gesture at \"the mind-body connection.\" Here's the plainer version."
      ),
      h2("The short version"),
      para(
        "Talk therapy works mostly through the thinking brain — understanding, reframing, insight. Somatic therapy works with the nervous system directly, through sensation, posture, breath, and the body's own signals of safety or threat. The idea isn't to replace talking. It's that some things a hard week left behind aren't stored as thoughts at all — they're stored as a tight jaw, a held breath, a startle that won't quite settle. Talking about it can only go so far when the thing that needs to change isn't a belief."
      ),
      h2("What a session actually involves"),
      para(
        "Less than people expect. Often it's simply noticing — where does that land in your body, what happens in your shoulders when you say that out loud — and staying with it a little longer than feels natural. Sometimes there's gentle movement or breath work. There is never anything performative about it, and you're always, fully, in control of your own body the entire time."
      ),
      para(
        "If the word has put you off before, that's fair — it's a word that's absorbed a lot of noise. The work underneath it is quieter and more ordinary than the word suggests."
      ),
    ],
  },
  {
    _id: "demo-post-2",
    title: "The window of tolerance, without the jargon",
    slug: "window-of-tolerance-without-jargon",
    featuredImage: {
      demoUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=960&fit=crop&q=80",
      alt: "Waves rolling gently onto the shore at sunset",
    },
    excerpt:
      "One idea from trauma research that quietly explains a lot — why you sometimes shut down instead of cope, and why that's not a character flaw.",
    publishedAt: "2026-06-24",
    author: AUTHOR,
    categories: [cat("Nervous system")],
    body: [
      para(
        "Of everything in trauma-informed training, this is the idea I come back to most with clients, because it explains so much that used to just look like \"being bad at handling things.\""
      ),
      h2("The idea itself"),
      para(
        "Picture a band of water level you can work with — present, think clearly, respond instead of react. That's your window of tolerance. Stress pushes you toward one edge or the other. Above the band, you're flooded: racing thoughts, panic, anger that arrives faster than you can name it. Below the band, you go still: foggy, numb, checked out, unable to make even small decisions. Neither edge is a failure. Both are the nervous system doing exactly what it's built to do under too much pressure."
      ),
      h2("Why it matters day to day"),
      para(
        "Once you can name which edge you're near, the question changes from \"what's wrong with me\" to \"what does this state need.\" Flooded usually needs something that discharges energy — movement, a hard exhale, cold water on the wrists. Shut down usually needs something small and sensory that says the room is safe — a hand on a solid surface, naming five things you can see. Neither needs willpower. Both need about ninety seconds and the right, small thing."
      ),
      para(
        "The size of your window isn't fixed. Trauma narrows it; safety and practice widen it back out. That's most of what somatic work is actually doing, underneath the language."
      ),
    ],
  },
  {
    _id: "demo-post-3",
    title: "A first session here, honestly",
    slug: "a-first-session-here-honestly",
    featuredImage: {
      demoUrl:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1600&h=960&fit=crop&q=80",
      alt: "A sheltered, rocky cove seen from above",
    },
    excerpt:
      "No pressure to explain everything at once, no timeline you're expected to hit. What the first fifty minutes with a trauma-informed therapist actually looks like.",
    publishedAt: "2026-06-06",
    author: AUTHOR,
    categories: [cat("Starting therapy")],
    body: [
      para(
        "Trauma-informed just means the pacing is designed around one fact: telling the whole story on command can itself feel unsafe, so nothing here asks you to."
      ),
      h2("What actually happens"),
      para(
        "We start with almost nothing about your history. Instead: what does a good outcome look like for you, what's been hard lately, and what would you want me to know before we go further. If a question lands wrong, you can say so, and we'll go around it instead of through it. There's no form to fill in with your worst moment on it before we've even met."
      ),
      para(
        "Somewhere in the middle, I'll usually ask what you notice in your body as we talk — not to analyze it, just to build the habit of checking. That's most of the actual method, in miniature."
      ),
      h2("What we won't do"),
      para(
        "We won't rush toward the hardest material because it's session one. We won't treat a full disclosure as the finish line. Trust builds the pacing, not the calendar — some people go deep in week one, most don't, and both are completely fine."
      ),
      para(
        "If you leave the first session having said less than you planned, that's not a stalled start. That's the system working correctly."
      ),
    ],
  },
  {
    _id: "demo-post-4",
    title: "Grounding that doesn't feel like homework",
    slug: "grounding-that-doesnt-feel-like-homework",
    featuredImage: {
      demoUrl:
        "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=1600&h=960&fit=crop&q=80",
      alt: "Light diffusing softly through water",
    },
    excerpt:
      "Most grounding lists read like chores. Four that take under a minute, need no equipment, and work in a parking lot as well as they work at home.",
    publishedAt: "2026-05-20",
    author: AUTHOR,
    categories: [cat("Practical stuff")],
    body: [
      para(
        "A lot of grounding advice sounds lovely and asks for ten minutes, privacy, and a candle — none of which exist in the actual moment you need it. These four don't."
      ),
      h2("Four that fit anywhere"),
      para(
        "Cold water on the inside of your wrists for ten seconds — it's a direct, physical signal to a nervous system running hot. Naming five things you can currently see, out loud or silently — it borrows attention back from wherever it's spiraling. Pressing your feet flat into the floor and noticing the actual contact — obvious, and it works anyway. And one long exhale, twice the length of the inhale — the exhale is where the nervous system actually downshifts, not the inhale."
      ),
      h2("The part people skip"),
      para(
        "None of these fix the underlying thing. They're not supposed to. They're a way to get back inside your own window long enough to think clearly about what the underlying thing needs — which is usually a longer conversation, at a slower pace, with someone. That part's what sessions are for."
      ),
    ],
  },
];

export const demoPostList: PostListItem[] = demoPosts.map(
  ({ body: _body, ...rest }) => rest
);

export const demoRecentPosts: RecentPost[] = demoPosts.slice(0, 3).map((p) => ({
  _id: p._id,
  title: p.title,
  slug: p.slug,
  featuredImage: p.featuredImage,
  publishedAt: p.publishedAt,
}));

export function demoBlogIndex(start: number, end: number): BlogIndexResult {
  return { posts: demoPostList.slice(start, end), total: demoPostList.length };
}

export function demoPostBySlug(slug: string): PostDetail | null {
  return demoPosts.find((p) => p.slug === slug) ?? null;
}

export function demoSimilar(slug: string): PostListItem[] {
  return demoPostList.filter((p) => p.slug !== slug).slice(0, 3);
}
