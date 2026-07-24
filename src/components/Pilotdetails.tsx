import { Section } from "./ui/Section";
import { DetailRow, SplitSection } from "./ui/SplitSection";
import type { PageContent } from "@/content";

export function Pilotdetails({ content }: { content: PageContent }) {
  const { pilot } = content;

  return (
    <Section tone="dark" labelledBy="pilot-title">
      <SplitSection
        id="pilot-title"
        eyebrow={pilot.eyebrow}
        title={pilot.title}
        lead={pilot.lead}
        onDark
      >
        <dl className="flex flex-col">
          {pilot.rows.map((row, index) => (
            <DetailRow
              key={row.term}
              term={row.term}
              value={row.value}
              onDark
              last={index === pilot.rows.length - 1}
            />
          ))}
        </dl>
      </SplitSection>
    </Section>
  );
}
