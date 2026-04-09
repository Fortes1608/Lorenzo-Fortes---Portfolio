"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionContainer } from "./section-container";

export function Hero() {
  return (
    <SectionContainer className="relative pb-16 pt-12 lg:pb-24 lg:pt-18">
      <div className="relative flex min-h-[calc(100vh-5.5rem)] items-center justify-center overflow-hidden rounded-[3rem] border px-6 py-32 text-center shadow-[0_35px_120px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:px-12 lg:px-24 lg:py-44">
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "var(--panel)",
            borderColor: "var(--panel-border)",
            borderWidth: "1px",
            borderRadius: "inherit",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-[-10%] -top-28 h-[30rem] blur-2xl"
          style={{ background: "var(--hero-top-glow)" }}
        />
        <div
          className="pointer-events-none absolute -left-16 top-20 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: "var(--hero-left-glow)" }}
        />
        <div
          className="pointer-events-none absolute -right-10 bottom-8 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: "var(--hero-right-glow)" }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
          style={{ background: "var(--hero-bottom-fade)" }}
        />

        <motion.div
          className="relative z-10 mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto mb-10 flex justify-center">
            <div className="relative h-28 w-28 text-black/80 dark:text-white/88 sm:h-32 sm:w-32 lg:h-36 lg:w-36">
              <Image
                src="/memoji1.png"
                alt="Memoji placeholder"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
          <p className="section-eyebrow mx-auto mb-6 text-center">
            [iOS Developer]
          </p>
          <h1 className="hero-title mx-auto max-w-6xl">
            Lorenzo Fortes
          </h1>
          <p className="hero-copy mx-auto mt-10 max-w-[43rem]">
            A minimal portfolio showcasing my work, projects, and approach to
            building thoughtful iPhone experiences.
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
