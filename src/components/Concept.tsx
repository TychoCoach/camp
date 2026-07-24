import { Eyebrow } from "./ui/Eyebrow";
import { Section } from "./ui/Section";
import type { PageContent } from "@/content";

export function Concept({ content }: { content: PageContent }) {
  const { concept } = content;

  return (
    <Section tone="light" labelledBy="concept-title">
      <div className="max-w-[680px]">
        <Eyebrow>{concept.eyebrow}</Eyebrow>
        <h2 id="concept-title" className="t-display mt-3.5 text-ink">
          {concept.title}
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-3 max-tab:grid-cols-1">
        {concept.columns.map((column, index) => (
          <div
            key={column.title}
            className={`border-t border-divider-soft pt-7 max-tab:border-l-0 max-tab:px-0 max-tab:py-6 ${
              index === 0 ? "pr-9" : index === concept.columns.length - 1 ? "border-l pl-9" : "border-l px-9"
            }`}
          >
            <h3 className="t-tagline text-ink">{column.title}</h3>
            <p className="t-body mt-3 text-ink-muted-80">{column.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
