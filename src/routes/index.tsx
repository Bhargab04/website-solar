import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Ticker } from "@/components/site/Ticker";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solara — Stop paying the power company so much." },
      {
        name: "description",
        content:
          "We install solar panels that actually work. We'll handle the paperwork, do a clean install, and get your power bill down to near zero.",
      },
      { property: "og:title", content: "Solara — Stop paying the power company" },
      {
        property: "og:description",
        content: "Stop renting your power. Own it.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <WhyUs />
          <Process />
        <Testimonials />

        <CTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

