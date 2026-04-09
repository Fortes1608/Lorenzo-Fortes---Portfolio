"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "./reveal";
import { SectionContainer } from "./section-container";

type ScreenshotLayout = "portrait" | "landscape";

type ProductSectionProps = {
  id: string;
  name: string;
  description: string;
  eyebrow: string;
  lightAccent: string;
  darkAccent: string;
  details: string;
  techStack: string[];
  githubUrl: string;
  appStoreUrl: string;
  iconSrc: string;
  screenshots: string[];
  screenshotLayout: ScreenshotLayout;
  reverse?: boolean;
};

function ScreenshotShowcase({
  name,
  screenshots,
  screenshotLayout,
}: {
  name: string;
  screenshots: string[];
  screenshotLayout: ScreenshotLayout;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const isLandscape = screenshotLayout === "landscape";
  const safeIndex =
    activeIndex >= 0 && activeIndex < screenshots.length ? activeIndex : 0;
  const activeSrc = screenshots[safeIndex] ?? screenshots[0];

  return (
    <div className="w-full">
      <motion.div
        className={`relative mx-auto overflow-hidden rounded-[2.2rem] border border-white/40 bg-white/72 shadow-[0_35px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl ${
          isLandscape
            ? "max-w-[760px]"
            : "max-w-[320px] lg:max-w-[340px]"
        }`}
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.34),transparent)]" />
        <div
          className={`relative overflow-hidden ${
            isLandscape ? "aspect-[16/10]" : "aspect-[9/19.5]"
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSrc}
              initial={{ opacity: 0.12, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.12, scale: 0.99 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={activeSrc}
                alt={`${name} screenshot ${safeIndex + 1}`}
                fill
                className="object-cover"
                sizes={isLandscape ? "(max-width: 1024px) 100vw, 760px" : "(max-width: 1024px) 320px, 340px"}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {screenshots.length > 1 ? (
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {screenshots.map((src, index) => {
            const selected = index === safeIndex;

            return (
              <button
                key={src}
                type="button"
                aria-label={`Show screenshot ${index + 1} for ${name}`}
                aria-pressed={selected}
                onClick={() => setActiveIndex(index)}
                className={`relative overflow-hidden rounded-[1.2rem] border transition-all duration-300 ${
                  isLandscape ? "h-16 w-24" : "h-16 w-12"
                } ${selected ? "scale-[1.03]" : "opacity-80 hover:opacity-100"}`}
                style={{
                  borderColor: selected ? "var(--foreground)" : "var(--pill-border)",
                  backgroundColor: "var(--pill-bg)",
                  boxShadow: selected
                    ? "0 16px 30px rgba(15,23,42,0.12)"
                    : "0 8px 20px rgba(15,23,42,0.06)",
                }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes={isLandscape ? "96px" : "48px"}
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export function ProductSection({
  id,
  name,
  description,
  eyebrow,
  lightAccent,
  darkAccent,
  appStoreUrl,
  details,
  githubUrl,
  iconSrc,
  screenshots,
  screenshotLayout,
  techStack,
}: ProductSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <SectionContainer className="pb-6 lg:pb-8">
      <Reveal offset={14}>
        <section
          id={id === "project-one" ? "projects" : id}
          className="project-surface relative overflow-hidden rounded-[2.6rem] border px-6 py-6 shadow-[0_30px_90px_rgba(15,23,42,0.07)] sm:px-8 lg:px-10"
          style={{
            borderColor: "var(--panel-border)",
            ["--project-light-gradient" as string]: lightAccent,
            ["--project-dark-gradient" as string]: darkAccent,
          }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--section-overlay)" }}
          />
          <div
            className="absolute inset-x-0 top-0 h-40"
            style={{ background: "var(--section-top-glow)" }}
          />
          <div
            className="absolute right-0 top-0 h-44 w-44 rounded-full blur-3xl"
            style={{ backgroundColor: "var(--section-orb)" }}
          />

          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            className="relative z-10 flex w-full items-center gap-5 text-left outline-none"
            aria-expanded={expanded}
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[1.7rem] border border-white/40 bg-white/55 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <Image
                src={iconSrc}
                alt={`${name} app icon placeholder`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="section-eyebrow mb-3">{eyebrow}</p>
              <h2 className="text-3xl font-semibold tracking-[-0.06em] text-foreground sm:text-4xl">
                {name}
              </h2>
              <p className="mt-2 max-w-2xl text-base leading-7 tracking-[-0.02em] text-muted sm:text-lg">
                {description}
              </p>
            </div>

            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[color:var(--pill-border)] bg-[color:var(--pill-bg)] text-foreground backdrop-blur-md"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-none stroke-current"
                strokeWidth="2.2"
              >
                <path d="M6.5 9.5 12 15l5.5-5.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {expanded ? (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -8 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -8 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 overflow-hidden"
              >
                <div className="mt-8 h-px bg-[color:var(--pill-border)]" />
                <div className="flex flex-col gap-12 pt-8 xl:grid xl:grid-cols-[minmax(0,1fr)_minmax(320px,760px)] xl:items-start xl:gap-16">
                  <div className="max-w-[38rem]">
                    <p className="text-lg leading-8 tracking-[-0.02em] text-muted">
                      {details}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {techStack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border px-4 py-2 text-sm font-medium tracking-[-0.02em] text-foreground backdrop-blur-md"
                          style={{
                            backgroundColor: "var(--pill-bg)",
                            borderColor: "var(--pill-border)",
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-full px-7 py-3.5 text-sm font-medium tracking-[-0.02em] shadow-[0_20px_40px_rgba(17,17,17,0.14)] transition-transform duration-300 hover:-translate-y-0.5"
                        style={{
                          backgroundColor: "var(--button-solid-bg)",
                          color: "var(--button-solid-text)",
                        }}
                      >
                        GitHub
                      </a>
                      <a
                        href={appStoreUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-full border px-7 py-3.5 text-sm font-medium tracking-[-0.02em] text-foreground backdrop-blur-md transition-colors duration-300"
                        style={{
                          backgroundColor: "var(--pill-bg)",
                          borderColor: "var(--pill-border)",
                        }}
                        onMouseEnter={(event) => {
                          event.currentTarget.style.backgroundColor = "var(--pill-hover)";
                        }}
                        onMouseLeave={(event) => {
                          event.currentTarget.style.backgroundColor = "var(--pill-bg)";
                        }}
                      >
                        App Store
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start justify-center xl:justify-end">
                    <ScreenshotShowcase
                      name={name}
                      screenshots={screenshots}
                      screenshotLayout={screenshotLayout}
                    />
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </section>
      </Reveal>
    </SectionContainer>
  );
}
