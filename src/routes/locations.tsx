import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MapPin, ArrowRight, Sun, Award, Shield } from "lucide-react";

const CITIES = [
  { id: "guwahati", name: "Guwahati", region: "Lower Assam" },
  { id: "dibrugarh", name: "Dibrugarh", region: "Upper Assam" },
  { id: "jorhat", name: "Jorhat", region: "Upper Assam" },
  { id: "silchar", name: "Silchar", region: "Barak Valley" },
  { id: "nagaon", name: "Nagaon", region: "Central Assam" },
  { id: "tinsukia", name: "Tinsukia", region: "Upper Assam" },
  { id: "tezpur", name: "Tezpur", region: "North Bank" },
  { id: "bongaigaon", name: "Bongaigaon", region: "Lower Assam" },
  { id: "golaghat", name: "Golaghat", region: "Upper Assam" },
  { id: "sivasagar", name: "Sivasagar", region: "Upper Assam" },
  { id: "barpeta", name: "Barpeta", region: "Lower Assam" },
  { id: "dhubri", name: "Dhubri", region: "Lower Assam" },
  { id: "karimganj", name: "Karimganj", region: "Barak Valley" },
  { id: "lakhimpur", name: "Lakhimpur", region: "North Bank" },
  { id: "north-lakhimpur", name: "North Lakhimpur", region: "North Bank" },
  { id: "kokrajhar", name: "Kokrajhar", region: "Lower Assam" },
  { id: "mangaldoi", name: "Mangaldoi", region: "Central Assam" }
];

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations We Serve in Assam | Solara Energy Solutions" },
      {
        name: "description",
        content: "Solara Energy Solutions is a certified solar vendor in Assam serving homes, businesses, and tea estates. Discover local solar installation services, PM Surya Ghar subsidy help, and APDCL grid instructions for your city.",
      },
      {
        name: "keywords",
        content: "solar vendor in assam, empanelled solar vendor assam, solar company guwahati, solar company jorhat, solar company dibrugarh, solar panels assam, pm surya ghar vendor assam",
      }
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <main>
        {/* Premium Hero Section */}
        <section className="relative pt-40 pb-28 lg:pt-52 lg:pb-40 text-center overflow-hidden bg-slate-950">
          <div className="absolute top-0 right-0 w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-slate-800/40 rounded-bl-full z-0 pointer-events-none blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] bg-[#5CB85C]/10 rounded-tr-full z-0 pointer-events-none blur-2xl" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-white">
            <ScrollReveal effect="fade-up" delay={0.05}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-white mb-6 backdrop-blur-sm shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#5CB85C]" />
                Assam Coverage Grid
              </span>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.15}>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-[4.5rem] leading-[1.1] text-white">
                Locations We Serve in <br />
                <span className="text-[#5CB85C]">Assam & Northeast</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.25}>
              <p className="mt-6 text-lg lg:text-xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto font-medium">
                Find the best solar rooftop installations, PM Surya Ghar Muft Bijli Yojana subsidies, and net metering support tailored to your municipality.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Cities Directory Grid */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <ScrollReveal effect="fade-up">
                <h2 className="text-3xl lg:text-4xl font-bold font-display text-[#1B4F8A]">
                  Select Your City
                </h2>
                <p className="text-slate-500 mt-3">
                  Click on your location below to see customized solar rooftop pricing, state and central subsidies, and local APDCL grid instructions.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {CITIES.map((city, idx) => (
                <ScrollReveal key={city.id} effect="fade-up" delay={idx * 0.03}>
                  <Link
                    to="/solar-company-$cityId"
                    params={{ cityId: city.id }}
                    className="group flex flex-col justify-between p-6 rounded-3xl border border-slate-100 bg-slate-50/50 shadow-xs hover:bg-white hover:border-[#5CB85C]/35 hover:shadow-[0_15px_30px_rgba(27,79,138,0.05)] transition-all duration-300 h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100/80 px-2.5 py-1 rounded-full group-hover:bg-[#5CB85C]/10 group-hover:text-[#5CB85C] transition-colors">
                          {city.region}
                        </span>
                        <MapPin className="w-4 h-4 text-slate-300 group-hover:text-[#5CB85C] transition-colors" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-[#1B4F8A] mt-4 group-hover:text-[#1B4F8A] transition-colors">
                        Solar Company {city.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        Claim up to ₹1,30,800 subsidy under PM Surya Ghar and install Tier-1 Adani solar panels in {city.name}.
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#1B4F8A] group-hover:text-[#5CB85C] transition-colors">
                      View Local Pricing <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* State-wide service features */}
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200/50 shadow-xs text-center space-y-4">
                <div className="w-12 h-12 bg-[#EBF5FA] text-[#1B4F8A] rounded-2xl flex items-center justify-center mx-auto"><Sun className="w-6 h-6" /></div>
                <h3 className="font-display font-bold text-lg text-[#1B4F8A]">State-wide Empanelment</h3>
                <p className="text-xs text-slate-500 leading-relaxed">We serve all regions of Assam, ensuring hassle-free processing of the central government solar subsidy and state subsidy payouts.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-200/50 shadow-xs text-center space-y-4">
                <div className="w-12 h-12 bg-[#EBF5FA] text-[#1B4F8A] rounded-2xl flex items-center justify-center mx-auto"><Award className="w-6 h-6" /></div>
                <h3 className="font-display font-bold text-lg text-[#1B4F8A]">Certified APDCL Partner</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Our grid-tie solar plants comply fully with APDCL guidelines for bi-directional net metering installation and safety standards.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-200/50 shadow-xs text-center space-y-4">
                <div className="w-12 h-12 bg-[#EBF5FA] text-[#1B4F8A] rounded-2xl flex items-center justify-center mx-auto"><Shield className="w-6 h-6" /></div>
                <h3 className="font-display font-bold text-lg text-[#1B4F8A]">25-Year Protection</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Every residential, commercial, or industrial installation is backed by global manufacturer warranties and local service support.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
