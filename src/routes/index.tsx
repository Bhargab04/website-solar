import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Ticker } from "@/components/site/Ticker";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { SolarParallax } from "@/components/site/SolarParallax";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { 
        title: "Solara Energy Solutions | Best Solar Company in Assam & Northeast India" 
      },
      {
        name: "description",
        content:
          "Solara Energy Solutions is the leading solar energy company in Assam and Northeast India. We provide premium residential, commercial, and industrial rooftop solar installations with APDCL net metering, PM Surya Ghar subsidy registration, and a 25-year warranty.",
      },
      {
        name: "keywords",
        content:
          "solar company Assam, solar panels Assam, solar installation Assam, best solar company in Assam, rooftop solar Assam, solar energy Northeast India, PM Surya Ghar vendor Assam, commercial solar plant Assam, residential solar system Assam",
      },
      { property: "og:title", content: "Solara Energy Solutions | Best Solar Company in Assam & Northeast India" },
      {
        property: "og:description",
        content: "Save up to 90% on electricity bills with Assam's leading rooftop solar partner. Empanelled PM Surya Ghar vendor. Turnkey EPC solutions.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Solara Energy Solutions",
    "image": "https://www.solaraenergysolutions.in/assets/logo.png",
    "priceRange": "$$$",
    "telephone": "+91-81016555",
    "url": "https://www.solaraenergysolutions.in/",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "GS Road",
      "addressLocality": "Guwahati",
      "addressRegion": "Assam",
      "postalCode": "781005",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.1445,
      "longitude": 91.7362
    },
    "description": "Solara Energy Solutions is the leading solar energy company and empanelled rooftop solar installation vendor in Assam and Northeast India, providing turnkey on-grid solar power systems, PM Surya Ghar subsidy help, and APDCL net metering."
  };
  return (
    <div className="min-h-screen bg-background">
      {/* Inject JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <WhyUs />
          <Process />
        <Testimonials />

        <SolarParallax />

        <CTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

