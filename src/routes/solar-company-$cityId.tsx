import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { CTA } from "@/components/site/CTA";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { 
  Sun, 
  Zap, 
  HelpCircle, 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  Heart,
  Settings,
  Coins,
  FileSpreadsheet,
  Gauge
} from "lucide-react";

// Structure of information for each city
interface CityInfo {
  name: string;
  tagline: string;
  summary: string;
  focusArea: string;
  addressLocality: string;
  postalCode: string;
  lat: number;
  lng: number;
  localContext: string;
}

// 17 cities in Assam
const CITY_DATABASE: Record<string, CityInfo> = {
  "guwahati": {
    name: "Guwahati",
    tagline: "Guwahati's Premium Solar EPC Company & APDCL Net Metering Partner",
    summary: "As the gateway to the Northeast, Guwahati is experiencing rapid urban growth. Solara Energy Solutions helps homeowners and business owners on GS Road, Zoo Road, and industrial areas like Bamunimaidan switch to high-efficiency solar rooftop systems to eliminate high APDCL electricity bills.",
    focusArea: "High-density residential complexes, retail commercial establishments, and office buildings.",
    addressLocality: "Guwahati",
    postalCode: "781005",
    lat: 26.1445,
    lng: 91.7362,
    localContext: "Serving major suburbs including Garchuk, Dispur, Sixmile, Bamunimaidan, and Jalukbari."
  },
  "dibrugarh": {
    name: "Dibrugarh",
    tagline: "Top Rooftop Solar Company & Tea Estate Partner in Dibrugarh",
    summary: "Dibrugarh, the Tea City of India, is an economic hub of Upper Assam. We customize high-capacity industrial solar systems for tea processing factories and high-efficiency residential solar installations for homes looking to benefit from the PM Surya Ghar Muft Bijli Yojana.",
    focusArea: "Tea garden factories, hospitals, schools, and residential areas.",
    addressLocality: "Dibrugarh",
    postalCode: "786001",
    lat: 27.4728,
    lng: 94.9120,
    localContext: "Serving tea garden estates, Dibrugarh University area, and residential neighborhoods across Chowkidingee."
  },
  "jorhat": {
    name: "Jorhat",
    tagline: "Leading Solar System Installer & Subsidy Expert in Jorhat",
    summary: "Jorhat, the cultural and academic capital of Upper Assam, is prime for solar adoption. Solara provides turnkey solar solutions utilizing high-efficiency Adani N-Type TOPCon solar panels, helping homeowners and institutions achieve 100% green energy independence.",
    focusArea: "Educational institutions, commercial shops, tea gardens, and bungalows.",
    addressLocality: "Jorhat",
    postalCode: "785001",
    lat: 26.7509,
    lng: 94.2037,
    localContext: "Installing solar near Tarajan, Lichubari, Cinnamara, and surrounding tea cultivation clusters."
  },
  "silchar": {
    name: "Silchar",
    tagline: "Silchar's Premier Solar Panel Installer & Net Metering Specialist",
    summary: "For the Barak Valley, Silchar is the commercial heart. Solara Energy Solutions provides robust on-grid and hybrid solar installations designed to withstand local weather conditions, securing stable energy output and substantial electricity bill savings.",
    focusArea: "Retail stores, healthcare clinics, colleges, and residential rooftops.",
    addressLocality: "Silchar",
    postalCode: "788001",
    lat: 24.8333,
    lng: 92.7789,
    localContext: "Catering to households and businesses in Tarapur, Meherpur, Rangirkhari, and Silchar outskirts."
  },
  "nagaon": {
    name: "Nagaon",
    tagline: "Best Solar Installer in Nagaon — PM Surya Ghar Subsidy Services",
    summary: "Located in central Assam, Nagaon is a thriving agricultural and commercial town. We help homeowners register on the national solar subsidy portal and install premium solar systems with zero-hassle documentation.",
    focusArea: "Residential rooftops, agricultural water pumps, and local businesses.",
    addressLocality: "Nagaon",
    postalCode: "782001",
    lat: 26.3484,
    lng: 92.6841,
    localContext: "Serving consumers around Haibargaon, Christianpatty, and the rural-urban corridor."
  },
  "tinsukia": {
    name: "Tinsukia",
    tagline: "Industrial Solar EPC & Warehouse Solar Systems in Tinsukia",
    summary: "Tinsukia is Assam's commercial and industrial power block. We specialize in high-yield industrial rooftop solar installations, factory solar integrations, and large-scale warehouse solar power setups that deliver unmatched ROI.",
    focusArea: "Factories, heavy commercial units, plywood mills, and large residential units.",
    addressLocality: "Tinsukia",
    postalCode: "786125",
    lat: 27.5015,
    lng: 95.3619,
    localContext: "Focused on industrial zones near Makum, Borguri Industrial Area, and Doomdooma."
  },
  "tezpur": {
    name: "Tezpur",
    tagline: "Tezpur's Leading Solar Provider for Homes, Hotels, and Schools",
    summary: "Tezpur is known for its natural beauty and academic institutions. Our team designs solar rooftop installations that blend with the architectural landscape while offering up to 90% savings on APDCL power bills.",
    focusArea: "Tourism hotels, university campus housing, private schools, and residential units.",
    addressLocality: "Tezpur",
    postalCode: "784001",
    lat: 26.6528,
    lng: 92.7926,
    localContext: "Serving Tezpur town, Mission Chariali, Ketekibari, and Tezpur University surroundings."
  },
  "bongaigaon": {
    name: "Bongaigaon",
    tagline: "Bongaigaon's Trusted Solar Energy Company for Home & Industry",
    summary: "With its refinery and industrial footprint, Bongaigaon demands clean power solutions. Solara Energy Solutions installs custom commercial and residential solar systems that lower overhead costs and support sustainability targets.",
    focusArea: "Industrial manufacturing plants, refinery vendor facilities, and family residences.",
    addressLocality: "Bongaigaon",
    postalCode: "783380",
    lat: 26.4719,
    lng: 90.5583,
    localContext: "Serving Bongaigaon town, New Bongaigaon, and nearby business corridors."
  },
  "golaghat": {
    name: "Golaghat",
    tagline: "Assam Solar Subsidy Experts & Tea Garden Solar in Golaghat",
    summary: "Golaghat is renowned for its organic tea estates and biodiversity. Our solar power systems provide clean energy to local tea estates, private bungalows, and schools seeking to utilize rooftop areas for power generation.",
    focusArea: "Residential properties, small tea growers, schools, and eco-resorts.",
    addressLocality: "Golaghat",
    postalCode: "785621",
    lat: 26.5222,
    lng: 93.9675,
    localContext: "Providing installations around Golaghat town, Furkating, and Kaziranga tourist gateways."
  },
  "sivasagar": {
    name: "Sivasagar",
    tagline: "Historical Sivasagar's Top-Rated Solar Panel Dealer & Installer",
    summary: "Sivasagar, rich in historical heritage and petroleum industry presence, is transitioning to solar energy. Solara installs reliable on-grid solar energy systems for local homeowners and businesses seeking energy security.",
    focusArea: "Residential homes, historic heritage commercial centers, and oil sector warehouses.",
    addressLocality: "Sivasagar",
    postalCode: "785640",
    lat: 26.9839,
    lng: 94.6366,
    localContext: "Focused on Sivasagar town, Joysagar, and surrounding residential pockets."
  },
  "barpeta": {
    name: "Barpeta",
    tagline: "Affordable Solar Power Systems & Subsidies in Barpeta",
    summary: "In Barpeta, we serve a wide range of residential consumers and institutional centers, installing premium solar panels under the national PM Surya Ghar scheme, backed by comprehensive AMC warranties.",
    focusArea: "Local businesses, homes, public institutions, and community centres.",
    addressLocality: "Barpeta",
    postalCode: "781301",
    lat: 26.3190,
    lng: 90.9822,
    localContext: "Serving Barpeta town, Howly, and adjacent urban spaces."
  },
  "dhubri": {
    name: "Dhubri",
    tagline: "Turnkey Solar EPC & Subsidy Registration in Dhubri",
    summary: "Dhubri’s geographic position makes solar power a vital choice. We deliver high-efficiency solar panels and hybrid solar inverters that keep homes and agricultural pumps powered efficiently.",
    focusArea: "Agro-processing units, retail businesses, and rural-urban residential rooftops.",
    addressLocality: "Dhubri",
    postalCode: "783301",
    lat: 26.0207,
    lng: 89.9723,
    localContext: "Serving Dhubri town, Gauripur, and commercial hubs near the river port."
  },
  "karimganj": {
    name: "Karimganj",
    tagline: "Karimganj's Expert Solar Installer for Homes & Commercial Hubs",
    summary: "Karimganj merchants and homeowners are adopting solar to reduce electricity overheads. Solara handles the entire design, APDCL net metering liaisoning, and installation seamlessly.",
    focusArea: "Border trade facilities, retail spaces, and local residences.",
    addressLocality: "Karimganj",
    postalCode: "788710",
    lat: 24.8667,
    lng: 92.3500,
    localContext: "Catering to households and commercial areas in Karimganj town and border trade zones."
  },
  "lakhimpur": {
    name: "Lakhimpur",
    tagline: "Lakhimpur Solar Company - High Efficiency Solar Panels",
    summary: "Lakhimpur district has immense potential for solar energy. We provide homeowners and educational institutes with high-efficiency TOPCon solar modules that generate up to 30% more power.",
    focusArea: "Agro-businesses, primary schools, and private households.",
    addressLocality: "Lakhimpur",
    postalCode: "787001",
    lat: 27.2346,
    lng: 94.1039,
    localContext: "Serving agricultural complexes and residential clusters throughout the district."
  },
  "north-lakhimpur": {
    name: "North Lakhimpur",
    tagline: "Best Solar Installer in North Lakhimpur - PM Surya Ghar Vendor",
    summary: "North Lakhimpur residents can now access the full benefit of state and central solar subsidies. Solara Energy Solutions is an empanelled vendor facilitating fast installation and subsidy payouts.",
    focusArea: "Residential rooftops, regional colleges, and cold storage warehouses.",
    addressLocality: "North Lakhimpur",
    postalCode: "787001",
    lat: 27.2355,
    lng: 94.1055,
    localContext: "Serving North Lakhimpur town and major commercial points on NH-15."
  },
  "kokrajhar": {
    name: "Kokrajhar",
    tagline: "Kokrajhar's Premium Solar EPC Company & Subsidy Partner",
    summary: "Kokrajhar, the capital of BTR, is aggressively adopting renewable energy. We offer government buildings, schools, and private homeowners high-performing on-grid solar solutions.",
    focusArea: "Institutional complexes, retail units, and local residences.",
    addressLocality: "Kokrajhar",
    postalCode: "783370",
    lat: 26.4011,
    lng: 90.2668,
    localContext: "Providing solar installations in Kokrajhar town, Titaguri, and near Bodoland University."
  },
  "mangaldoi": {
    name: "Mangaldoi",
    tagline: "Mangaldoi's Leading Solar Installation and Maintenance Partner",
    summary: "Mangaldoi, in Darrang, benefits heavily from solar for both residential savings and agricultural pumping. Our turnkey EPC model takes care of planning, grid approval, and maintenance.",
    focusArea: "Darrang district farms, agro-processing plants, and households.",
    addressLocality: "Mangaldoi",
    postalCode: "784125",
    lat: 26.4357,
    lng: 92.0361,
    localContext: "Serving Mangaldoi town, Sipajhar, and surrounding rural markets."
  }
};

