import { AboutSection } from "@/components/about-section";
import { ContactSection, SiteFooter } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { LabSection } from "@/components/lab-section";
import { Navigation } from "@/components/navigation";
import { ProcessSection } from "@/components/process-section";
import { ProcessTeaser } from "@/components/process-teaser";
import { SelectedWork } from "@/components/selected-work";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ProcessTeaser />
        <SelectedWork />
        <ProcessSection />
        <LabSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
