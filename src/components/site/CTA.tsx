import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/9181016555?text=Hi%20Solara%2C%20I%27d%20like%20a%20free%20solar%20quote.";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36 bg-[#1B4F8A]">
      {/* Green glow spot */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#5CB85C]/20 blur-[80px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-[#5BB5DC]/10 blur-[80px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — big text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#5BB5DC] text-xs font-bold uppercase tracking-[0.22em] mb-5"
            >
              Stop waiting
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-display text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.06]"
            >
              Let's talk about{" "}
              <span className="relative inline-block">
                <span className="relative z-10">your roof.</span>
                <span className="absolute bottom-0.5 left-0 right-0 h-[5px] bg-[#5CB85C] rounded-full z-0" />
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-blue-100/80 max-w-sm leading-relaxed"
            >
              Shoot us a message. We'll come back with a real quote — not a sales pitch — within 24 hours.
            </motion.p>
          </div>

          {/* Right — buttons stacked */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-3 lg:pl-8"
          >
            <a
              href="#contact"
              className="group flex items-center justify-between gap-3 rounded-2xl bg-[#5CB85C] px-7 py-5 text-white font-semibold text-base shadow-lg transition-all hover:bg-[#4aa54a] hover:-translate-y-0.5"
            >
              <span>Check your savings</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank" rel="noreferrer"
              className="group flex items-center justify-between gap-3 rounded-2xl bg-white/10 border border-white/10 px-7 py-5 text-white font-semibold text-base shadow-lg transition-all hover:bg-white/20 hover:-translate-y-0.5"
            >
              <span>Text us on WhatsApp</span>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
