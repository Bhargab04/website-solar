import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { CTA } from "@/components/site/CTA";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  Cpu, 
  Settings, 
  ClipboardCheck, 
  Headphones, 
  Shield, 
  Heart,
  Sun,
  Droplet,
  Thermometer,
  Zap,
  Activity,
  Flame,
  ChevronDown,
  HelpCircle
} from "lucide-react";

// Brand-consistent image assets
import imgPowerPlant from "@/assets/solar-power-plant.webp";
import imgWaterPump from "@/assets/solar-water-pump.webp";
import imgWaterHeater from "@/assets/solar-water-heater.webp";
import imgHero from "@/assets/hero-services.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Solara Energy Solutions" },
      {
        name: "description",
        content:
          "Explore Solara's high-performance solar solutions: Solar Power Plants, Solar Water Pumps, and Solar Water Heaters designed for homes, businesses, and farms.",
      },
      { property: "og:title", content: "Our Services — Solara Energy Solutions" },
      { property: "og:description", content: "Advanced, clean, and reliable solar energy systems engineered for efficiency and long-term savings." },
      { property: "og:site_name", content: "Solara Energy Solutions" },
    ],
  }),
  component: ServicesPage,
});

const servicesList = [
  {
    id: "power-plants",
    title: "Solar Power Plants",
    tagline: "Clean Energy. Lower Bills. Sustainable Growth.",
    desc: "Transform sunlight into reliable, cost-effective electricity with our advanced solar power plant solutions. We provide complete solar energy systems for residential, commercial, industrial, and institutional projects. Our solutions are engineered to maximize energy production, reduce operational costs, and support a greener future.",
    longDesc: "Whether you are a homeowner looking to cut electricity expenses or a business seeking long-term energy independence, our solar power plants deliver efficient and environmentally responsible power generation for decades.",
    image: imgPowerPlant,
    category: "Infrastructure",
    icon: Sun,
    badgeText: "Up to 90% Bill Reduction",
    badgeIcon: Zap,
    stats: [
      { label: "CO2 Offset / Year", value: "8.4 Tons" },
      { label: "Performance Ratio", value: "82%+" }
    ],
    highlights: [
      "Residential, Commercial & Industrial Installations",
      "High-Efficiency Solar Panels",
      "Reduced Electricity Costs",
      "Long-Term Energy Savings",
      "Sustainable & Eco-Friendly Energy",
      "Low Maintenance Requirements",
      "Expert Design & Installation"
    ]
  },
  {
    id: "water-pumps",
    title: "Solar Water Pumps",
    tagline: "Sustainable Water Solutions for Agriculture & Rural Development",
    desc: "Empower farms and rural communities with reliable solar-powered water pumping systems. Our solar water pumps utilize renewable energy to efficiently draw and distribute water without depending on expensive fuel or unstable grid connections.",
    longDesc: "Designed for agricultural irrigation, livestock watering, and rural water supply, these systems help reduce operating costs while ensuring a dependable source of water throughout the year.",
    image: imgWaterPump,
    category: "Agriculture",
    icon: Droplet,
    badgeText: "Zero Fuel Cost",
    badgeIcon: Activity,
    stats: [
      { label: "Flow Rate / Day", value: "Up to 150kL" },
      { label: "Grid Independence", value: "100%" }
    ],
    highlights: [
      "Ideal for Agriculture & Irrigation",
      "No Fuel Costs",
      "Low Operating Expenses",
      "Reliable Daytime Water Supply",
      "Environmentally Friendly Operation",
      "Durable & Weather-Resistant Systems",
      "Perfect for Remote Locations"
    ]
  },
  {
    id: "water-heaters",
    title: "Solar Water Heaters",
    tagline: "Smart Water Heating Powered by the Sun",
    desc: "Enjoy an uninterrupted supply of hot water while significantly reducing electricity consumption. Our solar water heating systems capture solar thermal energy to efficiently heat water for residential, commercial, and institutional applications.",
    longDesc: "Perfect for homes, hotels, hospitals, hostels, and commercial facilities, these systems provide a sustainable and cost-effective alternative to conventional water heating methods.",
    image: imgWaterHeater,
    category: "Thermal Technology",
    icon: Thermometer,
    badgeText: "80% Thermal Efficiency",
    badgeIcon: Flame,
    stats: [
      { label: "Return on Investment", value: "2-3 Years" },
      { label: "Temperature Reach", value: "Up to 80°C" }
    ],
    highlights: [
      "Energy-Efficient Water Heating",
      "Reduced Utility Bills",
      "Continuous Hot Water Supply",
      "Eco-Friendly Technology",
      "Durable & Long-Lasting Systems",
      "Suitable for Residential & Commercial Use",
      "Fast Return on Investment"
    ]
  }
];

