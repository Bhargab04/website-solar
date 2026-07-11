import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  HelpCircle, 
  PiggyBank, 
  ShieldCheck, 
  Coins, 
  Zap, 
  UserCheck 
} from "lucide-react";

interface SubsidyTier {
  capacity: string;
  centralSubsidy: string;
  stateSubsidy: string;
  totalSubsidy: string;
  monthlySavings: string;
  roi: string;
  recommendedFor: string;
}

const SUBSIDY_DATA: Record<string, SubsidyTier> = {
  "1kW": {
    capacity: "1 kW System",
    centralSubsidy: "₹33,000",
    stateSubsidy: "₹15,000",
    totalSubsidy: "₹48,000",
    monthlySavings: "₹1,000 - ₹1,500",
    roi: "3 to 3.5 Years",
    recommendedFor: "Very small residential homes, basic lights, fans, and TV."
  },
  "2kW": {
    capacity: "2 kW System",
    centralSubsidy: "₹66,000",
    stateSubsidy: "₹30,000",
    totalSubsidy: "₹96,000",
    monthlySavings: "₹2,500 - ₹3,000",
    roi: "2.5 to 3 Years",
    recommendedFor: "Small residential homes, 2-3 BHK, standard lights/fans, and 1.5 Ton AC."
  },
  "3kW": {
    capacity: "3 kW System",
    centralSubsidy: "₹85,800",
    stateSubsidy: "₹45,000",
    totalSubsidy: "₹1,30,800",
    monthlySavings: "₹4,000 - ₹4,800",
    roi: "2 to 2.5 Years",
    recommendedFor: "Medium homes, 3-4 BHK, 2 ACs, water geyser, and standard appliances."
  },
  "5kW": {
    capacity: "5 kW System",
    centralSubsidy: "₹85,800",
    stateSubsidy: "₹45,000",
    totalSubsidy: "₹1,30,800",
    monthlySavings: "₹7,000 - ₹8,500",
    roi: "3 to 3.5 Years",
    recommendedFor: "Large residential houses, home offices, multiple ACs, and EV charging setup."
  },
  "10kW": {
    capacity: "10 kW System",
    centralSubsidy: "₹85,800",
    stateSubsidy: "₹45,000",
    totalSubsidy: "₹1,30,800",
    monthlySavings: "₹14,000 - ₹17,000",
    roi: "4 to 4.5 Years",
    recommendedFor: "Luxury villas, joint families, commercial setups, home-based clinics."
  }
};

