"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export function FloatingPaper({ count = 9 }) {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const generateBoxes = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      return Array.from({ length: count }).map(() => ({
        initialX: Math.random() * width,
        initialY: Math.random() * height,
        animateX: [
          Math.random() * width,
          Math.random() * width,
          Math.random() * width,
        ],
        animateY: [
          Math.random() * height,
          Math.random() * height,
          Math.random() * height,
        ],
        duration: 20 + Math.random() * 10,
      }));
    };

    setBoxes(generateBoxes());

    const handleResize = () => {
      setBoxes(generateBoxes());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [count]);

  return (
    <div className="relative w-full h-full pointer-events-none">
      {boxes.map((box, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ x: box.initialX, y: box.initialY }}
          animate={{
            x: box.animateX,
            y: box.animateY,
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: box.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="relative w-16 h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform">
            <img src="/v-logo-dark.svg" alt="logo" className="w-8 h-8 opacity-60" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
