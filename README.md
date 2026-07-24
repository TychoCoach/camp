# Tycho Coaching Camps — Calpe (pilot landing)

Een Nederlandstalige, niet-bindende **interesselijst-pagina** voor een kleinschalig
fietstrainingskamp in Calpe, onder de bestaande merknaam Tycho Coaching. Dit is
een pilot: geen betaling, geen boeking, alleen interesse verzamelen.

Gebouwd met **Next.js (App Router) · TypeScript · Tailwind CSS v4**. De pagina is
een implementatie van de goedgekeurde Claude Design-handoff en het design-system
`Subtle-gradient-DESIGN.md`.

---

## Snel starten

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

### Scripts

| Script | Doel |
| --- | --- |
| `npm run dev` | Lokale ontwikkelserver (hot reload) |
| `npm run build` | Productiebuild |
| `npm run start` | Productieserver draaien (na `build`) |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript zonder output (`tsc --noEmit`) |
| `npm run check` | lint + typecheck + build in één keer |

De build is groen op `npm run check` (lint ✓, types ✓, build ✓).

---

## Projectstructuur

```
public/images/            Foto's (hero, portret, koersband)
src/
  app/
    layout.tsx            <html>, metadata, Open Graph, robots, Inter-font
    page.tsx             Sectievolgorde van de pagina
    globals.css          Design-tokens (kleuren, type, radii) + basis
    robots.ts            Preview = niet indexeren (opt-in via env)
    sitemap.ts
  components/
    ui/                  Herbruikbare primitives (Section, Button, SplitSection, …)
    *.tsx                Eén component per paginasectie
  content/
    types.ts             Type van een volledige paginavertaling
    nl.ts                ALLE zichtbare tekst (Nederlands)
    index.ts             getContent(locale) — entreepunt voor kopij
  lib/
    site.ts              Env-afhankelijke config (URL, form-endpoint, indexering)
```

### Waar staat de content?

**Alle** zichtbare tekst staat in [`src/content/nl.ts`](src/content/nl.ts). Componenten
bevatten geen hardgecodeerde kopij — pas teksten daar aan. FAQ-items, formulierlabels,
de pilotdetails en de juridisch verplichte accommodatie-zin staan er allemaal in.

---

## Foto's vervangen

Foto's staan in [`public/images/`](public/images) en worden als **statische import**
geladen (`next/image` met blur-placeholder). Vervangen:

1. Zet het nieuwe bestand in `public/images/` (bij voorkeur dezelfde naam en
   verhouding — zie `IMAGE-SHOT-LIST.md` voor de gewenste crops).
2. Staat het onder een nieuwe naam, pas dan de `import`-regel bovenaan de
   betreffende component aan (`Hero.tsx`, `OverTycho.tsx`).

Twee plekken zijn nu **elegante placeholders** (dashed kader met label), wachtend op
echte Calpe-foto's: de "Waarom Calpe"-sectie en optioneel een eigen hero-beeld. Zie
`src/components/ui/ImageSlot.tsx`. Vervang zo'n slot door een `next/image`-element;
de layout blijft gelijk.

> De huidige hero (`hero-coast.jpg`) en koersband (`race-palms.jpg`) zijn
> plaatsvervangende beelden. Vervang ze door gelicentieerde Calpe-fotografie vóór
> een publieke lancering. Gebruik geen beeld zonder bekende gebruiksrechten.

---

## Het interesseformulier aansluiten

Het formulier heeft twee modi, bepaald door één env-variabele:

### Standaard (geen backend) — eerlijke mailto-fallback
Zonder `NEXT_PUBLIC_WAITLIST_ENDPOINT` opent het formulier een **vooringevuld
mailbericht** naar het contactadres. De bevestiging zegt expliciet dat de aanmelding
pas binnen is als de gebruiker die mail verstuurt. Er wordt **niets** opgeslagen en de
UI doet ook niet alsof. Dit is de veilige standaard voor de preview.

### Met backend — echte POST
Zet `NEXT_PUBLIC_WAITLIST_ENDPOINT` op een endpoint dat JSON accepteert. Het
formulier POST't dan `application/json` en toont **alleen bij een 2xx-respons** een
echte bevestiging. Bij een fout verschijnt een foutmelding met een mailto-uitweg —
nooit een valse succesmelding.

Voorbeelden om te koppelen:

- **Formspree** — maak een form aan, zet de endpoint (`https://formspree.io/f/xxxx`)
  in `NEXT_PUBLIC_WAITLIST_ENDPOINT`. Formspree accepteert JSON en mailt de inzending.
- **ConvertKit / Mailchimp** — gebruik hun form-endpoint of een kleine serverless
  proxy die de velden omzet naar hun API.
