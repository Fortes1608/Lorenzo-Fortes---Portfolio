import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://lorenzofortes.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lorenzo Fortes | iOS Developer",
    template: "%s | Lorenzo Fortes",
  },
  description:
    "Personal portfolio of Lorenzo Fortes, an iOS Developer building thoughtful apps with Swift, SwiftUI, UIKit, and Apple technologies.",
  applicationName: "Lorenzo Fortes Portfolio",
  keywords: [
    "Lorenzo Fortes",
    "iOS Developer",
    "Swift",
    "SwiftUI",
    "UIKit",
    "Apple Developer",
    "Mobile Developer",
    "Portfolio",
  ],
  authors: [{ name: "Lorenzo Fortes", url: siteUrl }],
  creator: "Lorenzo Fortes",
  publisher: "Lorenzo Fortes",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Lorenzo Fortes | iOS Developer",
    description:
      "Personal portfolio of Lorenzo Fortes, showcasing iOS apps, projects, and product-focused development work.",
    siteName: "Lorenzo Fortes Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lorenzo Fortes | iOS Developer",
    description:
      "Personal portfolio of Lorenzo Fortes, showcasing iOS apps, projects, and product-focused development work.",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth antialiased"
      data-theme="light"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const storedTheme = localStorage.getItem("theme");
                  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light";
                  const theme = storedTheme || systemTheme;
                  document.documentElement.dataset.theme = theme;
                  document.documentElement.classList.toggle("dark", theme === "dark");
                  document.documentElement.style.colorScheme = theme;
                } catch (error) {}
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
