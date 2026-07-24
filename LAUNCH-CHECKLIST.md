# Launch checklist — Camps Calpe

Af te vinken vóór de pagina publiek en/of boekbaar wordt. De preview mag live zonder
alles af te vinken; de **juridische** en **content**-blokken zijn blokkerend voor een
publieke, boekbare lancering.

## Content
- [ ] Definitieve **periode** ingevuld (nu "volgt").
- [ ] Definitieve **richtprijs** ingevuld (nu "volgt vóór inschrijving").
- [ ] **Groepsgrootte** bevestigd — getal toevoegen of bewust weglaten.
- [ ] **Annuleringsbeleid** geschreven en gelinkt (FAQ zegt nu "volgt").
- [ ] Contactgegevens geverifieerd: e-mail, telefoon, **KVK 97624195**, plaats.
- [ ] Alle koppen/zinnen nagelezen; geen verzonnen data/prijzen/partners/testimonials.
- [ ] Accommodatie-formulering nog steeds verbatim en juridisch akkoord.

## Techniek
- [x] `npm install` slaagt.
- [x] `npm run lint` schoon.
- [x] `npm run typecheck` schoon.
- [x] `npm run build` (productie) slaagt.
- [x] Responsief getest op 1440 / 1024 / 390 px.
- [x] Toetsenbordnavigatie (skip-link, focus-states, FAQ met Enter).
- [x] Mobiel menu opent/sluit en heeft ≥44px tap-targets.
- [ ] Cross-browser check (Safari, Firefox, Chrome, mobiel Safari/Chrome).
- [ ] Lighthouse-run (performance/SEO/best-practices/a11y) op de preview.

## Juridisch (zie LEGAL-AND-OPERATIONS-REVIEW.md — blokkerend)
- [ ] Pakketreis-classificatie beoordeeld door jurist.
- [ ] Accommodatie-contractstructuur vastgelegd.
- [ ] Insolventiebescherming (indien van toepassing) geregeld.
- [ ] Algemene voorwaarden opgesteld en gelinkt.
- [ ] Annuleringsbeleid juridisch getoetst.
- [ ] Informed consent + gezondheidsverklaring klaar.
- [ ] Beeld-/portrettoestemming geregeld; alle beelden gelicentieerd.

## Verzekering
- [ ] Beroeps- en bedrijfsaansprakelijkheid met dekking in Spanje bevestigd.
- [ ] Ride-leading / groepsbegeleiding gedekt.
- [ ] Lactaat-/prikprocedure verzekeringstechnisch akkoord (of niet aanbieden).
- [ ] Deelnemers-eis: zorg- + reisverzekering (wielrennen) vastgelegd.

## Formulier
- [ ] Backend gekozen en gekoppeld (`NEXT_PUBLIC_WAITLIST_ENDPOINT`).
- [ ] Testinzending komt daadwerkelijk aan bij Tycho.
- [ ] Succes- én foutpad getest (geen valse succesmelding).
- [ ] AVG: privacyverklaring live, verwerkersovereenkomst met provider, bewaartermijn.

## Analytics
- [ ] Privacyvriendelijke analytics gekozen (bijv. Plausible/Vercel Analytics) — optioneel.
- [ ] Conversie op de interesselijst meetbaar (formulier-submits).
- [ ] Cookie-/consentafweging gemaakt (liefst geen tracking-cookies nodig).

## SEO
- [ ] `NEXT_PUBLIC_SITE_URL` gezet op het definitieve (sub)domein.
- [ ] `NEXT_PUBLIC_ALLOW_INDEXING=true` **pas** bij publieke lancering (nu noindex).
- [ ] Titel/omschrijving/OG-beeld gecontroleerd in een preview van de social card.
- [ ] Canonical klopt; `sitemap.xml` en `robots.txt` nagekeken.
- [ ] Geen keyword-stuffing; koppen dragen betekenis.

## Domein-integratie (geen productie-actie zonder akkoord)
- [ ] Besluit: subdomein `camps.tychocoaching.com`, subpad-rewrite, of overname in
      hoofd-repo (zie README).
- [ ] **tychocoaching.com blijft ongewijzigd** tot expliciet akkoord.
- [ ] Geen custom productiedomein gekoppeld tijdens de pilot.

## Testen (functioneel — reeds geautomatiseerd gecontroleerd)
- [x] Formuliervalidatie (verplichte velden, e-mailformaat, consent).
- [x] Geen opslag-pretentie zonder backend (eerlijke mailto-fallback).
- [x] FAQ-accordeon (één open tegelijk, muis + toetsenbord).
- [x] Mobiele navigatie (openen/sluiten, links zichtbaar).
- [ ] Handmatige eindtest op echte apparaten (iOS/Android).

## Finale menselijke review
- [ ] Tycho leest de volledige pagina na op toon en juistheid.
- [ ] Jurist geeft akkoord op de commerciële/juridische formuleringen.
- [ ] Go/no-go vastgelegd vóór het openzetten van inschrijving.