- **Resend** — voeg een route toe (`src/app/api/waitlist/route.ts`) die de body naar
  Resend stuurt, en zet `NEXT_PUBLIC_WAITLIST_ENDPOINT=/api/waitlist`. Bewaar de
  API-key server-side (`RESEND_API_KEY`, geen `NEXT_PUBLIC_`).

Verzamelde velden: naam, e-mail, telefoon, type (renner/ploeg), niveau/FTP,
voorkeursperiode, trainingsuren, vermogensmeter (ja/nee), belangrijkste doel,
opmerkingen, toestemming. Denk aan een AVG-conforme verwerking en bewaartermijn.

---

## Omgevingsvariabelen

Kopieer `.env.example` naar `.env.local`. **Alles is optioneel** — zonder env-bestand
bouwt en draait de site, met de mailto-fallback.

| Variabele | Effect |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical + OG-URL. Leeg op preview = Vercel-preview-URL wordt automatisch gebruikt. |
| `NEXT_PUBLIC_WAITLIST_ENDPOINT` | Leeg = mailto-fallback. Gezet = echte POST. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Adres voor mailto en footer (standaard `tychocoach@gmail.com`). |
| `NEXT_PUBLIC_ALLOW_INDEXING` | `true` = indexeerbaar. Standaard/preview = `false` (noindex). |

---

## Deployen naar Vercel (alleen preview)

> Wijzig **niet** tychocoaching.com en koppel **geen** custom productiedomein.
> Dit blijft een preview.

1. Push deze repo naar GitHub (branch `claude/calpe-camp-page`).
2. Vercel → **New Project** → importeer de repo. Framework wordt herkend als Next.js
   (`vercel.json` staat klaar). Geen env-variabelen nodig voor een eerste preview.
3. Vercel bouwt automatisch een **Preview Deployment** per branch/PR. De URL is
   `https://<project>-<hash>.vercel.app`.
4. Laat `NEXT_PUBLIC_ALLOW_INDEXING` op `false` staan zodat de preview niet in Google
   verschijnt (`robots.txt` staat dan op `Disallow: /`).

CLI-alternatief (optioneel), zonder aan productie te koppelen:

```bash
npx vercel        # maakt/kiest een project en zet een preview-deploy neer
```

---

## Een Engelse versie toevoegen

De architectuur is hier op voorbereid, zonder dat er nu een vertaalsysteem in zit:

1. Maak `src/content/en.ts` met een `PageContent` met dezelfde sleutels als `nl.ts`.
2. Verbreed `Locale` in `src/content/index.ts` naar `"nl" | "en"` en registreer `en`.
3. Kies de taal via een route group (bijv. `/en`) of een toggle die `getContent("en")`
   doorgeeft. Componenten lezen alle tekst al uit `content` — er hoeft niets aan de
   componenten te veranderen.

De NL/EN-schakelaar in de header is nu bewust **display-only** (nog geen EN-pagina).

---

## Later integreren in tychocoaching.com

Deze pagina is een op zichzelf staande route en raakt de hoofdsite niet. Opties om te
integreren:

- **Subdomein** — `camps.tychocoaching.com` naar deze deployment laten wijzen.
- **Subpad via rewrite** — vanuit de hoofdsite `/camps/calpe` naar deze app
  proxyen (Next `rewrites` of een reverse proxy).
- **Overnemen in de hoofd-repo** — de `content/`- en `components/`-mappen zijn
  zelfstandig; kopieer ze en hang de sectie onder de bestaande navigatie ("Camps").

De header/footer nemen bewust de merktypografie van Tycho Coaching over, zodat de
overgang naadloos is.

---

## Openstaande placeholders

Bewust nog niet ingevuld (wachten op input van de klant):

- **Periode** en **richtprijs** — overal als "volgt" gemarkeerd.
- **Groepsgrootte** — bewust zonder hard getal ("klein en geselecteerd").
- **Twee Calpe-foto's** — nu elegante placeholders (zie `IMAGE-SHOT-LIST.md`).
- **Hero- en koersfoto** — plaatsvervangend; vervangen door gelicentieerd Calpe-beeld.
- **EN-vertaling** — toggle staat klaar als stub.
- **Privacy- en Voorwaarden-pagina's** — in de footer als tekst "— volgt", nog geen link.
- **Form-backend** — mailto-fallback tot een provider is gekoppeld.

Zie ook `LAUNCH-CHECKLIST.md`, `LEGAL-AND-OPERATIONS-REVIEW.md`,
`CONTENT-DECISIONS.md` en `IMAGE-SHOT-LIST.md`.
