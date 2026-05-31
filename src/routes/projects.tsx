import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { ProjectsGridShowcase } from "@/components/site/ProjectsGridShowcase";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import imgHero from "@/assets/pexels-giantasparagus-35501734.jpg";

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
        <section className="relative pt-40 pb-28 lg:pt-52 lg:pb-40 text-center overflow-hidden bg-[#0D2B55]">
          {/* Decorative Hero Curves */}
          <div className="absolute top-0 right-0 w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-[#5BB5DC]/30 rounded-bl-full z-0 pointer-events-none blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] bg-[#5CB85C]/20 rounded-tr-full z-0 pointer-events-none blur-2xl" />

          <div className="absolute inset-0 z-0">
            <img src={imgHero} alt="Solar installation" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B55] via-[#0D2B55]/50 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-white">
            <ScrollReveal effect="fade-up" delay={0.05}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-white mb-6 backdrop-blur shadow-sm">
                Our Portfolio
              </span>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.15}>
              <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-7xl lg:text-[5rem] leading-[1.05]">
                Real projects.<br />
                <span className="text-[#5CB85C]">Real results.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.25}>
              <p className="mt-8 text-xl lg:text-2xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto font-medium">
                No renders. No stock photos. Just real panels on real roofs, saving real money for real people across India.
              </p>
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

