import Image from "next/image";
import portrait from "@public/images/tycho-portret.jpg";
import raceBand from "@public/images/race-palms.jpg";
import { Eyebrow } from "./ui/Eyebrow";
import { Section } from "./ui/Section";
import type { PageContent } from "@/content";

export function OverTycho({ content }: { content: PageContent }) {
  const { about } = content;

  return (
    <Section tone="parchment" labelledBy="over-title">
      <div className="grid grid-cols-[400px_1fr] items-center gap-[72px] max-desk:gap-12 max-tab:grid-cols-1 max-tab:gap-10">
        <Image
          src={portrait}
          alt={about.portraitAlt}
          sizes="(max-width: 833px) 100vw, 400px"
          placeholder="blur"
          className="h-[460px] w-full rounded-[18px] object-cover object-[center_20%] shadow-photo max-tab:h-[420px] max-ph:h-[340px]"
        />

        <div>
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 id="over-title" className="t-display mt-3.5 text-ink">
            {about.title}
          </h2>
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 24)}
              className={`t-body text-body ${index === 0 ? "mt-5" : "mt-4"}`}
            >
              {paragraph}
            </p>
          ))}
          <p className="t-body mt-4 text-ink-muted-80">
            {about.freelanceNote.before}
            <a
              href={about.freelanceNote.href}
              className="text-primary underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {about.freelanceNote.linkLabel}
            </a>
            {about.freelanceNote.after}
          </p>
        </div>
      </div>

      <figure className="mt-16">
        <Image
          src={raceBand}
          alt={about.bandAlt}
          sizes="(max-width: 1120px) 100vw, 1056px"
          placeholder="blur"
          className="h-[420px] w-full rounded-[18px] object-cover object-[center_60%] shadow-photo max-ph:h-[260px]"
        />
        <figcaption className="t-caption mt-3.5 text-ink-muted-48">
          {about.bandCaption}
        </figcaption>
      </figure>
    </Section>
  );
}
