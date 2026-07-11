import { motion } from "framer-motion";
import { Home, Building2, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Link } from "@tanstack/react-router";

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    desc: "End-to-end solar design for modern homes. Drastically reduce energy overhead while integrating seamlessly with your property.",
    bullets: ["Architectural integration", "Net-metering logistics", "Turnkey execution"],
    accent: "#1B4F8A",
  },
  {
    icon: Building2,
    title: "Commercial & Public",
    desc: "High-capacity systems for factories and public infrastructure. Scalable installations engineered for rapid ROI.",
    bullets: ["Megawatt-scale capacity", "Accelerated payback models", "Custom financial structuring"],
    accent: "#2E7EC0",
  },
  {
    icon: ShieldCheck,
    title: "Lifecycle Maintenance",
    desc: "Proactive monitoring and expert maintenance. Peak efficiency year-round with real-time diagnostics.",
    bullets: ["Predictive diagnostics", "Real-time telemetry", "Rapid-response repair"],
    accent: "#5CB85C",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16 lg:mb-20">
          <ScrollReveal effect="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#5CB85C]/10 border border-[#5CB85C]/25 text-xs font-bold uppercase tracking-widest text-[#5CB85C] mb-5">
              <Zap className="w-3 h-3" />
              What we do
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-[#1B4F8A] md:text-5xl lg:text-6xl leading-[1.05]">
              Everything your energy transition needs.
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up">
            <p className="text-lg text-slate-500 leading-relaxed lg:ml-8 lg:border-l-2 lg:border-[#5BB5DC]/40 lg:pl-8">
              We manage the entire lifecycle — from strategic planning and installation to long-term maintenance. One team, start to finish.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col rounded-3xl border border-slate-100 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Colored top bar */}
              <div className="h-1.5 w-full" style={{ background: s.accent }} />

              <div className="flex-1 p-8 lg:p-9 flex flex-col">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-white"
                  style={{ background: s.accent }}
                >
                  <s.icon className="h-5 w-5" strokeWidth={2} />
                </div>

                <h3 className="font-display text-xl font-bold text-[#1B4F8A] mb-3">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm flex-1 mb-7">{s.desc}</p>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-8">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: s.accent }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors group-hover:gap-2.5"
                  style={{ color: s.accent }}
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-all" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
