"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { ParticlePortrait } from "@/components/ui/particle-portrait";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.3,
      },
    },
  };

  const itemVariants: Variants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.15 } } }
    : {
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: easeOutExpo },
        },
      };

  const monogramVariants: Variants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, scale: 0.8, rotate: -10 },
        visible: {
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: { duration: 1, ease: easeOutExpo, delay: 0.5 },
        },
      };

  const glowVariants: Variants = prefersReducedMotion
    ? {}
    : {
        animate: {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        },
      };

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-20 pb-32 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[var(--accent)]/10 rounded-full blur-[120px]"
        />
        <motion.div
          variants={glowVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[var(--accent-warm)]/8 rounded-full blur-[100px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Left: Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          {/* Overline with badge */}
          <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-full">
              <Sparkles size={14} className="text-[var(--accent)]" />
              <span className="text-xs font-medium text-[var(--accent)]">Available for opportunities</span>
            </span>
          </motion.div>

          {/* Overline */}
          <motion.p
            variants={itemVariants}
            className="text-[var(--accent)] text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          >
            AI · Robotics · Prototyping
          </motion.p>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.04em] text-[var(--text-primary)] mb-6 leading-[0.95]"
          >
            Yash
            <br />
            <span className="gradient-text">Mittal</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-[var(--text-secondary)] max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            Building intelligent systems that touch the real world, from prototype to production.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_-8px_var(--accent)] hover:scale-[1.02]"
            >
              <span>View Projects</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <a
              href="mailto:y.mittal@student.unsw.edu.au"
              className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--border)] text-[var(--text-primary)] font-semibold rounded-full transition-all duration-300 hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/5"
            >
              <span>Get in Touch</span>
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-[var(--border)]"
          >
            <div>
              <p className="text-2xl font-bold text-[var(--text-primary)]">1/30</p>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">NIAS Selection</p>
            </div>
            <div className="w-px h-10 bg-[var(--border)]" />
            <div>
              <p className="text-2xl font-bold text-[var(--text-primary)]">100+</p>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">IISc Visitors</p>
            </div>
            <div className="w-px h-10 bg-[var(--border)]" />
            <div>
              <p className="text-2xl font-bold text-[var(--text-primary)]">25kg</p>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Bridge Load</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Particle Portrait */}
        <motion.div
          variants={monogramVariants}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Particle Portrait - Interactive canvas */}
            <ParticlePortrait 
              imageSrc="/profile.jpg" 
              className="relative z-10"
            />

            {/* Floating badges */}
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-3 py-2 glass rounded-xl border border-[var(--border)] z-20"
            >
              <p className="text-xs font-semibold text-[var(--accent)]">UNSW Sydney</p>
            </motion.div>

            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 px-3 py-2 glass rounded-xl border border-[var(--border)] z-20"
            >
              <p className="text-xs font-semibold text-[var(--accent-warm)]">AI Engineer Intern</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-[var(--text-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
