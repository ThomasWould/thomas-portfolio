import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { openGraphImage, twitterImage } from "@/app/social-preview";
import { BeforeAfterComparison } from "./before-after-comparison";
import { CaseStudyReveal } from "./case-study-reveal";
import styles from "./masonry-case-study.module.css";

const assetPath = "/projects/masonry/case-study";

export const metadata: Metadata = {
  title: "Masonry Website Redesign Case Study — Thomas Wood",
  description:
    "A client website redesign case study focused on service organization, premium visual presentation, SEO, and a clearer customer experience.",
  openGraph: {
    title: "Masonry Website Redesign Case Study — Thomas Wood",
    description:
      "A client website redesign case study focused on service organization, premium visual presentation, SEO, and a clearer customer experience.",
    images: [openGraphImage],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masonry Website Redesign Case Study — Thomas Wood",
    description:
      "A client website redesign case study focused on service organization, premium visual presentation, SEO, and a clearer customer experience.",
    images: [twitterImage],
  },
};

type MediaProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

function CaseStudyMedia({
  src,
  alt,
  width,
  height,
  caption,
  className,
  priority = false,
  sizes = "(max-width: 767px) calc(100vw - 2.4rem), (max-width: 1920px) 72vw, 1380px",
}: MediaProps) {
  return (
    <CaseStudyReveal className={className} amount={0.1}>
      <figure className={styles.mediaFigure}>
        <div className={styles.mediaSurface}>
          <Image
            src={`${assetPath}/${src}`}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            quality={90}
            sizes={sizes}
          />
        </div>
        <figcaption>{caption}</figcaption>
      </figure>
    </CaseStudyReveal>
  );
}

type SectionIntroProps = {
  index: string;
  label: string;
  title: string;
  copy: string;
};

function SectionIntro({ index, label, title, copy }: SectionIntroProps) {
  return (
    <CaseStudyReveal className={styles.sectionIntro}>
      <p className={styles.sectionEyebrow}>
        {index} / {label}
      </p>
      <div className={styles.sectionIntroContent}>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
    </CaseStudyReveal>
  );
}

