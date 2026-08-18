"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 46]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.76]);

  return (
    <section ref={heroRef} className="hero" id="top" aria-labelledby="hero-title">
      <motion.div
        className="hero-inner"
        style={
          reduceMotion
            ? undefined
            : { y: contentY, opacity: contentOpacity }
        }
      >
        <motion.p
          className="eyebrow"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          <span className="eyebrow-rule" aria-hidden="true" />
          Design + Engineering / Pennsylvania
        </motion.p>

        <h1 className="hero-title" id="hero-title">
          {[
            "I design and build",
            "digital products around",
            "real problems.",
          ].map((line, index) => (
            <span className="title-line" key={line}>
              <motion.span
                initial={reduceMotion ? false : { y: "114%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.28 + index * 0.09, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="hero-details"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.72, ease }}
        >
          <p className="hero-intro">
            Software engineer, web designer, and AI product builder focused on
            turning ideas and messy workflows into useful digital experiences.
          </p>

          <p className="availability">
            <span aria-hidden="true" />
            Available for remote opportunities
          </p>
        </motion.div>

        <motion.div
          className="hero-footer"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.94 }}
        >
          <p className="disciplines">
            Web Design <span>/</span> AI Products <span>/</span> Rapid Prototyping{" "}
            <span>/</span> Internal Tools
          </p>
          <a className="scroll-cue" href="#process-teaser">
            Scroll to explore <span aria-hidden="true">↓</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
