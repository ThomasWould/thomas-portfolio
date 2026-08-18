"use client";

import { motion, useReducedMotion } from "motion/react";
import { siteLinks } from "@/config/site-links";

const ease = [0.22, 1, 0.36, 1] as const;

const facts = [
  "6+ Years / Software Development",
  "Enterprise Systems → Web + Product + AI",
  "Pennsylvania / Open to Remote",
  "C# .NET / SQL / React / TypeScript / AI",
] as const;

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="about-section-inner">
        <motion.p
          className="about-label"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: reduceMotion ? 0 : 0.56, ease }}
        >
          About / Background
        </motion.p>

        <div className="about-grid">
          <motion.h2
            className="about-title"
            id="about-title"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.74, ease }}
          >
            <span>I started in enterprise software.</span>
            <span>I kept getting pulled closer to the user.</span>
          </motion.h2>

          <motion.div
            className="about-content"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: reduceMotion ? 0 : 0.68, delay: 0.08, ease }}
          >
            <div className="about-copy">
              <p>
                I&apos;ve spent about six years building and supporting software
                across C#/.NET, SQL, workflow platforms, APIs, and internal
                business applications.
              </p>
              <p>
                A lot of that work involved more than writing code. I worked
                directly with users, figured out what they were actually trying
                to accomplish, translated that into a solution, tested it,
                shipped it, and supported it afterward.
              </p>
              <p>
                More recently, I&apos;ve been spending more of my time with React,
                TypeScript, web design, rapid prototyping, and AI-assisted
                development. That&apos;s the direction I&apos;m most interested in
                continuing to push.
              </p>
            </div>

            <ul className="about-facts" aria-label="Background facts">
              {facts.map((fact, index) => (
                <motion.li
                  key={fact}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.48,
                    delay: reduceMotion ? 0 : index * 0.04,
                    ease,
                  }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{fact}</p>
                </motion.li>
              ))}
            </ul>

            <div className="about-links" aria-label="Profile links">
              <a
                className="about-link"
                href={siteLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View resume (opens in a new tab)"
              >
                View resume <span aria-hidden="true">↗</span>
              </a>
              <a
                className="about-link"
                href={siteLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View LinkedIn profile (opens in a new tab)"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
