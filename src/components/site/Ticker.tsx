import { Zap, Leaf, PiggyBank, ShieldCheck, Award, TrendingUp } from "lucide-react";

const items = [
  { icon: Zap, text: "Save up to 80% on electricity" },
  { icon: Leaf, text: "100% Eco-Friendly Energy" },
  { icon: PiggyBank, text: "Govt Subsidy Available" },
  { icon: ShieldCheck, text: "5 Year Warranty Included" },
  { icon: Award, text: "Tier-1 Certified Panels" },
  { icon: TrendingUp, text: "25 Year Power Output Guarantee" },
];

export function Ticker() {
  const loop = [...items, ...items];
  return (
    <section className="border-y border-border bg-white py-6 overflow-hidden">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {loop.map((it, i) => {
          const Icon = it.icon;
          return (
            <div key={i} className="flex items-center gap-3 px-4">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-[#1B4F8A]/10 text-[#1B4F8A]">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium tracking-wide text-[#1B4F8A]/80 md:text-base">
                {it.text}
              </span>
              <span className="ml-8 h-1.5 w-1.5 rounded-full bg-[#5BB5DC]" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