export default function MasonryRedesignCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#case-study-main">
        Skip to main content
      </a>

      <header className={styles.caseHeader}>
        <div className={styles.headerInner}>
          <Link className={styles.wordmark} href="/" aria-label="Thomas Wood home">
            Thomas Wood <i aria-hidden="true" />
          </Link>
          <Link className={styles.backLink} href="/#work">
            Back to work <span aria-hidden="true">←</span>
          </Link>
        </div>
      </header>

      <main id="case-study-main" tabIndex={-1} className={styles.caseStudy}>
        <section className={styles.hero} aria-labelledby="case-study-title">
          <div className={styles.shell}>
            <CaseStudyReveal className={styles.heroMeta} amount={0.8}>
              <p>01 / Client Work</p>
              <p>2026</p>
            </CaseStudyReveal>

            <CaseStudyReveal delay={0.06} amount={0.5}>
              <h1 id="case-study-title" className={styles.heroTitle}>
                Repositioning a local contractor for a more premium digital
                presence.
              </h1>
            </CaseStudyReveal>

            <CaseStudyReveal className={styles.heroDetails} delay={0.12}>
              <p className={styles.heroIntro}>
                A full website redesign focused on clearer service organization,
                stronger visual presentation, improved content structure, and a
                better experience for homeowners researching concrete and masonry
                services.
              </p>
              <p className={styles.heroDisciplines}>
                Web Design / UX / SEO / Client Collaboration
              </p>
            </CaseStudyReveal>

            <CaseStudyMedia
              className={styles.heroMedia}
              src="new-home-page-3.PNG"
              alt="Redesigned masonry contractor homepage showing organized service categories"
              width={2545}
              height={1225}
              caption="Redesigned homepage / Service overview"
              priority
              sizes="(max-width: 1920px) calc(100vw - 6.8vw), 1920px"
            />
          </div>
        </section>

        <section className={`${styles.section} ${styles.challengeSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="01"
              label="The Challenge"
              title="The existing site contained the right information, but the experience did not reflect the quality or range of the company's work."
              copy="The redesign needed to make services easier to understand, improve the visual presentation of completed work, strengthen calls to action, and create a more consistent experience across the site."
            />

            <div className={styles.originalComposition}>
              <CaseStudyMedia
                className={styles.originalHome}
                src="old-home-page-2.PNG"
                alt="Original masonry contractor homepage with dense centered text over a stone texture"
                width={1909}
                height={868}
                caption="Original / Homepage content"
              />
              <CaseStudyMedia
                className={styles.originalDecorative}
                src="old-decorative-concrete.PNG"
                alt="Original decorative concrete page with textured backgrounds and dense service content"
                width={2536}
                height={1283}
                caption="Original / Decorative concrete"
              />
              <CaseStudyMedia
                className={styles.originalContact}
                src="old-contact-us.PNG"
                alt="Original contact page with a compact estimate request form"
                width={2535}
                height={1278}
                caption="Original / Contact experience"
              />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.comparisonSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="02"
              label="Before + After"
              title="A clearer first impression, built around the work."
              copy="The new homepage replaces a dense, texture-heavy presentation with a focused service proposition, stronger project imagery, and a direct path to requesting an estimate."
            />
            <CaseStudyReveal amount={0.08}>
              <BeforeAfterComparison />
            </CaseStudyReveal>
          </div>
        </section>

        <section className={`${styles.section} ${styles.servicesSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="03"
              label="Service Structure"
              title="Making a broad service offering easier to understand."
              copy="The redesign expanded important services into clearer, more focused experiences rather than forcing homeowners to interpret everything from a small number of general pages."
            />

            <div className={styles.serviceSequence}>
              <CaseStudyMedia
                className={styles.serviceConcrete}
                src="concrete-1.PNG"
                alt="Redesigned concrete services page with clear service categories and project photography"
                width={2538}
                height={1219}
                caption="Concrete / Focused service pathways"
              />
              <CaseStudyMedia
                className={styles.serviceMaintenance}
                src="maintenance-1.PNG"
                alt="Redesigned concrete maintenance page with organized maintenance services"
                width={2540}
                height={1215}
                caption="Maintenance / Dedicated service experience"
              />
              <CaseStudyMedia
                className={styles.serviceWarranty}
                src="warranty-1.PNG"
                alt="Redesigned warranty page explaining coverage and customer expectations"
                width={2534}
                height={1219}
                caption="Warranty / Clearer customer information"
              />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.premiumSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="04"
              label="Premium Position"
              title="Moving away from generic contractor styling."
              copy="The visual system was simplified and made more consistent, with stronger typography, cleaner spacing, better use of project photography, and layouts designed to present the company's work as a premium service."
            />

            <div className={styles.premiumComposition}>
              <CaseStudyMedia
                className={styles.premiumDecorative}
                src="decorative-concrete-1.PNG"
                alt="Decorative concrete design page with a large project preview and finish choices"
                width={2541}
                height={1228}
                caption="Decorative concrete / Guided visual selection"
                sizes="(max-width: 1920px) calc(100vw - 6.8vw), 1920px"
              />
              <CaseStudyMedia
                className={styles.premiumCoaters}
                src="coaters-1.PNG"
                alt="Coatings and sealers page with structured benefits and surface options"
                width={2539}
                height={1223}
                caption="Coatings + sealers / Organized options"
              />
              <CaseStudyMedia
                className={styles.premiumGallery}
                src="gallery-2.PNG"
                alt="Redesigned project gallery showing decorative concrete work in a clean image grid"
                width={2540}
                height={1221}
                caption="Project gallery / Work given visual priority"
              />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.conversionSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="05"
              label="Calls to Action + Conversion"
              title="Making the next step obvious."
              copy="Calls to action were made more consistent throughout the site, and the contact experience was simplified so prospective customers could move naturally from researching a service to requesting an estimate."
            />

            <div className={styles.contactComposition}>
              <CaseStudyMedia
                className={styles.contactPrimary}
                src="contact-us-1.PNG"
                alt="Redesigned contact page with a clear request an estimate form"
                width={2535}
                height={1141}
                caption="Contact / Focused estimate request"
              />
              <CaseStudyMedia
                className={styles.contactSecondary}
                src="contact-us-2.PNG"
                alt="Redesigned contact page showing clear next steps and contact options"
                width={2536}
                height={1174}
                caption="Contact / Clear next steps"
              />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.depthSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="06"
              label="Depth Across the Site"
              title="The redesign was a system, not a single homepage."
              copy="A consistent hierarchy, image treatment, content rhythm, and call-to-action language carries across focused service pages and the wider project gallery."
            />

            <div className={styles.depthComposition}>
              <CaseStudyMedia
                className={styles.depthMasonry}
                src="masonry-2.PNG"
                alt="Redesigned masonry services page with alternating project images and service explanations"
                width={2541}
                height={1222}
                caption="Masonry / Editorial service storytelling"
              />
              <CaseStudyMedia
                className={styles.depthGallery}
                src="gallery-4.PNG"
                alt="Redesigned project gallery featuring masonry and outdoor living work"
                width={2537}
                height={1221}
                caption="Gallery / Breadth of completed work"
              />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.collaborationSection}`}>
          <div className={styles.shell}>
            <CaseStudyReveal className={styles.collaborationGrid}>
              <div>
                <p className={styles.sectionEyebrow}>07 / Client Collaboration</p>
                <h2>Built through feedback, not in isolation.</h2>
              </div>
              <div className={styles.collaborationContent}>
                <p>
                  The site evolved through direct client feedback. Pages,
                  messaging, service organization, calls to action, and visual
                  decisions were adjusted throughout the redesign as the business
                  clarified how it wanted to present its work and services.
                </p>
                <ul aria-label="Role and contribution">
                  <li>Web Design</li>
                  <li>Information Architecture</li>
                  <li>Content + SEO</li>
                  <li>Responsive Design</li>
                  <li>Client Collaboration</li>
                </ul>
              </div>
            </CaseStudyReveal>
          </div>
        </section>

        <section className={`${styles.section} ${styles.outcomeSection}`}>
          <div className={styles.shell}>
            <CaseStudyReveal>
              <p className={styles.sectionEyebrow}>08 / Outcome</p>
              <h2>
                A clearer, more complete digital presence built around the way
                customers actually research contractor services.
              </h2>
              <p className={styles.outcomeCopy}>
                The final site provides a stronger representation of the
                company&apos;s work, clearer service pathways, improved content
                organization, more consistent calls to action, and a visual system
                better aligned with the premium positioning of the business.
              </p>
            </CaseStudyReveal>
          </div>
        </section>

        <section className={styles.nextProject} aria-labelledby="next-project-title">
          <div className={styles.shell}>
            <p className={styles.sectionEyebrow}>Next Project</p>
            <Link
              className={styles.nextProjectLink}
              href="/work/masonry-weather-planner"
            >
              <span id="next-project-title">Masonry Weather Planner</span>
              <strong>
                Turning generic weather data into job-ready decisions.
                <i aria-hidden="true">→</i>
              </strong>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
