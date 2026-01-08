"use client";

import { motion } from "motion/react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/ui/reveal";
import { Award, Users, Cpu, GraduationCap, Trophy } from "lucide-react";

const proofItems = [
  {
    icon: Award,
    text: "NIAS Selection",
    detail: "1 of 30 nationwide",
  },
  {
    icon: Users,
    text: "IISc Open House",
    detail: "100+ visitors",
  },
  {
    icon: Cpu,
    text: "WRO South India",
    detail: "Robotics competition",
  },
  {
    icon: GraduationCap,
    text: "UNSW Sydney",
    detail: "AI Major, Finance Minor",
  },
  {
    icon: Trophy,
    text: "Warren Truss",
    detail: "25kg load, 250 efficiency",
  },
];

export function ProofStrip() {
  return (
    <section className="py-16 px-6 border-y border-[var(--border)] bg-[var(--bg-secondary)]/50">
      <div className="max-w-6xl mx-auto">
        <StaggerReveal className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {proofItems.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-3 px-4 py-2.5 bg-[var(--bg-card)] border border-[var(--border)] rounded-full"
              >
                <item.icon size={16} className="text-[var(--accent)] flex-shrink-0" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <span className="text-sm font-medium text-[var(--text-primary)]">
                    {item.text}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] hidden sm:block">
                    {item.detail}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
