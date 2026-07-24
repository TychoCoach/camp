"use client";

import { useId, useState } from "react";
import { Eyebrow } from "./ui/Eyebrow";
import { Section } from "./ui/Section";
import type { PageContent } from "@/content";

export function Faq({ content }: { content: PageContent }) {
  const { faq } = content;
  // One panel open at a time, matching the approved interaction.
  const [open, setOpen] = useState(-1);
  const uid = useId();

  return (
    <Section id="faq" tone="light" bare labelledBy="faq-title">
      <div className="mx-auto max-w-[780px] px-8 max-ph:px-5">
        <Eyebrow>{faq.eyebrow}</Eyebrow>
        <h2 id="faq-title" className="t-display mt-3.5 text-ink">
          {faq.title}
        </h2>

        <div className="mt-11 border-t border-divider-soft">
          {faq.items.map((item, index) => {
            const isOpen = open === index;
            const panelId = `${uid}-panel-${index}`;
            const buttonId = `${uid}-button-${index}`;

            return (
              <div key={item.q} className="border-b border-divider-soft">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="t-body-strong text-ink">{item.q}</span>
                    <span
                      aria-hidden="true"
                      className="w-6 shrink-0 text-center text-[21px] leading-none text-primary"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
                  <p className="t-body pr-12 pb-5 text-ink-muted-80 max-ph:pr-0">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
