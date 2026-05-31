import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import "../../styles/projects-scroll.css";

import residential from "@/assets/project-residential.webp";
import commercial from "@/assets/project-commercial.webp";
import farm from "@/assets/project-farm.webp";

/* ── Data ────────────────────────────────────────────── */
const residentialProjects = [
  {
    img: residential,
    tag: "Residential",
    step: "Project 01",
    title: ["Lakeside", "Residence"],
    titleItalic: 1,
    desc: "They wanted to run 4 ACs without crying over the power bill. We got this 8kW system up in 3 days. Now their bill is barely ₹500.",
    meta: "8 kW · Bengaluru",
    bullets: ["Net-metering setup", "Premium monocrystalline panels", "App monitoring"],
  },
  {
    img: farm,
    tag: "Residential",
    step: "Project 02",
    title: ["Suburban", "Villa"],
    titleItalic: 1,
    desc: "A massive multi-level home that needed to eliminate its grid dependency. The 10kW system seamlessly integrated with their roof.",
    meta: "10 kW · Mumbai",
    bullets: ["Battery backup ready", "Aesthetic black panels", "Zero grid draw"],
  },
  {
    img: residential,
    tag: "Residential",
    step: "Project 03",
    title: ["Hillside", "Bungalow"],
    titleItalic: 1,
    desc: "Remote location with frequent power cuts. We built a robust off-grid capable system that keeps the lights on 24/7.",
    meta: "5 kW · Pune",
    bullets: ["Hybrid inverter", "Off-grid capable", "Smart load management"],
  },
  {
    img: farm,
    tag: "Residential",
    step: "Project 04",
    title: ["Modern", "Townhouse"],
    titleItalic: 0,
    desc: "Tight roof space required high-efficiency panels. We maxed out their generation capacity to cover their EV charging needs.",
    meta: "6 kW · Delhi",
    bullets: ["High-efficiency panels", "EV integration", "Space optimized"],
  },
  {
    img: residential,
    tag: "Residential",
    step: "Project 05",
    title: ["Heritage", "Home"],
    titleItalic: 1,
    desc: "Installed with zero damage to the 80-year-old roof structure. A careful, bespoke mounting solution that preserves the aesthetics.",
    meta: "7 kW · Jaipur",
    bullets: ["Custom mounting", "Heritage approved", "Non-penetrative installation"],
  },
];

const commercialProjects = [
  {
    img: commercial,
    tag: "Commercial",
    step: "Project 06",
    title: ["Northwind", "Logistics"],
    titleItalic: 0,
    desc: "A massive warehouse array. The business owner was tired of crazy overhead. It'll pay for itself in under 4 years.",
    meta: "420 kW · Pune",
    bullets: ["Megawatt-ready inverters", "Commercial PPA setup", "Tax rebate processing"],
  },
  {
    img: farm,
    tag: "Utility",
    step: "Project 07",
    title: ["Suryadeep", "Solar Farm"],
    titleItalic: 1,
    desc: "6 acres of unused, dry land turned into a massive power plant feeding straight into the grid.",
    meta: "1.2 MW · Rajasthan",
    bullets: ["Ground-mount racking", "Grid integration", "End-to-end EPC"],
  },
  {
    img: commercial,
    tag: "Commercial",
    step: "Project 08",
    title: ["TechPark", "Campus"],
    titleItalic: 0,
    desc: "Powered an entire IT park's common areas and servers. A flagship corporate sustainability project.",
    meta: "850 kW · Bengaluru",
    bullets: ["Corporate sustainability", "Server backup", "Large-scale deployment"],
  },
  {
    img: farm,
    tag: "Industrial",
    step: "Project 09",
    title: ["Steelworks", "Factory"],
    titleItalic: 1,
    desc: "Heavy machinery requires heavy power. This rooftop array slashed their peak-hour industrial tariffs significantly.",
    meta: "2.1 MW · Gujarat",
    bullets: ["High-voltage integration", "Industrial scale", "Peak tariff reduction"],
  },
  {
    img: commercial,
    tag: "Commercial",
    step: "Project 10",
    title: ["City", "Hospital"],
    titleItalic: 0,
    desc: "Hospitals cannot afford downtime. This system provides critical backup alongside massive daily savings.",
    meta: "350 kW · Chennai",
    bullets: ["Critical infrastructure", "Uninterruptible power", "Healthcare certified"],
  },
];

/* ── Clip paths ─────────────────────────────────────── */
const CLIP_ODD_HIDDEN = "polygon(0 20%, 20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%)";
const CLIP_ODD_VISIBLE = "polygon(0 8%, 8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%)";
const CLIP_EVEN_HIDDEN = "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%)";
const CLIP_EVEN_VISIBLE = "polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)";

/* ── Spinning ring ───────────────────────────────────── */
const RING_TEXT = "Scroll • Scroll • ";
const CHARS = RING_TEXT.split("");
const INNER_ANGLE = 360 / CHARS.length;

