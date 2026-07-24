import { ButtonLink } from "./ui/Button";
import { Container } from "./ui/Section";
import type { PageContent } from "@/content";
import { contactEmail } from "@/lib/site";

export function SiteHeader({ content }: { content: PageContent }) {
  const { header } = content;

  return (
    <header className="border-b border-divider-soft bg-canvas">
      <Container width="wide" className="flex h-[72px] items-center justify-between gap-6 max-ph:h-15">
        <a
          href={header.homeHref}
          className="flex items-baseline gap-2.5 text-ink"
          aria-label={`${header.brandName}${header.brandAccent} — ${header.brandSuffix}`}
        >
          <span className="text-[22px] font-bold tracking-[-0.374px]">
            {header.brandName}
            <span className="text-brand-teal">{header.brandAccent}</span>
          </span>
          <span className="text-[12px] font-semibold uppercase tracking-[1.6px] text-ink-muted-48">
            {header.brandSuffix}
          </span>
        </a>

        <nav className="flex items-center gap-7" aria-label="Hoofdmenu">
          <a
            href={`mailto:${contactEmail}`}
            className="t-caption text-ink-muted-80 max-tab:hidden"
          >
            {header.contactLabel}
          </a>
          {/* Display-only until an English page exists — not a control. */}
          <span
            className="t-caption inline-flex items-center gap-1.5 text-ink-muted-80 max-tab:hidden"
            title={header.localeToggle.inactiveTitle}
          >
            <span className="font-semibold text-ink">{header.localeToggle.active}</span>
            <span className="text-body-muted" aria-hidden="true">
              /
            </span>
            <span className="text-ink-muted-32">{header.localeToggle.inactive}</span>
          </span>
          <ButtonLink href="#interesse" variant="pill-sm">
            {header.ctaLabel}
          </ButtonLink>
        </nav>
      </Container>
    </header>
  );
}
