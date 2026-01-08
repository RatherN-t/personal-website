"use client";

import { motion } from "motion/react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/ui/reveal";
import { Heart, Users, Mic2, Shield } from "lucide-react";

interface LeadershipItem {
  icon: typeof Heart;
  title: string;
  description: string;
  detail: string;
}

const leadershipItems: LeadershipItem[] = [
  {
    icon: Heart,
    title: "CARE Animal Rescue",
    description:
      "Volunteered at Charlie Animal Rescue Centre — animal rehabilitation, bathing, tick removal, and general cleanup support.",
    detail: "Ongoing commitment",
  },
  {
    icon: Shield,
    title: "Rotary COVID Relief",
    description:
      "Led a small team distributing masks and sanitizers during COVID. Optimized distribution strategy on a tight budget.",
    detail: "Team leadership",
  },
  {
    icon: Mic2,
    title: "Gavel Club Speaker",
    description:
      "Awards include Best Table Topics Speaker, Best Speaker, and Best Listener. Mentored newcomers in public speaking.",
    detail: "Toastmasters Youth",
  },
  {
    icon: Users,
    title: "International Tutoring",
    description:
      "Tutored underprivileged children from Uganda, focusing on foundational education and building confidence.",
    detail: "Remote mentoring",
  },
];

function LeadershipCard({ item }: { item: LeadershipItem }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      className="relative bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--text-muted)] transition-colors overflow-hidden group"
    >
      {/* Background icon */}
      <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
        <item.icon size={120} strokeWidth={1} />
      </div>

      <div className="relative">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--accent)]/10 mb-4">
          <item.icon size={20} className="text-[var(--accent)]" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
          {item.title}
        </h3>
        <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-3">
          {item.description}
        </p>

        {/* Detail tag */}
        <span className="inline-block px-2.5 py-1 text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-secondary)] rounded-md">
          {item.detail}
        </span>
      </div>
    </motion.div>
  );
}

export function Leadership() {
  return (
    <section
      id="leadership"
      className="py-24 md:py-32 px-6 bg-[var(--bg-secondary)]/50"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-4">
              Leadership & Volunteering
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              Impact beyond code — leading teams and serving communities.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {leadershipItems.map((item, index) => (
            <StaggerItem key={index}>
              <LeadershipCard item={item} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