function ScrollRing() {
  const { scrollYProgress } = useScroll();
  const rawRotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const rotate = useSpring(rawRotate, { stiffness: 80, damping: 25 });

  return (
    <div className="psc-ring-wrapper" aria-hidden="true">
      <motion.div className="psc-ring" style={{ rotate }}>
        {CHARS.map((char, i) => (
          <span
            key={i}
            className="psc-char"
            style={{
              "--char-index": i,
              "--inner-angle": `${INNER_ANGLE}deg`,
              "--radius": `calc((1 / 0.32469946920468346) * -1ch)`,
            } as React.CSSProperties}
          >
            {char}
          </span>
        ))}
      </motion.div>
      <span className="sr-only">Scroll to explore projects</span>
    </div>
  );
}

/* ── Single project section ──────────────────────────── */
function ProjectSection({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const imgRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });

  // Pure parallax on the image — only visual depth, not a reveal
  const yImg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const isEven = index % 2 === 1;
  const clipHidden = isEven ? CLIP_EVEN_HIDDEN : CLIP_ODD_HIDDEN;
  const clipVisible = isEven ? CLIP_EVEN_VISIBLE : CLIP_ODD_VISIBLE;

  return (
    <motion.section
      ref={imgRef}
      className="psc-project"
      // section itself fades in as it enters
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
    >
      {/* big watermark number */}
      <span className="psc-project-num" aria-hidden="true">
        0{index + 1}
      </span>

      {/* ── image side ── */}
      <div className="psc-project-img-wrap">
        <motion.img
          src={project.img}
          alt={project.title.join(" ")}
          className="psc-project-img"
          loading="lazy"
          // clip-path wipe-in + scale reveal on enter
          initial={{ clipPath: clipHidden, scale: 1.1, filter: "saturate(0.3)" }}
          whileInView={{ clipPath: clipVisible, scale: 1, filter: "saturate(0.9)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          // parallax y on top of the above
          style={{ y: yImg }}
        />
        <motion.div
          className="psc-project-tag"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {project.tag}
        </motion.div>
      </div>

      {/* ── text side ── */}
      <motion.div
        className="psc-project-body"
        initial={{ opacity: 0, x: isEven ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <motion.div
          className="psc-project-step"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {project.step}
        </motion.div>

        <motion.h2
          className="psc-project-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          {project.title.map((word, wi) =>
            wi === project.titleItalic
              ? <em key={wi}>{word}</em>
              : <span key={wi}>{word} </span>
          )}
        </motion.h2>

        <motion.div
          className="psc-project-meta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {project.meta}
        </motion.div>

        <motion.div
          className="psc-project-desc"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <strong>About this project</strong>
          {project.desc}
        </motion.div>

        <motion.ul
          className="psc-project-bullets"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          {project.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
}

/* ── Root component ──────────────────────────────────── */
export function ProjectsScrollShowcase() {
  return (
    <div className="psc-root">

      {/* Spinning scroll ring */}
      <ScrollRing />

      {/* ── Intro ── */}
      <section className="psc-intro">
        <div className="psc-intro-bg-text" aria-hidden="true">SOLAR</div>
        <motion.div
          className="psc-intro-content"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="psc-eyebrow">The Portfolio</p>
          <h1 className="psc-intro-title">
            We build stuff<br /><em>that works.</em>
          </h1>
          <p className="psc-intro-sub">
            Take a look at a few of the systems we've put up recently. No stock photos here.
          </p>
        </motion.div>
      </section>

      {/* ── Stats band ── */}
      <div className="psc-stats">
        {[
          { value: "2,500+", label: "Roofs covered" },
          { value: "42 MW", label: "Megawatts online" },
          { value: "18", label: "States reached" },
          { value: "₹8.4K", label: "Avg saved per month" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            className="psc-stat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="psc-stat-value">{s.value}</div>
            <div className="psc-stat-label">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* ── Residential Projects ── */}
      <section className="psc-category-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="psc-category-title">Residential <em>Projects</em></h2>
          <p className="psc-category-desc">Powering homes. Eliminating bills. Upgrading lifestyles.</p>
        </motion.div>
      </section>

      {residentialProjects.map((p, i) => (
        <ProjectSection key={p.step} project={p} index={i} />
      ))}

      {/* ── Commercial Projects ── */}
      <section className="psc-category-header psc-category-commercial">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="psc-category-title">Commercial <em>Projects</em></h2>
          <p className="psc-category-desc">Scaling operations. Slicing overheads. Building sustainability.</p>
        </motion.div>
      </section>

      {commercialProjects.map((p, i) => (
        <ProjectSection key={p.step} project={p} index={i + 5} />
      ))}

      {/* ── Outro CTA ── */}
      <section className="psc-outro">
        <div className="psc-outro-bg" />
        <motion.div
          className="psc-outro-content"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="psc-outro-title">
            Ready to be<br /><em>next?</em>
          </h2>
          <p className="psc-outro-sub">
            Stop overthinking it. Let's just look at <span className="text-[#5CB85C]">your roof</span>, do some math, and see if solar makes sense for you.
          </p>
          <Link to="/contact" className="psc-outro-btn">
            Let's talk about <span className="text-[#5CB85C]">your roof</span> <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

