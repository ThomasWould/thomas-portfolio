"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const stages = [
  {
    number: "01",
    name: "Understand",
    description:
      "Talk to the people involved, learn the existing workflow, clarify the real problem, and identify constraints before choosing a solution.",
    metadata: "Users / Workflows / Requirements",
  },
  {
    number: "02",
    name: "Design",
    description:
      "Turn the problem into a clear experience. Map the flow, organize information, and decide what the simplest useful version should look like.",
    metadata: "Structure / Interaction / UI",
  },
  {
    number: "03",
    name: "Build",
    description:
      "Prototype quickly and use the tools that make sense for the problem. That can mean traditional code, APIs, AI-assisted development, or workflow platforms.",
    metadata: "Code / APIs / AI / Automation",
  },
  {
    number: "04",
    name: "Test",
    description:
      "Check whether it actually works. Validate behavior, edge cases, data, usability, and the assumptions that went into the original solution.",
    metadata: "Behavior / Data / Edge Cases",
  },
  {
    number: "05",
    name: "Iterate",
    description:
      "Use feedback and real usage to improve the product rather than treating the first version as finished.",
    metadata: "Feedback / Usage / Refinement",
  },
] as const;

export function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="process-section"
      id="process"
      aria-labelledby="process-section-title"
    >
      <div className="process-section-inner">
        <motion.div
          className="process-section-intro"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.72, ease }}
        >
          <p className="process-section-label">Process / How I Work</p>
          <h2 className="process-section-title" id="process-section-title">
            From a rough problem to something people can actually use.
          </h2>
          <p className="process-section-summary">
            I like to understand the problem before deciding what to build. From
            there, I move quickly through design and development, put something
            usable in front of people, and improve it based on what I learn.
          </p>
        </motion.div>

        <div className="process-stages">
          {stages.map((stage) => (
            <motion.article
              className="process-stage"
              key={stage.number}
              initial={reduceMotion ? "active" : "rest"}
              whileInView="active"
              viewport={{ amount: 0.55 }}
              variants={{
                rest: { opacity: 1, y: 14 },
                active: { opacity: 1, y: 0 },
              }}
              transition={{ duration: reduceMotion ? 0 : 0.58, ease }}
            >
              <motion.span
                className="process-stage-accent"
                aria-hidden="true"
                variants={{
                  rest: { scaleX: 0 },
                  active: { scaleX: 1 },
                }}
              />
              <motion.p
                className="process-stage-number"
                variants={{
                  rest: { color: "#747570" },
                  active: { color: "#5577ff" },
                }}
              >
                {stage.number}
              </motion.p>
              <div className="process-stage-content">
                <motion.h3
                  variants={{
                    rest: { opacity: 0.68 },
                    active: { opacity: 1 },
                  }}
                >
                  {stage.name}
                </motion.h3>
                <p className="process-stage-description">
                  {stage.description}
                </p>
                <p className="process-stage-metadata">{stage.metadata}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
