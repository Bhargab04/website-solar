import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Wrench, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const steps = [
  { icon: Phone, title: "We talk it out", desc: "We look at your power bill and roof, and tell you honestly if solar makes sense for you.", color: "#1B4F8A" },
  { icon: MapPin, title: "We measure twice", desc: "We come over, check the roof, and figure out exactly where panels will get the most sun.", color: "#2E7EC0" },
  { icon: Wrench, title: "We build it", desc: "Our crew shows up, installs everything in a few days, and cleans up their mess.", color: "#5BB5DC" },
  { icon: Zap, title: "You flip the switch", desc: "We handle all the government paperwork and meter setup. You just start saving.", color: "#5CB85C" },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });

  return (
    <section id="process" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        {/* Header */}
        <ScrollReveal effect="fade-up" className="max-w-2xl mb-20">
          <span className="text-[#5CB85C] text-xs font-bold uppercase tracking-[0.22em] mb-4 block">How it works</span>
          <h1 className="font-display text-4xl font-bold tracking-tight text-[#1B4F8A] md:text-5xl">
            Simple. Transparent. Done right.
          </h1>
        </ScrollReveal>

        {/* Steps — horizontal on desktop */}
        <div ref={ref} className="relative">

          {/* Horizontal connector line (desktop) */}
          <div className="hidden lg:block absolute top-[2.75rem] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px bg-slate-100" />
          <motion.div
            className="hidden lg:block absolute top-[2.75rem] h-px"
            style={{
              left: "calc(12.5% + 28px)",
              right: "calc(12.5% + 28px)",
              scaleX: scrollYProgress,
              transformOrigin: "left center",
              background: "linear-gradient(to right, #1B4F8A, #2E7EC0, #5BB5DC, #5CB85C)",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((s, i) => {
              const threshold = i / (steps.length - 1);
              const bgColor = useTransform(
                scrollYProgress,
                [Math.max(0, threshold - 0.15), threshold],
                ["#f1f5f9", s.color]
              );
              const iconColor = useTransform(
                scrollYProgress,
                [Math.max(0, threshold - 0.15), threshold],
                ["#94a3b8", "#ffffff"]
              );
              const badgeBorderColor = useTransform(
                scrollYProgress,
                [Math.max(0, threshold - 0.15), threshold],
                ["#e2e8f0", s.color]
              );
              const badgeTextColor = useTransform(
                scrollYProgress,
                [Math.max(0, threshold - 0.15), threshold],
                ["#94a3b8", s.color]
              );

              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="flex flex-col items-start lg:items-center lg:text-center"
                >
                  {/* Icon circle */}
                  <motion.div
                    className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg mb-5 z-10"
                    style={{ backgroundColor: bgColor, color: iconColor }}
                  >
                    <s.icon className="h-5 w-5" strokeWidth={2.5} />
                    {/* Step number badge */}
                    <motion.span 
                      className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white border-2 text-[10px] font-black" 
                      style={{ borderColor: badgeBorderColor, color: badgeTextColor }}
                    >
                      {i + 1}
                    </motion.span>
                  </motion.div>

                  <h3 className="font-display text-lg font-bold text-[#1B4F8A] mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{s.desc}</p>

                  {/* Mobile connector dot */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden mt-6 ml-7 w-px h-8 bg-gradient-to-b from-slate-200 to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
