# Image shot list — Camps Calpe

Wat nu op de pagina staat, en welke gelicentieerde beelden nog nodig zijn. **Gebruik
geen beeld zonder bekende gebruiksrechten.** De huidige hero en koersband zijn
plaatsvervangend en moeten vóór publieke lancering vervangen worden door echte,
gelicentieerde Calpe-fotografie.

Alle beelden laden via `next/image` (responsive `srcset`, lazy onder de vouw, blur-
placeholder). Vervangen = bestand in `public/images/` zetten en de import in de
component aanpassen (zie README → "Foto's vervangen").

---

## Nu in gebruik (plaatsvervangend / eigen materiaal)

| Bestand | Sectie | Verhouding / crop | Opmerking |
| --- | --- | --- | --- |
| `hero-coast.jpg` | Hero | full-bleed, object-position `62% 30%` | Renner langs de kust. Schoon, geen watermerk. **Vervangen door Calpe-hero.** |
| `tycho-portret.jpg` | Over Tycho | 400×460, object-position `center 20%`, radius 18 + fotoschaduw | Echt portret van Tycho. Bruikbaar; scherpere/ hoger-resolutie versie is fijn. |
| `race-palms.jpg` | Band onder bio | full-bleed, 420px hoog, object-position `center 60%` | Koersactie. Bevat een event-watermerk in andere crops — controleer rechten en overweeg vervanging. |

> `hero-peloton.jpg` (peloton met "Tour Gateh"-watermerk) staat nog in `public/images`
> als alternatief, maar wordt **niet** gebruikt: het watermerk past niet bij een
> premium merk. Verwijder gerust bij opschonen.

---

## Nog te maken / te licentiëren (placeholders op de pagina)

### 1. Waarom Calpe — locatiebeeld (nu een dashed placeholder)
- **Onderwerp:** Peñón de Ifach boven de baai van Calpe, of een herkenbare klim/kustweg
  (bijv. Coll de Rates) met één of twee renners klein in beeld.
- **Oriëntatie:** portret/staand (past in een 460×540-slot, ~5:6).
- **Aanbevolen crop:** rots/landschap dominant, lucht bovenin, evt. renner als schaal.
- **Mensen:** geen of klein/anoniem (geen herkenbare gezichten nodig).
- **Licht:** helder daglicht, blauw/gouden ochtend; geen zware nabewerking.
- **Sectie:** "Waarom Calpe" (donkere tegel — beeld moet ook op donker goed ogen).
- **Alt-tekst (voorstel):** `De Peñón de Ifach boven de baai van Calpe`.
- **Min. resolutie:** 1080×1300 px (2× voor retina: 2160×2600 px).

### 2. Optioneel eigen hero-beeld — Calpe (hero-variant)
- **Onderwerp:** kleine groep renners op een Calpe-kustweg of klim, van voren/opzij,
  ochtendlicht. Beeld dat "kleine groep + coach" uitstraalt.
- **Oriëntatie:** liggend, zeer breed (full-bleed hero, ~21:9 uitsnede).
- **Aanbevolen crop:** actie rechts/midden, **rustige, donkerdere linkerzone** voor de
  titeltekst (leesbaarheid). Belangrijke koppen mogen niet over drukke delen vallen.
- **Mensen:** ja, herkenbaar mag — regel dan portret-/beeldtoestemming.
- **Licht:** natuurlijk, warm; vermijd harde tegenlicht-vlekken achter de tekst.
- **Sectie:** Hero.
- **Alt-tekst (voorstel):** `Kleine groep renners traint op een kustweg bij Calpe`.
- **Min. resolutie:** 2400×1350 px (liefst 3200×1800 px voor grote schermen).

---

## Optioneel extra beeld (versterkt de pagina, niet vereist)

Alleen toevoegen als het representatief en gelicentieerd is — géén generieke stock die
uit de toon valt.

| Onderwerp | Oriëntatie | Sectie waar het past | Alt-tekst (voorstel) |
| --- | --- | --- | --- |
| Coach en renner in gesprek naast de fiets, data op een scherm/telefoon | liggend | Concept of "Testen & inzicht" | `Coach bespreekt data met een renner na de rit` |
| Vermogens-/lactaatmeting van dichtbij (handen, meter, geen gezicht) | liggend of vierkant | "Testen & inzicht" | `Lactaatmeting tijdens een trainingskamp` |
| Rustige avondbriefing / herstel (tafel, fietsen, ontspannen sfeer) | liggend | "Een dag op kamp" | `Avondbriefing na de trainingsdag` |
| Klim-/routeprofiel of kaartfragment (subtiel, on-brand) | liggend | "Waarom Calpe" | `Hoogteprofiel van een klim rond Calpe` |

**Algemene richtlijnen:** editoriale sportfotografie, consistente kleurtoon (natuurlijk,
niet neon), geen zichtbare merk-/event-watermerken, en op donkere tegels beelden die
ook zonder felle luchten werken. Lever telkens een 2×-versie voor retina.
