import { Accommodatie } from "@/components/Accommodatie";
import { Audience } from "@/components/Audience";
import { Concept } from "@/components/Concept";
import { Dagritme } from "@/components/Dagritme";
import { DeWeek } from "@/components/DeWeek";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { InteresseForm } from "@/components/InteresseForm";
import { OverTycho } from "@/components/OverTycho";
import { Pilotdetails } from "@/components/Pilotdetails";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SlotCta } from "@/components/SlotCta";
import { SubNav } from "@/components/SubNav";
import { Testen } from "@/components/Testen";
import { WaaromCalpe } from "@/components/WaaromCalpe";
import { getContent } from "@/content";

export default function Page() {
  const content = getContent();

  return (
    <div className="w-full overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100 focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-white"
      >
        Naar de inhoud
      </a>

      <SiteHeader content={content} />
      <SubNav content={content} />

      <main id="main">
        <Hero content={content} />
        <Concept content={content} />
        <Audience content={content} />
        <WaaromCalpe content={content} />
        <DeWeek content={content} />
        <Testen content={content} />
        <Dagritme content={content} />
        <Accommodatie content={content} />
        <OverTycho content={content} />
        <Pilotdetails content={content} />
        <InteresseForm content={content} />
        <Faq content={content} />
        <SlotCta content={content} />
      </main>

      <SiteFooter content={content} />
    </div>
  );
}
