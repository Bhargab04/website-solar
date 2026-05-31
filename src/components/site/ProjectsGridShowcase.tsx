import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import residential from "@/assets/project-residential.webp";
import commercial from "@/assets/project-commercial.webp";
import farm from "@/assets/project-farm.webp";

const allProjects = [
  // 5 Residential
  {
    id: "res-1",
    img: "https://res.cloudinary.com/dwjneqfb9/image/upload/v1780243034/ChatGPT_Image_May_31_2026_09_26_50_PM_jkqdat.png",
    category: "Utility",
    title: "ONGC Agartala",
    desc: "Powering critical infrastructure for India's public sector energy giants. A robust 250kW solar array installed to support ONGC operations in Agartala.",
    meta: "250 kW · Agartala",
  },
  {
    id: "res-2",
    img: farm,
    category: "Residential",
    title: "Suburban Villa",
    desc: "A massive multi-level home that needed to eliminate its grid dependency. 10kW system seamlessly integrated.",
    meta: "10 kW · Mumbai",
  },
  {
    id: "res-3",
    img: residential,
    category: "Residential",
    title: "Hillside Bungalow",
    desc: "Remote location with frequent power cuts. Built a robust off-grid capable system keeping the lights on 24/7.",
    meta: "5 kW · Pune",
  },
  {
    id: "res-4",
    img: farm,
    category: "Residential",
    title: "Modern Townhouse",
    desc: "Tight roof space required high-efficiency panels to max out generation capacity for EV charging.",
    meta: "6 kW · Delhi",
  },
  {
    id: "res-5",
    img: "https://res.cloudinary.com/dwjneqfb9/image/upload/v1780243564/ChatGPT_Image_May_31_2026_09_35_44_PM_gcdx2k.png",
    category: "Commercial",
    title: "Lakhimpur Commerce College",
    desc: "Empowering the next generation with renewable energy. We designed and installed a high-efficiency 12kW solar rooftop system on the college campus.",
    meta: "12 kW · Lakhimpur",
  },
  // 5 Commercial
  {
    id: "com-1",
    img: "https://res.cloudinary.com/dwjneqfb9/image/upload/v1780243904/ChatGPT_Image_May_31_2026_09_41_28_PM_qixl9i.png",
    category: "Commercial",
    title: "Army Camp Narengi",
    desc: "Reliable power for strategic defense installations. A robust 30kW solar system engineered and deployed to support operations at the Narengi Army Camp.",
    meta: "30 kW · Narengi",
  },
  {
    id: "com-2",
    img: farm,
    category: "Commercial",
    title: "Suryadeep Solar Farm",
    desc: "6 acres of unused, dry land turned into a massive power plant feeding straight into the grid.",
    meta: "1.2 MW · Rajasthan",
  },
  {
    id: "com-3",
    img: commercial,
    category: "Commercial",
    title: "TechPark Campus",
    desc: "Powered an entire IT park's common areas and servers. A flagship corporate sustainability project.",
    meta: "850 kW · Bengaluru",
  },
  {
    id: "com-4",
    img: farm,
    category: "Commercial",
    title: "Steelworks Factory",
    desc: "Heavy machinery requires heavy power. This rooftop array slashed peak-hour industrial tariffs significantly.",
    meta: "2.1 MW · Gujarat",
  },
  {
    id: "com-5",
    img: "https://res.cloudinary.com/dwjneqfb9/image/upload/v1780241841/ChatGPT_Image_May_31_2026_09_04_39_PM_zxneeu.png",
    category: "Commercial",
    title: "Dakshin Kamrup College",
    desc: "Powering education with clean, sustainable energy. A high-efficiency 15kW rooftop solar system customized for classrooms, libraries, and laboratories.",
    meta: "15 kW · Assam",
  },
  {
    id: "res-6",
    img: residential,
    category: "Residential",
    title: "Eco Retreat",
    desc: "A beautiful eco-friendly home powered entirely by our solar setup. Minimal carbon footprint with maximum comfort.",
    meta: "12 kW · Kerala",
  },
  {
    id: "com-6",
    img: farm,
    category: "Commercial",
    title: "Agri-Tech processing",
    desc: "Offsetting heavy processing costs for a large-scale agricultural facility with a robust ground-mounted system.",
    meta: "1.5 MW · Punjab",
  },
];

export function ProjectsGridShowcase() {
  return (
    <div className="bg-[#FFFFFF] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Grid - Pinterest Masonry Layout */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6">
          <AnimatePresence>
            {allProjects.map((p, i) => {
              // Generate varied heights for the masonry effect since demo images are likely the same size
              const heights = [320, 480, 380, 520, 400];
              const randomHeight = heights[i % heights.length];

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={p.id}
                  className="group relative flex flex-col rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all break-inside-avoid mb-6 bg-black cursor-pointer"
                  style={{ height: `${randomHeight}px` }}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-95 group-hover:opacity-50"
                  />
                  
                  {/* Hover Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Info */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="relative z-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="bg-[#5CB85C] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                          {p.category}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#5CB85C] drop-shadow-sm">{p.meta}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-md">{p.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed max-w-sm drop-shadow-sm">{p.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="mt-24 text-center bg-[#0D2B55] rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#5BB5DC]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#5CB85C]/20 rounded-full blur-2xl" />
          <h2 className="relative z-10 text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to be <span className="text-[#5CB85C]">next?</span>
          </h2>
          <p className="relative z-10 text-blue-100/80 mb-8 max-w-lg mx-auto">
            Stop overthinking it. Let's look at your roof, do the math, and see if solar makes sense for you.
          </p>
          <Link to="/contact" className="relative z-10 inline-flex items-center gap-2 bg-[#5CB85C] text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all hover:bg-[#4aa54a] hover:-translate-y-0.5">
            Get a free quote <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        
      </div>
    </div>
  );
}
