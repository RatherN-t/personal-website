import { Reveal } from "@/components/ui/reveal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[var(--text-muted)]">
            <span className="text-lg font-semibold text-[var(--text-primary)]">YM</span>
            <span className="text-sm">·</span>
            <span className="text-sm">© {currentYear}</span>
          </div>

          <p className="text-sm text-[var(--text-muted)]">
            Built with Next.js, Tailwind CSS, and Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