// Fallback Assam data if city does not match
const ASSAM_FALLBACK: CityInfo = {
  name: "Assam",
  tagline: "Assam's Leading Rooftop Solar Installer & PM Surya Ghar Partner",
  summary: "Solara Energy Solutions is the top solar company in Assam, installing high-performance solar power plants, solar water heaters, and solar pumps. We serve the entire state of Assam, ensuring residential, commercial, and industrial consumers save up to 90% on their APDCL electricity bills.",
  focusArea: "Residential homes, commercial businesses, factories, schools, hotels, and tea gardens across Assam.",
  addressLocality: "Assam",
  postalCode: "781005",
  lat: 26.1445,
  lng: 91.7362,
  localContext: "Empanelled vendor providing turnkey installation and subsidy coordination across all districts of Assam."
};

// Target Questions to answer (FAQ format)
const targetFaqs = (cityName: string) => [
  {
    q: `Which is the best solar company in ${cityName}?`,
    a: `Solara Energy Solutions is widely recognized as the best solar company in ${cityName} and across Assam. We specialize in turnkey solar EPC solutions, from initial site survey and design to sourcing high-efficiency Adani TOPCon panels, installing robust on-grid system components, and completing the APDCL net metering integration.`
  },
  {
    q: "How much does a 3kW solar system cost in Assam?",
    a: "A standard 3kW rooftop solar power system in Assam costs between ₹1,80,000 and ₹2,20,000 before government incentives. Under the PM Surya Ghar Muft Bijli Yojana, a residential customer in Assam receives a central government subsidy of ₹85,800 combined with a state government subsidy of ₹45,000, bringing down the net pocket expense to just ₹50,000 - ₹90,000."
  },
  {
    q: "How much does a 5kW solar system cost in Assam?",
    a: "A 5kW solar system costs roughly ₹3,00,000 to ₹3,50,000. Since the central subsidy caps at ₹85,800 for residential homes (3kW and above) and the Assam state subsidy caps at ₹45,000, the total combined subsidy is ₹1,30,800, bringing the net final cost to approximately ₹1,70,000 - ₹2,20,000."
  },
  {
    q: `How do I apply for PM Surya Ghar scheme in ${cityName}?`,
    a: `To apply, register on the national PM Surya Ghar portal using your APDCL consumer account details, upload your recent electricity bill, and choose an empanelled vendor like Solara Energy Solutions. We will conduct a site survey, submit the design layout, execute the solar panel installation, coordinate the net-metering inspection with APDCL, and submit the completion documentation to trigger your subsidy payout.`
  },
  {
    q: "How much government subsidy will I get for rooftop solar in Assam?",
    a: "For residential installations, the combined (Central + Assam State) subsidy rates are: ₹48,000 for 1kW systems, ₹96,000 for 2kW systems, and a maximum of ₹1,30,800 for any solar capacity of 3kW or above. Commercial and industrial installations do not receive direct subsidies but benefit from tax incentives like accelerated depreciation."
  },
  {
    q: "Which solar panel is best for installations in Assam?",
    a: "N-Type TOPCon (Tunnel Oxide Passivated Contact) solar panels (such as Adani TOPCon panels) are highly recommended. These high-efficiency solar panels offer 22%+ efficiency, a low temperature coefficient, and superior performance under cloudy or low-light conditions common during Assam's monsoon season."
  },
  {
    q: `Is rooftop solar worth it in ${cityName}, Assam?`,
    a: `Absolutely! With APDCL power tariffs increasing, a solar system typically pays for itself within 3 to 4 years. Given that Tier-1 solar panels have a performance life of 25+ years, you will enjoy over two decades of virtually free electricity, shielding your home or business from future utility rate hikes.`
  },
  {
    q: "How much electricity does a solar power system generate?",
    a: "A 1kW solar system in Assam generates approximately 4 units of electricity per day (120 units per month) on average. A 3kW system generates around 12 units per day (360 units per month), and a 5kW system generates about 20 units per day (600 units per month), depending on seasonal sunlight and panel tilt angles."
  },
  {
    q: "How does net metering work with APDCL in Assam?",
    a: "Net metering is a billing mechanism where your solar system exports excess electricity generated during the day back into the APDCL grid. A bi-directional net meter tracks both the power you import and the power you export. At the end of the month, APDCL bills you only for the net difference. Credit for any excess power exported is carried forward to your next billing cycle."
  },
  {
    q: "How long do solar panels last and what is the warranty?",
    a: "Tier-1 solar panels are built to last 25 to 30 years. Empanelled solar solutions from Solara feature a 25-year performance warranty on the PV modules, ensuring they still generate at least 80% of their initial rated capacity by Year 25, alongside standard warranties on string or hybrid inverters."
  }
];

