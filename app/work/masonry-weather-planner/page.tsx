import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { openGraphImage, twitterImage } from "@/app/social-preview";
import { WeatherReveal } from "./weather-reveal";
import styles from "./weather-planner-case-study.module.css";

const assetPath = "/projects/weather-planner";

const decisionFlow = [
  "Job details",
  "Live weather",
  "Condition evaluation",
  "Masonry score",
  "Work window",
];

const finalFlow = ["Job details", "Weather", "Score", "Work window", "Feedback"];

const jobInputs = [
  ["01", "Location"],
  ["02", "Job type"],
  ["03", "Date"],
  ["04", "Start time"],
  ["05", "Expected duration"],
  ["06", "Sun exposure"],
];

const productDecisions = [
  {
    title: "Context before data",
    copy: "Ask what kind of work is being planned before deciding what weather information matters.",
  },
  {
    title: "Recommendation before numbers",
    copy: "Surface the practical recommendation prominently instead of making the user interpret every weather metric first.",
  },
  {
    title: "Time-specific evaluation",
    copy: "Evaluate the period when the work is actually expected to happen rather than treating the entire day as one condition.",
  },
  {
    title: "Feedback after the decision",
    copy: "Give the user a way to compare the recommendation with what actually happened.",
  },
];

const buildMetadata = [
  "React",
  "TypeScript",
  "Weather API",
  "Geocoding",
  "Responsive UI",
  "Vercel",
];

export const metadata: Metadata = {
  title: "Masonry Weather Planner Case Study — Thomas Wood",
  description:
    "A product design and frontend development case study about turning job context and live weather data into masonry-focused decisions.",
  openGraph: {
    title: "Masonry Weather Planner Case Study — Thomas Wood",
    description:
      "A product design and frontend development case study about turning job context and live weather data into masonry-focused decisions.",
    images: [openGraphImage],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masonry Weather Planner Case Study — Thomas Wood",
    description:
      "A product design and frontend development case study about turning job context and live weather data into masonry-focused decisions.",
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
    <WeatherReveal className={styles.sectionIntro}>
      <p className={styles.sectionLabel}>
        {index} / {label}
      </p>
      <div className={styles.sectionIntroContent}>
        <h2>{title}</h2>
        {copy ? <p>{copy}</p> : null}
      </div>
    </WeatherReveal>
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
    <WeatherReveal className={className} amount={0.1}>
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
    </WeatherReveal>
  );
}

