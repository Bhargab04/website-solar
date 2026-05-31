import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { CTA } from "@/components/site/CTA";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowRight, CheckCircle2, Factory, Home, Activity, Zap, Award, ClipboardCheck, Smartphone, Wrench } from "lucide-react";

// Images
import imgResidential from "@/assets/project-residential-new.jpg";
import imgCommercial from "@/assets/pexels-giantasparagus-35501734.jpg";
import imgFarm from "@/assets/project-farm.webp";
import imgHero from "@/assets/hero-services.jpg";
import imgPanel from "@/assets/real_panel.png";
import imgDocument from "@/assets/real_document.png";
import imgApp from "@/assets/real_app.png";
import imgTool from "@/assets/real_tool.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Solara Solar" },
      {
        name: "description",
        content:
          "Explore Solara's full range of solar services: residential rooftop, commercial installations, and lifetime maintenance & support.",
      },
      { property: "og:title", content: "Our Services — Solara Solar" },
      { property: "og:description", content: "Residential, commercial & maintenance solar services by Solara." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Dark Hero Section */}
        <section className="relative pt-40 pb-28 lg:pt-52 lg:pb-40 text-center overflow-hidden bg-slate-950">
          {/* Decorative Hero Curves */}
          <div className="absolute top-0 right-0 w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-[#EAB308]/40 rounded-bl-full z-0 pointer-events-none blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] bg-[#1e3a8a]/60 rounded-tr-full z-0 pointer-events-none blur-2xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-[#1e3a8a]/20 rounded-full z-0 pointer-events-none blur-[120px]" />

          <div className="absolute inset-0 z-0">
            <img src={imgHero} alt="Solar installation" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-white">
            <ScrollReveal effect="fade-up" delay={0.05}>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-white mb-8 backdrop-blur shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308] animate-pulse" />
                Our Services
              </span>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.15}>
              <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-7xl lg:text-[5rem] leading-[1.05]">
                Powering the future. <br/>
                <span className="text-[#EAB308]">Without the BS.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.25}>
              <p className="mt-8 text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto font-medium">
                Architectural-grade solar design, frictionless installation, and lifetime protection. No middlemen. No excuses. Just pure, unadulterated energy independence.
              </p>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.35}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#EAB308] text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-[#EAB308]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#EAB308]/40 transition-all duration-300 text-base">
                  Get a Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/projects" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-8 py-4 rounded-full backdrop-blur hover:bg-white/20 transition-all duration-300 text-base">
                  See Our Work
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 1: Residential */}
        <section className="py-24 lg:py-36 bg-white overflow-hidden relative">
          {/* Decorative background */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#EAB308]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <ScrollReveal effect="fade-right" className="relative group">
                {/* Decorative ring */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#EAB308]/10 to-[#1e3a8a]/10 rounded-[40px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-2xl border border-slate-100">
                  <img src={imgResidential} alt="Residential Solar" className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/30 via-transparent to-transparent" />
                  {/* Overlay label */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#EAB308] rounded-full animate-pulse" />
                      <span className="text-white text-sm font-semibold">Live system active · 8.4 kWp</span>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-white p-6 rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.12)] border border-slate-100 hidden md:flex items-center gap-4 overflow-hidden group/badge">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#EAB308]/20 rounded-bl-full -mr-4 -mt-4 transition-transform duration-700 group-hover/badge:scale-[1.5]" />
                  <div className="w-12 h-12 rounded-full bg-[#EAB308]/15 flex items-center justify-center shrink-0">
                    <Home className="w-6 h-6 text-[#1e3a8a]" />
                  </div>
                  <div className="relative z-10">
                    <div className="font-bold text-[#1e3a8a]">Turnkey Installation</div>
                    <div className="text-sm text-slate-500">2-3 Day Execution</div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal effect="fade-left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-[#1e3a8a]/20" />
                  <span className="text-[#1e3a8a]/50 font-bold uppercase tracking-widest text-sm">Residential Infrastructure</span>
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-6 leading-tight">
                  Re-engineer your home's <span className="italic text-[#EAB308]">energy infrastructure.</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We don't just bolt panels to your roof. We engineer holistic, architectural-grade energy ecosystems that seamlessly integrate with your property. Erase your reliance on the grid, immune yourself to rate hikes, and dramatically elevate your home's valuation.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Sleek, low-profile architectural integration for uncompromising aesthetics.",
                    "Turnkey execution: we handle all net-metering logistics and utility red tape.",
                    "Next-generation microinverter architecture for unparalleled energy yield."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-700 text-lg">
                      <div className="w-6 h-6 rounded-full bg-[#EAB308]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#EAB308]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center gap-2 text-[#1e3a8a] font-bold hover:text-[#EAB308] transition-colors group text-lg border-b-2 border-[#1e3a8a]/20 hover:border-[#EAB308] pb-1">
                  Book a free home assessment
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 2: Commercial — Dark Navy */}
        <section className="py-24 lg:py-36 bg-[#0d1f4a] overflow-hidden relative text-white">
          {/* Decorative curves */}
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#EAB308]/10 rounded-tl-full pointer-events-none blur-[80px]" />
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/3 rounded-br-full pointer-events-none blur-[60px]" />

          <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <ScrollReveal effect="fade-right" className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-[#EAB308]/50" />
                  <span className="text-[#EAB308]/80 font-bold uppercase tracking-widest text-sm">Commercial & Public Sector</span>
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Megawatt-scale capacity. <span className="italic text-[#EAB308]">Relentless ROI.</span>
                </h2>
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  For factories, warehouses, and corporate campuses, energy is a volatile operational liability. We flip it into a fixed, high-yield asset. Our commercial systems are ruthlessly engineered for rapid financial payback and impenetrable grid-independent reliability.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "High-capacity industrial rooftop and robust ground-mount arrays.",
                    "Strategic financial structuring and aggressive tax-incentive optimization.",
                    "Zero-downtime installation protocols designed for mission-critical facilities."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-white/80 text-lg">
                      <div className="w-6 h-6 rounded-full bg-[#EAB308]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#EAB308]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#EAB308] transition-colors group text-lg border-b-2 border-white/20 hover:border-[#EAB308] pb-1">
                  Request a commercial consultation
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </ScrollReveal>

              <ScrollReveal effect="fade-left" className="relative group order-1 lg:order-2">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#EAB308]/20 to-[#1e3a8a]/20 rounded-[40px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-2xl border border-white/10">
                  <img src={imgCommercial} alt="Commercial Solar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f4a]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#EAB308] rounded-full animate-pulse" />
                      <span className="text-white text-sm font-semibold">420 kW · Pune Industrial Complex</span>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-8 -left-4 lg:-left-8 bg-[#1e3a8a] p-6 rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.3)] border border-white/10 hidden md:flex items-center gap-4 z-10">
                  <div className="w-12 h-12 rounded-full bg-[#EAB308] flex items-center justify-center shrink-0">
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Industrial Grade</div>
                    <div className="text-sm text-white/60">Tier-1 Equipment</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 3: Maintenance */}
        <section className="py-24 lg:py-36 bg-slate-50 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#EAB308]/8 rounded-bl-full pointer-events-none blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1e3a8a]/5 rounded-tr-full pointer-events-none blur-[60px]" />

          <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <ScrollReveal effect="fade-up">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-8 bg-[#1e3a8a]/20" />
                  <span className="text-[#1e3a8a]/50 font-bold uppercase tracking-widest text-sm">Lifecycle Maintenance</span>
                  <div className="h-px w-8 bg-[#1e3a8a]/20" />
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-6">
                  We don't just build it. <br/> <span className="italic text-[#EAB308]">We bulletproof it.</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Solar is a multi-decade investment. Our dedicated operations center provides proactive telemetry monitoring, intelligent diagnostic triage, and rapid-response field repair to guarantee maximum uptime.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "24/7 Telemetry", desc: "Continuous real-time tracking. If a microinverter drops offline, we know about it before you do.", icon: Activity },
                { title: "Predictive Diagnostics", desc: "Leveraging machine learning to analyze power curves and flag hardware degradation before it impacts your yield.", icon: Zap },
                { title: "Rapid Deployment", desc: "Localized strike teams equipped with comprehensive replacement inventory to instantly neutralize any system downtime.", icon: Factory }
              ].map((feature, i) => (
                <ScrollReveal key={i} effect="fade-up" delay={i * 0.15} className="h-full">
                  <div className="group bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 hover:border-[#EAB308]/30 hover:shadow-[0_20px_60px_rgba(30,58,138,0.08)] transition-all duration-500 h-full flex flex-col hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#EAB308]/8 rounded-bl-full -mr-8 -mt-8 transition-all duration-700 group-hover:scale-[2] group-hover:bg-[#EAB308]/15 blur-xl" />
                    <div className="relative w-16 h-16 rounded-2xl bg-[#1e3a8a] text-white flex items-center justify-center mb-8 group-hover:bg-[#EAB308] transition-colors duration-500 shadow-lg">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="relative text-2xl font-bold mb-4 text-[#1e3a8a] group-hover:text-[#EAB308] transition-colors duration-300">{feature.title}</h3>
                    <p className="relative text-slate-600 leading-relaxed text-lg flex-1">
                      {feature.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us — Premium dark section */}
        <section className="bg-[#0d1f4a] py-24 lg:py-36 relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f4a] via-[#162a63] to-slate-950 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EAB308]/8 rounded-bl-full pointer-events-none blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EAB308]/5 rounded-tr-full pointer-events-none blur-[80px]" />

          <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
            <ScrollReveal effect="fade-up" className="mx-auto max-w-2xl text-center mb-20">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAB308]/15 border border-[#EAB308]/30 text-[#EAB308] text-xs font-semibold uppercase tracking-widest mb-6">
                The Solara Difference
              </span>
              <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold tracking-tight text-white">
                No hidden fees. <span className="text-[#EAB308]">Zero BS.</span>
              </h2>
              <p className="mt-4 text-xl text-white/60">Four uncompromisable promises we make to every single customer.</p>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { image: imgPanel, title: "Tier-1 Hardware Only", desc: "We refuse to install cheap knockoffs. We exclusively deploy bankable, top-tier panels engineered to thrive for over 25 years." },
                { image: imgDocument, title: "We Fight the Bureaucracy", desc: "Permits and utility paperwork are soul-crushing. We ruthlessly execute all of it so you don't have to lift a finger." },
                { image: imgApp, title: "A Flawless App Experience", desc: "Monitor your live energy production, track grid exports, and watch your ROI multiply—all from a beautifully designed mobile app." },
                { image: imgTool, title: "Ironclad Warranties", desc: "If anything drops below peak performance in the next decade, our team is on it. No haggling. Just immediate resolution." },
              ].map((f, i) => (
                <ScrollReveal key={f.title} effect="fade-up" delay={i * 0.1} className="h-full">
                  <div className="h-full rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-md p-8 transition-all duration-500 hover:border-[#EAB308]/40 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(232,147,26,0.1)] hover:-translate-y-2 group flex flex-col relative overflow-hidden">
                    {/* Hover corner curve */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#EAB308]/15 rounded-bl-full translate-x-full -translate-y-full transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />

                    <div className="mb-6 w-16 h-16 rounded-2xl overflow-hidden shadow-md border border-white/10 group-hover:shadow-[0_0_20px_rgba(232,147,26,0.3)] transition-all duration-500 relative z-10">
                      <img src={f.image} alt={f.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-3 relative z-10 group-hover:text-[#EAB308] transition-colors duration-300">{f.title}</h3>
                    <p className="text-white/60 leading-relaxed flex-1 relative z-10 group-hover:text-white/80 transition-colors duration-300">{f.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
