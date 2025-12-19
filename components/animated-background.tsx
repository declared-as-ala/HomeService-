"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Wrench, 
  Home, 
  Zap, 
  Droplet, 
  Sparkles, 
  Hammer,
  Paintbrush,
  Snowflake
} from "lucide-react";

export function AnimatedBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    
    setReducedMotion(mediaQuery.matches);
    setIsMobile(mobileQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    const handleMobileChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMotionChange);
    mobileQuery.addEventListener("change", handleMobileChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
      mobileQuery.removeEventListener("change", handleMobileChange);
    };
  }, []);

  // Floating icons configuration
  const floatingIcons = [
    { Icon: Wrench, x: "10%", y: "20%", delay: 0, duration: 8 },
    { Icon: Home, x: "85%", y: "15%", delay: 1, duration: 10 },
    { Icon: Zap, x: "15%", y: "70%", delay: 2, duration: 9 },
    { Icon: Droplet, x: "80%", y: "60%", delay: 0.5, duration: 11 },
    { Icon: Sparkles, x: "50%", y: "30%", delay: 1.5, duration: 12 },
    { Icon: Hammer, x: "70%", y: "80%", delay: 2.5, duration: 8 },
    { Icon: Paintbrush, x: "30%", y: "50%", delay: 3, duration: 10 },
    { Icon: Snowflake, x: "90%", y: "40%", delay: 1.2, duration: 9 },
  ];

  // Floating shapes configuration
  const floatingShapes = [
    { size: 120, x: "5%", y: "10%", delay: 0, duration: 15 },
    { size: 80, x: "90%", y: "20%", delay: 2, duration: 18 },
    { size: 100, x: "20%", y: "80%", delay: 4, duration: 20 },
    { size: 150, x: "75%", y: "70%", delay: 1, duration: 16 },
    { size: 90, x: "50%", y: "5%", delay: 3, duration: 14 },
  ];

  if (reducedMotion) {
    return null;
  }

  // Reduce number of elements on mobile for better performance
  const displayShapes = isMobile ? floatingShapes.slice(0, 2) : floatingShapes;
  const displayIcons = isMobile ? floatingIcons.slice(0, 4) : floatingIcons;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 opacity-20 md:opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.08) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: isMobile ? 30 : 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Shapes */}
      {displayShapes.map((shape, index) => (
        <motion.div
          key={`shape-${index}`}
          className="absolute rounded-full bg-gradient-to-br from-blue-200/15 to-purple-200/15 blur-3xl"
          style={{
            width: isMobile ? shape.size * 0.7 : shape.size,
            height: isMobile ? shape.size * 0.7 : shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: isMobile ? shape.duration * 1.5 : shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating Icons */}
      {displayIcons.map((item, index) => {
        const Icon = item.Icon;
        return (
          <motion.div
            key={`icon-${index}`}
            className="absolute"
            style={{
              left: item.x,
              top: item.y,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
              rotate: [0, 3, -3, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: isMobile ? item.duration * 1.3 : item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'} text-blue-400/25 dark:text-blue-500/15`} />
          </motion.div>
        );
      })}

      {/* Animated Grid Pattern (subtle) - Hidden on mobile */}
      {!isMobile && (
        <motion.div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0 0", "50px 50px"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </div>
  );
}

