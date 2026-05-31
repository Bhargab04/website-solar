"use client"

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import residential from "@/assets/project-residential.webp";
import commercial from "@/assets/project-commercial.webp";
import farm from "@/assets/project-farm.webp";
import heroBg from "@/assets/hero-solar.webp";
import parallaxBg from "@/assets/parallax-bg.webp";

// Local project images — guaranteed to load (no external network needed)
const localImgs = [residential, commercial, farm, heroBg, parallaxBg];
const squareData = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: localImgs[i % localImgs.length] as string,
}));

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const generateSquares = () => {
  return shuffle([...squareData]).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-md overflow-hidden bg-muted"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-primary font-medium">
          Real installations. Real savings.
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold text-foreground">
          Projects we've powered
        </h3>
        <p className="text-base md:text-lg text-muted-foreground my-4 md:my-6">
          From residential rooftops to large-scale commercial arrays — every
          installation is designed for maximum output and long-term savings.
        </p>
        <button
          className={cn(
            "bg-primary text-primary-foreground font-medium py-2 px-4 rounded-md",
            "transition-all hover:bg-primary/90 active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          )}
        >
          View all projects
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

