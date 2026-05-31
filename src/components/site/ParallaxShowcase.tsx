import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import bg from "@/assets/parallax-bg.webp";
import mid from "@/assets/parallax-mid.webp";
import fg from "@/assets/parallax-fg.webp";

/**
 * True 3-layer parallax — different scroll speeds simulate real-world depth.
 * Layers also subtly tilt with cursor movement for an interactive feel.
 */
export function ParallaxShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll-based vertical parallax
  const yBg = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["-22%", "22%"]);
  const yFg = useTransform(scrollYProgress, [0, 1], ["-45%", "45%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  // Mouse position normalized to [-1, 1]
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Spring-smoothed values for buttery-soft motion
  const springConfig = { stiffness: 80, damping: 20, mass: 0.5 };
  const smx = useSpring(mx, springConfig);
  const smy = useSpring(my, springConfig);

  // Per-layer tilt — closer layers move more (parallax depth rule)
  const bgX = useTransform(smx, [-1, 1], [-8, 8]);
  const midX = useTransform(smx, [-1, 1], [-20, 20]);
  const fgX = useTransform(smx, [-1, 1], [-40, 40]);
  const textX = useTransform(smx, [-1, 1], [-6, 6]);

  // Combine scroll-Y (percent string) with mouse-Y (pixels) via CSS calc()
  const bgYCombined = useMotionTemplate`calc(${yBg} + ${useTransform(smy, [-1, 1], [-5, 5])}px)`;
  const midYCombined = useMotionTemplate`calc(${yMid} + ${useTransform(smy, [-1, 1], [-12, 12])}px)`;
  const fgYCombined = useMotionTemplate`calc(${yFg} + ${useTransform(smy, [-1, 1], [-22, 22])}px)`;

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mx.set(nx);
    my.set(ny);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Parallax showcase"
      className="relative h-[85vh] min-h-[560px] w-full overflow-hidden"
    >
      {/* LAYER 1 — Background (slowest) */}
      <motion.div
        style={{ y: bgYCombined, x: bgX, scale: scaleBg }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={bg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1536}
          height={1024}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Soft brand tint over sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background/80" />

      {/* LAYER 2 — Mid (solar panels, medium speed) */}
      <motion.div
        style={{ y: midYCombined, x: midX }}
        className="absolute inset-x-0 bottom-[-8%] flex justify-center will-change-transform"
      >
        <img
          src={mid}
          alt="Solar panel array"
          loading="lazy"
          width={1536}
          height={1024}
          className="w-[120%] max-w-none object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* LAYER 3 — Foreground (foliage, fastest) */}
      <motion.div
        style={{ y: fgYCombined, x: fgX }}
        className="pointer-events-none absolute inset-x-0 bottom-[-12%] will-change-transform"
      >
        <img
          src={fg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1536}
          height={600}
          className="w-full object-cover"
        />
      </motion.div>

      {/* Floating headline (parallax text) */}
      <motion.div
        style={{ y: yText, x: textX }}
        className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-start px-6 pt-20 text-center md:pt-28"
      >
        <span className="rounded-full border border-primary/20 bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur">
          Cinematic depth
        </span>
        <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Energy that<br />
          <span className="bg-gradient-to-r from-primary to-[oklch(0.75_0.18_210)] bg-clip-text text-transparent">
            moves with you.
          </span>
        </h2>
        <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
          Scroll to feel it — sky drifts slow, panels glide, leaves rush past.
          Real depth, built from light and motion.
        </p>
      </motion.div>

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

