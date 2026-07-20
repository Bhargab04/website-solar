import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Ticker } from "@/components/site/Ticker";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { SuryaGhar } from "@/components/site/SuryaGhar";
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
        title: "Solara Energy Solutions | Best Solar Company & Empanelled Solar Vendor in Assam" 
      },
      {
        name: "description",
        content:
          "Assam's leading empanelled solar vendor and rooftop partner. Premium residential, commercial & industrial solar installations with APDCL net metering and PM Surya Ghar subsidies.",
      },
      {
        name: "keywords",
        content:
          "solar vendor in Assam, empanelled solar vendor in Assam, solar company Assam, solar panels Assam, solar installation Assam, best solar company in Assam, rooftop solar Assam, solar energy Northeast India, PM Surya Ghar vendor Assam, commercial solar plant Assam, residential solar system Assam",
      },
      { property: "og:title", content: "Solara Energy Solutions | Best Solar Company & Empanelled Solar Vendor in Assam" },
      {
        property: "og:description",
        content: "Save up to 90% on electricity bills with Assam's leading empanelled solar vendor and rooftop solar partner. PM Surya Ghar empanelled vendor. Turnkey EPC solutions.",
      },
      { property: "og:site_name", content: "Solara Energy Solutions" },
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Solara Energy Solutions",
    "url": "https://www.solaraenergysolutions.in/"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Inject JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <SuryaGhar />
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

