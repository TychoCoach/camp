interface EyebrowProps {
  children: string;
  onDark?: boolean;
}

/** Small uppercase label above a section headline. */
export function Eyebrow({ children, onDark = false }: EyebrowProps) {
  return (
    <span
      className={`t-eyebrow block ${onDark ? "text-primary-on-dark" : "text-primary"}`}
    >
      {children}
    </span>
  );
}
