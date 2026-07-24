import { Eyebrow } from "./ui/Eyebrow";
import { Section } from "./ui/Section";
import type { PageContent } from "@/content";

export function Audience({ content }: { content: PageContent }) {
  const { audience } = content;

  return (
    <Section tone="parchment" labelledBy="audience-title">
      <div className="grid grid-cols-[380px_1fr] gap-[72px] max-tab:grid-cols-1 max-tab:gap-10">
        <div>
          <Eyebrow>{audience.eyebrow}</Eyebrow>
          <h2 id="audience-title" className="t-display mt-3.5 text-ink">
            {audience.title}
          </h2>
          <p className="t-body mt-5 text-ink-muted-80">{audience.lead}</p>
        </div>

        <div className="flex flex-col">
          {audience.groups.map((group, index) => (
            <div
              key={group.title}
              className={`border-t border-hairline py-6.5 ${
                index === audience.groups.length - 1 ? "border-b" : ""
              }`}
            >
              <h3 className="t-tagline text-ink">{group.title}</h3>
              <p className="t-body mt-2.5 text-ink-muted-80">{group.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
