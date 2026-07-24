"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { Button } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";
import { Section } from "./ui/Section";
import type { PageContent } from "@/content";
import { contactEmail, waitlistEndpoint } from "@/lib/site";

type Status = "idle" | "submitting" | "mailto" | "sent" | "error";
type Errors = Partial<Record<"name" | "email" | "consent", string>>;

const fieldBase =
  "h-11 rounded-full border bg-canvas px-5 text-[17px] tracking-[-0.374px] text-ink outline-none focus:border-primary focus:ring-1 focus:ring-primary";

/**
 * Interest form.
 *
 * Two modes, decided by NEXT_PUBLIC_WAITLIST_ENDPOINT:
 *  - unset (default): opens a pre-filled mail draft. The confirmation says
 *    plainly that nothing has reached Tycho until the athlete sends it. No
 *    submission is stored anywhere and the UI never claims otherwise.
 *  - set: POSTs JSON to the endpoint, and only then shows a real confirmation.
 */
export function InteresseForm({ content }: { content: PageContent }) {
  const { form } = content;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const uid = useId();

  const fieldId = (name: string) => `${uid}-${name}`;
  const errorId = (name: string) => `${uid}-${name}-error`;

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = String(data.get("naam") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();

    if (!name) next.name = form.errors.name;
    if (!email) next.email = form.errors.email;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next.email = form.errors.emailFormat;
    if (!data.get("consent")) next.consent = form.errors.consent;

    return next;
  }

  function focusFirstError(next: Errors) {
    const order: (keyof Errors)[] = ["name", "email", "consent"];
    const first = order.find((key) => next[key]);
    if (!first) return;
    const fieldName = { name: "naam", email: "email", consent: "consent" }[first];
    formRef.current
      ?.querySelector<HTMLElement>(`[name="${fieldName}"]`)
      ?.focus({ preventScroll: false });
  }

  function buildMailto(data: FormData): string {
    const get = (key: string) => String(data.get(key) ?? "").trim() || "—";
    const lines = [
      "Hoi Tycho,",
      "",
      "Zet mij graag vrijblijvend op de interesselijst voor Camps — Calpe.",
      "",
      `Naam: ${get("naam")}`,
      `E-mail: ${get("email")}`,
      `Telefoon: ${get("telefoon")}`,
      `Ik kom als: ${get("type")}`,
      `Huidig niveau / FTP: ${get("niveau")}`,
      `Voorkeursperiode: ${get("periode")}`,
      `Trainingsuren per week: ${get("uren")}`,
      `Vermogensmeter: ${get("vermogensmeter")}`,
      `Belangrijkste doel: ${get("doel")}`,
      `Vragen/opmerkingen: ${get("opmerkingen")}`,
    ];
    return `mailto:${contactEmail}?subject=${encodeURIComponent(
      "Interesselijst — Camps Calpe",
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      focusFirstError(nextErrors);
      return;
    }

    // No backend configured → honest mailto hand-off.
    if (!waitlistEndpoint) {
      window.location.href = buildMailto(data);
      setStatus("mailto");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(waitlistEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus("sent");
      formRef.current?.reset();
    } catch {
      // Never claim success on failure.
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <Section id="interesse" tone="parchment" bare labelledBy="interesse-title">
      <div className="mx-auto max-w-[640px] px-8 max-ph:px-5">
        <div className="text-center">
          <Eyebrow>{form.eyebrow}</Eyebrow>
          <h2 id="interesse-title" className="t-display mt-3.5 text-ink">
            {form.title}
          </h2>
          <p className="t-body mt-4.5 text-ink-muted-80">{form.lead}</p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="mt-11 flex flex-col gap-4.5"
        >
          <div className="grid grid-cols-2 gap-4.5 max-ph:grid-cols-1">
            <Field
              label={form.fields.name.label}
              id={fieldId("naam")}
              error={errors.name}
              errorId={errorId("naam")}
            >
              <input
                id={fieldId("naam")}
                name="naam"
                type="text"
                autoComplete="name"
                required
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? errorId("naam") : undefined}
                className={`${fieldBase} ${errors.name ? "border-red-600" : "border-hairline"}`}
              />
            </Field>

            <Field
              label={form.fields.email.label}
              id={fieldId("email")}
              error={errors.email}
              errorId={errorId("email")}
            >
              <input
                id={fieldId("email")}
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? errorId("email") : undefined}
                className={`${fieldBase} ${errors.email ? "border-red-600" : "border-hairline"}`}
              />
            </Field>
          </div>

          <div className="grid grid-cols-2 gap-4.5 max-ph:grid-cols-1">
            <Field
              label={form.fields.phone.label}
              hint={form.fields.phone.optional}
              id={fieldId("telefoon")}
            >
              <input
                id={fieldId("telefoon")}
                name="telefoon"
                type="tel"
                autoComplete="tel"
                className={`${fieldBase} border-hairline`}
              />
            </Field>

            <Field
              label={form.fields.type.label}
              hint={form.fields.type.hint}
              id={fieldId("type")}
            >
              <input
                id={fieldId("type")}
                name="type"
                type="text"
                placeholder={form.fields.type.placeholder}
                className={`${fieldBase} border-hairline`}
              />
            </Field>
          </div>

          <div className="grid grid-cols-2 gap-4.5 max-ph:grid-cols-1">
            <Field
              label={form.fields.level.label}
              hint={form.fields.level.hint}
              id={fieldId("niveau")}
            >
              <input
                id={fieldId("niveau")}
                name="niveau"
                type="text"
                placeholder={form.fields.level.placeholder}
                className={`${fieldBase} border-hairline`}
              />
            </Field>

            <Field label={form.fields.period.label} id={fieldId("periode")}>
              <input
                id={fieldId("periode")}
                name="periode"
                type="text"
                placeholder={form.fields.period.placeholder}
                className={`${fieldBase} border-hairline`}
              />
            </Field>
          </div>

          <div className="grid grid-cols-2 gap-4.5 max-ph:grid-cols-1">
            <Field label={form.fields.volume.label} id={fieldId("uren")}>
              <input
                id={fieldId("uren")}
                name="uren"
                type="text"
                inputMode="numeric"
                placeholder={form.fields.volume.placeholder}
                className={`${fieldBase} border-hairline`}
              />
            </Field>

            <fieldset className="flex flex-col gap-2">
              <legend className="t-caption-strong mb-2 text-ink">
                {form.fields.powerMeter.label}
              </legend>
              <div className="flex gap-2.5">
                {form.fields.powerMeter.options.map((option) => (
                  <label
                    key={option}
                    className="press t-body flex h-11 flex-1 cursor-pointer items-center justify-center rounded-full border border-hairline bg-canvas text-ink has-checked:border-2 has-checked:border-primary-focus has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-primary-focus"
                  >
                    <input
                      type="radio"
                      name="vermogensmeter"
                      value={option}
                      className="sr-only"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <Field label={form.fields.goal.label} id={fieldId("doel")}>
            <input
              id={fieldId("doel")}
              name="doel"
              type="text"
              placeholder={form.fields.goal.placeholder}
              className={`${fieldBase} border-hairline`}
            />
          </Field>

          <Field label={form.fields.message.label} id={fieldId("opmerkingen")}>
            <textarea
              id={fieldId("opmerkingen")}
              name="opmerkingen"
              rows={4}
              placeholder={form.fields.message.placeholder}
              className="resize-y rounded-[18px] border border-hairline bg-canvas px-5 py-3.5 text-[17px] leading-[1.47] tracking-[-0.374px] text-ink outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </Field>

          <div>
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                value="ja"
                aria-invalid={errors.consent ? true : undefined}
                aria-describedby={errors.consent ? errorId("consent") : undefined}
                className={`mt-0.5 size-5 shrink-0 rounded-[5px] border accent-primary ${
                  errors.consent ? "border-red-600" : "border-hairline"
                }`}
              />
              <span className="t-caption text-ink-muted-80">
                {form.fields.consent.label}
              </span>
            </label>
            {errors.consent ? (
              <p id={errorId("consent")} className="t-caption mt-2 text-red-700">
                {errors.consent}
              </p>
            ) : null}
          </div>

          <div className="mt-2.5 flex flex-col items-center gap-3.5">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? form.submittingLabel : form.submitLabel}
            </Button>

            {/* One live region for every outcome, so screen readers hear it once. */}
            <div aria-live="polite" className="w-full">
              {status === "mailto" ? (
                <StatusNote tone="neutral">{form.mailtoConfirmation}</StatusNote>
              ) : null}
              {status === "sent" ? (
                <StatusNote tone="success">{form.postConfirmation}</StatusNote>
              ) : null}
              {status === "error" ? (
                <StatusNote tone="error">
                  {form.errors.network}{" "}
                  <a href={`mailto:${contactEmail}`} className="underline">
                    {contactEmail}
                  </a>
                  .
                </StatusNote>
              ) : null}
            </div>

            <span className="t-fine max-w-[440px] text-center text-ink-muted-48">
              {form.finePrint}
            </span>
            <span className="t-fine max-w-[440px] text-center text-ink-muted-48">
              {form.privacyNotice}{" "}
              <a href={`mailto:${contactEmail}`} className="text-primary">
                {contactEmail}
              </a>
              .
            </span>
          </div>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  hint,
  id,
  error,
  errorId,
  children,
}: {
  label: string;
  hint?: string;
  id: string;
  error?: string;
  errorId?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="t-caption-strong text-ink">
        {label}
        {hint ? <span className="ml-1 font-normal text-ink-muted-48">{hint}</span> : null}
      </label>
      {children}
      {error && errorId ? (
        <p id={errorId} className="t-caption text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function StatusNote({
  tone,
  children,
}: {
  tone: "neutral" | "success" | "error";
  children: React.ReactNode;
}) {
  const styles = {
    neutral: "border-hairline bg-canvas text-ink",
    success: "border-primary/30 bg-primary/8 text-ink",
    error: "border-red-300 bg-red-50 text-red-800",
  }[tone];

  return (
    <p className={`t-caption rounded-[11px] border px-4 py-2.5 text-center ${styles}`}>
      {children}
    </p>
  );
}
