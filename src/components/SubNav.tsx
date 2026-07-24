"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { ButtonLink } from "./ui/Button";
import { Container } from "./ui/Section";
import type { PageContent } from "@/content";

export function SubNav({ content }: { content: PageContent }) {
  const { subnav } = content;
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <div className="sticky top-0 z-60 border-b border-ink/6 bg-canvas-parchment/80 backdrop-blur-[20px] backdrop-saturate-180">
      <Container width="wide" className="flex h-[52px] items-center justify-between gap-6">
        <span className="t-tagline text-ink">{subnav.label}</span>

        <div className="flex items-center gap-6.5">
          <nav
            className="flex items-center gap-6.5 max-tab:hidden"
            aria-label="Secties op deze pagina"
          >
            {subnav.links.map((link) => (
              <a key={link.href} href={link.href} className="t-caption text-ink-muted-80">
                {link.label}
              </a>
            ))}
          </nav>

          <ButtonLink href="#interesse" variant="pill-sm" className="max-ph:hidden">
            {subnav.ctaLabel}
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? subnav.menuCloseLabel : subnav.menuLabel}
            className="press -mr-2.5 hidden size-11 items-center justify-center rounded-lg text-ink max-tab:inline-flex"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="size-5.5"
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6 6 18" />
                </>
              ) : (
                <>
                  <path d="M3.5 7h17" />
                  <path d="M3.5 12h17" />
                  <path d="M3.5 17h17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open ? (
        <nav
          id={panelId}
          aria-label="Secties (mobiel menu)"
          className="hidden border-t border-ink/6 bg-canvas-parchment/95 backdrop-blur-[20px] max-tab:block"
        >
          <Container width="wide" className="flex flex-col py-2">
            {subnav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="t-body flex min-h-11 items-center border-b border-hairline/60 text-ink-muted-80 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#interesse"
              onClick={close}
              className="t-body flex min-h-11 items-center font-semibold text-primary ph:hidden"
            >
              {subnav.ctaLabel}
            </a>
          </Container>
        </nav>
      ) : null}
    </div>
  );
}
