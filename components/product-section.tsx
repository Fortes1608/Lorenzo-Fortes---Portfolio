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
  highlights?: string[];
  defaultExpanded?: boolean;
  techStack: string[];
  status?: string;
  githubUrl?: string;
  appStoreUrl?: string;
  iconSrc: string;
  screenshots: Screenshot[];
  screenshotLayout: ScreenshotLayout;
  reverse?: boolean;
};

type Device = "iPhone" | "iPad" | "Apple Watch";
type Screenshot = string | { src: string; device: Device };

const screenshotSrc = (shot: Screenshot) =>
  typeof shot === "string" ? shot : shot.src;

const frames: Record<
  Device | "landscape",
  { frame: string; aspect: string; thumb: string; sizes: string; thumbSizes: string }
> = {
  iPhone: {
    frame: "max-w-[320px] lg:max-w-[340px] rounded-[2.2rem]",
    aspect: "aspect-[9/19.5]",
    thumb: "h-16 w-12",
    sizes: "(max-width: 1024px) 320px, 340px",
    thumbSizes: "48px",
  },
  iPad: {
    frame: "max-w-[480px] rounded-[1.8rem]",
    aspect: "aspect-[3/4]",
    thumb: "h-16 w-12",
    sizes: "480px",
    thumbSizes: "48px",
  },
  "Apple Watch": {
    frame: "max-w-[300px] rounded-[2.4rem] bg-black",
    aspect: "aspect-[422/514]",
    thumb: "h-14 w-[4.5rem]",
    sizes: "300px",
    thumbSizes: "72px",
  },
  landscape: {
    frame: "max-w-[760px] rounded-[2.2rem]",
    aspect: "aspect-[16/10]",
    thumb: "h-16 w-24",
    sizes: "(max-width: 1024px) 100vw, 760px",
    thumbSizes: "96px",
  },
};

