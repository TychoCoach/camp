import { ButtonLink } from "./ui/Button";
import type { PageContent } from "@/content";

export function SlotCta({ content }: { content: PageContent }) {
  const { finalCta } = content;

  return (
    <section
      aria-labelledby="slot-cta-title"
      className="relative overflow-hidden bg-surface-tile-3 py-28 max-tab:py-20 max-ph:py-16"
    >
      {/* The system's atmospheric gradient — the only decorative wash allowed. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(29,78,216,0.32)_0%,rgba(22,119,184,0.14)_52%,rgba(34,168,154,0.26)_100%)]"
      />

      <div className="relative mx-auto max-w-[780px] px-8 text-center max-ph:px-5">
        <h2 id="slot-cta-title" className="t-display-lg text-white">
          {finalCta.title}
        </h2>
        <p className="t-lead-airy mx-auto mt-5 max-w-[520px] text-body-muted">
          {finalCta.lead}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <ButtonLink href={finalCta.primaryCta.href}>
            {finalCta.primaryCta.label}
          </ButtonLink>
          <ButtonLink
            href={finalCta.secondaryCta.href}
            variant="ghost-on-dark"
            className="bg-transparent backdrop-blur-none"
          >
            {finalCta.secondaryCta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
