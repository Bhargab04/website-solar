import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { CTA } from "@/components/site/CTA";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Eye, Shield, Target, ArrowRight, Quote } from "lucide-react";

import imgStory from "@/assets/hero-story.webp";
import imgWhatsApp from "@/assets/WhatsApp Image 2026-05-07 at 1.23.45 PM.webp";
import imgShield from "@/assets/real_shield.webp";
import imgPhone from "@/assets/real_phone.webp";
import imgGraph from "@/assets/real_graph.webp";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Our Story — Solara Solar" },
      {
        name: "description",
        content:
          "Read why we started Solara. We're on a mission to bring honest, bullshit-free solar to Indian homes.",
      },
      { property: "og:title", content: "Our Story" },
      { property: "og:description", content: "Honest solar installations that actually save you money." },
      { property: "og:site_name", content: "Solara Energy Solutions" },
    ],
  }),
  component: WhyUsPage,
});

function WhyUsPage() {
  const [activeChap3, setActiveChap3] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Prologue */}
        <section 
          className="relative pt-40 pb-28 lg:pt-52 lg:pb-40 text-center overflow-hidden bg-slate-950"
          style={{ clipPath: "inset(0px)" }}
        >
          {/* Decorative Hero Curves */}
          <div className="absolute top-0 right-0 w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-[#EAB308]/20 rounded-bl-full z-0 pointer-events-none blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] bg-[#5CB85C]/10 rounded-tr-full z-0 pointer-events-none blur-2xl" />

          {/* Native GPU-accelerated fixed background parallax */}
          <div
            className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none -z-10"
            style={{
              backgroundImage: `url(${imgStory})`,
              transform: "translate3d(0,0,0)",
              willChange: "transform"
            }}
          />
          {/* Overlay dark gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent -z-10" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-white">
            <ScrollReveal effect="fade-up" delay={0.05}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-white mb-6 backdrop-blur shadow-sm">
                The Prologue
              </span>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.15}>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-[4.5rem] leading-[1.1]">
                We were just regular people who hated paying power bills.
              </h1>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.25}>
              <p className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-medium">
                We didn't launch Solara to become just another solar contractor. We built it because we couldn't find an honest one when we needed it.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Chapter 1: The Frustration */}
        <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
          {/* Background Orbs */}
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#EAB308]/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 pointer-events-none" />
          <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-[#1e3a8a]/5 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 pointer-events-none" />
          
          <div className="mx-auto max-w-4xl px-6 lg:px-10 relative z-10">
            <ScrollReveal effect="fade-up">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-[#1e3a8a]/30" />
                <span className="text-[#1e3a8a]/60 font-bold uppercase tracking-widest text-sm">Chapter 1: The Frustration</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-10 leading-tight">
                The solar industry was broken. So we experienced it firsthand.
              </h2>
              <div className="prose prose-lg prose-slate max-w-none relative">
                <p className="text-xl leading-relaxed text-slate-600 mb-6 font-medium">
                  A few years ago, we tried to get solar for our own homes. What should have been a straightforward upgrade turned into a nightmare.
                </p>
                <p className="text-lg leading-relaxed text-slate-600 mb-6">
                  The quotes were confusing, laden with jargon designed to obscure the actual costs. The salesmen were pushy, using high-pressure tactics to force a signature before we could even verify the math. And when we asked for references on their "premium" panels, they dodged the question.
                </p>
                
                {/* Enhanced Quote Block */}
                <div className="my-16 p-8 md:p-12 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden group hover:bg-white/80 transition-all duration-500">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#EAB308]/10 rounded-full blur-2xl group-hover:bg-[#EAB308]/20 transition-all duration-500" />
                  <Quote className="absolute top-8 left-8 w-16 h-16 text-[#EAB308]/20 -rotate-12 group-hover:rotate-0 transition-all duration-500" />
                  <p className="relative z-10 font-display text-2xl md:text-3xl font-bold text-[#1e3a8a] leading-relaxed italic text-center px-4">
                    "We realized that solar wasn't the problem. The companies selling it were."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Chapter 2: The Realization */}
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#EAB308]/5 rounded-bl-full pointer-events-none" />
          <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal effect="fade-right">
                <div className="relative aspect-[4/3] group">
                  <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#EAB308]/20 rounded-tr-full rounded-bl-full z-0 blur-xl group-hover:bg-[#EAB308]/40 transition-all duration-700" />
                  <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#1e3a8a]/20 rounded-tl-full rounded-br-full z-0 blur-xl group-hover:bg-[#1e3a8a]/40 transition-all duration-700" />
                  <div className="relative rounded-br-[80px] rounded-tl-[80px] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-2xl h-full w-full z-10 border border-white">
                    <img src={imgWhatsApp} alt="Solara team at work" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[#1e3a8a]/10 group-hover:bg-transparent transition-all duration-500" />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal effect="fade-left">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-12 bg-[#1e3a8a]/30" />
                  <span className="text-[#1e3a8a]/60 font-bold uppercase tracking-widest text-sm">Chapter 2: The Realization</span>
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-8 leading-tight">
                  Born out of frustration. Built for the future.
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                  We knew there had to be a better way. A way to provide transparent pricing, honest energy assessments, and flawless execution without the bureaucracy.
                </p>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                  So we built Solara. No fuzzy math. No hidden installation fees. We just look at your roof, do the math, and tell you if solar actually makes financial sense. If it doesn't, we'll be the first to tell you to walk away.
                </p>
                <div className="font-hand text-4xl text-[#EAB308] -rotate-2">
                  — The Founders
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Chapter 3: The Standard (Interactive Typography) */}
        <section 
          className="py-24 lg:py-32 relative overflow-hidden transition-all duration-1000 bg-white"
        >
          {/* Abstract geometric background lines */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none transition-opacity duration-1000" 
               style={{ 
                 backgroundImage: 'radial-gradient(circle at 2px 2px, #1e3a8a 1px, transparent 0)', 
                 backgroundSize: '40px 40px',
               }} />
               
          <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 pb-12">
              <ScrollReveal effect="fade-right">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-[#1e3a8a]/30" />
                  <span className="text-[#1e3a8a]/60 font-bold uppercase tracking-widest text-sm">Chapter 3</span>
                </div>
                <h2 className="font-display text-5xl lg:text-7xl font-bold text-[#1e3a8a] tracking-tight">
                  The Solara<br/>Standard.
                </h2>
              </ScrollReveal>
              <ScrollReveal effect="fade-left">
                <p className="text-xl text-slate-600 font-medium max-w-md mb-2">
                  We don't do "good enough." These are the non-negotiable principles that drive every installation.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { 
                  title: "Radical Transparency", 
                  desc: "We show you the exact math. If solar doesn't make financial sense for your home, we'll be the first to tell you to walk away.",
                  tags: ["No Hidden Fees", "Open Book Math", "Honest Advice"]
                },
                { 
                  title: "Uncompromising Quality", 
                  desc: "We refuse to install cheap hardware. Every panel and inverter we use is tier-1 and built to outlast your roof.",
                  tags: ["Tier-1 Hardware", "Architectural Integration", "Maximum Yield"]
                },
                { 
                  title: "Absolute Accountability", 
                  desc: "No passing the buck. From the initial design to the 25-year maintenance period, we are your single point of contact.",
                  tags: ["Zero Outsourcing", "Single Point of Contact", "In-house Crews"]
                }
              ].map((val, i) => (
                <ScrollReveal key={val.title} effect="fade-up" delay={i * 0.1}>
                  <div 
                    onMouseEnter={() => setActiveChap3(i)}
                    onMouseLeave={() => setActiveChap3(null)}
                    className={`group relative overflow-hidden rounded-[2rem] border transition-all duration-500 p-8 lg:p-12 flex flex-col md:flex-row md:items-center gap-8 lg:gap-16 cursor-default
                      ${activeChap3 === i ? 'bg-white border-[#1e3a8a]/20 shadow-[0_20px_40px_rgba(30,58,138,0.05)] scale-[1.02]' : 'bg-slate-50 border-slate-200 hover:bg-slate-100/50'}
                      ${activeChap3 !== null && activeChap3 !== i ? 'opacity-40 grayscale blur-[2px]' : 'opacity-100 blur-0'}
                    `}
                  >
                    <div className="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 text-[140px] lg:text-[200px] font-display font-bold leading-none opacity-15 text-[#1e3a8a] group-hover:text-[#EAB308] group-hover:opacity-25 transition-all duration-700 pointer-events-none">
                      0{i + 1}
                    </div>
                    
                    <div className="flex-1 relative z-10">
                      <h3 className="font-display text-3xl lg:text-5xl font-bold text-[#1e3a8a] mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500">{val.title}</h3>
                      <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mb-8 group-hover:text-slate-800 transition-colors duration-500">{val.desc}</p>
                      
                      <div className="flex flex-wrap gap-3">
                        {val.tags.map(tag => (
                          <span key={tag} className="px-4 py-2 rounded-full border border-slate-200 text-xs font-bold text-slate-500 tracking-widest uppercase group-hover:border-[#1e3a8a]/30 group-hover:text-[#1e3a8a] transition-all duration-500 bg-white">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Epilogue: The Promise */}
        <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1e3a8a]/5 rounded-tl-full pointer-events-none" />
          <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
            <ScrollReveal effect="fade-up" className="mx-auto max-w-2xl text-center mb-16">
              <span className="text-[#1e3a8a]/60 font-bold uppercase tracking-widest text-sm">The Epilogue</span>
              <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight text-[#1e3a8a]">
                If we mess up, we fix it.
              </h2>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              {[
                { img: imgShield, title: "5-Year Everything Warranty", desc: "If a panel breaks or an inverter dies in the next 5 years, we replace it. No arguing, no hidden fees." },
                { img: imgPhone, title: "We actually pick up the phone", desc: "No chatbots. No endless phone trees. If you have a problem, you call us, and a real person helps you." },
                { img: imgGraph, title: "It works, or we pay", desc: "We tell you exactly how much power you'll generate. If your system falls short, we write you a check for the difference." },
              ].map((c, i) => (
                <ScrollReveal key={c.title} effect="fade-up" delay={i * 0.12} className="h-full">
                  <div className={`group h-full rounded-tl-[40px] rounded-br-[40px] rounded-tr-xl rounded-bl-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-[0_20px_40px_rgb(134,202,107,0.15)] hover:-translate-y-2 hover:border-[#EAB308]/50 flex flex-col relative overflow-hidden ${i === 1 ? "md:-translate-y-4" : ""}`}>
                    {/* Decorative hover curves */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#EAB308]/10 rounded-bl-full translate-x-full -translate-y-full transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#1e3a8a]/5 rounded-tr-full -translate-x-full translate-y-full transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
                    
                    <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 shadow-md border border-slate-100 group-hover:shadow-[0_0_20px_rgba(134,202,107,0.4)] transition-all duration-500">
                      <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#1e3a8a] mb-3 relative z-10">{c.title}</h3>
                    <p className="text-slate-600 leading-relaxed flex-1 relative z-10">{c.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal effect="fade-up" delay={0.2} className="mt-16 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#EAB308] px-8 py-4 text-base font-bold text-[#1e3a8a] shadow-lg shadow-[#EAB308]/20 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#EAB308]/30"
              >
                Let's chat about your roof
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full bg-white border-2 border-slate-200 px-8 py-4 text-base font-bold text-[#1e3a8a] transition-all hover:bg-slate-50 hover:border-slate-300"
              >
                What we can do for you
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

