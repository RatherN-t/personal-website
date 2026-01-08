"use client";

import { Reveal } from "@/components/ui/reveal";
import { Cpu, GraduationCap, Code } from "lucide-react";

export function Now() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <h2 className="text-sm font-medium text-[var(--text-muted)] uppercase tracking-widest">
                Now
              </h2>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)] mb-6">
              Currently focused on
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                  <GraduationCap size={20} className="text-[var(--accent)]" />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--text-primary)] mb-1">
                    UNSW AI Major
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Deep diving into machine learning and intelligent systems
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                  <Code size={20} className="text-[var(--accent)]" />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--text-primary)] mb-1">
                    Building Projects
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Turning ideas into prototypes that solve real problems
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                  <Cpu size={20} className="text-[var(--accent)]" />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--text-primary)] mb-1">
                    Finance Minor
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Understanding the intersection of tech and markets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
