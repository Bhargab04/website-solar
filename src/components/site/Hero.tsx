import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const words = ["Foundations", "Solutions", "Future", "Support", "Build"];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  useEffect(() => {
    const interval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 min-h-[78vh] border-[3px] border-[#1B4F8A] rounded-[3.5rem] p-4 lg:p-6 bg-white/30 backdrop-blur-md shadow-lg">

        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col gap-5">

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8 lg:p-14 flex-1 flex flex-col justify-center relative overflow-hidden"
          >

            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#5BB5DC]/10 pointer-events-none" />

            {/* Stars */}
            <div className="flex items-center gap-1.5 mb-6 lg:mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#5CB85C] text-[#5CB85C]"
                />
              ))}

              <span className="ml-2 text-xs font-semibold text-slate-400 tracking-wide">
                4.9 · 870+ reviews
              </span>
            </div>

            <h1 className="text-5xl lg:text-[4.2rem] font-display font-bold text-[#1B4F8A] leading-[1.06] tracking-tight mb-6">
              Solid{" "}
              <span className="inline-grid">
                <span className="invisible col-start-1 row-start-1">
                  Foundations
                </span>

                <span className="col-start-1 row-start-1 whitespace-nowrap">
                  <span className="text-[#5CB85C]">
                    {words[index].substring(0, subIndex)}
                  </span>

                  <span
                    className={`inline-block w-[3px] h-[0.85em] ml-0.5 bg-[#5CB85C] align-baseline transition-opacity duration-75 ${
                      blink ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </span>
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-500 max-w-[42rem] mb-10 leading-relaxed">
              Comprehensive solar energy and infrastructure solutions —
              designed, installed, and maintained for homes and businesses
              across India.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-[#5CB85C] text-white px-8 py-4 rounded-full font-semibold text-base transition-all hover:-translate-y-0.5 hover:bg-[#4aa54a] hover:shadow-lg"
              >
                Get a free quote
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="text-sm font-semibold text-[#1B4F8A] hover:underline underline-offset-4 decoration-[#5CB85C]"
              >
                See what we do →
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#1B4F8A] text-white rounded-[2rem] p-7 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute right-0 bottom-0 w-32 h-32 rounded-tl-full bg-white/5" />

              <div className="text-4xl lg:text-5xl font-display font-extrabold">
                500+
              </div>

              <div className="mt-2 text-sm font-medium text-blue-200">
                Projects across India
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#EBF5FA] rounded-[2rem] p-7 flex flex-col justify-between relative overflow-hidden border border-[#5BB5DC]/30"
            >
              <div className="text-4xl lg:text-5xl font-display font-extrabold text-[#1B4F8A]">
                10<span className="text-2xl font-bold">MW+</span>
              </div>

              <div className="mt-2 text-sm font-medium text-[#2E7EC0]">
                Solar capacity installed
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="lg:col-span-5 relative w-full min-h-[420px] h-full rounded-[2.5rem] overflow-hidden shadow-xl"
        >
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dwjneqfb9&public_id=solara_video_1_m5lsmf&player=%7B%22autoplay%22%3Atrue%2C%22muted%22%3Atrue%2C%22loop%22%3Atrue%7D"
            className="w-full h-full object-cover absolute inset-0 border-0"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            title="Solara Energy Solutions"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B55]/80 via-[#1B4F8A]/20 to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-[#5CB85C] animate-pulse" />

              <span className="text-white text-sm font-semibold">
                Clean energy. Real savings.
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}