const advantages = [
  {
    title: "Industry Expertise",
    desc: "Years of experience designing high-yield solar infrastructure for diverse residential and commercial applications.",
    icon: Award
  },
  {
    title: "Certified Solar Professionals",
    desc: "Our in-house team of certified engineers executes precision installations adhering to international safety codes.",
    icon: ShieldCheck
  },
  {
    title: "High-Quality Components",
    desc: "We exclusively deploy Tier-1 global solar panels, robust inverters, and durable weather-resistant structures.",
    icon: Cpu
  },
  {
    title: "Customized Energy Solutions",
    desc: "Every solar system is custom-engineered to optimize lifetime yield based on your specific location and shade profile.",
    icon: Settings
  },
  {
    title: "End-to-End Project Management",
    desc: "From site audits and net-metering approvals to logistics and testing, we handle all the bureaucracy for you.",
    icon: ClipboardCheck
  },
  {
    title: "Reliable After-Sales Support",
    desc: "Dedicated operations center and active field teams ensure immediate troubleshooting and routine maintenance.",
    icon: Headphones
  },
  {
    title: "Warranty-Backed Installations",
    desc: "Comprehensive equipment warranties and performance guarantees ensure peace of mind for 25+ years.",
    icon: Shield
  },
  {
    title: "Proven Customer Satisfaction",
    desc: "Over 500 successful installations across India backed by transparent pricing, integrity, and trust.",
    icon: Heart
  }
];

