import { Container } from "./ui/Section";
import type { PageContent } from "@/content";

export function SiteFooter({ content }: { content: PageContent }) {
  const { footer, header } = content;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-canvas-parchment pt-16 pb-10">
      <Container>
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 max-tab:grid-cols-2 max-tab:gap-10 max-xs:grid-cols-1">
          <div>
            <span className="text-[20px] font-bold tracking-[-0.374px] text-ink">
              {header.brandName}
              <span className="text-brand-teal">{header.brandAccent}</span>
            </span>
            <p className="t-caption mt-3.5 max-w-[280px] text-ink-muted-80">
              {footer.tagline}
            </p>
            <p className="t-caption mt-3.5 text-ink-muted-48">{footer.person}</p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.heading}>
              <h2 className="t-caption-strong text-ink">{column.heading}</h2>
              <ul className="mt-2.5 flex flex-col">
                {column.links.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="t-dense-link text-ink-muted-80"
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="t-caption-strong text-ink">{footer.contact.heading}</h2>
            <ul className="mt-2.5 flex flex-col">
              <li className="t-dense-link text-ink-muted-80">{footer.contact.location}</li>
              <li>
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="t-dense-link text-ink-muted-80"
                >
                  {footer.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={footer.contact.phoneHref}
                  className="t-dense-link text-ink-muted-80"
                >
                  {footer.contact.phone}
                </a>
              </li>
              <li className="t-dense-link text-ink-muted-80">{footer.contact.kvk}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-hairline pt-6">
          <span className="t-fine text-ink-muted-48">
            © {year} {footer.copyrightSuffix}
          </span>
          {/* Plain text, not links: these pages do not exist yet. */}
          <div className="flex gap-6">
            {footer.legalPlaceholders.map((label) => (
              <span key={label} className="t-fine text-ink-muted-48">
                {label}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
