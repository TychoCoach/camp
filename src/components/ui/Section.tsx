import type { ReactNode } from "react";

export type SectionTone = "light" | "parchment" | "dark" | "dark-2" | "dark-3";

const toneClass: Record<SectionTone, string> = {
  light: "bg-canvas",
  parchment: "bg-canvas-parchment",
  dark: "bg-surface-tile-1",
  "dark-2": "bg-surface-tile-2",
  "dark-3": "bg-surface-tile-3",
};

interface SectionProps {
  id?: string;
  tone?: SectionTone;
  children: ReactNode;
  className?: string;
  /** Full-bleed sections manage their own inner container. */
  bare?: boolean;
  labelledBy?: string;
}

/**
 * Full-bleed tile. Tiles touch edge to edge; the surface-colour change is the
 * only divider in the system — no borders, no shadows.
 */
export function Section({
  id,
  tone = "light",
  children,
  className = "",
  bare = false,
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${toneClass[tone]} py-[88px] max-tab:py-16 max-ph:py-14 ${className}`}
    >
      {bare ? children : <Container>{children}</Container>}
    </section>
  );
}

export function Container({
  children,
  className = "",
  width = "content",
}: {
  children: ReactNode;
  className?: string;
  width?: "content" | "wide" | "narrow" | "form";
}) {
  const max = {
    content: "max-w-[1120px]",
    wide: "max-w-[1280px]",
    narrow: "max-w-[780px]",
    form: "max-w-[640px]",
  }[width];

  return (
    <div className={`${max} mx-auto px-8 max-ph:px-5 ${className}`}>{children}</div>
  );
}
