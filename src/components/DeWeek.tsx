import { Eyebrow } from "./ui/Eyebrow";
import { Section } from "./ui/Section";
import { DetailRow } from "./ui/SplitSection";
import type { PageContent } from "@/content";

export function DeWeek({ content }: { content: PageContent }) {
  const { week } = content;

  return (
    <Section id="programma" tone="light" labelledBy="week-title">
      <div className="max-w-[720px]">
        <Eyebrow>{week.eyebrow}</Eyebrow>
        <h2 id="week-title" className="t-display mt-3.5 text-ink">
          {week.title}
        </h2>
        <p className="t-body mt-5 text-body">{week.lead}</p>
      </div>

      <ol className="mt-14 grid grid-cols-4 gap-10 max-tab:grid-cols-2 max-tab:gap-x-6 max-tab:gap-y-8 max-xs:grid-cols-1">
        {week.loop.map((step) => (
          <li key={step.step} className="border-t-2 border-primary pt-4.5">
            <span className="t-caption-strong text-primary">
              {step.step} · {step.label}
            </span>
            <p className="t-body mt-2 text-ink-muted-80">{step.body}</p>
          </li>
        ))}
      </ol>

      <dl className="mt-14">
        {week.bookends.map((row, index) => (
          <DetailRow
            key={row.term}
            term={row.term}
            value={row.value}
            termWidth="200px"
            last={index === week.bookends.length - 1}
          />
        ))}
      </dl>
    </Section>
  );
}
