"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const experiments = [
  {
    number: "01",
    title: "Context-Aware AI Coach",
    status: "Shipped",
    metadata: "OpenAI / Context Design",
    description:
      "Built an AI coaching experience that uses champion selection, enemy composition, and matchup context to provide more useful in-game guidance than a generic chatbot.",
  },
  {
    number: "02",
    title: "AI-Assisted Rapid Prototyping",
    status: "In Practice",
    metadata: "Codex / Product Development",
    description:
      "Using AI development tools throughout the build process to move quickly from an idea to a working prototype, while still reviewing architecture, behavior, testing, and UX decisions myself.",
  },
  {
    number: "03",
    title: "Automated UI Regression",
    status: "Shipped",
    metadata: "Playwright / CI",
    description:
      "Built automated browser tests around real user flows and connected them to GitHub Actions so important application behavior is checked on pushes and pull requests.",
  },
  {
    number: "04",
    title: "Agentic Workflow Automation",
    status: "Exploring",
    metadata: "AI / Automation",
    description:
      "Exploring multi-step AI workflows that can use tools and APIs, validate intermediate results, and involve a person when a decision should not be fully automated.",
  },
] as const;

export function LabSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="lab-section" id="lab" aria-labelledby="lab-title">
      <div className="lab-section-inner">
        <motion.header
          className="lab-intro"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.68, ease }}
        >
          <p className="lab-label">Lab / Experiments</p>
          <h2 className="lab-title" id="lab-title">
            Things I build just to see what&apos;s possible.
          </h2>
          <p className="lab-summary">
            Smaller experiments, technical ideas, and workflows that don&apos;t
            always need a full case study.
          </p>
        </motion.header>

        <div className="lab-index">
          {experiments.map((experiment, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.article
                className="lab-entry"
                data-active={isActive}
                key={experiment.number}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.52,
                  delay: reduceMotion ? 0 : index * 0.04,
                  ease,
                }}
              >
                <span className="lab-entry-accent" aria-hidden="true" />
                <h3 className="lab-entry-heading">
                  <button
                    className="lab-entry-trigger"
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <span className="lab-entry-number">
                      {experiment.number}
                    </span>
                    <span className="lab-entry-title">{experiment.title}</span>
                    <span className="lab-entry-status">
                      <i aria-hidden="true" />
                      {experiment.status}
                    </span>
                  </button>
                </h3>

                <div className="lab-entry-detail">
                  <span aria-hidden="true" />
                  <div>
                    <p className="lab-entry-metadata">
                      {experiment.metadata}
                    </p>
                    <p className="lab-entry-description">
                      {experiment.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
