"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;
const workflow = [
  "Job details",
  "Live weather",
  "Masonry score",
  "Work window",
  "Feedback",
];

export function WeatherPlannerFeature() {
  const reduceMotion = useReducedMotion();

  return (
    <article
      className="weather-project"
      aria-labelledby="weather-planner-project-title"
    >
      <motion.div
        className="weather-project-kicker"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.58, ease }}
      >
        <p>02 / Product Design + Development</p>
        <p>2026</p>
      </motion.div>

      <div className="weather-project-intro">
        <motion.div
          className="weather-project-summary"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.68, delay: 0.1, ease }}
        >
          <p className="weather-project-description">
            A trade-focused weather tool built around the actual decisions
            concrete and masonry contractors make before starting work.
          </p>
          <p className="weather-project-disciplines">
            Product Design / React / TypeScript / API Integration
          </p>
          <a
            className="weather-project-link"
            href="/work/masonry-weather-planner"
          >
            View case study <span aria-hidden="true">↗</span>
          </a>
        </motion.div>

        <motion.h2
          className="weather-project-title"
          id="weather-planner-project-title"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.78, delay: 0.04, ease }}
        >
          Turning generic weather data into job-ready decisions.
        </motion.h2>
      </div>

      <motion.div
        className="weather-workflow"
        aria-label="Weather Planner decision workflow"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.62, delay: 0.14, ease }}
      >
        <p>Decision workflow</p>
        <ol>
          {workflow.map((step, index) => (
            <li key={step}>
              <span>{step}</span>
              {index < workflow.length - 1 ? (
                <i aria-hidden="true">→</i>
              ) : null}
            </li>
          ))}
        </ol>
      </motion.div>

      <div className="weather-product-visuals">
        <motion.figure
          className="weather-panel weather-panel-primary"
          initial={
            reduceMotion ? false : { opacity: 0, y: 22, scale: 0.988 }
          }
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.14 }}
          transition={{ duration: 0.82, ease }}
        >
          <div className="weather-screen">
            <Image
              src="/projects/weather-planner/weather-score.PNG"
              alt="Masonry Weather Planner showing live weather conditions, a masonry score, recommendation, and hourly work window"
              width={839}
              height={1229}
              quality={90}
              sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1080px) 54vw, (max-width: 1920px) 44vw, 920px"
            />
          </div>
          <figcaption>Masonry score + work window</figcaption>
        </motion.figure>

        <motion.figure
          className="weather-panel weather-panel-input"
          initial={reduceMotion ? false : { opacity: 0, x: -14, y: 16 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.72, delay: 0.12, ease }}
        >
          <div className="weather-screen">
            <Image
              src="/projects/weather-planner/weather-score-main.PNG"
              alt="Masonry Weather Planner job-details form before a weather score is generated"
              width={860}
              height={1014}
              quality={90}
              sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1080px) 40vw, (max-width: 1920px) 24vw, 430px"
            />
          </div>
          <figcaption>Job setup</figcaption>
        </motion.figure>

        <motion.figure
          className="weather-panel weather-panel-feedback"
          initial={reduceMotion ? false : { opacity: 0, x: 14, y: 16 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.72, delay: 0.2, ease }}
        >
          <div className="weather-screen">
            <Image
              src="/projects/weather-planner/feedback-flow.PNG"
              alt="Masonry Weather Planner recommendation feedback form and feedback history"
              width={770}
              height={442}
              quality={90}
              sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1080px) 40vw, (max-width: 1920px) 26vw, 470px"
            />
          </div>
          <figcaption>Feedback loop</figcaption>
        </motion.figure>
      </div>
    </article>
  );
}
