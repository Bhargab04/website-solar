import { Instagram, Facebook, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Footer() {
  return (
    <footer className="relative bg-[#0D2B55] pt-20 pb-10 overflow-hidden text-white border-t border-[#1B4F8A]/40">

      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#5CB85C]/30 to-transparent" />
      <div className="absolute -top-[300px] left-1/4 w-[600px] h-[400px] bg-[#1B4F8A]/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -top-[200px] right-1/4 w-[400px] h-[300px] bg-[#5BB5DC]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full flex justify-center text-[20vw] md:text-[16vw] font-display font-bold leading-none text-white/[0.04] pointer-events-none select-none tracking-normal">
        SOLARA
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <ScrollReveal effect="fade-up">
            <a href="#top" className="flex items-center group w-fit">
              <span className="font-display text-2xl font-bold tracking-tight">
                Solara
              </span>
            </a>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-blue-200/60">
              We engineer premium solar infrastructure for homes and businesses across India. Stop paying the power company. Start owning your energy.
            </p>
            <div className="mt-8 flex gap-3">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-blue-200/60 transition-all hover:border-[#5CB85C]/50 hover:text-[#5CB85C] hover:bg-[#5CB85C]/10">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal effect="fade-up" delay={0.1}>
            <FooterCol title="Company" links={["About Us", "Our Projects", "Careers", "Press & Media"]} />
          </ScrollReveal>

          <ScrollReveal effect="fade-up" delay={0.2}>
            <FooterCol title="Solutions" links={["Residential Solar", "Commercial Capacity", "Lifecycle Maintenance", "Government Subsidy"]} />
          </ScrollReveal>

          <ScrollReveal effect="fade-up" delay={0.3}>
            <h4 className="font-display text-sm font-semibold tracking-wider uppercase text-white/90">Newsletter</h4>
            <p className="mt-4 text-sm text-blue-200/60 leading-relaxed mb-4">
              Get the latest on solar tech, government policies, and energy savings.
            </p>
            <div className="relative">
              <input type="email" placeholder="Enter your email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-blue-200/40 outline-none transition-all focus:border-[#5CB85C] focus:bg-white/10" />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#5CB85C] text-white rounded-lg px-3 flex items-center justify-center transition-all hover:bg-[#4aa54a]">
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>
            <ul className="mt-6 space-y-2.5 text-sm text-blue-200/60">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#5CB85C]" />
                <a href="https://wa.me/9181016555?text=Hi%20Solara%2C%20I%27d%20like%20a%20free%20solar%20quote." target="_blank" rel="noreferrer" className="hover:text-[#5CB85C] transition-colors">Chat on WhatsApp</a>
              </li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#5BB5DC]" /> solaraenergy11@gmail.com</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#5BB5DC]" /> Assam, India</li>
            </ul>
          </ScrollReveal>
        </div>

        <ScrollReveal effect="fade-up" delay={0.4}>
          <div className="mt-16 hidden md:flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 text-sm text-blue-200/40 md:flex-row">
            <p>© {new Date().getFullYear()} Solara Energy Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <p>Made in Assam</p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold tracking-wider uppercase text-white/90">{title}</h4>
      <ul className="mt-6 space-y-3.5 text-sm text-blue-200/60">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition-colors hover:text-[#5CB85C] flex items-center group">
              <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 transition-all group-hover:opacity-100 group-hover:ml-0 text-[#5CB85C]" />
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
