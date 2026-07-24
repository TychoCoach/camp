import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "ghost-on-dark" | "pill-sm";

const base =
  "press inline-flex items-center justify-center rounded-full whitespace-nowrap";

const variants: Record<Variant, string> = {
  // The signature action pill. 18px / 300 is the documented store-hero CTA type.
  primary:
    "bg-primary text-white text-[18px] font-light leading-none px-7 py-[15px]",
  // Outlined pill for the secondary action on photographic / dark surfaces.
  "ghost-on-dark":
    "bg-black/15 text-white text-[18px] font-light leading-none px-7 py-[14px] border border-white/55 backdrop-blur-[6px]",
  // Compact utility pill used in the header and sub-nav.
  "pill-sm": "bg-primary text-white t-caption px-5 py-2.5",
};

interface ButtonLinkProps extends ComponentPropsWithoutRef<"a"> {
  variant?: Variant;
  children: ReactNode;
}

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
