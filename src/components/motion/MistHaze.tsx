"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  className?: string;
};

/**
 * COVE atmospheric backdrop — slow-drifting, heavily blurred fields of
 * light standing in for "soft, blurred macro texture" (out-of-focus water,
 * stone, light on ripples) without a photo asset. Token-driven via
 * color-mix() so it recolors automatically with the active palette,
 * unlike Anchor's GradientMesh (which hardcoded Sage's rgba values).
 * Nothing in this component ever resolves to a hard edge.
 */
export function MistHaze({ className }: Props) {
  const reduceMotion = useReducedMotion();

  const blobBase =
    "absolute aspect-square rounded-full blur-3xl opacity-80";

  const blobs = [
    { pos: "-left-20 -top-16 w-[60%]", mix: "var(--color-accent) 45%" },
    { pos: "right-[-10%] top-1/3 w-[50%]", mix: "var(--color-accent-strong) 30%" },
    { pos: "left-1/4 -bottom-24 w-[55%]", mix: "var(--color-accent-soft) 90%" },
  ];

  if (reduceMotion) {
    return (
      <div className={`pointer-events-none overflow-hidden ${className ?? ""}`} aria-hidden>
        {blobs.map((b, i) => (
          <div
            key={i}
            className={`${blobBase} ${b.pos}`}
            style={{ background: `color-mix(in srgb, ${b.mix}, transparent)` }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={`pointer-events-none overflow-hidden ${className ?? ""}`}
    >
      <motion.div
        className={`${blobBase} w-[60%]`}
        style={{ background: "color-mix(in srgb, var(--color-accent) 45%, transparent)" }}
        initial={{ x: "-18%", y: "-8%" }}
        animate={{ x: ["-18%", "-4%", "-22%", "-18%"], y: ["-8%", "6%", "-14%", "-8%"] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${blobBase} w-[50%]`}
        style={{ background: "color-mix(in srgb, var(--color-accent-strong) 30%, transparent)" }}
        initial={{ x: "55%", y: "20%" }}
        animate={{ x: ["55%", "40%", "62%", "55%"], y: ["20%", "34%", "10%", "20%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${blobBase} w-[55%]`}
        style={{ background: "color-mix(in srgb, var(--color-accent-soft) 90%, transparent)" }}
        initial={{ x: "10%", y: "72%" }}
        animate={{ x: ["10%", "24%", "2%", "10%"], y: ["72%", "58%", "82%", "72%"] }}
        transition={{ duration: 46, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
