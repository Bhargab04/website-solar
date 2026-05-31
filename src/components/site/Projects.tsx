import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import residential from "@/assets/project-residential.webp";
import commercial from "@/assets/project-commercial.webp";
import farm from "@/assets/project-farm.webp";
import { ShuffleHero } from "@/components/ui/shuffle-grid";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const projects = [
  { img: residential, title: "Lakeside Residence", meta: "8 kW · Bengaluru", tag: "Residential" },
  { img: commercial, title: "Northwind Logistics", meta: "420 kW · Pune", tag: "Commercial" },
  { img: farm, title: "Suryadeep Solar Farm", meta: "1.2 MW · Rajasthan", tag: "Utility" },
];

function ParallaxCard({ img, title, meta, tag, index }: typeof projects[number] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 3 layers — different speeds = depth
  const yBg = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const yFg = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative h-[460px] overflow-hidden rounded-3xl border border-border shadow-soft"
    >
      {/* Background layer (slow) */}
      <motion.div style={{ y: yBg, scale: 1.2 }} className="absolute inset-0">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </motion.div>

      {/* Mid overlay */}
      <motion.div
        style={{ y: yMid }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-primary/60"
      />

      {/* Foreground content (fast) */}
      <motion.div style={{ y: yFg }} className="absolute inset-x-0 bottom-0 p-7 text-white">
        <div className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          {tag}
        </div>
        <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">{title}</h3>
        <div className="mt-1 flex items-center justify-between">
          <p className="text-sm text-white/80">{meta}</p>
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-gradient-soft py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <ScrollReveal effect="fade-up" className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Stuff we've built
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Don't just take <br/>our word for it.
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" className="max-w-sm">
            <p className="text-muted-foreground leading-relaxed">
              Here are a few of our favorite installs from the past year. Real houses. Real factories. Real savings.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ParallaxCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>

      {/* Shuffle photo grid showcase */}
      <div className="mt-20 border-t border-border pt-12">
        <ShuffleHero />
      </div>
    </section>
  );
}