function FlowSequence({
  steps,
  ariaLabel,
  className,
}: {
  steps: string[];
  ariaLabel: string;
  className?: string;
}) {
  return (
    <ol className={`${styles.flowSequence} ${className ?? ""}`} aria-label={ariaLabel}>
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

export default function MasonryWeatherPlannerCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#weather-case-study-main">
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

      <main
        id="weather-case-study-main"
        tabIndex={-1}
        className={styles.caseStudy}
      >
        <section className={styles.hero} aria-labelledby="weather-case-study-title">
          <div className={styles.shell}>
            <WeatherReveal className={styles.heroMeta} amount={0.8}>
              <p>02 / Product Design + Development</p>
              <p>2026</p>
            </WeatherReveal>

            <div className={styles.heroGrid}>
              <WeatherReveal delay={0.05} amount={0.45}>
                <h1 id="weather-case-study-title" className={styles.heroTitle}>
                  Turning generic weather data into job-ready decisions.
                </h1>
              </WeatherReveal>

              <WeatherReveal className={styles.heroSupport} delay={0.12}>
                <p>
                  A trade-focused weather tool built around the actual decisions
                  concrete and masonry contractors make before starting work.
                </p>
                <span>
                  Product Design / React / TypeScript / API Integration
                </span>
              </WeatherReveal>
            </div>

            <WeatherReveal className={styles.heroSystem} delay={0.17} amount={0.55}>
              <p>Product premise</p>
              <div>
                <span>Job context</span>
                <i aria-hidden="true">+</i>
                <span>Live conditions</span>
                <i aria-hidden="true">→</i>
                <strong>Useful decision</strong>
              </div>
            </WeatherReveal>
          </div>
        </section>

        <section className={`${styles.section} ${styles.problemSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="01"
              label="The Problem"
              title="A weather forecast provides data. The job still requires a decision."
              copy="Temperature, rain, wind, humidity, and sun exposure can all matter when planning concrete and masonry work. The challenge was turning those conditions into something more useful than a generic forecast."
            />

            <WeatherReveal className={styles.productThesis} amount={0.45}>
              <p>Core product question</p>
              <blockquote>
                Can this work reasonably be done under these conditions?
              </blockquote>
              <span>Decision support / Not an absolute guarantee</span>
            </WeatherReveal>
          </div>
        </section>

        <section className={`${styles.section} ${styles.contextSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="02"
              label="Job Context"
              title="Start with the work, not the weather."
            />

            <div className={styles.contextComposition}>
              <WeatherReveal className={styles.contextInputs} amount={0.2}>
                <p>Inputs that change the interpretation</p>
                <ol>
                  {jobInputs.map(([number, input]) => (
                    <li key={input}>
                      <span>{number}</span>
                      <strong>{input}</strong>
                    </li>
                  ))}
                </ol>
              </WeatherReveal>

              <ProductImage
                className={styles.contextScreenshot}
                src="weather-score-main.PNG"
                alt="Masonry Weather Planner job setup with location, job type, start time, duration, and sun exposure inputs"
                width={860}
                height={1014}
                caption="Job setup / Context before forecast"
                priority
                sizes="(max-width: 767px) calc(100vw - 2.4rem), (max-width: 1100px) 52vw, (max-width: 1920px) 46vw, 850px"
              />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.decisionSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="03"
              label="Decision Layer"
              title="The useful part isn't the forecast. It's what happens between the forecast and the decision."
              copy="The application combines job context with forecast conditions and translates them into a clearer recommendation rather than asking the user to interpret raw weather data alone."
            />

            <WeatherReveal className={styles.decisionFlow} amount={0.35}>
              <p>Input → evaluation → output</p>
              <FlowSequence
                steps={decisionFlow}
                ariaLabel="Weather Planner decision flow"
              />
            </WeatherReveal>
          </div>
        </section>

        <section className={`${styles.section} ${styles.outputSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="04"
              label="The Output"
              title="One result that is easier to act on."
              copy="The result brings the most relevant information together: current conditions, an overall masonry-focused score, a recommendation, and an hourly view of the planned work window."
            />

            <div className={styles.outputComposition}>
              <WeatherReveal className={styles.outputNotes} amount={0.25}>
                <p>Result anatomy</p>
                <ol>
                  <li><span>01</span> Weather snapshot</li>
                  <li><span>02</span> Overall score</li>
                  <li><span>03</span> Recommendation</li>
                  <li><span>04</span> Hourly work window</li>
                  <li><span>05</span> Live radar access</li>
                </ol>
              </WeatherReveal>

              <ProductImage
                className={styles.outputScreenshot}
                src="weather-score.PNG"
                alt="Masonry Weather Planner result showing current conditions, masonry score, recommendation, and hourly work window"
                width={839}
                height={1229}
                caption="Masonry score + recommended work window"
                sizes="(max-width: 767px) calc(100vw - 2.4rem), (max-width: 1100px) 58vw, (max-width: 1920px) 46vw, 880px"
              />

              <WeatherReveal className={styles.outputPrinciple} delay={0.08} amount={0.35}>
                <span>Raw conditions</span>
                <i aria-hidden="true">↓</i>
                <strong>Trade-specific recommendation</strong>
              </WeatherReveal>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.timeSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="05"
              label="Time Matters"
              title="Good conditions now don't guarantee good conditions two hours from now."
              copy="The planned start time and job duration matter because conditions can change while the work is happening. The hourly work window keeps the recommendation tied to the period when the contractor actually expects to be outside."
            />

            <WeatherReveal className={styles.timeline} amount={0.4}>
              <p>Planned work window</p>
              <ol>
                {[
                  "Start",
                  "Hour 1",
                  "Hour 2",
                  "Hour 3",
                  "Finish",
                ].map((step, index) => (
                  <li key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{step}</strong>
                  </li>
                ))}
              </ol>
            </WeatherReveal>
          </div>
        </section>

        <section className={`${styles.section} ${styles.feedbackSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="06"
              label="Feedback"
              title="A useful recommendation should be able to learn from what happened next."
              copy="The feedback flow gives the user a way to record how the recommendation matched the actual job conditions, creating a foundation for improving the usefulness of the scoring system over time."
            />

            <div className={styles.feedbackComposition}>
              <ProductImage
                className={styles.feedbackScreenshot}
                src="feedback-flow.PNG"
                alt="Masonry Weather Planner feedback form for recording recommendation accuracy and actual job conditions"
                width={770}
                height={442}
                caption="Feedback loop / Actual job conditions"
                sizes="(max-width: 767px) calc(100vw - 2.4rem), (max-width: 1200px) 68vw, 980px"
              />

              <WeatherReveal className={styles.feedbackLoop} delay={0.08} amount={0.3}>
                <span>Recommendation</span>
                <i aria-hidden="true">→</i>
                <span>Actual conditions</span>
                <i aria-hidden="true">→</i>
                <strong>Future refinement</strong>
              </WeatherReveal>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.thinkingSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="07"
              label="Product Thinking"
              title="The goal was not to build a better weather app."
            />

            <WeatherReveal className={styles.thinkingStatement} amount={0.45}>
              It was to remove interpretation from a small but repeated workflow.
            </WeatherReveal>

            <div className={styles.decisionList}>
              {productDecisions.map((decision, index) => (
                <WeatherReveal key={decision.title} amount={0.45}>
                  <article>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{decision.title}</h3>
                    <p>{decision.copy}</p>
                  </article>
                </WeatherReveal>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.buildSection}`}>
          <div className={styles.shell}>
            <SectionIntro
              index="08"
              label="Build"
              title="A focused frontend built around external data and product logic."
              copy="The application uses location and weather data APIs, combines that information with user-provided job context, and presents the result through a responsive React and TypeScript interface."
            />

            <WeatherReveal className={styles.buildMetadata} amount={0.4}>
              <p>Implementation</p>
              <ul>
                {buildMetadata.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </WeatherReveal>
          </div>
        </section>

        <section className={`${styles.section} ${styles.outcomeSection}`}>
          <div className={styles.shell}>
            <WeatherReveal>
              <p className={styles.sectionLabel}>09 / Outcome</p>
              <h2>
                A weather tool shaped around the decision that comes after
                checking the forecast.
              </h2>
              <p className={styles.outcomeCopy}>
                The finished prototype turns location, timing, job context, and
                live weather conditions into a more focused view of whether
                conditions appear suitable for planned concrete or masonry work.
              </p>
            </WeatherReveal>

            <WeatherReveal className={styles.finalFlow} amount={0.4}>
              <p>Complete product loop</p>
              <FlowSequence
                steps={finalFlow}
                ariaLabel="Complete Weather Planner product loop"
              />
            </WeatherReveal>
          </div>
        </section>

        <section className={styles.nextProject} aria-labelledby="next-project-title">
          <div className={styles.shell}>
            <p className={styles.sectionLabel}>Next Project</p>
            <Link
              className={styles.nextProjectLink}
              href="/work/lol-draft-helper"
            >
              <span id="next-project-title">LoL Draft Helper</span>
              <strong>
                Turning live draft context into useful, matchup-specific guidance.
                <i aria-hidden="true">→</i>
              </strong>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
