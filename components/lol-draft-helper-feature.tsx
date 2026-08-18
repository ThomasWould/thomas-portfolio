"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;
const productFlow = [
  "Draft input",
  "Champion data",
  "Matchup context",
  "Recommendations",
  "AI coach",
];

export function LolDraftHelperFeature() {
  const reduceMotion = useReducedMotion();

  return (
    <article
      className="lol-project"
      aria-labelledby="lol-draft-helper-project-title"
    >
      <motion.div
        className="lol-project-kicker"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.58, ease }}
      >
        <p>03 / AI Product + Frontend Engineering</p>
        <p>2026</p>
      </motion.div>

      <div className="lol-project-intro">
        <motion.h2
          className="lol-project-title"
          id="lol-draft-helper-project-title"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.78, delay: 0.04, ease }}
        >
          Turning live draft context into useful, matchup-specific guidance.
        </motion.h2>

        <motion.div
          className="lol-project-summary"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.68, delay: 0.1, ease }}
        >
          <p className="lol-project-description">
            A React and TypeScript application that combines Riot champion
            data, composition analysis, matchup context, and OpenAI-powered
            coaching to help players make better decisions during champion
            select.
          </p>
          <p className="lol-project-disciplines">
            React / TypeScript / OpenAI API / Playwright / GitHub Actions
          </p>
          <a
            className="lol-project-link"
            href="/work/lol-draft-helper"
          >
            View case study <span aria-hidden="true">↗</span>
          </a>

          <div className="lol-product-flow" aria-label="LoL Draft Helper flow">
            <p>Context pipeline</p>
            <ol>
              {productFlow.map((step, index) => (
                <li key={step}>
                  <span>{step}</span>
                  {index < productFlow.length - 1 ? (
                    <i aria-hidden="true">→</i>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>

      <div className="lol-product-stage">
        <motion.figure
          className="lol-panel lol-panel-primary"
          initial={
            reduceMotion ? false : { opacity: 0, y: 22, scale: 0.988 }
          }
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{ duration: 0.84, ease }}
        >
          <div className="lol-screen">
            <Image
              src="/projects/lol-draft-helper/main-app.PNG"
              alt="LoL Draft Helper main application with champion input, contextual recommendations, and coaching panel"
              width={1612}
              height={886}
              quality={90}
              sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1080px) calc(100vw - 5rem), (max-width: 1920px) 90vw, 1790px"
            />
          </div>
          <figcaption>Draft context + application workspace</figcaption>
        </motion.figure>

        <motion.figure
          className="lol-panel lol-panel-detail"
          initial={reduceMotion ? false : { opacity: 0, x: 18, y: 18 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.76, delay: 0.14, ease }}
        >
          <div className="lol-screen">
            <Image
              src="/projects/lol-draft-helper/recommendations.PNG"
              alt="LoL Draft Helper recommendations view with team composition analysis, matchup guidance, item ordering, and AI coaching"
              width={1777}
              height={1213}
              quality={90}
              sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1080px) 74vw, (max-width: 1920px) 58vw, 1120px"
            />
          </div>
          <figcaption>Matchup recommendations + AI coach</figcaption>
        </motion.figure>

        <motion.div
          className="lol-engineering-note"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.56, delay: 0.18, ease }}
        >
          <span>Engineering practice</span>
          <p>Playwright UI tests / CI on push + PR</p>
        </motion.div>
      </div>
    </article>
  );
}
