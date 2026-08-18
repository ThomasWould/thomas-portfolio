"use client";

import Image from "next/image";
import {
  useCallback,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { LolDraftHelperFeature } from "@/components/lol-draft-helper-feature";
import { WeatherPlannerFeature } from "@/components/weather-planner-feature";

const ease = [0.22, 1, 0.36, 1] as const;

type ProjectImage = {
  src: string;
  alt: string;
  label: string;
};

type ProjectFeatureProps = {
  name: string;
  statement: string;
  description: string;
  disciplines: string;
  year: string;
  images?: ProjectImage[];
  caseStudyHref?: string;
};

export function ProjectFeature({
  name,
  statement,
  description,
  disciplines,
  year,
  images = [],
  caseStudyHref,
}: ProjectFeatureProps) {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const swipeStartX = useRef<number | null>(null);
  const hasGallery = images.length > 1;
  const activeImage = images[activeIndex];
  const galleryInstructionsId = "masonry-gallery-instructions";

  const showPrevious = useCallback(() => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  }, [images.length]);

  const showNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % images.length);
  }, [images.length]);

  const handleGalleryKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!hasGallery) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!hasGallery || event.pointerType !== "touch") return;

    swipeStartX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (swipeStartX.current === null) return;

    const distance = event.clientX - swipeStartX.current;
    swipeStartX.current = null;

    if (Math.abs(distance) < 48) return;
    if (distance > 0) showPrevious();
    else showNext();
  };

  const linkContent = (
    <>
      View case study <span aria-hidden="true">↗</span>
    </>
  );

  return (
    <article className="project-feature" aria-labelledby="masonry-project-title">
      <motion.div
        className="project-kicker"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.58, ease }}
      >
        <p>01 / {name}</p>
        <p>{year}</p>
      </motion.div>

      <motion.h2
        className="project-title"
        id="masonry-project-title"
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.78, delay: 0.08, ease }}
      >
        {statement}
      </motion.h2>

      <motion.div
        className="project-details"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 0.68, delay: 0.12, ease }}
      >
        <p className="project-description">{description}</p>

        <div className="project-meta-block">
          <p className="project-disciplines">{disciplines}</p>
          {caseStudyHref ? (
            <a className="project-link" href={caseStudyHref}>
              {linkContent}
            </a>
          ) : (
            <span
              className="project-link project-link-pending"
              role="link"
              aria-disabled="true"
              aria-label="View case study, coming soon"
            >
              {linkContent}
            </span>
          )}
        </div>
      </motion.div>

      <motion.div
        className="project-media-frame"
        role={hasGallery ? "region" : undefined}
        aria-roledescription={hasGallery ? "carousel" : undefined}
        aria-label={hasGallery ? `${name} screenshot gallery` : undefined}
        aria-describedby={hasGallery ? galleryInstructionsId : undefined}
        tabIndex={hasGallery ? 0 : undefined}
        onKeyDown={handleGalleryKeyDown}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.975, y: 18 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.9, ease }}
      >
        {hasGallery ? (
          <p className="sr-only" id={galleryInstructionsId}>
            Use the left and right arrow keys to change screenshots.
          </p>
        ) : null}
        <div className="project-browser-bar">
          <span className="browser-controls" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="browser-label">
            {activeImage?.label ?? "Desktop preview"}
          </span>
          {hasGallery ? (
            <div className="project-gallery-controls">
              <span className="project-gallery-count" aria-live="polite">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </span>
              <button
                className="project-gallery-button"
                type="button"
                aria-label="Show previous project screenshot"
                onClick={showPrevious}
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                className="project-gallery-button"
                type="button"
                aria-label="Show next project screenshot"
                onClick={showNext}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          ) : (
            <span>01</span>
          )}
        </div>

        <div
          className="project-media"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            swipeStartX.current = null;
          }}
        >
          {activeImage ? (
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                className="project-gallery-slide"
                key={activeImage.src}
                custom={direction}
                style={{ position: "absolute", inset: 0 }}
                initial={{
                  opacity: 0,
                  x: reduceMotion ? 0 : direction * 10,
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: reduceMotion ? 0 : direction * -10,
                }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.28,
                  ease,
                }}
              >
                <Image
                  className="project-image"
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  quality={90}
                  sizes="(max-width: 767px) calc(100vw - 2.4rem), (max-width: 1920px) calc(100vw - 6.8vw), 1920px"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          ) : (
            <div
              className="project-media-placeholder"
              role="img"
              aria-label="Reserved landscape preview for the Masonry Website Redesign"
            >
              <p>Project visual</p>
              <span>Landscape preview reserved for final client screenshot</span>
            </div>
          )}
        </div>
      </motion.div>
    </article>
  );
}

export function SelectedWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="selected-work"
      id="work"
      aria-labelledby="selected-work-label"
    >
      <div className="selected-work-inner">
        <motion.p
          className="selected-work-label"
          id="selected-work-label"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.58, ease }}
        >
          01 / Selected Work
        </motion.p>

        <ProjectFeature
          name="Masonry Website Redesign"
          statement="Repositioning a local contractor for a more premium digital presence."
          description="A full website redesign focused on clearer service organization, stronger visual presentation, improved SEO, and a better experience for homeowners researching concrete and masonry services."
          disciplines="Web Design / UX / SEO / Client Work"
          year="2026"
          caseStudyHref="/work/masonry-redesign"
          images={[
            {
              src: "/projects/masonry/hero.PNG",
              alt: "Redesigned concrete and masonry contractor website homepage",
              label: "Homepage",
            },
            {
              src: "/projects/masonry/decorative-concrete.PNG",
              alt: "Decorative concrete design configurator with stamped patio preview and surface finish options",
              label: "Decorative concrete",
            },
            {
              src: "/projects/masonry/epoxy.PNG",
              alt: "Epoxy coatings service page showing recommended applications and finish options",
              label: "Epoxy coatings",
            },
          ]}
        />

        <WeatherPlannerFeature />

        <LolDraftHelperFeature />
      </div>
    </section>
  );
}
