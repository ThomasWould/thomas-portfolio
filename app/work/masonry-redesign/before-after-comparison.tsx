"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./masonry-case-study.module.css";

const beforeSrc =
  "/projects/masonry/case-study/old-home-page-1.PNG";
const afterSrc =
  "/projects/masonry/case-study/new-home-page-1.PNG";

export function BeforeAfterComparison() {
  const [position, setPosition] = useState(50);

  return (
    <div className={styles.comparisonBlock}>
      <div className={styles.comparisonMeta} aria-hidden="true">
        <span>Before</span>
        <span>After</span>
      </div>

      <div className={styles.comparisonViewport}>
        <Image
          className={styles.comparisonImage}
          src={afterSrc}
          alt="Redesigned masonry contractor homepage"
          fill
          priority={false}
          quality={90}
          sizes="(max-width: 767px) calc(100vw - 2.4rem), (max-width: 1920px) calc(100vw - 6.8vw), 1920px"
          draggable={false}
        />

        <div
          className={styles.comparisonBefore}
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          aria-hidden="true"
        >
          <Image
            className={styles.comparisonImage}
            src={beforeSrc}
            alt=""
            fill
            quality={90}
            sizes="(max-width: 767px) calc(100vw - 2.4rem), (max-width: 1920px) calc(100vw - 6.8vw), 1920px"
            draggable={false}
          />
        </div>

        <input
          className={styles.comparisonRange}
          type="range"
          min="0"
          max="100"
          value={position}
          aria-label="Adjust the before and after website comparison"
          aria-valuetext={`${position}% original website visible`}
          onChange={(event) => setPosition(Number(event.target.value))}
        />

        <span
          className={styles.comparisonDivider}
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <i>↔</i>
        </span>
      </div>

      <p className={styles.comparisonInstruction}>
        Drag to compare / Use arrow keys when focused
      </p>
    </div>
  );
}
