"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/ui/reveal";
import { Award, Users, Trophy, GraduationCap, Target, Medal } from "lucide-react";

interface Achievement {
  icon: typeof Award;
  title: string;
  stat: string;
  description: string;
  year: string;
  gradient: string;
}

const achievements: Achievement[] = [
  {
    icon: Award,
    title: "NIAS Selection",
    stat: "1/30",
    description: "Selected for National Institute of Advanced Studies program — weekend classes with IISc professors",
    year: "2020",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "IISc Open House",
    stat: "100+",
    description: "Presented road-divider prototype to over 100 visitors at Indian Institute of Science",
    year: "2020",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Trophy,
    title: "WRO South India",
    stat: "Zone",
    description: "World Robotics Olympiad — EV3 robot mission with team of 4",
    year: "2019",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Warren Truss Bridge",
    stat: "250",
    description: "Efficiency ratio achieved — bridge held 25kg load",
    year: "2019",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Medal,
    title: "SOF IGK Olympiad",
    stat: "Silver",
    description: "Class topper, silver medal in national olympiad",
    year: "2019",
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    icon: GraduationCap,
    title: "Kumon Honor Roll",
    stat: "6mo+",
    description: "Advanced Student Honor Roll — ahead in mathematics curriculum",
    year: "2016 & 2019",
    gradient: "from-pink-500 to-rose-500",
  },
];

function AnimatedStat({ stat, inView }: { stat: string; inView: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!inView || prefersReducedMotion) {
      setDisplayValue(stat);
      return;
    }

    // Check if stat is a number
    const numericValue = parseInt(stat.replace(/[^0-9]/g, ""));
    if (isNaN(numericValue) || stat.includes("/")) {
      setDisplayValue(stat);
      return;
    }

    // Animate number
    let current = 0;
    const duration = 1500;
    const steps = 60;
    const increment = numericValue / steps;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(stat);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current).toString() + (stat.includes("+") ? "+" : ""));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [inView, stat, prefersReducedMotion]);

  return <span>{displayValue}</span>;
}

function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-[var(--accent)]/30"
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.gradient} mb-4`}>
        <achievement.icon size={22} className="text-white" />
      </div>

      {/* Stat */}
      <div className="mb-3">
        <p className="text-3xl font-bold text-[var(--text-primary)]">
          <AnimatedStat stat={achievement.stat} inView={isInView} />
        </p>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
        {achievement.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[var(--text-secondary)] mb-3 line-clamp-2">
        {achievement.description}
      </p>

      {/* Year badge */}
      <span className="inline-block px-2.5 py-1 text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-secondary)] rounded-md">
        {achievement.year}
      </span>
    </motion.div>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32 px-6 bg-[var(--bg-secondary)]/30">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-[var(--accent)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Recognition
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
              Achievements
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Milestones that reflect curiosity, persistence, and a drive to build things that matter.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <StaggerItem key={index}>
              <AchievementCard achievement={achievement} index={index} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
