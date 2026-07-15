import { X, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const comparisons = [
  {
    category: "Consulting",
    old: "Fragmented delivery",
    new: "Tailored Consulting",
  },
  {
    category: "Paperwork",
    old: "Delayed approvals & paperwork",
    new: "Full Documentation Support",
  },
  {
    category: "System Design",
    old: "Generic designs, low yield",
    new: "Performance First Engineering",
  },
  {
    category: "Pricing",
    old: "Cost overruns and weak service",
    new: "Industry-low prices with a transparent schedule",
  },
  {
    category: "Equipment",
    old: "Cheap, unbranded panels that degrade quickly",
    new: "Premium Tier-1 global solar brands",
  }
];

export function WhyUs() {
  return (
    <section id="why" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal effect="fade-up">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5CB85C]">Why choose us</span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#1B4F8A] md:text-5xl leading-tight">
              Performance you trust.<br />
              <span className="text-[#5CB85C]">Power you keep.</span>
            </h1>
          </ScrollReveal>
        </div>

        {/* Column Labels */}
        <ScrollReveal effect="fade-up" delay={0.05}>
          <div className="grid grid-cols-2 mb-4 px-6">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Others</span>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1B4F8A]">With Solara</span>
          </div>
        </ScrollReveal>

        {/* Rows */}
        <div className="space-y-3">
          {comparisons.map((item, i) => (
            <ScrollReveal key={i} effect="fade-up" delay={i * 0.07}>
              <div className="grid grid-cols-2 rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">

                {/* Old */}
                <div className="flex items-center gap-4 p-6 bg-slate-50 border-r border-border">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
                    <X className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <span className="text-base text-slate-400 line-through">{item.old}</span>
                </div>

                {/* New */}
                <div className="flex items-center gap-4 p-6 bg-white">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5CB85C]/15 flex items-center justify-center text-[#5CB85C]">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <span className="text-base font-semibold text-[#1B4F8A]">{item.new}</span>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