export const Route = createFileRoute("/solar-company-$cityId")({
  head: ({ params }) => {
    const rawCityId = params.cityId ? params.cityId.toLowerCase() : "";
    const city = CITY_DATABASE[rawCityId] || ASSAM_FALLBACK;
    
    return {
      meta: [
        { 
          title: `Solar Company in ${city.name} | Best Solar Panel Installer in Assam` 
        },
        {
          name: "description",
          content: `Looking for the best solar company in ${city.name}, Assam? Solara Energy Solutions provides high-efficiency solar panel installations, APDCL net metering, and PM Surya Ghar subsidy assistance.`
        },
        { 
          name: "keywords", 
          content: `Solar Company ${city.name}, Solar Rooftop ${city.name}, Solar Installation ${city.name}, Solar Panel Dealer ${city.name}, Best solar company in ${city.name}, PM Surya Ghar ${city.name}, Solar subsidy ${city.name}, APDCL net metering, Adani solar panels ${city.name}, Residential Solar ${city.name}` 
        },
        { 
          property: "og:title", 
          content: `Solar Company in ${city.name} | Solara Energy Solutions` 
        },
        { 
          property: "og:description", 
          content: `Switch to rooftop solar in ${city.name}, Assam. Get up to ₹1,30,800 subsidy under PM Surya Ghar Muft Bijli Yojana. Save 90% on electricity bills.` 
        }
      ]
    };
  },
  component: CitySolarPage
});

