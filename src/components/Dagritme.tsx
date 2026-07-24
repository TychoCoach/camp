import { Section } from "./ui/Section";
import { SplitSection } from "./ui/SplitSection";
import type { PageContent } from "@/content";

export function Dagritme({ content }: { content: PageContent }) {
  const { day } = content;

  return (
    <Section tone="parchment" labelledBy="dagritme-title">
      <SplitSection
        id="dagritme-title"
        eyebrow={day.eyebrow}
        title={day.title}
        lead={day.lead}
      >
        {day.timeline.map((item, index) => (
          <div
            key={item.time}
            className={`grid grid-cols-[80px_1fr] items-baseline gap-6 border-t border-hairline py-4 max-ph:grid-cols-[64px_1fr] max-ph:gap-4 ${
              index === day.timeline.length - 1 ? "border-b" : ""
            }`}
          >
            <span className="t-caption-strong tabular-nums text-primary">{item.time}</span>
            <div>
              <span className="t-body-strong text-ink">{item.title}</span>
              <span className="t-body mt-1 block text-ink-muted-80">{item.body}</span>
            </div>
          </div>
        ))}
      </SplitSection>
    </Section>
  );
}
