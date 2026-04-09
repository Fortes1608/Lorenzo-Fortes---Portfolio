"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") {
      return "light";
    }

    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <motion.button
      type="button"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-16 items-center rounded-full border border-line bg-surface px-1 backdrop-blur-xl transition-colors duration-300"
      whileTap={{ scale: 0.97 }}
      suppressHydrationWarning
    >
      <motion.span
        className="absolute inset-y-1 left-1 w-8 rounded-full shadow-[0_8px_20px_rgba(15,23,42,0.16)]"
        style={{ backgroundColor: "var(--button-solid-bg)" }}
        animate={{ x: theme === "dark" ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-1 text-foreground">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-none stroke-current"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.72 5.28l-1.56 1.56M6.84 17.16l-1.56 1.56M18.72 18.72l-1.56-1.56M6.84 6.84 5.28 5.28" />
        </svg>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-current"
        >
          <path d="M21 13.05A8.98 8.98 0 0 1 10.95 3 9 9 0 1 0 21 13.05Z" />
        </svg>
      </span>
    </motion.button>
  );
}
