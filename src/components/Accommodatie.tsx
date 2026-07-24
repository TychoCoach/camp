import { Eyebrow } from "./ui/Eyebrow";
import { Section } from "./ui/Section";
import type { PageContent } from "@/content";

function ItemList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="t-tagline text-ink">{title}</h3>
      <ul className="mt-3.5 flex flex-col">
        {items.map((item, index) => (
          <li
            key={item}
            className={`t-body border-t border-divider-soft py-3 text-ink-muted-80 ${
              index === items.length - 1 ? "border-b" : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Accommodatie({ content }: { content: PageContent }) {
  const { logistics } = content;

  return (
    <Section id="accommodatie" tone="light" labelledBy="accommodatie-title">
      <div className="max-w-[680px]">
        <Eyebrow>{logistics.eyebrow}</Eyebrow>
        <h2 id="accommodatie-title" className="t-display mt-3.5 text-ink">
          {logistics.title}
        </h2>
        {/* Mandated wording — verbatim from the commercial guardrails. */}
        <p className="t-body mt-5 text-body">{logistics.lead}</p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-[72px] max-tab:grid-cols-1 max-tab:gap-10">
        <ItemList title={logistics.organised.title} items={logistics.organised.items} />
        <ItemList
          title={logistics.ownBooking.title}
          items={logistics.ownBooking.items}
        />
      </div>
    </Section>
  );
}
