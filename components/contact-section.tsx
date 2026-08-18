"use client";

import { motion, useReducedMotion } from "motion/react";
import { siteLinks } from "@/config/site-links";

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactSection() {
  const reduceMotion = useReducedMotion();
  const emailHref = siteLinks.email ? `mailto:${siteLinks.email}` : null;

  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
        <div className="contact-section-inner">
          <motion.p
            className="contact-label"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: reduceMotion ? 0 : 0.56, ease }}
          >
            Contact / Let&apos;s Talk
          </motion.p>

          <div className="contact-main">
            <motion.h2
              className="contact-title"
              id="contact-title"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: reduceMotion ? 0 : 0.76, ease }}
            >
              Have a problem worth building around?
            </motion.h2>

            <motion.p
              className="contact-summary"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: reduceMotion ? 0 : 0.64,
                delay: reduceMotion ? 0 : 0.08,
                ease,
              }}
            >
              I&apos;m interested in opportunities across web and product
              development, AI workflows, rapid prototyping, and
              forward-deployed engineering.
            </motion.p>

            <motion.div
              className="contact-cta-wrap"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{
                duration: reduceMotion ? 0 : 0.58,
                delay: reduceMotion ? 0 : 0.14,
                ease,
              }}
            >
              {emailHref ? (
                <a
                  className="contact-primary"
                  href={emailHref}
                  aria-label="Email Thomas Wood"
                >
                  <span>Let&apos;s talk</span>
                  <span className="contact-primary-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ) : (
                <span
                  className="contact-primary contact-primary-unavailable"
                  role="link"
                  aria-disabled="true"
                >
                  <span>Let&apos;s talk</span>
                  <span className="contact-primary-arrow" aria-hidden="true">
                    ↗
                  </span>
                </span>
              )}
            </motion.div>
          </div>

          <motion.div
            className="contact-meta"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              duration: reduceMotion ? 0 : 0.54,
              delay: reduceMotion ? 0 : 0.12,
              ease,
            }}
          >
            <p className="contact-availability">
              <i aria-hidden="true" />
              Available for remote opportunities
            </p>

            <nav className="contact-links" aria-label="Contact links">
              {emailHref ? (
                <a href={emailHref}>Email</a>
              ) : (
                <span aria-disabled="true">Email</span>
              )}
              <a
                href={siteLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View LinkedIn profile (opens in a new tab)"
              >
                LinkedIn
              </a>
              <a
                href={siteLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View resume (opens in a new tab)"
              >
                Resume
              </a>
            </nav>
          </motion.div>
        </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p>Thomas Wood / Design + Engineering</p>
        <p>© 2026</p>
      </div>
    </footer>
  );
}
