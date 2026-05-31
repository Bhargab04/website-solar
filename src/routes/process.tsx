import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Process } from "@/components/site/Process";
import { CTA } from "@/components/site/CTA";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "How It Works — Solara Solar" },
      {
        name: "description",
        content:
          "See how Solara takes you from first call to full solar activation in just 4 simple steps. Fast, clean, zero-hassle installation.",
      },
      { property: "og:title", content: "How It Works — Solara Solar" },
      { property: "og:description", content: "From consultation to activation in 4 steps." },
    ],
  }),
  component: ProcessPage,
});

const timeline = [
  { day: "Day 1",    event: "We chat on the phone (10 mins)",       icon: "📞" },
  { day: "Day 2–3",  event: "We visit your house & give you a quote",   icon: "📐" },
  { day: "Day 4–5",  event: "You say 'let's do this'",     icon: "✍️" },
  { day: "Day 6–10", event: "We install the panels (2-3 days)",    icon: "⚙️" },
  { day: "Day 11",   event: "We deal with the government inspectors",     icon: "🔍" },
  { day: "Day 12–14",event: "You start saving money",           icon: "⚡" },
];

const faqs = [
  { q: "Do I need to be home during installation?",  a: "Just on the first day so we can say hi, and the last day to show you how to turn it on. In between, you can go about your life." },
  { q: "How long does it take to see savings?",       a: "Immediately. Literally your very first power bill after we turn the system on will be lower." },
  { q: "What happens if it's cloudy?",               a: "The panels still work! You'll generate a bit less power than on a sunny day, but your savings average out over the whole year." },
  { q: "Who handles the subsidy paperwork?",         a: "We do. You don't have to fill out a single government form. We hate paperwork as much as you do, but we've gotten really good at it." },
];

function ProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-soft pt-36 pb-16 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <ScrollReveal effect="fade-up" delay={0.05}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">How it works</span>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.15}>
              <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">
                Let's get this <span className="text-gradient">done.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={0.25}>
              <p className="mt-5 text-lg text-muted-foreground">
                Going solar used to be a massive headache. We fixed that. We do all the heavy lifting, paperwork, and installation. You just flip the switch.
              </p>
            </ScrollReveal>
            <ScrollReveal effect="zoom-in" delay={0.38}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#EAB308] px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow hover:opacity-90"
                >
                  Start Your Journey
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Process timeline */}
        <Process />

        {/* Timeline detail */}
        <section className="bg-gradient-soft py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <ScrollReveal effect="fade-up" className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Timeline</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">
                Up and running in under 2 weeks.
              </h2>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {timeline.map((t, i) => (
                <ScrollReveal
                  key={t.day}
                  effect={i % 2 === 0 ? "slide-left" : "slide-right"}
                  delay={i * 0.08}
                >
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                    <span className="text-2xl">{t.icon}</span>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-primary">{t.day}</div>
                      <div className="mt-1 text-sm font-medium text-foreground">{t.event}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <ScrollReveal effect="fade-up">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Common questions</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">
                Stuff people ask us a lot.
              </h2>
            </ScrollReveal>

            <div className="mt-10 space-y-4 text-left">
              {faqs.map((faq, i) => (
                <ScrollReveal key={faq.q} effect="fade-up" delay={i * 0.08}>
                  <details className="group rounded-xl border border-border bg-card px-6 py-4 shadow-soft">
                    <summary className="flex cursor-pointer items-center justify-between font-medium text-foreground list-none">
                      {faq.q}
                      <span className="ml-4 text-primary transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                  </details>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal effect="zoom-up" delay={0.2}>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#EAB308] px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow hover:opacity-90"
              >
                Still have questions? Talk to us
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

