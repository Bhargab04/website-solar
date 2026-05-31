import { motion, type Variants } from "framer-motion";
import type React from "react";

/* ── Animation variant presets ─────────────────────── */
const VARIANTS: Record<string, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -52 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 52 },
    visible: { opacity: 1, x: 0 },
  },
  "fade": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.82 },
    visible: { opacity: 1, scale: 1 },
  },
  "zoom-up": {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
  "flip-up": {
    hidden: { opacity: 0, rotateX: 18, y: 32 },
    visible: { opacity: 1, rotateX: 0, y: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  },
};

/* ── Easing ────────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;

/* ── ScrollReveal ──────────────────────────────────── */
interface ScrollRevealProps {
  children: React.ReactNode;
  /** Animation preset. Default: "fade-up" */
  effect?: keyof typeof VARIANTS;
  /** Extra delay in seconds */
  delay?: number;
  /** Transition duration in seconds */
  duration?: number;
  /** Only animate once (default true) */
  once?: boolean;
  /** Viewport margin before triggering (default "-80px") */
  margin?: string;
  className?: string;
}

export function ScrollReveal({
  children,
  effect = "fade-up",
  delay = 0,
  duration = 0.65,
  once = true,
  margin = "-80px",
  className,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={VARIANTS[effect]}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ── ScrollRevealGroup — staggered children ────────── */
interface ScrollRevealGroupProps {
  children: React.ReactNode;
  /** Stagger delay between each child */
  stagger?: number;
  /** Animation applied to each child */
  effect?: keyof typeof VARIANTS;
  /** Duration per child */
  duration?: number;
  /** Viewport margin before triggering */
  margin?: string;
  className?: string;
}

const groupContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      /* staggerChildren is set dynamically below via inline transition override */
    },
  },
};

export function ScrollRevealGroup({
  children,
  stagger = 0.1,
  effect = "fade-up",
  duration = 0.6,
  margin = "-60px",
  className,
}: ScrollRevealGroupProps) {
  const childVariant = VARIANTS[effect];
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={groupContainer}
      transition={{ staggerChildren: stagger }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={childVariant}
              transition={{ duration, ease: EASE }}
            >
              {child}
            </motion.div>
          ))
        : <motion.div variants={childVariant} transition={{ duration, ease: EASE }}>
            {children}
          </motion.div>
      }
    </motion.div>
  );
}

