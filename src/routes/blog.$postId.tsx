import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Calendar, User, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { posts } from "./blog";

export const Route = createFileRoute("/blog/$postId")({
  head: ({ params }) => {
    const post = posts.find((p) => p.id === params.postId);
    return {
      meta: [
        { title: post ? (post.seoTitle || `${post.title} — Solara Blog`) : "Blog Post Not Found" },
        {
          name: "description",
          content: post ? post.excerpt : "Sorry, this blog post could not be found.",
        },
        { property: "og:title", content: post ? (post.seoTitle || post.title) : "Blog Post" },
        { property: "og:description", content: post ? post.excerpt : "" },
        { property: "og:site_name", content: "Solara Energy Solutions" },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { postId } = Route.useParams();
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="text-center max-w-md bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h1 className="text-2xl font-bold text-[#1B4F8A] mb-4">Post Not Found</h1>
            <p className="text-slate-500 mb-6 text-sm">
              We couldn't find the blog post you are looking for. It may have been moved or deleted.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-[#1B4F8A] text-white font-bold px-6 py-3 rounded-full hover:bg-[#143b67] transition-all text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
        <WhatsAppFab />
      </div>
    );
  }

  // Extract H2 headings for Table of Contents
  const headings = post.content
    .split("\n")
    .filter((line) => line.trim().startsWith("## "))
    .map((line) => {
      const text = line.replace("## ", "").trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      return { text, id };
    });
  // Track active heading ID and reading progress on scroll
  const [activeId, setActiveId] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Heading Active state tracking
      const headingElements = headings
        .map((h) => document.getElementById(h.id))
        .filter(Boolean) as HTMLElement[];

      let currentActiveId = "";
      for (const el of headingElements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 160) {
          currentActiveId = el.id;
        } else {
          break;
        }
      }

      if (!currentActiveId && headings.length > 0) {
        currentActiveId = headings[0].id;
      }

      setActiveId(currentActiveId);

      // 2. Reading Progress calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  // Basic Markdown inline rendering
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

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans scroll-smooth">
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Back Navigation & Category */}
          <ScrollReveal effect="fade-up">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1B4F8A] hover:text-[#5CB85C] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
              <span className="bg-[#1B4F8A] text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal effect="fade-up" delay={0.05}>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1B4F8A] leading-tight mb-6">
              {post.title}
            </h1>
          </ScrollReveal>

          {/* Metadata Bar */}
          <ScrollReveal effect="fade-up" delay={0.1}>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 border-y border-slate-200/85 py-3 mb-8">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-slate-400" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                {post.readTime}
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Shared Container Card for TOC Sidebar + Main Content - Full Screen Width */}
        <ScrollReveal effect="fade-up" delay={0.15} className="w-full bg-white border-y border-slate-200/60 shadow-sm mt-12 relative">
          
          {/* Dynamic Reading Progress Bar sticky at the top of the blog content card - complete left to right */}
          <div className="sticky top-0 left-0 right-0 z-30 h-1 bg-slate-100 rounded-none overflow-hidden w-full">
            <div 
              className="h-full bg-[#5CB85C] transition-all duration-75 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative">
              
              {/* Left Sticky Sidebar - Table of Contents */}
              <aside className="lg:col-span-3 lg:sticky lg:top-28 lg:self-start hidden lg:block">
                <div className="p-2">
                  <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#5CB85C]" />
                    Table of Contents
                  </h3>
                  <ul className="space-y-3.5 relative border-l border-slate-100">
                    {headings.map((heading) => {
                      const isActive = activeId === heading.id;
                      return (
                        <li key={heading.id} className="relative">
                          <a
                            href={`#${heading.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" });
                              window.history.pushState(null, "", `#${heading.id}`);
                              setActiveId(heading.id);
                            }}
                            className={`block text-xs sm:text-sm font-medium pl-4 leading-snug cursor-pointer transition-all border-l-2 -ml-[1px] ${
                              isActive
                                ? "text-[#5CB85C] border-[#5CB85C] font-bold scale-[1.02] translate-x-[1px]"
                                : "text-slate-400 border-transparent hover:text-slate-800"
                            }`}
                          >
                            {heading.text}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </aside>

              {/* Right Side - Article Content */}
              <div className="lg:col-span-9 w-full">
                
                {/* Post Cover Photo */}
                <div className="w-full max-w-2xl mx-auto mb-10 rounded-none overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto object-cover block"
                  />
                </div>

                {/* Markdown Content Parser */}
                <div className="prose prose-slate max-w-none">
                  {post.content.split(/\r?\n\r?\n/).map((block, idx) => {
                    const trimmed = block.trim();
                    if (!trimmed) return null;

                    // If block starts with H3 heading
                    if (trimmed.startsWith("###")) {
                      const text = trimmed.replace("###", "").trim();
                      return (
                        <h3 key={idx} className="font-display text-base sm:text-lg font-bold text-[#1B4F8A] mt-6 mb-3">
                          {parseMarkdownInline(text)}
                        </h3>
                      );
                    }

                    // If block starts with H2 heading
                    if (trimmed.startsWith("##")) {
                      const lines = trimmed.split("\n");
                      const headingLine = lines[0];
                      const text = headingLine.replace("##", "").trim();
                      const id = text
                        .toLowerCase()
                        .replace(/[^\w\s-]/g, "")
                        .replace(/\s+/g, "-");
                        
                      return (
                        <div key={idx}>
                          <h2
                            id={id}
                            className="font-display text-xl sm:text-2xl font-bold text-[#1B4F8A] mt-10 mb-5 border-b border-slate-100 pb-2.5 scroll-mt-28"
                          >
                            {parseMarkdownInline(text)}
                          </h2>
                          {lines.slice(1).map((line, lIdx) => {
                            const lineTrimmed = line.trim();
                            if (!lineTrimmed) return null;
                            if (lineTrimmed.startsWith("- ") || lineTrimmed.startsWith("* ")) {
                              return (
                                <ul key={lIdx} className="list-none pl-0 space-y-3 my-3">
                                  <li className="relative pl-6 font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
                                    <span className="absolute left-1 top-2.5 h-2 w-2 rounded-full bg-slate-200" />
                                    {parseMarkdownInline(lineTrimmed.replace(/^[\s\-\*]*/, "").trim())}
                                  </li>
                                </ul>
                              );
                            }
                            return (
                              <p key={lIdx} className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed my-4">
                                {parseMarkdownInline(lineTrimmed)}
                              </p>
                            );
                          })}
                        </div>
                      );
                    }
                    
                    // Images (markdown syntax: ![alt](url))
                    if (trimmed.startsWith("![") && trimmed.includes("](") && trimmed.endsWith(")")) {
                      const match = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
                      if (match) {
                        const alt = match[1];
                        const src = match[2];
                        return (
                          <div key={idx} className="my-6">
                            <img src={src} alt={alt} className="w-full h-auto block" />
                          </div>
                        );
                      }
                    }

                    // Bullet lists
                    if (trimmed.startsWith("- ") || trimmed.startsWith("* ") || trimmed.startsWith("1. ")) {
                      return (
                        <ul key={idx} className="list-none pl-0 space-y-3 my-5">
                          {trimmed.split("\n").map((li, i) => (
                            <li key={i} className="relative pl-6 font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
                              <span className="absolute left-1 top-2.5 h-2 w-2 rounded-full bg-slate-200" />
                              {parseMarkdownInline(li.replace(/^\s*(?:[-*]|\d+\.)\s*/, "").trim())}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    
                    // Paragraphs
                    return (
                      <p key={idx} className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed my-5">
                        {parseMarkdownInline(trimmed)}
                      </p>
                    );
                  })}
                </div>

              </div>

            </div>
          </ScrollReveal>

          {/* Bottom Back Button */}
          <ScrollReveal effect="fade-up" delay={0.2} className="mt-12 text-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 bg-[#1B4F8A] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#143b67] transition-all text-sm shadow-md"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Blog Feed
              </Link>
            </div>
          </ScrollReveal>
        </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
