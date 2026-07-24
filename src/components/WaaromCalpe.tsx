import { Eyebrow } from "./ui/Eyebrow";
import { ImageSlot } from "./ui/ImageSlot";
import { Section } from "./ui/Section";
import { NumberedRow } from "./ui/SplitSection";
import type { PageContent } from "@/content";

export function WaaromCalpe({ content }: { content: PageContent }) {
  const { calpe } = content;

  return (
    <Section id="calpe" tone="dark" labelledBy="calpe-title">
      <div className="grid grid-cols-[1fr_460px] items-center gap-[72px] max-desk:gap-12 max-tab:grid-cols-1 max-tab:gap-10">
        <div>
          <Eyebrow onDark>{calpe.eyebrow}</Eyebrow>
          <h2 id="calpe-title" className="t-display mt-3.5 text-white">
            {calpe.title}
          </h2>
          <p className="t-body mt-5 max-w-[520px] text-body-muted">{calpe.lead}</p>

          <div className="mt-8 flex flex-col">
            {calpe.points.map((point, index) => (
              <NumberedRow
                key={point.title}
                index={index + 1}
                title={point.title}
                body={point.body}
                onDark
                last={index === calpe.points.length - 1}
              />
            ))}
          </div>
        </div>

        <ImageSlot
          label={calpe.imageSlot.label}
          hint={calpe.imageSlot.hint}
          className="h-[540px] max-tab:h-[420px] max-ph:h-[300px]"
        />
      </div>
    </Section>
  );
}
