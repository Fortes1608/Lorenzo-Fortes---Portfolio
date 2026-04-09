"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "./section-container";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionContainer className="sticky top-0 z-50 pt-4">
        <header className="flex items-center justify-between rounded-full border border-line bg-surface-strong px-5 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-6">
          <a href="#" className="text-sm font-medium tracking-[-0.02em] text-foreground">
            Lorenzo Fortes
          </a>
          <div className="flex items-center gap-4 sm:gap-5">
            <nav className="flex items-center gap-5 text-sm text-muted sm:gap-7">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-300 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </header>
      </SectionContainer>
    </motion.div>
  );
}
