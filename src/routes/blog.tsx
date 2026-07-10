import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { ScrollReveal, ScrollRevealGroup } from "@/components/ui/scroll-reveal";
import { Calendar, User, Clock, ArrowRight, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Solar Blog & Guides — Solara Energy Solutions" },
      {
        name: "description",
        content:
          "Read the latest guides on PM Surya Ghar subsidies, solar panel ROI in Assam, monsoon durability, and APDCL net metering updates.",
      },
    ],
  }),
  component: BlogPage,
});

const categories = ["All", "Subsidies", "Savings", "Guides", "Solar Tech"] as const;

interface Post {
  id: string;
  category: typeof categories[number];
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

const posts: Post[] = [
  {
    id: "power-home-adani-solar-panels",
    category: "Solar Tech",
    title: "Power Your Home with 615 WP Adani TOPCon Solar Panels",
    excerpt: "Learn why 615 WP Adani TOPCon Panels installed by Solara Energy Solutions are the ideal choice for residential and commercial solar rooftops in Assam.",
    date: "July 10, 2026",
    readTime: "3 min read",
    author: "Solara Editorial Team",
    image: "https://res.cloudinary.com/dwjneqfb9/image/upload/v1783708298/WhatsApp_Image_2026-07-10_at_1.11.04_AM_wigsn5.jpg",
    content: `
## Power Your Home with High-Efficiency Adani TOPCon Panels
Power your home with 615 WP Adani TOPCon Solar Panels installed by Solara Energy Solutions, one of Assam’s most trusted solar EPC companies. As an experienced installer under the PM Surya Ghar Muft Bijli Yojana, we provide complete rooftop solar solutions with premium HDGI (Zinc Coated) structures for maximum strength, corrosion resistance, and long-term durability.

## Complete Hassle-Free Management
Our expert team manages everything from start to finish, ensuring a smooth and hassle-free experience:
- Free site survey and load assessment
- Custom system design and layout engineering
- High-quality professional installation
- Net metering registration assistance with APDCL
- Subsidy application support
- Dedicated after-sales service and maintenance

We use genuine, high-efficiency solar panels and quality components to maximize energy generation and help you achieve faster returns on your investment.

## Customized Capacities & Reliability
Whether you’re looking for a 3kW, 5kW, 10kW, or commercial solar rooftop system, Solara Energy Solutions offers customized solutions at competitive prices without compromising on quality. We are committed to delivering reliable workmanship, transparent pricing, timely installation, and dedicated customer support.

Choose Solara Energy Solutions and join hundreds of satisfied customers who are reducing electricity bills while contributing to a cleaner, greener future. Install premium solar today and enjoy decades of dependable, sustainable power.

## Trending Keywords
Solar Rooftop Assam, Solar Panel Installation Assam, Rooftop Solar Guwahati, PM Surya Ghar Muft Bijli Yojana, Solar Subsidy Assam, Adani Solar Panels, TOPCon Solar Panels, Residential Solar System, Commercial Solar Installation, Net Metering, Solar EPC Company Assam, Best Solar Company in Assam, Solar Energy Solutions, Home Solar System, Solar Power Plant, Renewable Energy India, Electricity Bill Savings, High Efficiency Solar Panels, HDGI Structure, Solar Financing.
    `
  },
  {
    id: "best-solar-company-assam",
    category: "Guides",
    title: "Best Solar Panel Installation Company in Assam & Northeast India",
    excerpt: "Choose Solara Energy Solutions, your trusted partner for premium rooftop solar systems for homes, businesses, and industries across Assam.",
    date: "July 10, 2026",
    readTime: "4 min read",
    author: "Solara Editorial Team",
    image: "https://res.cloudinary.com/dwjneqfb9/image/upload/v1783707161/WhatsApp_Image_2026-07-10_at_1.09.49_AM_usimry.jpg",
    content: `
## Looking for the best solar panel installation company in Assam or Northeast India?
Choose Solara Energy Solutions, your trusted partner for premium rooftop solar systems for homes, businesses, industries, schools, hospitals, and commercial establishments. We specialize in installing **615 WP Adani TOPCon Solar Panels** with premium HDGI (Zinc Coated) structures, ensuring maximum durability, higher energy generation, and long-term reliability.

## Complete End-to-End Solar Solutions
As an experienced installer under the **PM Surya Ghar Muft Bijli Yojana**, we provide complete end-to-end solar solutions:
- **FREE Site Survey** & customized system design
- **Professional Installation** & high-quality workmanship
- **Net Metering Assistance** for APDCL connections
- **Subsidy Guidance** to claim MNRE and state incentives
- **Financing Support** & flexible EMI payment plans
- **Dedicated After-Sales Service** and maintenance support

Our mission is to help every household and business reduce electricity bills while investing in clean, renewable energy.

## Custom Scale Installations
Whether you need a 1kW, 2kW, 3kW, 5kW, 10kW, 20kW, 50kW, 100kW or industrial solar power plant, our expert team delivers high-quality workmanship using genuine components from leading brands. With transparent pricing, fast installation, and customer-first service, Solara Energy Solutions has become a trusted name across Assam and Northeast India.

## Contact Us Today
- 📞 **Call/WhatsApp**: [+91 91810 16555](tel:+919181016555)
- **Solara Energy Solutions** – Powering Homes, Businesses & Industries with Clean Energy Across Assam, Guwahati, Dibrugarh, Jorhat, Sivasagar, Golaghat, Nagaon, Tezpur, Silchar, Tinsukia, Bongaigaon, Barpeta, Dhubri, Kokrajhar, Karimganj, Lakhimpur, Dhemaji, Nalbari, Morigaon, Sonitpur and the entire Northeast India. 
- *Save more. Go Solar. Go Solara.*

## Keywords
*Solar Panel Installation Assam, Best Solar Company Assam, Rooftop Solar Assam, Solar EPC Company Assam, Solar Rooftop Guwahati, Solar Panel Dealer Assam, PM Surya Ghar Muft Bijli Yojana, Solar Subsidy Assam, Adani Solar Panels, TOPCon Solar Panels, Residential Solar System, Commercial Solar System, Industrial Solar Plant, Net Metering, Solar Financing, Solar Power Plant, Renewable Energy, Home Solar Installation, Solar Company Near Me, Rooftop Solar Northeast India.*
    `
  }
];

const parseMarkdownInline = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-bold text-[#1B4F8A]">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i} className="italic text-slate-500">{part.slice(1, -1)}</em>;
    }
    return part;
  });
};

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPost]);

  const filteredPosts = posts.filter(
    (post) => activeCategory === "All" || post.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-28 lg:pt-52 lg:pb-40 text-center overflow-hidden bg-slate-950">
          <div className="absolute top-0 right-0 w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-slate-800/40 rounded-bl-full pointer-events-none blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] bg-[#5CB85C]/15 rounded-tr-full pointer-events-none blur-2xl" />

          {/* Clean themed background image matches Projects page Hero */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://res.cloudinary.com/dwjneqfb9/image/upload/v1783702395/american-public-power-association-513dBrMJ_5w-unsplash_njykhl.jpg"
              alt="Solar Background"
              className="w-full h-full object-cover opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-white">
            <ScrollReveal effect="fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-[#5CB85C] mb-6 backdrop-blur">
                <BookOpen className="w-3.5 h-3.5" />
                Knowledge Base
              </span>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.1}>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-[4.5rem] leading-[1.1]">
                Solar Insights &<br />
                <span className="text-[#5CB85C]">Expert Guides</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.2}>
              <p className="mt-6 text-lg lg:text-xl text-blue-100/80 leading-relaxed max-w-2xl mx-auto">
                Everything you need to know about rooftop solar prices, government subsidies, net metering, and installation standards in Northeast India.
              </p>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.3}>
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

        {/* Content Section */}
        <section className="py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#1B4F8A] text-white shadow-md"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollRevealGroup stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full col-span-2">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className="group cursor-pointer flex flex-col bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    {/* Cover Image */}
                    <div className="w-full aspect-[3/2] overflow-hidden relative bg-slate-100 flex items-center justify-center border-b border-slate-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-103"
                      />
                      <span className="absolute top-4 left-4 bg-[#1B4F8A] text-white text-xs font-semibold px-3 py-1.5 rounded-full z-20">
                        {post.category}
                      </span>
                    </div>

                    {/* Metadata & Title */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 text-xs text-slate-400 mb-3.5">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                        </div>
                        <h3 className="font-display text-xl font-bold text-[#1B4F8A] mb-3 group-hover:text-[#5CB85C] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1B4F8A] group-hover:gap-2.5 transition-all">
                        Read Guide <ArrowRight className="w-4 h-4 text-[#1B4F8A]" />
                      </div>
                    </div>
                  </article>
                ))}
              </ScrollRevealGroup>
            </div>
          </div>
        </section>

        {/* Article Overlay Modal Reader */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md"
            >
              <motion.div
                initial={{ y: 50, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 50, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white w-full max-w-4xl max-h-[85vh] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
              >
                {/* Modal Header */}
                <div className="relative px-6 py-5 md:px-10 md:py-6 bg-slate-900 text-white shrink-0 flex items-center justify-between border-b border-slate-800/40">
                  <div className="pr-6">
                    <span className="bg-[#5CB85C] text-white text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2.5 inline-block">
                      {selectedPost.category}
                    </span>
                    <h2 className="text-xl md:text-2xl font-display font-bold leading-snug">
                      {selectedPost.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-full p-2 transition-all hover:scale-105 cursor-pointer shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Article Info Bar */}
                <div className="bg-slate-50 border-b border-slate-100 px-6 py-3.5 md:px-10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 shrink-0">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{selectedPost.author}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{selectedPost.date}</span>
                  </div>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{selectedPost.readTime}</span>
                </div>

                {/* Article Content Area */}
                <div className="overflow-y-auto px-6 py-8 md:px-10 flex-1 scrollbar-thin">
                  {/* Clean, smaller photo display inside the scroll container */}
                  <div className="w-full max-w-lg mx-auto mb-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                    <img
                      src={selectedPost.image}
                      alt={selectedPost.title}
                      className="w-full h-auto object-contain block"
                    />
                  </div>

                  <div className="max-w-none">
                    {/* Basic Markdown Rendering */}
                    {selectedPost.content.split("\n\n").map((block, idx) => {
                      const cleanText = (txt: string) => txt.replace(/\*\*|\*/g, "");

                      if (block.trim().startsWith("##")) {
                        return (
                          <h3 key={idx} className="font-display text-lg md:text-xl font-bold text-[#1B4F8A] mt-8 mb-4 border-b border-slate-100 pb-2">
                            {cleanText(block.replace("##", "").trim())}
                          </h3>
                        );
                      }
                      if (block.trim().startsWith("-") || block.trim().startsWith("1.")) {
                        return (
                          <ul key={idx} className="list-disc pl-6 space-y-2.5 my-4">
                            {block.split("\n").map((li, i) => (
                              <li key={i} className="font-sans text-xs md:text-[13px] text-slate-500 leading-relaxed">
                                {cleanText(li.replace(/^[\s\-\d\.]*/, "").trim())}
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p key={idx} className="font-sans text-xs md:text-[13px] text-slate-500 leading-relaxed my-3.5">
                          {cleanText(block.trim())}
                        </p>
                      );
                    })}
                  </div>
                </div>

                {/* Footer close button */}
                <div className="border-t border-slate-100 px-6 py-4 bg-slate-50 flex justify-end shrink-0">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="bg-[#1B4F8A] hover:bg-[#143b67] text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all cursor-pointer"
                  >
                    Close Article
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
