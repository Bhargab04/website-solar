import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { ScrollReveal, ScrollRevealGroup } from "@/components/ui/scroll-reveal";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { posts, categories } from "./blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Solara Blog — News, Stories & Solar Updates" },
      {
        name: "description",
        content:
          "Read the latest articles, solar installation stories, industry updates, and news from Solara Energy Solutions.",
      },
      { property: "og:title", content: "Solara Blog — News, Stories & Solar Updates" },
      { property: "og:description", content: "Read the latest articles, solar installation stories, industry updates, and news from Solara Energy Solutions." },
      { property: "og:site_name", content: "Solara Energy Solutions" }
    ],
  }),
  component: BlogPageIndex,
});

function BlogPageIndex() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All");

  const filteredPosts = posts.filter(
    (post) => activeCategory === "All" || post.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 text-center overflow-hidden bg-slate-950">
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-[#5CB85C] mb-4 backdrop-blur">
                <BookOpen className="w-3.5 h-3.5" />
                Knowledge Base
              </span>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.1}>
              <h1 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl leading-[1.1]">
                Blog
              </h1>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.2}>
              <p className="mt-4 text-base lg:text-lg text-blue-100/80 leading-relaxed max-w-xl mx-auto">
                Stay updated with the latest news, solar installation stories, educational articles, and announcements from Solara Energy Solutions.
              </p>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ScrollRevealGroup stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full col-span-3">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <Link
                      to="/blog/$postId"
                      params={{ postId: post.id }}
                      key={post.id}
                      className="group flex flex-col bg-white rounded-t-none rounded-b-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                      {/* Cover Image */}
                      <div className="w-full aspect-[16/10] overflow-hidden relative bg-slate-100 flex items-center justify-center border-b border-slate-100">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                        />
                      </div>

                      {/* Metadata & Title */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                            <span className="bg-[#1B4F8A]/10 text-[#1B4F8A] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                              {post.category}
                            </span>
                            <div className="flex items-center gap-3 text-xs text-slate-400">
                              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                            </div>
                          </div>
                          <h3 className="font-display text-lg font-bold text-[#1B4F8A] mb-3 group-hover:text-[#5CB85C] transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B4F8A] group-hover:gap-2.5 transition-all">
                          Read Guide <ArrowRight className="w-4 h-4 text-[#1B4F8A]" />
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="col-span-3 text-center py-16 bg-white rounded-3xl border border-slate-100 p-8 shadow-xs">
                    <p className="text-slate-400 font-medium">New guides and articles are coming soon. Stay tuned!</p>
                  </div>
                )}
              </ScrollRevealGroup>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
