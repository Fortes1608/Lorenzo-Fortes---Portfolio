"use client";

import { motion } from "framer-motion";
import { Reveal } from "./reveal";
import { SectionContainer } from "./section-container";
import { SectionHeading } from "./section-heading";

const contactLinks = [
  {
    href: "mailto:mrlorenzo1608@gmail.com",
    label: "Email",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-none stroke-current"
        strokeWidth="1.8"
      >
        <rect x="3" y="6" width="18" height="12" rx="2.5" />
        <path d="M4 8l8 6 8-6" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/lorenzo-fortes/",
    label: "LinkedIn",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
      >
        <path d="M6.94 8.5H3.56V20h3.38V8.5Zm-1.69-4.56A1.94 1.94 0 1 0 5.3 7.82a1.94 1.94 0 0 0-.05-3.88ZM20.44 12.9c0-3.48-1.86-5.1-4.33-5.1a3.76 3.76 0 0 0-3.39 1.87V8.5H9.34c.04.77 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.12-.92a2.22 2.22 0 0 1 2.08-1.48c1.47 0 2.06 1.13 2.06 2.79V20h3.38l.08-7.1Z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/Fortes1608",
    label: "GitHub",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
      >
        <path d="M12 .5a12 12 0 0 0-3.8 23.39c.6.11.82-.26.82-.58v-2.06c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.22 1.83 1.22 1.05 1.8 2.77 1.28 3.45.98.11-.77.41-1.28.74-1.58-2.67-.31-5.47-1.33-5.47-5.91 0-1.31.47-2.39 1.22-3.23-.12-.3-.53-1.56.12-3.24 0 0 1-.32 3.3 1.23a11.43 11.43 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.68.24 2.94.12 3.24.76.84 1.22 1.92 1.22 3.23 0 4.59-2.8 5.6-5.48 5.91.42.36.8 1.08.8 2.18v3.24c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <SectionContainer id="contact" className="pb-12 pt-8 lg:pb-18">
      <div
        className="overflow-hidden rounded-[3rem] border px-6 py-24 text-center shadow-[0_35px_120px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:px-10 lg:px-20 lg:py-32"
        style={{
          backgroundColor: "var(--panel)",
          borderColor: "var(--panel-border)",
        }}
      >
        <Reveal className="mx-auto max-w-4xl" offset={18}>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s connect."
            description="Email, LinkedIn, and GitHub."
            align="center"
          />
          <div className="mt-14 flex items-center justify-center gap-4">
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="inline-flex h-14 w-14 items-center justify-center rounded-full border shadow-[0_20px_40px_rgba(17,17,17,0.08)] backdrop-blur-md"
                style={{
                  backgroundColor: "var(--icon-bg)",
                  color: "var(--icon-color)",
                  borderColor: "var(--pill-border)",
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
