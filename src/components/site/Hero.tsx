import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Award, Zap } from "lucide-react";

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
      className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 overflow-visible"
    >
      {/* Dynamic Ambient Background Blobs */}
      <div className="absolute top-10 left-12 w-72 h-72 bg-[#5BB5DC]/15 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse duration-[8s]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5CB85C]/10 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse duration-[10s] delay-2000" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#1B4F8A]/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse duration-[6s] delay-1000" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 min-h-[78vh] border border-[#1B4F8A]/12 rounded-[3.5rem] p-5 lg:p-8 bg-slate-50/40 backdrop-blur-xl shadow-[0_32px_80px_-20px_rgba(27,79,138,0.12)]">

        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="bg-white/95 backdrop-blur-md rounded-[2.5rem] border border-white shadow-[0_20px_50px_rgba(27,79,138,0.04)] p-8 lg:p-14 flex-1 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-gradient-to-br from-[#5BB5DC]/10 to-[#5CB85C]/5 pointer-events-none transition-transform duration-700 group-hover:scale-110" />

            {/* Stars Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF5FA] border border-[#5BB5DC]/30 w-fit mb-6 lg:mb-8 shadow-sm">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[#5CB85C] text-[#5CB85C]"
                  />
                ))}
              </div>
              <div className="h-3 w-px bg-[#5BB5DC]/40" />
              <span className="text-[10px] lg:text-[11px] font-bold text-[#1B4F8A] tracking-wider uppercase">
                4.9 Rated · 870+ Reviews
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

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-[#5CB85C] text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-[#5CB85C]/35 hover:-translate-y-1 hover:bg-[#4aa54a] hover:shadow-xl hover:shadow-[#5CB85C]/50 active:translate-y-0 active:scale-95 transition-all duration-300 text-base select-none"
              >
                Get a free quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="group inline-flex items-center gap-1.5 text-sm font-bold text-[#1B4F8A] hover:text-[#2E7EC0] transition-colors duration-200"
              >
                See what we do <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-gradient-to-br from-[#1B4F8A] to-[#0D2B55] text-white rounded-[2rem] p-7 flex flex-col justify-between relative overflow-hidden shadow-lg group cursor-default"
            >
              <div className="absolute right-0 bottom-0 w-32 h-32 rounded-tl-full bg-white/5 group-hover:scale-110 transition-transform duration-500" />
              <div className="flex justify-between items-start mb-4">
                <div className="text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
                  500+
                </div>
                <div className="p-3 bg-white/10 rounded-2xl text-[#5BB5DC]">
                  <Award className="w-5 h-5" />
                </div>
              </div>
              <div className="text-xs font-semibold text-blue-200/90 uppercase tracking-widest">
                Projects across India
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-gradient-to-br from-white to-[#EBF5FA] rounded-[2rem] p-7 flex flex-col justify-between relative overflow-hidden border border-[#5BB5DC]/30 shadow-md group cursor-default"
            >
              <div className="absolute right-0 bottom-0 w-32 h-32 rounded-tl-full bg-[#5BB5DC]/10 group-hover:scale-110 transition-transform duration-500" />
              <div className="flex justify-between items-start mb-4">
                <div className="text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-[#1B4F8A]">
                  10<span className="text-2xl font-bold">MW+</span>
                </div>
                <div className="p-3 bg-[#5CB85C]/10 rounded-2xl text-[#5CB85C]">
                  <Zap className="w-5 h-5 fill-[#5CB85C]" />
                </div>
              </div>
              <div className="text-xs font-semibold text-[#2E7EC0] uppercase tracking-widest">
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
          whileHover={{ y: -4 }}
          className="lg:col-span-5 relative w-full min-h-[420px] h-full rounded-[3rem] p-2.5 bg-white/50 backdrop-blur-md border border-white/60 shadow-[0_32px_60px_-15px_rgba(27,79,138,0.12)] group overflow-hidden"
        >
          <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            >
              <source
                src="https://res.cloudinary.com/dwjneqfb9/video/upload/q_auto,f_auto/solara_video_1_m5lsmf.mp4"
                type="video/mp4"
              />
              <source
                src="https://res.cloudinary.com/dwjneqfb9/video/upload/q_auto,f_auto/solara_video_1_m5lsmf.webm"
                type="video/webm"
              />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B55]/90 via-[#1B4F8A]/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
              <div className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl px-5 py-3 shadow-lg">
                <span className="h-2.5 w-2.5 rounded-full bg-[#5CB85C] animate-pulse" />

                <span className="text-[#1B4F8A] text-xs font-bold uppercase tracking-wider">
                  Clean energy. Real savings.
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}