function CitySolarPage() {
  const { cityId } = Route.useParams();
  const rawCityId = cityId ? cityId.toLowerCase() : "";
  const city = CITY_DATABASE[rawCityId] || ASSAM_FALLBACK;
  const faqsList = targetFaqs(city.name);

  // Generate LocalBusiness Schema
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Solara Energy Solutions - ${city.name}`,
    "image": "https://www.solaraenergysolutions.in/assets/logo.png",
    "priceRange": "$$$",
    "telephone": "+91-81016555",
    "url": `https://www.solaraenergysolutions.in/solar-company-${rawCityId}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": city.name === "Assam" ? "Guwahati GS Road" : `${city.name} Main Road`,
      "addressLocality": city.addressLocality,
      "addressRegion": "Assam",
      "postalCode": city.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.lat,
      "longitude": city.lng
    },
    "description": `Solara Energy Solutions is the leading solar panel installation company and empanelled vendor in ${city.name}, Assam, offering PM Surya Ghar subsidies and APDCL net metering.`
  };

  // Generate FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsList.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Inject JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-28 lg:pt-52 lg:pb-40 text-center overflow-hidden bg-slate-950">
          <div className="absolute top-0 right-0 w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-slate-800/40 rounded-bl-full z-0 pointer-events-none blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] bg-[#5CB85C]/10 rounded-tr-full z-0 pointer-events-none blur-2xl" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-white">
            <ScrollReveal effect="fade-up" delay={0.05}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-white mb-6 backdrop-blur-sm shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5CB85C] animate-pulse" />
                Empanelled Solar Company in {city.name}
              </span>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.15}>
              <h1 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.15] text-white">
                Best Solar Company in <br />
                <span className="text-[#5CB85C]">{city.name}, Assam</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.25}>
              <p className="mt-6 text-lg lg:text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto font-medium">
                {city.tagline}. Switch to high-efficiency rooftop solar, claim up to ₹1,30,800 in PM Surya Ghar subsidies, and drop your electricity bills to near zero.
              </p>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.35}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a 
                  href="#quote" 
                  className="inline-flex items-center gap-2 bg-[#5CB85C] text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-[#5CB85C]/20 hover:-translate-y-0.5 hover:bg-[#4aa54a] transition-all duration-300 text-base"
                >
                  Get Free Site Survey <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#subsidies" 
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-8 py-4 rounded-full backdrop-blur hover:bg-white/20 transition-all duration-300 text-base shadow-sm"
                >
                  View Subsidy Calculator
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Local Overview & Scope */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <ScrollReveal effect="fade-right">
                  <span className="text-[#5CB85C] font-semibold text-sm uppercase tracking-wider">Local Energy Partner</span>
                  <h2 className="text-3xl lg:text-4xl font-bold font-display text-[#1B4F8A] mt-2">
                    Powering {city.name} Homes and Businesses with Clean Energy
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-base mt-4">
                    {city.summary}
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    As a certified Solar EPC company, we deploy only Tier-1 equipment, including **Adani Solar Panels** and high-efficiency **N-Type TOPCon Panels**. We manage the entire lifecycle of your project, including:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#5CB85C] shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-slate-700">Free Solar Site Survey & Design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#5CB85C] shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-slate-700">PM Surya Ghar Portal Registration</span>
                      </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#5CB85C] shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-slate-700">APDCL Net Metering Approvals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#5CB85C] shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-slate-700">25 Years Performance Warranty</span>
                    </li>
                  </ul>
                  <div className="mt-8 p-4 rounded-2xl bg-[#EBF5FA] border border-blue-100/60 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1B4F8A] animate-ping shrink-0" />
                    <p className="text-xs text-[#1B4F8A] font-semibold">{city.localContext}</p>
                  </div>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-5">
                <ScrollReveal effect="fade-left">
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 space-y-6 shadow-sm">
                    <h3 className="text-xl font-bold font-display text-[#1B4F8A]">
                      Tailored Solar Solutions
                    </h3>
                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-xs">
                        <h4 className="font-bold text-[#1B4F8A] text-sm flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#5CB85C]" />
                          Residential Solar Systems
                        </h4>
                        <p className="text-xs text-slate-500 mt-1">
                          Maximize household savings with customized setups ranging from 3kW to 10kW with maximum government subsidies.
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-xs">
                        <h4 className="font-bold text-[#1B4F8A] text-sm flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#5BB5DC]" />
                          Commercial & Industrial Systems
                        </h4>
                        <p className="text-xs text-slate-500 mt-1">
                          {city.focusArea} Customized commercial rooftop solar arrays and industrial solar plants that drastically reduce operational costs.
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-xs">
                        <h4 className="font-bold text-[#1B4F8A] text-sm flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#1B4F8A]" />
                          Assam Tea Garden Solar
                        </h4>
                        <p className="text-xs text-slate-500 mt-1">
                          High capacity solar plants engineered to handle massive machinery loads and power tea processing factories cleanly.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Subsidy Section */}
        <section id="subsidies" className="py-20 bg-slate-50 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <ScrollReveal effect="fade-up">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                  Assam Government Solar Subsidy 2026
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold font-display text-[#1B4F8A] mt-4">
                  How Much Subsidy Can You Get?
                </h2>
                <p className="text-slate-500 mt-2">
                  Assam enjoys higher central subsidies as a special category state. Here are the combined subsidy benefits for home owners under PM Surya Ghar.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal effect="fade-up" delay={0.05}>
                <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-[#5CB85C]/30 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-400">Entry Level</span>
                    <h3 className="text-2xl font-bold font-display text-[#1B4F8A] mt-1">1 kW Solar System</h3>
                    <p className="text-slate-500 text-sm mt-3">
                      Ideal for small homes running basic lights, fans, and TV. Generates ~100-120 units per month.
                    </p>
                  </div>
                  <div className="mt-8 border-t border-slate-100 pt-6 space-y-2">
                    <div className="flex justify-between text-sm"><span className="text-slate-500">Central Subsidy</span><span className="font-semibold text-slate-700">₹33,000</span></div>
                    <div className="flex justify-between text-sm"><span className="text-slate-500">Assam State Subsidy</span><span className="font-semibold text-slate-700">₹15,000</span></div>
                    <div className="flex justify-between text-base font-bold border-t border-slate-100 pt-4 text-emerald-600"><span>Total Subsidy</span><span>₹48,000</span></div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={0.15}>
                <div className="bg-white border-2 border-[#5CB85C] rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#5CB85C] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-4 rounded-bl-2xl">
                    Most Popular
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-[#5CB85C]">Standard Family</span>
                    <h3 className="text-2xl font-bold font-display text-[#1B4F8A] mt-1">2 kW Solar System</h3>
                    <p className="text-slate-500 text-sm mt-3">
                      Perfect for medium families running refrigerators, lights, fans, and a water pump. Generates ~200-240 units per month.
                    </p>
                  </div>
                  <div className="mt-8 border-t border-slate-100 pt-6 space-y-2">
                    <div className="flex justify-between text-sm"><span className="text-slate-500">Central Subsidy</span><span className="font-semibold text-slate-700">₹66,000</span></div>
                    <div className="flex justify-between text-sm"><span className="text-slate-500">Assam State Subsidy</span><span className="font-semibold text-slate-700">₹30,000</span></div>
                    <div className="flex justify-between text-base font-bold border-t border-slate-100 pt-4 text-emerald-600"><span>Total Subsidy</span><span>₹96,000</span></div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={0.25}>
                <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-[#5CB85C]/30 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-400">High Capacity</span>
                    <h3 className="text-2xl font-bold font-display text-[#1B4F8A] mt-1">3 kW Solar & Above</h3>
                    <p className="text-slate-500 text-sm mt-3">
                      Recommended for large households with multiple AC units, geysers, and appliances. Generates ~360+ units per month.
                    </p>
                  </div>
                  <div className="mt-8 border-t border-slate-100 pt-6 space-y-2">
                    <div className="flex justify-between text-sm"><span className="text-slate-500">Central Subsidy</span><span className="font-semibold text-slate-700">₹85,800</span></div>
                    <div className="flex justify-between text-sm"><span className="text-slate-500">Assam State Subsidy</span><span className="font-semibold text-slate-700">₹45,000</span></div>
                    <div className="flex justify-between text-base font-bold border-t border-slate-100 pt-4 text-emerald-600"><span>Total Subsidy</span><span>₹1,30,800</span></div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <p className="text-xs text-slate-400 italic text-center mt-8">
              *Note: State Government Subsidy is credited directly into the consumer's bank account after central subsidy is approved.
            </p>
          </div>
        </section>

        {/* How APDCL Net Metering Works */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal effect="fade-right">
                <span className="text-[#5BB5DC] font-semibold text-sm uppercase tracking-wider">Smart Billing Integration</span>
                <h2 className="text-3xl lg:text-4xl font-bold font-display text-[#1B4F8A] mt-2">
                  On-Grid Solar & APDCL Net Metering in Assam
                </h2>
                <p className="text-slate-600 leading-relaxed text-base mt-4">
                  For urban and suburban homes in {city.name}, we deploy **On-Grid solar power solutions**. These systems link directly with the APDCL utility grid, eliminating the need for expensive battery arrays and reducing setup costs.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#EBF5FA] text-[#1B4F8A] rounded-xl"><Gauge className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-sm text-[#1B4F8A]">Bi-Directional Net Meter</h4>
                      <p className="text-xs text-slate-500 mt-0.5">APDCL installs a net meter to record energy imported from the grid and solar surplus exported back to the grid.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#EBF5FA] text-[#1B4F8A] rounded-xl"><Coins className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-sm text-[#1B4F8A]">Monthly Adjustments</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Exported units deduct directly from your bill. Surplus units carry over as solar credit credits to lower future bills.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#EBF5FA] text-[#1B4F8A] rounded-xl"><FileSpreadsheet className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-sm text-[#1B4F8A]">Hassle-Free Approvals</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Our in-house engineers process the net-meter application, draw drawings, and handle local APDCL inspections.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center space-y-2">
                  <span className="text-3xl">☀️</span>
                  <h4 className="font-bold text-[#1B4F8A] text-sm">Sun Generates Energy</h4>
                  <p className="text-[11px] text-slate-500">Panels capture sunlight and generate clean DC power.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center space-y-2">
                  <span className="text-3xl">🔌</span>
                  <h4 className="font-bold text-[#1B4F8A] text-sm">Inverter Converts Power</h4>
                  <p className="text-[11px] text-slate-500">Converts solar energy into standard AC household electricity.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center space-y-2">
                  <span className="text-3xl">🏠</span>
                  <h4 className="font-bold text-[#1B4F8A] text-sm">Powers Your Home</h4>
                  <p className="text-[11px] text-slate-500">Home consumes solar power first, reducing reliance on the grid.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center space-y-2">
                  <span className="text-3xl">🔋</span>
                  <h4 className="font-bold text-[#1B4F8A] text-sm">Exports Excess Energy</h4>
                  <p className="text-[11px] text-slate-500">Surplus energy goes to APDCL grid for credits on your bill.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Solara Section */}
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal effect="fade-up">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5CB85C]/10 border border-[#5CB85C]/25 text-[#5CB85C] text-xs font-bold uppercase tracking-widest mb-6">
                  The Solara Advantage
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[#1B4F8A] mb-4">
                  Why We Are the Best Solar Installer in {city.name}
                </h2>
                <p className="text-slate-500">
                  We don't cut corners. From engineering high-quality racks to processing complex subsidy registrations, we ensure your rooftop solar generates power for the next 25+ years.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <ScrollReveal effect="fade-up" delay={0.05}>
                <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-xs space-y-4 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF5FA] text-[#1B4F8A] flex items-center justify-center font-bold"><Award className="w-5.5 h-5.5 animate-pulse" /></div>
                  <h3 className="font-display font-bold text-base text-[#1B4F8A]">Empanelled Vendor</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Officially registered under the PM Surya Ghar Muft Bijli Yojana, allowing our clients to claim government subsidies directly.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal effect="fade-up" delay={0.15}>
                <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-xs space-y-4 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF5FA] text-[#1B4F8A] flex items-center justify-center font-bold"><ShieldCheck className="w-5.5 h-5.5" /></div>
                  <h3 className="font-display font-bold text-base text-[#1B4F8A]">Tier-1 Equipment</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">We deploy premium Adani Solar Panels, TOPCon modules, and highly certified string inverters built for extreme climates.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal effect="fade-up" delay={0.25}>
                <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-xs space-y-4 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF5FA] text-[#1B4F8A] flex items-center justify-center font-bold"><Settings className="w-5.5 h-5.5" /></div>
                  <h3 className="font-display font-bold text-base text-[#1B4F8A]">End-To-End EPC</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">We handle everything: site survey, structural designing, physical installation, net metering, and testing approval.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal effect="fade-up" delay={0.35}>
                <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-xs space-y-4 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF5FA] text-[#1B4F8A] flex items-center justify-center font-bold"><Heart className="w-5.5 h-5.5" /></div>
                  <h3 className="font-display font-bold text-base text-[#1B4F8A]">Lifetime Support</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Every installation includes solar maintenance options, regular panel cleaning service, and quick customer support.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQs Section answering all requested Google Search queries */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal effect="fade-up">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5CB85C]/10 border border-[#5CB85C]/25 text-[#5CB85C] text-xs font-bold uppercase tracking-widest mb-6">
                  Common Inquiries
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[#1B4F8A] mb-4">
                  Solar Frequently Asked Questions
                </h2>
                <p className="text-slate-500 leading-relaxed text-sm">
                  We answer the most common questions about solar rooftop prices, government subsidies, net metering, and installer guidelines in {city.name}.
                </p>
              </ScrollReveal>
            </div>

            <div className="space-y-4">
              {faqsList.map((faq, i) => (
                <ScrollReveal key={faq.q} effect="fade-up" delay={i * 0.05}>
                  <details className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-xs transition-all duration-300 hover:border-[#5CB85C]/30 hover:shadow-xs [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between font-display text-base font-bold text-[#1B4F8A] list-none select-none">
                      <span className="flex items-center gap-3 pr-4 leading-snug">
                        <HelpCircle className="w-5 h-5 text-[#5BB5DC] shrink-0" />
                        {faq.q}
                      </span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-50 text-[#1B4F8A] transition-transform duration-300 group-open:rotate-180 group-open:bg-[#5CB85C]/10 group-open:text-[#5CB85C] group-hover:bg-[#1B4F8A]/5">
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </summary>
                    <div className="mt-4 text-xs leading-relaxed text-slate-600 pl-8 border-l border-slate-100">
                      {faq.a}
                    </div>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section id="quote">
          <CTA />
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
