"use client";

import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/ui/reveal";

interface Car {
  id: number;
  lane: "left" | "right";
  x: number;
  speed: number;
  color: string;
  size: "small" | "medium" | "large";
}

const carColors = {
  left: ["#06b6d4", "#22d3ee", "#0891b2", "#0e7490"],
  right: ["#8b5cf6", "#a78bfa", "#7c3aed", "#6d28d9"],
};

// Static cars to avoid hydration mismatch (no Math.random)
const staticCars: Car[] = [
  { id: 0, lane: "left", x: 25, speed: 1.2, color: "#06b6d4", size: "medium" },
  { id: 1, lane: "left", x: 150, speed: 1.4, color: "#22d3ee", size: "small" },
  { id: 2, lane: "left", x: 260, speed: 1.1, color: "#0891b2", size: "large" },
  { id: 3, lane: "left", x: 380, speed: 1.3, color: "#0e7490", size: "small" },
  { id: 4, lane: "left", x: 500, speed: 1.0, color: "#06b6d4", size: "small" },
  { id: 5, lane: "left", x: 640, speed: 1.5, color: "#22d3ee", size: "medium" },
  { id: 10, lane: "right", x: 30, speed: 0.9, color: "#8b5cf6", size: "medium" },
  { id: 11, lane: "right", x: 230, speed: 1.1, color: "#a78bfa", size: "medium" },
  { id: 12, lane: "right", x: 400, speed: 0.85, color: "#7c3aed", size: "large" },
];

function CarSVG({ car, offset }: { car: Car; offset: number }) {
  const sizes = {
    small: { width: 35, height: 18 },
    medium: { width: 45, height: 22 },
    large: { width: 55, height: 26 },
  };
  const { width, height } = sizes[car.size];

  return (
    <motion.g
      initial={{ x: car.x }}
      animate={{ x: [(car.x + offset) % 800 - 100, (car.x + offset + 800) % 800 - 100] }}
      transition={{
        duration: 8 / car.speed,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Car body */}
      <rect
        x={0}
        y={car.lane === "left" ? 70 : 120}
        width={width}
        height={height}
        rx={6}
        fill={car.color}
        opacity={0.9}
      />
      {/* Windshield */}
      <rect
        x={width * 0.6}
        y={car.lane === "left" ? 73 : 123}
        width={width * 0.25}
        height={height * 0.5}
        rx={2}
        fill="rgba(255,255,255,0.2)"
      />
      {/* Headlight glow */}
      <circle
        cx={width - 3}
        cy={car.lane === "left" ? 75 : 125}
        r={2}
        fill="white"
        opacity={0.8}
      />
    </motion.g>
  );
}

export function RoadDividerScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Divider position based on scroll
  const rawDividerX = useTransform(scrollYProgress, [0.2, 0.8], [400, 300]);
  const dividerX = useSpring(rawDividerX, { stiffness: 100, damping: 20 });

  // Opacity for section
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  if (prefersReducedMotion) {
    return (
      <section className="py-24 md:py-32 px-6 bg-[var(--bg-secondary)]/30">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-full mb-6">
              <span className="text-sm font-medium text-[var(--accent)]">Interactive Demo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Shiftable Road Dividers
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
              A prototype that dynamically shifts lane dividers based on real-time traffic load, 
              presented at IISc Open House as part of the NIAS program.
            </p>
            <a
              href="https://www.youtube.com/watch?v=-UOpvuXotTo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white font-semibold rounded-full"
            >
              Watch Video Demo
            </a>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-48 px-6 min-h-[80vh] overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-secondary)]/50 to-transparent" />

      <motion.div style={{ opacity }} className="max-w-5xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-warm)]/10 border border-[var(--accent-warm)]/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-[var(--accent-warm)] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[var(--accent-warm)]">Scroll to interact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              The <span className="gradient-text">Wow</span> Moment
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Scroll to see how the road divider shifts based on traffic load. 
              a concept I prototyped with LEGO EV3 and ultrasonic sensors.
            </p>
          </div>
        </Reveal>

        {/* Road Simulation */}
        <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)]">
          <svg
            viewBox="0 0 800 220"
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Road gradient */}
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              
              {/* Lane glow */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Road background */}
            <rect x="0" y="50" width="800" height="120" fill="url(#roadGradient)" />

            {/* Lane markers - left */}
            <line x1="0" y1="60" x2="800" y2="60" stroke="#334155" strokeWidth="2" strokeDasharray="20,15" />
            
            {/* Lane markers - right */}
            <line x1="0" y1="160" x2="800" y2="160" stroke="#334155" strokeWidth="2" strokeDasharray="20,15" />

            {/* Animated divider line */}
            <motion.g style={{ x: dividerX }}>
              <rect
                x={-4}
                y={55}
                width={8}
                height={110}
                fill="var(--accent-warm)"
                rx={4}
                filter="url(#glow)"
              />
              {/* Divider glow */}
              <rect
                x={-2}
                y={60}
                width={4}
                height={100}
                fill="white"
                opacity={0.6}
                rx={2}
              />
            </motion.g>

            {/* Cars */}
            {staticCars.map((car, i) => (
              <CarSVG key={car.id} car={car} offset={i * 50} />
            ))}

            {/* Direction arrows */}
            <g opacity={0.4}>
              <polygon points="30,90 50,80 50,100" fill="var(--accent)" />
              <polygon points="770,130 750,120 750,140" fill="var(--accent-purple)" />
            </g>

            {/* Labels */}
            <text x="100" y="40" fill="var(--text-muted)" fontSize="12" fontFamily="system-ui">
              Heavy Traffic →
            </text>
            <text x="600" y="190" fill="var(--text-muted)" fontSize="12" fontFamily="system-ui">
              ← Light Traffic
            </text>
          </svg>

          {/* Legend */}
          <div className="flex items-center justify-center gap-8 py-4 border-t border-[var(--border)]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--accent)]" />
              <span className="text-xs text-[var(--text-muted)]">Lane 1 vehicles</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--accent-purple)]" />
              <span className="text-xs text-[var(--text-muted)]">Lane 2 vehicles</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-[var(--accent-warm)]" />
              <span className="text-xs text-[var(--text-muted)]">Smart divider</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-warm)] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_-8px_var(--accent-warm)] hover:scale-[1.02]"
          >
            Watch the Real Prototype
          </a>
        </div>
      </motion.div>
    </section>
  );
}
