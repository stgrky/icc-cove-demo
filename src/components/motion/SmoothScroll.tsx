"use client";

import { useReducedMotion } from "framer-motion";
import { ReactLenis } from "lenis/react";

/**
 * Lenis-powered inertial smooth scrolling — the "expensive editorial site"
 * feel. Mounted once in the site layout. Disabled entirely for
 * prefers-reduced-motion users (native scroll is the accessible default).
 */
export function SmoothScroll() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <ReactLenis
      root
      options={{
        duration: 1.15,
        touchMultiplier: 1.5,
      }}
    />
  );
}
