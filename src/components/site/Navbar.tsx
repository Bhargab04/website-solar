import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronRight, Calculator, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/WhatsApp_Image_2026-05-10_at_3.36.29_PM__2_-removebg-preview.png";

const links = [
  { to: "/services", label: "Services" },
  { to: "/why-us", label: "Why Us" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHidden(true); setOpen(false);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <div className={`w-full max-w-5xl rounded-2xl border transition-all duration-500 ${
        scrolled
          ? "border-[#1B4F8A]/20 bg-white/95 shadow-elevated backdrop-blur-xl"
          : "border-[#1B4F8A]/12 bg-white/85 shadow-soft backdrop-blur-md"
      }`}>
        <nav className="flex items-center justify-between px-5 py-2">

          {/* Logo */}
          <Link to="/" onClick={close} className="flex items-center shrink-0">
            <img
              src={logoImg}
              alt="Solara Energy Solutions"
              className="h-16 w-auto object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="relative rounded-lg px-3.5 py-2 text-sm font-medium text-[#5A7A9A] transition-colors hover:text-[#1B4F8A] hover:bg-[#1B4F8A]/8 group"
                  activeProps={{ className: "relative rounded-lg px-3.5 py-2 text-sm font-medium text-[#1B4F8A] bg-[#1B4F8A]/8 group" }}
                >
                  {l.label}
                  <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#5CB85C] opacity-0 scale-0 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 md:flex">
            <Link
              to="/emi-calculator"
              className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold text-[#5A7A9A] transition-colors hover:text-[#1B4F8A] hover:bg-[#1B4F8A]/8"
            >
              <Calculator className="h-3.5 w-3.5" />
              EMI Calculator
            </Link>
            <a
              href="https://wa.me/9181016555?text=Hi%20Solara%2C%20I%27d%20like%20a%20free%20solar%20quote."
              target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold text-[#5A7A9A] transition-colors hover:text-[#1B4F8A] hover:bg-[#1B4F8A]/8"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="group flex items-center gap-1.5 rounded-xl bg-[#5CB85C] px-4 py-2 text-sm font-semibold text-white shadow-soft transition-all hover:bg-[#4aa54a] hover:shadow-glow hover:-translate-y-px"
            >
              Check Savings
              <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EBF5FA] text-[#1B4F8A] transition-colors hover:bg-[#1B4F8A]/10 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X className="h-4.5 w-4.5" />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <Menu className="h-4.5 w-4.5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-[#D6E4F0]/60 md:hidden"
            >
              <div className="p-4 space-y-1">
                {links.map((l, i) => (
                  <motion.div key={l.to} initial={{ x: -12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.04, duration: 0.22 }}>
                    <Link
                      to={l.to} onClick={close}
                      className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-[#1B4F8A] transition-colors hover:bg-[#1B4F8A]/8"
                      activeProps={{ className: "flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-[#1B4F8A] bg-[#1B4F8A]/8" }}
                    >
                      {l.label}
                      <ChevronRight className="h-3.5 w-3.5 text-[#5A7A9A]" />
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-2 flex flex-col gap-2">
                  <Link to="/emi-calculator" onClick={close} className="flex items-center justify-center gap-2 rounded-xl border-2 border-[#1B4F8A] py-2.5 text-sm font-bold text-[#1B4F8A] hover:bg-[#1B4F8A]/8">
                    <Calculator className="h-4 w-4" /> EMI Calculator
                  </Link>
                  <a href="https://wa.me/9181016555?text=Hi%20Solara%2C%20I%27d%20like%20a%20free%20solar%20quote." target="_blank" rel="noreferrer" onClick={close} className="flex items-center justify-center gap-2 rounded-xl border-2 border-[#1B4F8A] py-2.5 text-sm font-bold text-[#1B4F8A] hover:bg-[#1B4F8A]/8">
                    <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                  </a>
                  <Link to="/contact" onClick={close} className="flex items-center justify-center gap-2 rounded-xl bg-[#5CB85C] py-2.5 text-sm font-semibold text-white hover:bg-[#4aa54a]">
                    Check Savings <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
