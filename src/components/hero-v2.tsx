import { BlrTime } from "@/components/blr-time";
import { HeroVisualV2 } from "@/components/hero-visual-v2";

export function HeroV2() {
  return (
    <section className="relative overflow-hidden flex flex-col justify-center min-h-[calc(100vh-52px)]">
      <HeroVisualV2 />

      <div className="relative z-10 max-w-5xl mx-auto w-full px-6 sm:px-8 pb-16 pointer-events-none">
        <div className="max-w-[680px]">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-xs text-text-3 bg-background/70 backdrop-blur-sm"
            style={{ border: "0.5px solid var(--border-subtle)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"
              style={{ animation: "dot-pulse 2.5s ease-in-out infinite" }}
              aria-hidden
            />
            Bengaluru · <BlrTime />
          </div>

          <h1 className="font-sans font-bold text-[4.5rem] leading-[0.95] tracking-tight text-text-1 mb-4">
            Rahul Sawant
          </h1>

          <p className="text-lg text-text-2 leading-snug mb-4">
            Curious by nature. <span className="text-accent">Engineer</span>{" "}
            by trade.
          </p>

          <p className="text-[13px] text-text-3 leading-relaxed">
            <span className="text-accent">
              Tech Architect @ HashedIn by Deloitte.
            </span>{" "}
            Former Founding Member —{" "}
            <a
              href="https://www.linkedin.com/posts/rajeev-vasudeva-4068b5_hashedin-antstack-aiengineering-ugcPost-7467206362578460672-uZuK"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto text-text-3 underline underline-offset-2 hover:text-accent transition-colors hover:opacity-100"
            >
              AntStack
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