export function SuryaGhar() {
  const [selectedTier, setSelectedTier] = useState<string>("3kW");
  const data = SUBSIDY_DATA[selectedTier];

  const steps = [
    {
      num: "01",
      title: "Online Portal Registration",
      desc: "Register on the National PM Surya Ghar Portal using your APDCL consumer number."
    },
    {
      num: "02",
      title: "Technical Approval",
      desc: "Solara submits detailed site feasibility reports for APDCL solar connection approval."
    },
    {
      num: "03",
      title: "Turnkey Installation",
      desc: "Solara installs the premium solar array (e.g. Adani panels) with wind-resistant structures."
    },
    {
      num: "04",
      title: "Bidirectional Net Metering",
      desc: "APDCL installs the net-meter to measure export power and adjusts bills accordingly."
    },
    {
      num: "05",
      title: "Subsidy in Your Account",
      desc: "Subsidy is directly deposited in your bank account (DBT) within 30 days of commission."
    }
  ];

  const documents = [
    "Recent APDCL Electricity Bill (Consumer No.)",
    "Aadhaar Card (linked to mobile)",
    "PAN Card Copy",
    "Passport size Photograph",
    "Bank Passbook / Cancelled Cheque (for DBT)",
    "Property tax receipt / Land possession document"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 relative overflow-hidden" id="pm-surya-ghar">
      {/* Background Soft Glow Decoration */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#5CB85C]/5 rounded-full pointer-events-none blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#EAB308]/5 rounded-full pointer-events-none blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <ScrollReveal effect="fade-up" delay={0.05}>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#5CB85C]/10 text-xs font-bold uppercase tracking-wider text-[#5CB85C] border border-[#5CB85C]/20 shadow-sm">
              <Zap className="w-3.5 h-3.5" /> PM Surya Ghar Muft Bijli Yojana
            </span>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={0.1}>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Claim Up to <span className="text-[#5CB85C]">₹1,30,800</span> in Solar Subsidies
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={0.15}>
            <p className="mt-6 text-lg text-slate-600 font-medium">
              We are a leading empanelled solar vendor in Assam under the central MNRE program. Solara manages your entire subsidy application process end-to-end with APDCL.
            </p>
          </ScrollReveal>
        </div>

        {/* Subsidy Interactive Calculator Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Capacity Selectors & Overview Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md">
            <ScrollReveal effect="fade-up" delay={0.1}>
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <PiggyBank className="w-5 h-5 text-[#5CB85C]" /> Calculate Your Subsidy & Savings
              </h3>
            </ScrollReveal>

            {/* Selection Tabs */}
            <ScrollReveal effect="fade-up" delay={0.15}>
              <div className="grid grid-cols-5 gap-2 mb-8 bg-slate-100 p-1.5 rounded-xl">
                {Object.keys(SUBSIDY_DATA).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setSelectedTier(tier)}
                    className={`py-3 rounded-lg text-sm font-bold tracking-wide transition-all duration-200 ${
                      selectedTier === tier
                        ? "bg-white text-[#5CB85C] shadow-sm"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Savings & Subsidy Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <ScrollReveal effect="fade-up" delay={0.2} className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Central Subsidy</div>
                <div className="text-2xl font-extrabold text-slate-900">{data.centralSubsidy}</div>
                <div className="text-[10px] text-slate-400 mt-1">Direct Bank Transfer</div>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={0.25} className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Assam State Subsidy</div>
                <div className="text-2xl font-extrabold text-[#5CB85C]">{data.stateSubsidy}</div>
                <div className="text-[10px] text-slate-400 mt-1">APDCL Incentive</div>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={0.3} className="bg-[#5CB85C]/5 p-5 rounded-2xl border border-[#5CB85C]/15">
                <div className="text-xs text-[#5CB85C] font-bold uppercase tracking-wider mb-2">Total Subsidy</div>
                <div className="text-2xl font-black text-[#5CB85C]">{data.totalSubsidy}</div>
                <div className="text-[10px] text-[#5CB85C]/80 mt-1 font-semibold">Maximum Discount</div>
              </ScrollReveal>
            </div>

            {/* Additional details */}
            <div className="space-y-4 border-t border-slate-100 pt-6">
              <ScrollReveal effect="fade-up" delay={0.35} className="flex justify-between items-center text-sm py-2">
                <span className="text-slate-500 font-medium">Est. Monthly Bill Savings</span>
                <span className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Coins className="w-4 h-4 text-amber-500" /> {data.monthlySavings}
                </span>
              </ScrollReveal>
              <ScrollReveal effect="fade-up" delay={0.4} className="flex justify-between items-center text-sm py-2">
                <span className="text-slate-500 font-medium">Investment Payback Period (ROI)</span>
                <span className="font-bold text-slate-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#5CB85C]" /> {data.roi}
                </span>
              </ScrollReveal>
              <ScrollReveal effect="fade-up" delay={0.45} className="bg-slate-50 p-4 rounded-xl text-xs text-slate-500 leading-relaxed border border-slate-100 mt-2">
                <strong className="text-slate-700 block mb-1">Recommended Application:</strong>
                <p className="mb-3">{data.recommendedFor}</p>
                <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-slate-600">Want a customized loan & savings calculation?</span>
                  <Link to="/emi-calculator" className="text-[#1B4F8A] hover:text-[#5CB85C] font-bold inline-flex items-center gap-0.5 transition-colors">
                    Try EMI Calculator <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Required Documents Checklist */}
          <div className="lg:col-span-5 bg-slate-900 rounded-3xl p-8 text-white shadow-xl shadow-slate-950/10 self-stretch flex flex-col justify-between">
            <div>
              <ScrollReveal effect="fade-up" delay={0.1}>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#5CB85C]" /> Essential Documents Required
                </h3>
              </ScrollReveal>
              
              <ul className="space-y-4">
                {documents.map((doc, idx) => (
                  <ScrollReveal key={idx} effect="fade-up" delay={0.15 + idx * 0.05} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5CB85C] shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300 font-medium">{doc}</span>
                  </ScrollReveal>
                ))}
              </ul>
            </div>

            <ScrollReveal effect="fade-up" delay={0.5} className="mt-8 pt-6 border-t border-slate-800">
              <Link 
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#5CB85C] text-white font-bold py-4 px-6 rounded-xl hover:bg-[#4aa54a] transition-all duration-300 shadow-md shadow-[#5CB85C]/15"
              >
                Apply for Subsidy Now <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Process Flow timeline */}
        <div className="border-t border-slate-200/80 pt-16">
          <ScrollReveal effect="fade-up" delay={0.05} className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-2">
              <UserCheck className="w-6 h-6 text-[#5CB85C]" /> The Step-by-Step Subsidy Process
            </h3>
            <p className="text-sm text-slate-500 mt-2">
              Solara manages all APDCL net metering approvals, and structural reports on your behalf.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((s, idx) => (
              <ScrollReveal 
                key={idx} 
                effect="fade-up" 
                delay={0.1 + idx * 0.08}
                className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="text-3xl font-black text-slate-100 absolute top-4 right-4 select-none">
                  {s.num}
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-3 relative pr-8">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {s.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
