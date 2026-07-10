import { useRef } from "react";
import { Phone } from "lucide-react";

export function SolarParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageUrl = "https://res.cloudinary.com/dwjneqfb9/image/upload/v1783702395/american-public-power-association-513dBrMJ_5w-unsplash_njykhl.jpg";

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[450px] md:h-[500px] overflow-hidden"
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      {/* 
        Native GPU-accelerated fixed background. 
        Because it is position: fixed, it remains stationary in the viewport.
        Because of clipPath on the parent, it is only visible through this section's viewport window.
      */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none -z-10"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: "translate3d(0,0,0)", // Forces GPU compositor layer creation
          willChange: "transform"
        }}
      />

      {/* Vertical brand-blue strip shape shifted slightly to the right */}
      <div className="absolute left-8 sm:left-16 md:left-24 lg:left-32 top-0 bottom-0 w-[calc(100%-2rem)] sm:w-[450px] md:w-[500px] bg-[#1B4F8A]/90 backdrop-blur-xs flex flex-col justify-center px-8 sm:px-12 md:px-14 text-white z-10">
        <h2 className="font-display text-3xl md:text-[2.25rem] font-extrabold tracking-tight text-white mb-8 leading-[1.25]">
          Save up to 70% on your electricity bills with solar.
        </h2>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#FF5A36] hover:bg-[#e04f2f] text-white font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 shadow-md shadow-[#FF5A36]/20 text-sm select-none"
          >
            Contact Us
          </a>
          <a
            href="tel:+919181016555"
            className="group inline-flex items-center gap-2 text-white hover:text-[#FF5A36] font-semibold text-sm transition-colors"
          >
            <Phone className="w-4.5 h-4.5 text-[#FF5A36] fill-[#FF5A36] transition-transform group-hover:scale-110" />
            <span>+91-91810 16555</span>
          </a>
        </div>
      </div>
    </div>
  );
}
