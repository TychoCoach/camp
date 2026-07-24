import Image from "next/image";
// Coast over the peloton placeholder: no event watermark, Mediterranean light,
// and the rider sits right so the headline gets clean sky/sea contrast on the
// left. See IMAGE-SHOT-LIST.md for the intended licensed Calpe replacement.
import heroImage from "@public/images/hero-coast.jpg";
import { ButtonLink } from "./ui/Button";
import { Container } from "./ui/Section";
import type { PageContent } from "@/content";

export function Hero({ content }: { content: PageContent }) {
  const { hero } = content;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative h-[clamp(620px,90vh,860px)] overflow-hidden bg-surface-tile-3 max-ph:h-auto max-ph:min-h-[88svh]"
    >
      <Image
        src={heroImage}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        className="object-cover object-[62%_30%]"
      />

      {/* Dark scrim protects headline contrast against the photograph. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(88deg,rgba(5,9,15,0.72)_10%,rgba(5,9,15,0.38)_48%,rgba(5,9,15,0.10)_80%)] max-tab:bg-[linear-gradient(180deg,rgba(5,9,15,0.55)_0%,rgba(5,9,15,0.78)_70%)]"
      />

      {/* The one atmospheric gradient in the system: blue → teal, low opacity. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[38%] bg-[linear-gradient(135deg,rgba(29,78,216,0.28)_0%,rgba(22,119,184,0.18)_52%,rgba(34,168,154,0.22)_100%)] [mask-image:linear-gradient(to_top,black_20%,transparent)]"
      />

      <Container
        width="wide"
        className="relative z-2 flex h-full flex-col justify-center max-ph:pt-24 max-ph:pb-14"
      >
        <div className="flex max-w-[620px] flex-col gap-[22px] max-ph:gap-4">
          <span className="text-[14px] font-semibold uppercase tracking-[2.2px] text-white/82">
            {hero.eyebrow}
          </span>
          <h1 id="hero-title" className="t-hero text-white">
            {hero.title}
          </h1>
          <p className="t-lead max-w-[520px] text-white/88">{hero.lead}</p>
          <div className="mt-2 flex flex-wrap items-center gap-3.5">
            <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="ghost-on-dark">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
          <span className="t-caption text-white/66">{hero.note}</span>
        </div>
      </Container>
    </section>
  );
}
