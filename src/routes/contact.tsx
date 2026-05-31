import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Contact } from "@/components/site/Contact";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Solara Solar" },
      {
        name: "description",
        content:
          "Get in touch with Solara for a free solar quote. Our team responds within 24 hours. Chat on WhatsApp or fill in the contact form.",
      },
      { property: "og:title", content: "Contact Solara Solar" },
      { property: "og:description", content: "Free quote in under 24 hours. Chat on WhatsApp or fill our form." },
    ],
  }),
  component: ContactPage,
});

const offices = [
  { city: "Bengaluru", addr: "12th Main, Indiranagar, Bengaluru 560038", phone: "+91 80 4444 5555" },
  { city: "Mumbai", addr: "Bandra Kurla Complex, Mumbai 400051", phone: "+91 22 3333 4444" },
  { city: "Delhi NCR", addr: "Cyber City, Gurugram, Haryana 122002", phone: "+91 11 2222 3333" },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-soft pt-36 pb-10 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <ScrollReveal effect="fade-up" delay={0.05}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Say Hello</span>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.15}>
              <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">
                Let's talk about{" "}
                <span className="text-[#EAB308]">your roof.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.25}>
              <p className="mt-5 text-lg text-muted-foreground">
                Fill out the form below. We promise not to spam you or sell your info.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact form section */}
        <Contact />

        {/* Office locations */}
        <section className="border-t border-border bg-background py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <ScrollReveal effect="fade-up" className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Find us</span>
            </ScrollReveal>

            <ScrollReveal effect="fade-up" delay={0.1}>
              <div className="mt-8 border-[3px] border-[#1B4F8A] rounded-2xl p-6 lg:p-10 shadow-lg bg-card">
                <div className="relative h-[500px] w-full overflow-hidden rounded-xl bg-card pointer-events-none sm:pointer-events-auto">
                  {/* Hide the default Google Maps white place card */}
                  <iframe
                    className="absolute left-0 w-full"
                    style={{ top: "-150px", height: "calc(100% + 150px)", border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://maps.google.com/maps?q=AAC%20Commercial%20Complex,%20Sati%20Joymati%20Rd,%20Athgaon,%20Guwahati,%20Assam%20781001,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    title="Solara Energy Office Location"
                  ></iframe>

                  {/* Open in Maps Overlay Button */}
                  <a
                    href="https://maps.google.com/maps?q=AAC%20Commercial%20Complex,%20Sati%20Joymati%20Rd,%20Athgaon,%20Guwahati,%20Assam%20781001,%20India"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded bg-white px-3 py-2 text-sm font-medium text-[#1a73e8] shadow-[0_1px_4px_rgba(0,0,0,0.3)] hover:bg-gray-50 transition-colors pointer-events-auto"
                  >
                    Open in Maps
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

