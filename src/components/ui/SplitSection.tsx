import type { CSSProperties, ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

interface SplitSectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  onDark?: boolean;
  children: ReactNode;
}

/**
 * The recurring two-column editorial layout: a 380px intro rail on the left,
 * content list on the right. Stacks to one column below 834px.
 */
export function SplitSection({
  id,
  eyebrow,
  title,
  lead,
  onDark = false,
  children,
}: SplitSectionProps) {
  return (
    <div className="grid grid-cols-[380px_1fr] gap-[72px] max-tab:grid-cols-1 max-tab:gap-10">
      <div>
        <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
        <h2
          id={id}
          className={`t-display mt-3.5 ${onDark ? "text-white" : "text-ink"}`}
        >
          {title}
        </h2>
        {lead ? (
          <p
            className={`t-body mt-5 ${onDark ? "text-body-muted" : "text-ink-muted-80"}`}
          >
            {lead}
          </p>
        ) : null}
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

/**
 * Numbered row used in "Waarom Calpe" and "Testen & inzicht".
 * `first` draws the top hairline, `last` closes the stack with a bottom one.
 */
export function NumberedRow({
  index,
  title,
  qualifier,
  body,
  onDark = false,
  last = false,
}: {
  index: number;
  title: string;
  qualifier?: string;
  body: string;
  onDark?: boolean;
  last?: boolean;
}) {
  const rule = onDark ? "border-white/12" : "border-hairline";
  return (
    <div
      className={`grid grid-cols-[56px_1fr] items-baseline gap-4 border-t py-4 max-ph:grid-cols-[40px_1fr] max-ph:gap-3 ${rule} ${
        last ? "border-b" : ""
      }`}
    >
      <span
        className={`t-caption-strong tabular-nums ${
          onDark ? "text-primary-on-dark" : "text-primary"
        }`}
      >
        {String(index).padStart(2, "0")}
      </span>
      <div>
        <span
          className={`t-body-strong ${onDark ? "text-body-on-dark" : "text-ink"}`}
        >
          {title}
          {qualifier ? (
            <span
              className={`t-caption ml-2 font-normal ${
                onDark ? "text-ink-muted-32" : "text-ink-muted-48"
              }`}
            >
              {qualifier}
            </span>
          ) : null}
        </span>
        <span
          className={`t-body mt-1 block ${
            onDark ? "text-body-muted" : "text-ink-muted-80"
          }`}
        >
          {body}
        </span>
      </div>
    </div>
  );
}

/** Term / value row used in the pilot-details and week book-end lists. */
export function DetailRow({
  term,
  value,
  onDark = false,
  last = false,
  termWidth = "160px",
}: {
  term: string;
  value: string;
  onDark?: boolean;
  last?: boolean;
  termWidth?: string;
}) {
  const rule = onDark ? "border-white/12" : "border-divider-soft";
  return (
    <div
      className={`grid grid-cols-[var(--term-w)_1fr] gap-6 border-t py-4 max-ph:grid-cols-1 max-ph:gap-1 ${rule} ${
        last ? "border-b" : ""
      }`}
      style={{ "--term-w": termWidth } as CSSProperties}
    >
      <dt
        className={`t-caption-strong ${onDark ? "text-ink-muted-32" : "text-ink-muted-48"}`}
      >
        {term}
      </dt>
      <dd className={`t-body ${onDark ? "text-body-on-dark" : "text-ink-muted-80"}`}>
        {value}
      </dd>
    </div>
  );
}
