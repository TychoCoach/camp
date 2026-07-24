import type { PageContent } from "./types";

/**
 * Dutch copy — the only visible language for now.
 *
 * Rules baked into this file (see LEGAL-AND-OPERATIONS-REVIEW.md):
 * - No dates, prices, group numbers, testimonials, partners or participant counts.
 * - Travel and accommodation are NEVER presented as included.
 * - The `logistics.lead` sentence is mandated wording. Do not paraphrase it.
 * - Lactate testing is described as optional/provisional only.
 * - No medical claims and no guaranteed-performance claims.
 */
export const nl: PageContent = {
  locale: "nl",

  meta: {
    title: "Fietstrainingskamp Calpe met persoonlijke coach | Tycho Coaching Camps",
    description:
      "Een kleinschalig fietstrainingskamp in Calpe met persoonlijke coaching, individuele trainingsdoelen, dagelijkse analyse en praktische begeleiding.",
    ogAlt: "Wielrenner langs de kust — Tycho Coaching Camps, Calpe",
  },

  header: {
    brandName: "Tycho",
    brandAccent: "Coaching",
    brandSuffix: "Camps",
    homeHref: "https://www.tychocoaching.com",
    contactLabel: "Contact",
    ctaLabel: "Interesselijst",
    localeToggle: {
      active: "NL",
      inactive: "EN",
      inactiveTitle: "De Engelse versie volgt",
    },
  },

  subnav: {
    label: "Camps — Calpe",
    links: [
      { label: "Waarom Calpe", href: "#calpe" },
      { label: "De week", href: "#programma" },
      { label: "Testen", href: "#testen" },
      { label: "Accommodatie", href: "#accommodatie" },
      { label: "FAQ", href: "#faq" },
    ],
    ctaLabel: "Interesselijst",
    menuLabel: "Menu openen",
    menuCloseLabel: "Menu sluiten",
  },

  hero: {
    eyebrow: "Tycho Coaching Camps · Calpe",
    title: "Zeven dagen trainen met je coach ernaast.",
    lead: "Een kleine, geselecteerde groep in Calpe, met een bewegingswetenschapper als coach ter plaatse. Elke dag meten, bespreken en bijsturen.",
    primaryCta: { label: "Zet mij op de interesselijst", href: "#interesse" },
    secondaryCta: { label: "Bekijk hoe de week werkt", href: "#programma" },
    note: "Pilotweek · periode volgt · interesse tonen is vrijblijvend",
    imageAlt: "Wielrenner traint langs een rotsachtige kustlijn",
  },

  concept: {
    eyebrow: "Geen gewone fietsvakantie",
    title: "Een trainingsweek, geen toertocht met zon.",
    columns: [
      {
        title: "Coach én wetenschapper ter plaatse",
        body: "Geen ingehuurde gidsen — Tycho rijdt, meet en stuurt zelf mee. Op de fiets en in de analyse.",
      },
      {
        title: "Individueel binnen de groep",
        body: "Gedeelde ritten, eigen zones: intervallen, pacing en belasting per renner.",
      },
      {
        title: "Elke dag opnieuw bepaald",
        body: "Testdata, gevoel en vermoeidheid bepalen samen wat morgen wordt.",
      },
    ],
  },

  audience: {
    eyebrow: "Voor wie",
    title: "Twee groepen, één aanpak.",
    lead: "Klein en geselecteerd, zodat er elke dag tijd is voor iedere renner.",
    groups: [
      {
        title: "Jeugd-, junioren- en beloftenploegen",
        body: "Een eigen kampweek als team: testen, zones en analyse per renner, afgestemd op de wedstrijdkalender en de ontwikkeling van jonge renners.",
      },
      {
        title: "Gedreven recreanten",
        body: "Je rijdt goed materiaal, traint serieus en wilt één week waarin alles klopt — structuur, data, voeding en herstel — zonder er zelf over na te hoeven denken.",
      },
    ],
  },

  calpe: {
    eyebrow: "De locatie",
    title: "Waarom Calpe",
    lead: "Niet voor niets de vaste voorjaarsbasis van veel profploegen.",
    points: [
      {
        title: "Doorgaans zacht voorjaar",
        body: "Geen garantie op zon, wel de reden dat ploegen hier in februari zitten.",
      },
      {
        title: "Terrein voor elk doel",
        body: "Coll de Rates, rustige binnenwegen en vlakke kuststroken.",
      },
      {
        title: "Wielerinfrastructuur",
        body: "Verhuur, werkplaatsen en horeca die renners gewend zijn.",
      },
      {
        title: "Goed bereikbaar",
        body: "Ongeveer een uur van de luchthavens van Alicante en Valencia.",
      },
    ],
    imageSlot: {
      label: "Eigen Calpe-beeld",
      hint: "bijv. Peñón de Ifach boven de baai",
    },
  },

  week: {
    eyebrow: "De week",
    title: "Geen vast schema. De week bouwt zich per dag.",
    lead: "Na elke rit kijken coach en renner samen naar data, gevoel en herstel — en bepalen we wat de volgende dag nodig is. Zo train je op wat jij vandaag aankunt, niet op wat een schema weken geleden bedacht.",
    loop: [
      { step: "01", label: "Rijden", body: "Training in jouw zones, coach in het wiel." },
      { step: "02", label: "Meten", body: "Vermogen, hartslag en waar zinvol lactaat." },
      { step: "03", label: "Bespreken", body: "Analyse en gevoel naast elkaar, dezelfde dag." },
      { step: "04", label: "Bijstellen", body: "Samen bepalen we het plan voor morgen." },
    ],
    bookends: [
      {
        term: "Voor het kamp",
        value: "Intake en analyse van je data, zodat de eerste rit al klopt.",
      },
      {
        term: "Na de week",
        value: "Eindrapport met testresultaten, zones en de vertaling naar je seizoen.",
      },
    ],
  },

  testing: {
    eyebrow: "Testen & inzicht",
    title: "Meten wat ertoe doet.",
    lead: "Labmethodes, vertaald naar de weg — een handvol metingen die je training écht sturen.",
    items: [
      {
        title: "Veldtest (CP/FTP)",
        body: "Bepaalt op de weg je critical power — de basis voor je zones.",
      },
      {
        title: "Lactaatmeting",
        qualifier: "optioneel, onder voorbehoud",
        body: "Legt naast de vermogensdata je fysiologische drempels bloot. Of dit doorgaat hangt af van de logistiek en procedures ter plaatse; we bevestigen het vóór inschrijving.",
      },
      {
        title: "Zones scherpstellen",
        body: "Hartslag- en vermogenszones per renner opnieuw gekalibreerd.",
      },
      {
        title: "Dagelijkse file-analyse",
        body: "Elke rit dezelfde dag geanalyseerd en besproken in Intervals.icu.",
      },
      {
        title: "Pacing & duurvermogen",
        body: "Vermogen leren verdelen op klimmen en lange ritten, met feedback onderweg.",
      },
    ],
    disclaimer:
      "Dit zijn trainingsmetingen, geen medisch onderzoek en geen diagnose. Twijfel je over je gezondheid of belastbaarheid, overleg dan vooraf met je arts.",
  },

  day: {
    eyebrow: "Een dag op kamp",
    title: "Zo ziet een dag eruit.",
    lead: "Rust en ritme — trainen, herstellen en leren, zonder volle dagen. Indicatief.",
    timeline: [
      {
        time: "08:30",
        title: "Ontbijt & briefing",
        body: "Het doel van de dag en ieders opdrachten.",
      },
      { time: "10:00", title: "Training", body: "Samen op pad, ieder in eigen zones." },
      {
        time: "14:30",
        title: "Lunch & herstel",
        body: "Herstel is onderdeel van het programma, geen restpost.",
      },
      {
        time: "16:30",
        title: "Analyse & 1-op-1",
        body: "De rit van vandaag — en samen bepalen wat morgen wordt.",
      },
      {
        time: "19:30",
        title: "Diner & vooruitblik",
        body: "De dag van morgen in grote lijnen.",
      },
    ],
  },

  logistics: {
    eyebrow: "Praktisch",
    title: "Accommodatie en logistiek.",
    // Mandated wording — verbatim, do not paraphrase.
    lead: "Vervoer naar Calpe en de accommodatie worden afzonderlijk geboekt. We streven ernaar de groep in dezelfde geselecteerde accommodatie te laten verblijven. Definitieve details volgen vóór inschrijving.",
    organised: {
      title: "Wat wij organiseren",
      items: [
        "Intake en voorbereiding vóór vertrek",
        "Programma, routes en dagelijkse begeleiding",
        "Dagelijkse briefing en 1-op-1 momenten",
        "Veldtesten, analyse en zones",
        "Eindrapport en vertaling naar je seizoen",
        "Advies bij het boeken van verblijf en reis",
      ],
    },
    ownBooking: {
      title: "Wat je zelf boekt",
      items: [
        "Je reis naar Calpe en vervoer ter plaatse",
        "Je verblijf — samen in één geselecteerde accommodatie is het streven",
        "Reis- en annuleringsverzekering",
        "Zorgverzekering en eventuele medische kosten",
        "Eigen fietsmateriaal of fietshuur ter plaatse",
        "Persoonlijke uitgaven",
      ],
    },
  },

  about: {
    eyebrow: "Je coach in Calpe",
    title: "Tycho Parmentier",
    paragraphs: [
      "Bewegingswetenschapper (VU Amsterdam, inspanningsfysiologie) en masterstudent cel- en moleculaire biologie aan de NTNU in Trondheim, met onderzoek naar hoe spieren zich aanpassen aan training.",
      "Hij coacht renners van eerste toertocht tot UCI-koers en racet zelf internationaal, van Kameroen tot Maleisië. In Calpe is hij één week lang jouw coach — op en naast de fiets. Begeleiding in het Nederlands, in het Engels kan ook.",
    ],
    freelanceNote: {
      before: "Ook freelance coach bij ",
      linkLabel: "Cyclinglab.cc",
      href: "https://cyclinglab.cc",
      after: ".",
    },
    portraitAlt: "Portret van Tycho Parmentier",
    bandAlt: "Tycho in koers tussen de palmen, Maleisië",
    bandCaption:
      "In koers — internationale wedstrijdervaring van Nederland tot Kameroen en Maleisië.",
  },

  pilot: {
    eyebrow: "Pilotweek",
    title: "De details, voor zover ze vastliggen.",
    lead: "Periode en richtprijs gaan eerst naar de interesselijst — je zit nergens aan vast.",
    rows: [
      { term: "Locatie", value: "Calpe, Costa Blanca (Spanje)" },
      { term: "Duur", value: "Ongeveer 6–8 dagen" },
      { term: "Periode", value: "Volgt · interesselijst hoort het eerst" },
      { term: "Groep", value: "Klein en geselecteerd · eigen weken voor ploegen" },
      { term: "Richtprijs", value: "Volgt vóór inschrijving" },
      { term: "Inbegrepen", value: "Coaching, veldtesten, analyse en eindrapport" },
      { term: "Zelf te boeken", value: "Reis en accommodatie (afzonderlijk geboekt)" },
    ],
  },

  form: {
    eyebrow: "Vrijblijvend",
    title: "Zet mij op de interesselijst.",
    lead: "Je hoort als eerste de periode, het programma en de richtprijs. Geen boeking, geen verplichting.",
    fields: {
      name: { label: "Naam" },
      email: { label: "E-mail" },
      phone: { label: "Telefoon", optional: "(optioneel)" },
      type: {
        label: "Ik kom als",
        hint: "(renner/ploeg)",
        placeholder: "bijv. individueel, of namens een ploeg",
      },
      level: {
        label: "Huidig niveau / FTP",
        hint: "(indicatie)",
        placeholder: "bijv. 3,8 W/kg of ‘net begonnen’",
      },
      period: { label: "Voorkeursperiode", placeholder: "bijv. vroeg voorjaar, flexibel" },
      volume: { label: "Trainingsuren per week", placeholder: "bijv. 8–10 uur" },
      powerMeter: { label: "Vermogensmeter", options: ["Ja", "Nee"] },
      goal: {
        label: "Belangrijkste doel",
        placeholder: "bijv. gran fondo in juni, of eerste seizoen op de weg",
      },
      message: {
        label: "Vragen of opmerkingen",
        placeholder: "Bijv. je doelen voor komend seizoen",
      },
      consent: {
        label:
          "Ik ga ermee akkoord dat Tycho Coaching mijn gegevens gebruikt om contact met mij op te nemen over Camps — Calpe.",
      },
    },
    submitLabel: "Zet mij op de interesselijst",
    submittingLabel: "Bezig…",
    finePrint:
      "Vrijblijvend. Je gegevens worden alleen gebruikt om je over Camps — Calpe te informeren.",
    privacyNotice:
      "Je gegevens worden niet gedeeld met derden en niet gebruikt voor andere nieuwsbrieven. Vraag je gegevens op of laat ze verwijderen via een mail naar",
    errors: {
      name: "Vul je naam in.",
      email: "Vul je e-mailadres in.",
      emailFormat: "Dit e-mailadres lijkt niet te kloppen.",
      consent: "Zet een vinkje om je aanmelding te kunnen versturen.",
      summary: "Controleer de gemarkeerde velden.",
      network:
        "Versturen is niet gelukt. Probeer het opnieuw, of mail rechtstreeks naar",
    },
    mailtoConfirmation:
      "Je e-mailprogramma opent met een ingevuld bericht — verstuur dat om je interesse te bevestigen. Zolang je die mail niet verstuurt, is je aanmelding niet bij Tycho aangekomen.",
    postConfirmation:
      "Bedankt — je staat op de interesselijst. Je hoort als eerste wanneer de periode en de richtprijs bekend zijn.",
  },

  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Goed om te weten.",
    items: [
      {
        q: "Zijn reis en accommodatie inbegrepen?",
        a: "Nee. Vervoer naar Calpe en de accommodatie worden afzonderlijk geboekt. We streven ernaar de groep in dezelfde geselecteerde accommodatie te laten verblijven; definitieve details volgen vóór inschrijving.",
      },
      {
        q: "Welk niveau heb ik nodig?",
        a: "Minder belangrijk dan je denkt: ritten worden per renner op zones gestuurd. Motivatie om gericht te trainen telt zwaarder dan snelheid. Wel wordt van je verwacht dat je je veilig in een groep kunt bewegen.",
      },
      {
        q: "Heb ik een vermogensmeter nodig?",
        a: "Aan te raden, maar niet verplicht. Met hartslag, gevoel en tempo is er ook goed te sturen. Heb je een vermogensmeter, dan wordt de analyse na afloop wel een stuk scherper.",
      },
      {
        q: "Wat als de uiteindelijke periode mij niet past?",
        a: "De interesselijst is volledig vrijblijvend. Zodra de periode bekend is, hoor je het als eerste en beslis je pas daarna.",
      },
      {
        q: "Wat gebeurt er nadat ik me op de lijst zet?",
        a: "Je krijgt een persoonlijk bericht terug. Zodra periode, opzet en richtprijs vastliggen, hoor jij het als eerste — daarna beslis je of je meegaat. Er volgt geen automatische inschrijving.",
      },
      {
        q: "Kunnen ploegen een eigen week boeken?",
        a: "Ja — voor jeugd-, junioren- en beloftenploegen is een eigen kampweek mogelijk, met testen en analyse per renner. Mail of gebruik het formulier.",
      },
      {
        q: "Neem ik mijn eigen fiets mee?",
        a: "Je eigen fiets heeft de voorkeur — daar train je het hele seizoen op. Lukt dat niet, dan zijn er in Calpe meerdere verhuurders; we denken graag mee. Fietshuur boek je zelf.",
      },
      {
        q: "En als het weer tegenzit?",
        a: "Het voorjaar in Calpe is doorgaans zacht, maar regen en wind komen voor. Het programma wordt dan aangepast: kortere ritten, een andere route uit de wind, of een dag naar voren of achteren geschoven. Veiligheid gaat voor het schema.",
      },
      {
        q: "Kun je rekening houden met mijn voeding?",
        a: "Ja. Vegetarisch, veganistisch, allergieën of intoleranties: geef het door op het formulier, dan houden we er bij de keuze van de accommodatie en de dagindeling rekening mee. Wat er uiteindelijk op tafel staat hangt af van de accommodatie die je zelf boekt.",
      },
      {
        q: "Heb ik een verzekering nodig?",
        a: "Ja. Een geldige zorgverzekering met dekking in Spanje en een reisverzekering die wielrennen dekt, regel je zelf. Dat geldt ook voor een eventuele annuleringsverzekering.",
      },
      {
        q: "Kan ik meedoen als ik al coaching bij Tycho heb?",
        a: "Zeker. De kampweek wordt dan direct in je lopende plan verwerkt — vóór, tijdens en na de week.",
      },
      {
        q: "Wat is het annuleringsbeleid?",
        a: "Dat ligt nog niet vast en volgt samen met de definitieve opzet en de voorwaarden, vóórdat inschrijving mogelijk is. Op deze pagina kun je alleen vrijblijvend interesse tonen.",
      },
      {
        q: "Wat kost de week?",
        a: "De richtprijs volgt vóór inschrijving en gaat eerst naar de interesselijst. De kampprijs dekt coaching, testen en begeleiding; reis en verblijf boek je zelf.",
      },
    ],
  },

  finalCta: {
    title: "Rijd in Calpe het fundament van je seizoen.",
    lead: "Zet jezelf vrijblijvend op de interesselijst en hoor als eerste wanneer de pilotweek plaatsvindt.",
    primaryCta: { label: "Zet mij op de interesselijst", href: "#interesse" },
    secondaryCta: { label: "Bekijk hoe de week werkt", href: "#programma" },
  },

  footer: {
    tagline:
      "Professionele wielercoaching op wetenschappelijke basis, persoonlijk afgestemd op jouw doelen.",
    person: "Tycho Parmentier",
    columns: [
      {
        heading: "Camps — Calpe",
        links: [
          { label: "Waarom Calpe", href: "#calpe" },
          { label: "De week", href: "#programma" },
          { label: "Testen & inzicht", href: "#testen" },
          { label: "Accommodatie", href: "#accommodatie" },
          { label: "Interesselijst", href: "#interesse" },
        ],
      },
      {
        heading: "Tycho Coaching",
        links: [
          { label: "Diensten", href: "https://www.tychocoaching.com/#services" },
          { label: "Methodologie", href: "https://www.tychocoaching.com/#methodology" },
          { label: "Over Tycho", href: "https://www.tychocoaching.com/#about" },
          { label: "Cyclinglab.cc", href: "https://cyclinglab.cc" },
        ],
      },
    ],
    contact: {
      heading: "Contact",
      location: "Trondheim, Noorwegen",
      email: "tychocoach@gmail.com",
      phone: "+31 6 47528472",
      phoneHref: "tel:+31647528472",
      kvk: "KVK: 97624195",
    },
    copyrightSuffix: "Tycho Coaching. Alle rechten voorbehouden.",
    legalPlaceholders: ["Privacy — volgt", "Voorwaarden — volgt"],
  },
};
