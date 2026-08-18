import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { openGraphImage, twitterImage } from "@/app/social-preview";
import { LolReveal } from "./lol-reveal";
import styles from "./lol-draft-helper-case-study.module.css";

const assetPath = "/projects/lol-draft-helper";

const draftInputs = [
  ["01", "Player champion"],
  ["02", "Opposing champions"],
  ["03", "Enemy composition"],
  ["04", "Matchup information"],
];

const dataLayer = [
  ["01", "Riot Data Dragon"],
  ["02", "Champion data"],
  ["03", "Champion icons"],
  ["04", "Autocomplete"],
];

const systemFlow = [
  "Draft input",
  "Champion data",
  "Matchup context",
  "Composition analysis",
  "Recommendations",
  "AI coach",
];

const testingFlow = [
  "Code change",
  "Push / PR",
  "Playwright",
  "User flows checked",
];

const productDecisions = [
  {
    title: "Context before prompting",
    copy: "Collect relevant draft information before asking the model to provide guidance.",
  },
  {
    title: "Product logic before AI",
    copy: "Use normal application logic where deterministic behavior is more appropriate instead of turning every feature into an AI request.",
  },
  {
    title: "Guidance inside the workflow",
    copy: "Keep coaching connected to champion select rather than sending the user to a separate general-purpose chatbot.",
  },
  {
    title: "Testing beyond the happy path",
    copy: "Automate important user flows so iteration does not quietly break previously working behavior.",
  },
];

const buildMetadata = [
  "React",
  "TypeScript",
  "Riot Data Dragon",
  "OpenAI API",
  "Playwright",
  "GitHub Actions",
];

export const metadata: Metadata = {
  title: "LoL Draft Helper — Thomas Wood",
  description:
    "A frontend engineering and AI product case study about combining champion data, contextual recommendation logic, and OpenAI-powered coaching in one draft workflow.",
  alternates: {
    canonical: "/work/lol-draft-helper",
  },
  openGraph: {
    title: "LoL Draft Helper — Thomas Wood",
    description:
      "A frontend engineering and AI product case study about combining champion data, contextual recommendation logic, and OpenAI-powered coaching in one draft workflow.",
    images: [openGraphImage],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoL Draft Helper — Thomas Wood",
    description:
      "A frontend engineering and AI product case study about combining champion data, contextual recommendation logic, and OpenAI-powered coaching in one draft workflow.",
    images: [twitterImage],
  },
};

type SectionIntroProps = {
  index: string;
  label: string;
  title: string;
  copy?: string;
};

function SectionIntro({ index, label, title, copy }: SectionIntroProps) {
  return (
    <LolReveal className={styles.sectionIntro}>
      <p className={styles.sectionLabel}>
        {index} / {label}
      </p>
      <div className={styles.sectionIntroContent}>
        <h2>{title}</h2>
        {copy ? <p>{copy}</p> : null}
      </div>
    </LolReveal>
  );
}

type ProductImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  className?: string;
  sizes: string;
  priority?: boolean;
};

function ProductImage({
  src,
  alt,
  width,
  height,
  caption,
  className,
  sizes,
  priority = false,
}: ProductImageProps) {
  return (
    <LolReveal className={className} amount={0.1}>
      <figure className={styles.productFigure}>
        <div className={styles.productSurface}>
          <Image
            src={`${assetPath}/${src}`}
            alt={alt}
            width={width}
            height={height}
            quality={90}
            priority={priority}
            sizes={sizes}
          />
        </div>
        <figcaption>{caption}</figcaption>
      </figure>
    </LolReveal>
  );
}

function TechnicalFlow({
  steps,
  ariaLabel,
  className,
}: {
  steps: string[];
  ariaLabel: string;
  className?: string;
}) {
  return (
    <ol
      className={`${styles.technicalFlow} ${className ?? ""}`}
      aria-label={ariaLabel}
    >
      {steps.map((step, index) => (
        <li key={step}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{step}</strong>
          {index < steps.length - 1 ? <i aria-hidden="true">→</i> : null}
        </li>
      ))}
    </ol>
  );
}

