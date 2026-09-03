"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  className?: string;
  /** Diameter in px at the default (non-responsive) size. */
  size?: number;
  /**
   * Optional small caption rendered beneath the rings. Static — unlike
   * Willow's cycling "breathe in… / …and out" text, this never changes.
   * There's no phase to announce; the point is that nothing here is
   * asking anything of the visitor.
   */
  caption?: string;
};

/**
 * COVE signature mechanic — concentric rings expanding outward from a
 * center point and fading, as if a single drop just settled into still
 * water. Deliberately NOT a breathing guide (contrast with Willow's
 * WillowBreath, a single ring on a metronomic 4s inhale/exhale): there is
 * no phase for the visitor to sync their breath to, no caption instructing
 * "in… out…". This is ambient — the *space* is still, not the visitor's
 * body being regulated.
 *
 * Four rings launch on staggered delays and run on four different
 * durations (9.2s / 11.4s / 13.6s / 15.8s). Because the periods share no
 * common rhythm, the rings drift in and out of phase with each other
 * indefinitely — no two loops ever look quite the same, which reads as
 * "irregular, like real ripples" without relying on Math.random() (so
 * there's nothing for server and client renders to disagree about).
 *
 * Respects prefers-reduced-motion with a still, nested-rings glyph — no
 * animation, no implied instruction.
 */
const RINGS = [
  { duration: 9.2, delay: 0 },
  { duration: 11.4, delay: 1.6 },
  { duration: 13.6, delay: 3.1 },
  { duration: 15.8, delay: 5.4 },
];

export function TideRipple({ className = "", size = 320, caption }: Props) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <div
          role="img"
          aria-label="Concentric rings, still — like water at rest"
          className="relative flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden>
            <circle cx="100" cy="100" r="14" fill="var(--color-accent)" opacity="0.5" />
            {[38, 62, 86].map((r) => (
              <circle
                key={r}
                cx="100"
                cy="100"
                r={r}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="1"
                opacity={0.35 - r * 0.002}
              />
            ))}
          </svg>
        </div>
        {caption ? (
          <p className="text-center font-serif text-[13px] italic leading-snug text-[var(--color-muted)]">
            {caption}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <div
        role="img"
        aria-label="Concentric rings slowly expanding and fading outward, like ripples settling on still water"
        className="relative flex items-center justify-center overflow-hidden"
        style={{ width: size, height: size }}
      >
      {/* the point of contact */}
      <motion.div
        aria-hidden
        className="absolute rounded-full"
        style={{
          width: size * 0.06,
          height: size * 0.06,
          background: "var(--color-accent)",
        }}
        animate={{ opacity: [0.75, 0.45, 0.75] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {RINGS.map((ring, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute rounded-full border"
          style={{
            width: size * 0.14,
            height: size * 0.14,
            borderColor: "var(--color-accent)",
            borderWidth: 1.5,
          }}
          animate={{
            width: [size * 0.14, size * 0.98],
            height: [size * 0.14, size * 0.98],
            opacity: [0.55, 0],
          }}
          transition={{
            duration: ring.duration,
            delay: ring.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
      </div>
      {caption ? (
        <p className="text-center font-serif text-[13px] italic leading-snug text-[var(--color-muted)]">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
