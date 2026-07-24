/**
 * Shape of a full page translation.
 *
 * Adding English later = add `src/content/en.ts` exporting a `PageContent`
 * with the same keys, then select it in `src/content/index.ts`. No component
 * needs to change: every visible string on the page comes from here.
 */

export interface CtaLink {
  label: string;
  href: string;
}

export interface NumberedItem {
  title: string;
  body: string;
  /** Optional qualifier rendered next to the title, e.g. "(optioneel)". */
  qualifier?: string;
}

export interface TimelineItem {
  time: string;
  title: string;
  body: string;
}

export interface LoopStep {
  step: string;
  label: string;
  body: string;
}

export interface DetailRow {
  term: string;
  value: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface PageContent {
  locale: string;
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  header: {
    brandName: string;
    brandAccent: string;
    brandSuffix: string;
    homeHref: string;
    contactLabel: string;
    ctaLabel: string;
    /** Language switch is display-only until an EN page exists. */
    localeToggle: { active: string; inactive: string; inactiveTitle: string };
  };
  subnav: {
    label: string;
    links: NavLink[];
    ctaLabel: string;
    menuLabel: string;
    menuCloseLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    note: string;
    imageAlt: string;
  };
  concept: {
    eyebrow: string;
    title: string;
    columns: { title: string; body: string }[];
  };
  audience: {
    eyebrow: string;
    title: string;
    lead: string;
    groups: { title: string; body: string }[];
  };
  calpe: {
    eyebrow: string;
    title: string;
    lead: string;
    points: NumberedItem[];
    imageSlot: { label: string; hint: string };
  };
  week: {
    eyebrow: string;
    title: string;
    lead: string;
    loop: LoopStep[];
    bookends: DetailRow[];
  };
  testing: {
    eyebrow: string;
    title: string;
    lead: string;
    items: NumberedItem[];
    disclaimer: string;
  };
  day: {
    eyebrow: string;
    title: string;
    lead: string;
    timeline: TimelineItem[];
  };
  logistics: {
    eyebrow: string;
    title: string;
    /** Legally mandated wording — do not paraphrase. */
    lead: string;
    organised: { title: string; items: string[] };
    ownBooking: { title: string; items: string[] };
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    freelanceNote: { before: string; linkLabel: string; href: string; after: string };
    portraitAlt: string;
    bandAlt: string;
    bandCaption: string;
  };
  pilot: {
    eyebrow: string;
    title: string;
    lead: string;
    rows: DetailRow[];
  };
  form: {
    eyebrow: string;
    title: string;
    lead: string;
    fields: {
      name: { label: string };
      email: { label: string };
      phone: { label: string; optional: string };
      type: { label: string; hint: string; placeholder: string };
      level: { label: string; hint: string; placeholder: string };
      period: { label: string; placeholder: string };
      volume: { label: string; placeholder: string };
      powerMeter: { label: string; options: string[] };
      goal: { label: string; placeholder: string };
      message: { label: string; placeholder: string };
      consent: { label: string };
    };
    submitLabel: string;
    submittingLabel: string;
    finePrint: string;
    privacyNotice: string;
    errors: {
      name: string;
      email: string;
      emailFormat: string;
      consent: string;
      summary: string;
      network: string;
    };
    mailtoConfirmation: string;
    postConfirmation: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Faq[];
  };
  finalCta: {
    title: string;
    lead: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
  };
  footer: {
    tagline: string;
    person: string;
    columns: { heading: string; links: NavLink[] }[];
    contact: {
      heading: string;
      location: string;
      email: string;
      phone: string;
      phoneHref: string;
      kvk: string;
    };
    /** Suffix after "© {year} " — kept plain so `content` stays serialisable. */
    copyrightSuffix: string;
    /** Rendered as plain text, not links — the pages do not exist yet. */
    legalPlaceholders: string[];
  };
}