export default function LolDraftHelperCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#lol-case-study-main">
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

      <main id="lol-case-study-main" tabIndex={-1} className={styles.caseStudy}>
        <section className={styles.hero} aria-labelledby="lol-case-study-title">
          <div className={styles.shell}>
            <LolReveal className={styles.heroMeta} amount={0.8}>
              <p>03 / AI Product + Frontend Engineering</p>
              <p>2026</p>
            </LolReveal>

            <div className={styles.heroGrid}>
              <LolReveal delay={0.05} amount={0.45}>
                <h1 id="lol-case-study-title" className={styles.heroTitle}>
                  Turning live draft context into useful, matchup-specific
                  guidance.
                </h1>
              </LolReveal>

              <LolReveal className={styles.heroSupport} delay={0.12}>
                <p>
                  A React and TypeScript application that combines Riot champion
                  data, composition analysis, matchup context, and OpenAI-powered
                  coaching to help players make better decisions during champion
                  select.
                </p>
                <span>
                  React / TypeScript / OpenAI API / Playwright / GitHub Actions
                </span>
              </LolReveal>
            </div>

            <LolReveal className={styles.heroPipeline} delay={0.17} amount={0.55}>
              <p>Context before intelligence</p>
              <div className={styles.heroTrack}>
                <span>Draft captured</span>
                <i aria-hidden="true">→</i>
                <span>Context assembled</span>
                <i aria-hidden="true">→</i>
                <strong>Guidance requested</strong>
              </div>
            </LolReveal>
          </div>
        </section>

        <section className={`${styles.section} ${styles.problemSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="01"
              label="The Problem"
              title="Champion select moves quickly. Generic advice usually doesn't."
              copy="Most build guides and matchup resources answer one question at a time. Champion select creates a more contextual problem: what am I playing, what am I facing, what does the enemy composition look like, and what should change because of it?"
            />

            <LolReveal className={styles.productThesis} amount={0.45}>
              <p>Core product question</p>
              <blockquote>What advice is useful for this specific draft?</blockquote>
              <span>Contextual guidance / Not an outcome guarantee</span>
            </LolReveal>
          </div>
        </section>

        <section className={`${styles.section} ${styles.inputSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="02"
              label="Draft Input"
              title="Useful recommendations start with useful context."
              copy="The application begins with the actual champion-select situation rather than presenting generic static advice."
            />

            <LolReveal className={styles.inputIndex} amount={0.35}>
              <p>Draft context</p>
              <ol>
                {draftInputs.map(([number, input]) => (
                  <li key={input}>
                    <span>{number}</span>
                    <strong>{input}</strong>
                  </li>
                ))}
              </ol>
            </LolReveal>

            <ProductImage
              className={styles.mainScreenshot}
              src="main-app.PNG"
              alt="LoL Draft Helper workspace with player champion selection, enemy-team input, recommendations, and coaching panel"
              width={1612}
              height={886}
              caption="Draft input / Composition context"
              priority
              sizes="(max-width: 1920px) calc(100vw - 6.8vw), 1920px"
            />
          </div>
        </section>

        <section className={`${styles.section} ${styles.dataSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="03"
              label="Data Layer"
              title="Build context from real game data before adding intelligence."
              copy="Riot Data Dragon champion data supports the application experience, including champion information and visual assets used throughout the draft interface."
            />

            <LolReveal className={styles.dataIndex} amount={0.4}>
              <p>Champion-data foundation</p>
              <ol>
                {dataLayer.map(([number, item]) => (
                  <li key={item}>
                    <span>{number}</span>
                    <strong>{item}</strong>
                  </li>
                ))}
              </ol>
            </LolReveal>
          </div>
        </section>

        <section className={`${styles.section} ${styles.contextSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="04"
              label="Context"
              title="The matchup isn't just one champion versus another."
              copy="The application also considers the broader enemy composition so recommendations can respond to the draft rather than treating every matchup as an isolated one-versus-one problem."
            />

            <LolReveal className={styles.contextEquation} amount={0.4}>
              <div>
                <span>Lane matchup</span>
                <i aria-hidden="true">+</i>
                <span>Enemy composition</span>
                <i aria-hidden="true">+</i>
                <span>Champion context</span>
              </div>
              <b aria-hidden="true">↓</b>
              <strong>Relevant guidance</strong>
            </LolReveal>
          </div>
        </section>

        <section className={`${styles.section} ${styles.recommendationSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="05"
              label="Recommendations"
              title="Turn context into something the player can act on."
              copy="Contextual application logic surfaces recommendations from the draft, while the AI coach provides a separate path for situation-aware coaching. AI is one layer of the product, not the source of every recommendation."
            />

            <LolReveal className={styles.logicSplit} amount={0.35}>
              <p>Two outputs / Shared context</p>
              <div className={styles.splitStart}>Draft context</div>
              <div className={styles.logicBranches}>
                <article>
                  <span>01 / Application logic</span>
                  <strong>Composition + matchup logic</strong>
                  <i aria-hidden="true">↓</i>
                  <b>Recommendations</b>
                </article>
                <article>
                  <span>02 / AI layer</span>
                  <strong>Context provided to model</strong>
                  <i aria-hidden="true">↓</i>
                  <b>AI coach</b>
                </article>
              </div>
            </LolReveal>
          </div>
        </section>

        <section className={`${styles.section} ${styles.coachSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="06"
              label="AI Coach"
              title="Give the model the situation before asking for advice."
              copy="Instead of opening a generic chatbot, the AI coaching experience is provided with relevant champion-select context so its response can reflect the player's champion, opposing composition, and matchup situation."
            />

            <ProductImage
              className={styles.coachScreenshot}
              src="recommendations.PNG"
              alt="LoL Draft Helper showing enemy composition analysis, matchup recommendations, item ordering, and context-aware AI coaching"
              width={1777}
              height={1213}
              caption="Matchup guidance / AI coach"
              sizes="(max-width: 1920px) calc(100vw - 6.8vw), 1920px"
            />
          </div>
        </section>

        <section className={`${styles.section} ${styles.flowSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="07"
              label="System Flow"
              title="The useful part is how the pieces work together."
            />

            <LolReveal className={styles.systemFlow} amount={0.35}>
              <p>Context pipeline</p>
              <TechnicalFlow
                steps={systemFlow}
                ariaLabel="LoL Draft Helper product system flow"
              />
            </LolReveal>
          </div>
        </section>

        <section className={`${styles.section} ${styles.testingSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="08"
              label="Testing"
              title="The product isn't finished when the interface works once."
              copy="Playwright browser tests cover important user flows and are connected to GitHub Actions so application behavior is checked automatically on pushes and pull requests."
            />

            <LolReveal className={styles.testingMetadata} amount={0.4}>
              <span>Playwright UI tests</span>
              <span>GitHub Actions</span>
              <span>CI on push + PR</span>
            </LolReveal>

            <LolReveal className={styles.testingFlow} amount={0.35}>
              <p>Automated check</p>
              <TechnicalFlow
                steps={testingFlow}
                ariaLabel="Automated user-flow testing pipeline"
              />
            </LolReveal>
          </div>
        </section>

        <section className={`${styles.section} ${styles.thinkingSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="09"
              label="Product Thinking"
              title="AI is more useful when the product does the groundwork first."
            />

            <div className={styles.decisionList}>
              {productDecisions.map((decision, index) => (
                <LolReveal key={decision.title} amount={0.45}>
                  <article>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{decision.title}</h3>
                    <p>{decision.copy}</p>
                  </article>
                </LolReveal>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.buildSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="10"
              label="Build"
              title="A modern frontend with AI as one layer of the product."
              copy="The application combines a responsive React and TypeScript interface with Riot champion data, contextual recommendation logic, OpenAI-powered coaching, and automated browser testing."
            />

            <LolReveal className={styles.buildMetadata} amount={0.4}>
              <p>Verified implementation</p>
              <ul>
                {buildMetadata.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </LolReveal>
          </div>
        </section>

        <section className={`${styles.section} ${styles.outcomeSection}`}>
          <div className={styles.shell}>
            <LolReveal>
              <p className={styles.sectionLabel}>11 / Outcome</p>
              <h2>A draft tool built around context instead of generic advice.</h2>
              <p className={styles.outcomeCopy}>
                The finished application brings champion data, composition
                analysis, matchup context, recommendations, and AI-powered
                coaching into one champion-select workflow, with automated
                testing supporting continued iteration.
              </p>
            </LolReveal>
          </div>
        </section>

        <section className={styles.returnSection} aria-labelledby="return-title">
          <div className={styles.shell}>
            <p className={styles.sectionLabel}>End of Selected Work</p>
            <Link
              className={styles.returnLink}
              href="/#work"
              id="return-title"
            >
              <span>Back to Selected Work</span>
              <i aria-hidden="true">←</i>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
