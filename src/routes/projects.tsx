import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { ProjectsGridShowcase } from "@/components/site/ProjectsGridShowcase";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowRight } from "lucide-react";

import imgHero from "@/assets/pexels-giantasparagus-35501734.webp";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Work — Solara Solar" },
      {
        name: "description",
        content:
          "Take a look at some of the solar systems we've built recently. No stock photos. Just real panels saving real money.",
      },
      { property: "og:title", content: "Our Work — Solara Solar" },
      { property: "og:description", content: "Real solar installations delivering real savings across India." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Dark Hero Section — matches Services & Why Us */}
        <section 
          className="relative pt-40 pb-28 lg:pt-52 lg:pb-40 text-center overflow-hidden bg-slate-950"
          style={{ clipPath: "inset(0px)" }}
        >
          {/* Decorative Hero Curves */}
          <div className="absolute top-0 right-0 w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-slate-800/40 rounded-bl-full z-0 pointer-events-none blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] bg-[#5CB85C]/15 rounded-tr-full z-0 pointer-events-none blur-2xl" />

          {/* Native GPU-accelerated fixed background parallax */}
          <div
            className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none -z-10"
            style={{
              backgroundImage: `url(${imgHero})`,
              transform: "translate3d(0,0,0)",
              willChange: "transform"
            }}
          />
          {/* Overlay dark gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent -z-10" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-white">
            <ScrollReveal effect="fade-up" delay={0.05}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-white mb-6 backdrop-blur shadow-sm">
                Our Portfolio
              </span>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.15}>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-[4.5rem] leading-[1.1]">
                Real projects.<br />
                <span className="text-[#5CB85C]">Real results.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.25}>
              <p className="mt-6 text-lg lg:text-xl text-blue-100/80 leading-relaxed max-w-2xl mx-auto font-medium">
                No renders. No stock photos. Just real panels on real roofs, saving real money for real people across India.
              </p>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.35}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-[#5CB85C] text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-[#5CB85C]/20 hover:-translate-y-0.5 hover:bg-[#4aa54a] transition-all duration-300 text-base"
                >
                  Get a Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/why-us" 
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-8 py-4 rounded-full backdrop-blur hover:bg-white/20 transition-all duration-300 text-base shadow-sm"
                >
                  Why Choose Solara
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Projects compact grid showcase */}
        <ProjectsGridShowcase />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

