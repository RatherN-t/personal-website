"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[var(--accent)]/10 via-[var(--accent-purple)]/10 to-[var(--accent-warm)]/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <Reveal>
          <p className="text-[var(--accent)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
            Let's build something together
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto mb-12 text-lg">
            Whether it's AI, robotics, or just a good conversation—I'm always up for connecting.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Gradient border card */}
          <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-[var(--accent)] via-[var(--accent-purple)] to-[var(--accent-warm)] mb-8">
            <div className="bg-[var(--bg-primary)] rounded-2xl p-8">
              <p className="text-[var(--text-secondary)] mb-6">
                Currently open to internships, collaborations, and interesting projects.
              </p>
              <motion.a
                href="mailto:y.mittal@student.unsw.edu.au"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent)] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[var(--accent)]/30"
              >
                <Mail size={20} />
                <span>y.mittal@student.unsw.edu.au</span>
                <ArrowUpRight
                  size={16}
                  className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </motion.a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex items-center justify-center gap-4">
            <motion.a
              href="https://www.linkedin.com/in/yash-mittal-993223352/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-5 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-xl transition-all duration-200 hover:bg-[var(--bg-card)] hover:border-[var(--accent)]/50"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/yashmittal4"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-5 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-xl transition-all duration-200 hover:bg-[var(--bg-card)] hover:border-[var(--accent)]/50"
            >
              <Github size={18} />
              <span>GitHub</span>
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
