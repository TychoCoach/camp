import { Section } from "./ui/Section";
import { NumberedRow, SplitSection } from "./ui/SplitSection";
import type { PageContent } from "@/content";

export function Testen({ content }: { content: PageContent }) {
  const { testing } = content;

  return (
    <Section id="testen" tone="dark-2" labelledBy="testen-title">
      <SplitSection
        id="testen-title"
        eyebrow={testing.eyebrow}
        title={testing.title}
        lead={testing.lead}
        onDark
      >
        {testing.items.map((item, index) => (
          <NumberedRow
            key={item.title}
            index={index + 1}
            title={item.title}
            qualifier={item.qualifier}
            body={item.body}
            onDark
            last={index === testing.items.length - 1}
          />
        ))}
        <p className="t-caption mt-5 max-w-[560px] text-ink-muted-32">
          {testing.disclaimer}
        </p>
      </SplitSection>
    </Section>
  );
}