function ScreenshotShowcase({
  name,
  screenshots,
  screenshotLayout,
}: {
  name: string;
  screenshots: Screenshot[];
  screenshotLayout: ScreenshotLayout;
}) {
  const items = screenshots.map((shot) => ({
    src: screenshotSrc(shot),
    device: (typeof shot === "string"
      ? screenshotLayout === "landscape"
        ? "landscape"
        : "iPhone"
      : shot.device) as Device | "landscape",
  }));
  const devices = Array.from(new Set(items.map((item) => item.device)));
  const [activeDevice, setActiveDevice] = useState(devices[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const deviceItems = items.filter((item) => item.device === activeDevice);
  const safeIndex =
    activeIndex >= 0 && activeIndex < deviceItems.length ? activeIndex : 0;
  const activeSrc = deviceItems[safeIndex]?.src ?? items[0].src;
  const spec = frames[activeDevice];

  return (
    <div className="w-full">
      {devices.length > 1 ? (
        <div className="mb-5 flex justify-center">
          <div
            className="inline-flex gap-1 rounded-full border p-1 backdrop-blur-md"
            style={{
              backgroundColor: "var(--pill-bg)",
              borderColor: "var(--pill-border)",
            }}
          >
            {devices.map((device) => {
              const selected = device === activeDevice;

              return (
                <button
                  key={device}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => {
                    setActiveDevice(device);
                    setActiveIndex(0);
                  }}
                  className="rounded-full px-4 py-1.5 text-sm font-medium tracking-[-0.02em] transition-colors duration-300"
                  style={{
                    backgroundColor: selected ? "var(--button-solid-bg)" : "transparent",
                    color: selected ? "var(--button-solid-text)" : "var(--foreground)",
                  }}
                >
                  {device === "landscape" ? "Game" : device}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      <motion.div
        key={activeDevice}
        className={`relative mx-auto overflow-hidden border border-white/40 bg-white/72 shadow-[0_35px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl ${spec.frame}`}
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.34),transparent)]" />
        <div className={`relative overflow-hidden ${spec.aspect}`}>
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
                alt={`${name} ${activeDevice === "landscape" ? "" : activeDevice + " "}screenshot ${safeIndex + 1}`}
                fill
                className="object-cover"
                sizes={spec.sizes}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {deviceItems.length > 1 ? (
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {deviceItems.map((item, index) => {
            const selected = index === safeIndex;

            return (
              <button
                key={item.src}
                type="button"
                aria-label={`Show screenshot ${index + 1} for ${name}`}
                aria-pressed={selected}
                onClick={() => setActiveIndex(index)}
                className={`relative overflow-hidden rounded-[1.2rem] border transition-all duration-300 ${spec.thumb} ${
                  selected ? "scale-[1.03]" : "opacity-80 hover:opacity-100"
                }`}
                style={{
                  borderColor: selected ? "var(--foreground)" : "var(--pill-border)",
                  backgroundColor: "var(--pill-bg)",
                  boxShadow: selected
                    ? "0 16px 30px rgba(15,23,42,0.12)"
                    : "0 8px 20px rgba(15,23,42,0.06)",
                }}
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes={spec.thumbSizes}
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
  status,
  lightAccent,
  darkAccent,
  appStoreUrl,
  details,
  highlights,
  defaultExpanded = false,
  githubUrl,
  iconSrc,
  screenshots,
  screenshotLayout,
  techStack,
}: ProductSectionProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const hasPreview = screenshots.length > 0;
  const isLandscape = screenshotLayout === "landscape";
  const previewSrcs = screenshots
    .filter((shot) => typeof shot === "string" || shot.device === "iPhone")
    .map(screenshotSrc)
    .slice(0, isLandscape ? 1 : 2);

  return (
    <SectionContainer className="pb-6 lg:pb-8">
      <Reveal offset={14}>
        <section
          id={id}
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

          <AnimatePresence initial={false}>
            {hasPreview && !expanded ? (
              <motion.div
                key="preview"
                aria-hidden="true"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute right-28 top-5 z-0 hidden xl:block"
              >
                {previewSrcs.map((src, index) => (
                  <div
                    key={src}
                    className={`absolute overflow-hidden rounded-[1.3rem] border border-white/40 shadow-[0_24px_50px_rgba(15,23,42,0.22)] ${
                      isLandscape ? "h-28 w-44" : "h-44 w-[5.25rem]"
                    }`}
                    style={{
                      right: index * 64,
                      top: index * 14,
                      transform: `rotate(${index === 0 ? 7 : -3}deg)`,
                      zIndex: 2 - index,
                    }}
                  >
                    <Image src={src} alt="" fill className="object-cover" sizes="176px" />
                  </div>
                ))}
              </motion.div>
            ) : null}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            className="relative z-10 flex w-full items-center gap-5 text-left outline-none"
            aria-expanded={expanded}
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[1.7rem] border border-white/40 bg-white/55 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <Image
                src={iconSrc}
                alt={`${name} app icon`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>

            <div className={`min-w-0 flex-1 ${hasPreview && !expanded ? "xl:pr-56" : ""}`}>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <p className="section-eyebrow">{eyebrow}</p>
                {status ? (
                  <span
                    className="rounded-full border px-3 py-1 text-xs font-medium tracking-[-0.01em] text-muted backdrop-blur-md"
                    style={{
                      backgroundColor: "var(--pill-bg)",
                      borderColor: "var(--pill-border)",
                    }}
                  >
                    {status}
                  </span>
                ) : null}
              </div>
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
                <div
                  className={`flex flex-col gap-12 pt-8 ${
                    screenshots.length > 0
                      ? "xl:grid xl:grid-cols-[minmax(0,1fr)_minmax(320px,760px)] xl:items-start xl:gap-16"
                      : ""
                  }`}
                >
                  <div className="max-w-[38rem]">
                    {highlights && highlights.length > 0 ? (
                      <ul className="space-y-3.5">
                        {highlights.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-base leading-7 tracking-[-0.02em] text-muted"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--foreground)] opacity-60"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-lg leading-8 tracking-[-0.02em] text-muted">
                        {details}
                      </p>
                    )}

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
                      {githubUrl ? (
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
                      ) : null}
                      {appStoreUrl ? (
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
                      ) : (
                        <span
                          aria-disabled="true"
                          className="inline-flex cursor-default select-none rounded-full border px-7 py-3.5 text-sm font-medium tracking-[-0.02em] text-muted opacity-70 backdrop-blur-md"
                          style={{
                            backgroundColor: "var(--pill-bg)",
                            borderColor: "var(--pill-border)",
                          }}
                        >
                          App Store · Coming soon
                        </span>
                      )}
                    </div>
                  </div>

                  {screenshots.length > 0 ? (
                    <div className="flex items-start justify-center xl:justify-end">
                      <ScreenshotShowcase
                        name={name}
                        screenshots={screenshots}
                        screenshotLayout={screenshotLayout}
                      />
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </section>
      </Reveal>
    </SectionContainer>
  );
}
