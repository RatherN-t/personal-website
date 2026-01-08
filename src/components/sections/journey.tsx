"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Wrench, BookOpen, Users } from "lucide-react";

const chapters = [
  {
    icon: Wrench,
    title: "Build",
    subtitle: "Prototype first, perfect later",
    content:
      "Started with LEGO robots at 14, building sensors and coding solutions for real-world problems. Every project begins with a working prototype — from EV3 traffic systems to Arduino-powered cars.",
    accent: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: BookOpen,
    title: "Learn",
    subtitle: "Curiosity drives mastery",
    content:
      "NIAS weekend classes with IISc professors. Kumon math advancement. UNSW AI specialization. Learning isn't a phase — it's a constant mode of operation, from Python to physics to finance.",
    accent: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: Users,
    title: "Lead",
    subtitle: "Elevate others along the way",
    content:
      "From mentoring kids in robotics camps to leading COVID relief distribution. Gavel Club speaker. Swim relay strategist. The best solutions scale when you bring others with you.",
    accent: "from-amber-500/20 to-orange-500/20",
  },
];

function JourneyChapter({
  chapter,
  index,
}: {
  chapter: (typeof chapters)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [index % 2 === 0 ? -30 : 30, 0, 0, index % 2 === 0 ? -30 : 30]
  );

  return (
    <motion.div
      ref={ref}
      style={prefersReducedMotion ? {} : { opacity, x }}
      className="relative flex items-center min-h-[50vh] py-16"
    >
      {/* Timeline connector */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--border)] to-transparent hidden md:block" />

      <div
        className={`w-full md:w-1/2 px-6 md:px-12 ${
          index % 2 === 0 ? "md:pr-20 md:text-right" : "md:ml-auto md:pl-20"
        }`}
      >
        {/* Icon */}
        <motion.div
          className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${chapter.accent} border border-[var(--border)] mb-6`}
        >
          <chapter.icon size={24} className="text-[var(--text-primary)]" />
        </motion.div>

        {/* Content */}
        <h3 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-2">
          {chapter.title}
        </h3>
        <p className="text-[var(--accent)] text-sm font-medium tracking-wide uppercase mb-4">
          {chapter.subtitle}
        </p>
        <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed max-w-md inline-block">
          {chapter.content}
        </p>
      </div>

      {/* Center dot for timeline */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-4 h-4 bg-[var(--accent)] rounded-full border-4 border-[var(--bg-primary)]"
        />
      </div>
    </motion.div>
  );
}

export function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-4">
              Build · Learn · Lead
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              A philosophy shaped by hands-on projects, continuous learning, and collaborative impact.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {chapters.map((chapter, index) => (
            <JourneyChapter key={index} chapter={chapter} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