const faqs = [
  {
    q: "Is Roof Top Solar fully free?",
    a: (
      <>
        It is not fully free, but there is a <strong>very huge amount of subsidy</strong> provided by the Government of India. There are subsidies from both the central and state governments after installation.
      </>
    )
  },
  {
    q: "How much is the Central & State Government Subsidy?",
    a: (
      <div className="space-y-4">
        <p>Assam is a special category state, hence the central subsidy here is <strong>10% higher</strong> than in other states.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-bold text-[#1B4F8A] text-xs uppercase tracking-wider mb-2">Central Govt Subsidy (Assam)</h4>
            <ul className="text-xs space-y-1 text-slate-600">
              <li>• 1 kW: ₹33,000</li>
              <li>• 2 kW: ₹66,000</li>
              <li>• 3 kW & Above: ₹85,800</li>
            </ul>
          </div>
          
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-bold text-[#1B4F8A] text-xs uppercase tracking-wider mb-2">Assam State Govt Subsidy</h4>
            <ul className="text-xs space-y-1 text-slate-600">
              <li>• 1 kW: ₹15,000</li>
              <li>• 2 kW: ₹30,000</li>
              <li>• 3 kW & Above: ₹45,000</li>
            </ul>
          </div>
          
          <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
            <h4 className="font-bold text-emerald-800 text-xs uppercase tracking-wider mb-2">Total Subsidy (Assam Combined)</h4>
            <ul className="text-xs space-y-1 text-emerald-700 font-semibold">
              <li>• 1 kW: ₹48,000</li>
              <li>• 2 kW: ₹96,000</li>
              <li>• 3 kW & Above: ₹1,30,800</li>
            </ul>
          </div>
        </div>
        
        <p className="text-xs text-slate-400 italic">Note: Every state has an additional State Subsidy which varies from state to state.</p>
      </div>
    )
  },
  {
    q: "How to get State Subsidy?",
    a: (
      <>
        There is <strong>no extra document submission or paperwork needed</strong> to get the State Subsidy. After your Central Government Subsidy payment is processed, the State Government will release their subsidy directly to your registered bank account automatically.
      </>
    )
  },
  {
    q: "How many Units are generated in one month?",
    a: (
      <>
        A <strong>1 kW solar panel system</strong> generates a minimum of <strong>100 units per month</strong>. In summers, this output can increase to <strong>100 to 130 units per month</strong>. Higher capacity systems (2 kW, 3 kW, etc.) will increase production proportionally.
      </>
    )
  },
  {
    q: "Will I get batteries also in this package?",
    a: (
      <>
        No. This is an <strong>On-Grid system</strong>, which does not require any battery storage system. If you produce more solar energy than you consume, it will automatically feed into the <strong>APDCL grid</strong>. If you produce less than your demand, the APDCL grid will directly supply the extra electricity. There is no need or extra cost for battery storage.
      </>
    )
  },
  {
    q: "Will the Solar System work during a power cut from APDCL?",
    a: (
      <>
        No. The solar system will shut down during an APDCL power outage. This is a critical safety feature designed to <strong>protect linemen and utility workers</strong>. If a lineman is working on the grid lines and APDCL has cut power for safety, but your solar system continues to supply power to the grid, the lineman's life would be compromised.
      </>
    )
  },
  {
    q: "What is Net Metering?",
    a: (
      <>
        Net Metering is a billing mechanism that allows you to send excess electricity generated by your solar system to the <strong>APDCL grid</strong>. The exported units are adjusted against the electricity you consume from the grid, helping reduce your electricity bill.
      </>
    )
  },
  {
    q: "How long do solar panels last?",
    a: (
      <>
        Solar panels typically have a lifespan of <strong>25 years or more</strong>. Most manufacturers provide a performance warranty of 25 years, ensuring efficient power generation over the long term.
      </>
    )
  },
  {
    q: "What maintenance is required for a rooftop solar system?",
    a: (
      <>
        Solar systems require very little maintenance. <strong>Cleaning the panels once every 15–30 days</strong> to remove dust, leaves, and bird droppings is usually sufficient to maintain optimal performance.
      </>
    )
  },
  {
    q: "Will solar panels work during cloudy or rainy days?",
    a: (
      <>
        Yes, solar panels continue to generate electricity during cloudy and rainy weather, although the generation will be <strong>lower compared to bright sunny days</strong>.
      </>
    )
  },
  {
    q: "Can I run my entire house on solar power?",
    a: (
      <>
        Yes. The size of the solar system can be designed according to your electricity consumption. A properly sized system can offset a <strong>major portion or even the entire electricity bill</strong>.
      </>
    )
  },
  {
    q: "How much can I save on my electricity bill?",
    a: (
      <>
        Savings depend on your monthly electricity consumption and the size of the installed solar system. Many homeowners reduce their electricity bills by <strong>70%–100%</strong> after installing rooftop solar.
      </>
    )
  },
  {
    q: "How long does the installation process take?",
    a: (
      <>
        After site survey and approval, installation usually takes <strong>1–3 days</strong>. The subsidy and net-metering approval process may take additional time depending on APDCL procedures.
      </>
    )
  }
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main>
        {/* Premium Hero Section - clean light backdrop with navy glaze overlay for visibility */}
        <section 
          className="relative pt-40 pb-28 lg:pt-52 lg:pb-40 text-center overflow-hidden bg-slate-950"
          style={{ clipPath: "inset(0px)" }}
        >
          {/* Decorative Soft Blur Circles */}
          <div className="absolute top-0 right-0 w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-slate-800/40 rounded-bl-full z-0 pointer-events-none blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] bg-[#5CB85C]/10 rounded-tr-full z-0 pointer-events-none blur-2xl" />
          
          {/* Native GPU-accelerated fixed background parallax */}
          <div
            className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none -z-10"
            style={{
              backgroundImage: `url(${imgHero})`,
              transform: "translate3d(0,0,0)",
              willChange: "transform"
            }}
          />
          {/* Overlay dark multiply and gradients */}
          <div className="absolute inset-0 bg-slate-950/15 mix-blend-multiply -z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950/25 -z-10" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-white">
            <ScrollReveal effect="fade-up" delay={0.05}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-white mb-6 backdrop-blur-sm shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5CB85C] animate-pulse" />
                All our solar services
              </span>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.15}>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-[4.5rem] leading-[1.1] text-white drop-shadow-[0_4px_12px_rgba(13,43,85,0.4)]">
                Clean energy.<br />
                <span className="text-[#5CB85C]">Engineered for life.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.25}>
              <p className="mt-6 text-lg lg:text-xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-[0_2px_6px_rgba(13,43,85,0.3)]">
                High-performance solar installations designed to eliminate utility bills, power agriculture, and provide sustainable thermal water heating.
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

        {/* Services Alternating Layout Showcase */}
        <section className="py-24 lg:py-36 bg-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#5BB5DC]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#5CB85C]/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
            <div className="space-y-28 lg:space-y-40">
              {servicesList.map((service, index) => {
                const isEven = index % 2 === 0;
                const BadgeIcon = service.badgeIcon;
                
                return (
                  <div 
                    key={service.id}
                    id={service.id}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center scroll-mt-28"
                  >
                    {/* Visual Media Column */}
                    <div className={`lg:col-span-6 relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <ScrollReveal effect={isEven ? "fade-left" : "fade-right"} className="relative group">
                        {/* Interactive Ambient Backdrop */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#5BB5DC]/10 to-[#5CB85C]/15 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        
                        <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl border border-slate-100 bg-white">
                          <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1B4F8A]/40 via-transparent to-transparent" />
                          
                          {/* Image Floating Badge */}
                          <div className="absolute top-6 left-6">
                            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur border border-slate-100 text-xs font-bold text-[#1B4F8A] shadow-md">
                              <span className="p-1 rounded-lg bg-[#5CB85C]/15 text-[#5CB85C]">
                                <BadgeIcon className="w-3.5 h-3.5" />
                              </span>
                              {service.badgeText}
                            </span>
                          </div>
                        </div>

                        {/* Overlapping Stats Panel */}
                        <div className={`absolute -bottom-8 ${isEven ? "-left-4 lg:-left-8" : "-right-4 lg:-right-8"} bg-[#1B4F8A] text-white p-6 rounded-3xl shadow-xl border border-white/10 hidden sm:flex items-center gap-6 z-10 hover:-translate-y-1 transition-transform duration-300`}>
                          {service.stats.map((stat, sIdx) => (
                            <div key={sIdx} className="flex flex-col pr-6 last:pr-0 last:border-0 border-r border-white/10">
                              <span className="text-2xl font-extrabold text-white font-display">{stat.value}</span>
                              <span className="text-[11px] text-blue-200 uppercase font-bold tracking-wider mt-0.5">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                      </ScrollReveal>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-6 flex flex-col justify-center ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <ScrollReveal effect={isEven ? "fade-right" : "fade-left"}>
                        <div className="flex items-center gap-3 mb-5">
                          <div className="h-0.5 w-10 bg-[#5CB85C]" />
                          <span className="text-[#5CB85C] font-bold uppercase tracking-widest text-xs">{service.category}</span>
                        </div>
                        
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1B4F8A] mb-4 leading-[1.1]">
                          {service.title}
                        </h2>
                        
                        <h3 className="text-lg font-bold text-[#2E7EC0] mb-6 leading-snug">
                          {service.tagline}
                        </h3>
                        
                        <p className="text-base text-slate-500 mb-4 leading-relaxed">
                          {service.desc}
                        </p>
                        
                        <p className="text-base text-slate-500 mb-8 leading-relaxed">
                          {service.longDesc}
                        </p>

                        {/* Checklist */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 mb-10">
                          {service.highlights.map((highlight, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-3">
                              <span className="w-5 h-5 rounded-full bg-[#5CB85C]/15 flex items-center justify-center shrink-0 mt-0.5 text-[#5CB85C]">
                                <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={3} />
                              </span>
                              <span className="text-sm font-medium text-slate-700">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-5">
                          <a 
                            href="#contact" 
                            className="inline-flex items-center gap-2 bg-[#1B4F8A] text-white hover:bg-[#2E7EC0] font-bold px-6 py-3.5 rounded-full transition-all duration-300 text-sm shadow-md"
                          >
                            Inquire Now <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </ScrollReveal>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* Why Choose Solara Energy Solutions Section */}
        <section id="why-choose-us" className="py-24 lg:py-36 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5CB85C]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5BB5DC]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <ScrollReveal effect="fade-up">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5CB85C]/10 border border-[#5CB85C]/25 text-[#5CB85C] text-xs font-bold uppercase tracking-widest mb-6">
                  The Solara Advantage
                </span>
                <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-[#1B4F8A] mb-5 leading-tight">
                  Designed for performance.<br />
                  <span className="text-[#5CB85C]">Built on trust.</span>
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed">
                  We stand by our work, our people, and our technology. Here are the core advantages that separate Solara from standard contractors.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {advantages.map((adv, i) => {
                const AdvIcon = adv.icon;
                return (
                  <ScrollReveal key={adv.title} effect="fade-up" delay={i * 0.08} className="h-full">
                    <div className="h-full rounded-3xl border border-slate-100 bg-white p-7 lg:p-8 shadow-sm transition-all duration-300 hover:border-[#5CB85C]/40 hover:shadow-[0_20px_45px_rgba(27,79,138,0.06)] hover:-translate-y-1 group flex flex-col relative overflow-hidden">
                      {/* Decorative corner hover shape */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-[#5CB85C]/5 rounded-bl-full translate-x-full -translate-y-full transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
                      
                      <div className="mb-6 w-12 h-12 rounded-2xl bg-[#EBF5FA] text-[#1B4F8A] flex items-center justify-center group-hover:bg-[#5CB85C] group-hover:text-white transition-all duration-300 relative z-10 shadow-sm">
                        <AdvIcon className="w-5.5 h-5.5" />
                      </div>
                      
                      <h3 className="font-display text-lg font-bold text-[#1B4F8A] mb-3 relative z-10 group-hover:text-[#1B4F8A] transition-colors duration-300">
                        {adv.title}
                      </h3>
                      
                      <p className="text-sm text-slate-500 leading-relaxed flex-1 relative z-10">
                        {adv.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-b from-[#5BB5DC]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
          
          <div className="mx-auto max-w-4xl px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal effect="fade-up">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5CB85C]/10 border border-[#5CB85C]/25 text-[#5CB85C] text-xs font-bold uppercase tracking-widest mb-6">
                  Got Questions?
                </span>
                <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-[#1B4F8A] mb-5 leading-tight">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Everything you need to know about subsidies, power generation, and how rooftop solar works in Assam.
                </p>
              </ScrollReveal>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <ScrollReveal key={faq.q} effect="fade-up" delay={i * 0.06}>
                  <details className="group rounded-2xl border border-slate-200/80 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:border-[#5CB85C]/30 hover:shadow-md [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between font-display text-base lg:text-lg font-bold text-[#1B4F8A] list-none select-none">
                      <span className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-[#5BB5DC] shrink-0" />
                        {faq.q}
                      </span>
                      <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-50 text-[#1B4F8A] transition-transform duration-300 group-open:rotate-180 group-open:bg-[#5CB85C]/10 group-open:text-[#5CB85C] group-hover:bg-[#1B4F8A]/5">
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </summary>
                    <div className="mt-4 text-sm leading-relaxed text-slate-600 pl-8 border-l border-slate-100">
                      {faq.a}
                    </div>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Brand-Aligned CTA component */}
        <CTA />
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
