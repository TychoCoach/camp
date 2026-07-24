interface ImageSlotProps {
  label: string;
  hint?: string;
  className?: string;
}

/**
 * Placeholder for photography that has not been shot or licensed yet.
 *
 * Deliberately quiet and on-brand rather than a loud "MISSING IMAGE" block, so
 * the page can be reviewed as a whole. See IMAGE-SHOT-LIST.md for the exact
 * shot each slot expects. Replacing a slot = swap this element for
 * `next/image`; no layout change is required.
 */
export function ImageSlot({ label, hint, className = "" }: ImageSlotProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-[14px] border border-dashed border-white/20 bg-white/4 px-8 text-center ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        className="size-7 text-white/40"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="10" r="1.5" />
        <path d="m4 17 4.5-4.5a1.5 1.5 0 0 1 2 0L15 17" />
        <path d="m14 14 1.8-1.8a1.5 1.5 0 0 1 2 0L20 14.5" />
      </svg>
      <span className="t-caption-strong text-body-muted">{label}</span>
      {hint ? <span className="t-caption text-white/45">{hint}</span> : null}
    </div>
  );
}
