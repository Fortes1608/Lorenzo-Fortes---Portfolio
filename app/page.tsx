import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ProductSection } from "@/components/product-section";
const products = [
  {
    id: "project-one",
    name: "Zenyth",
    description:
      "Zenyth is a top-down indie action game focused on survival and combat.",
    eyebrow:"iOS Project",
    lightAccent:
      "linear-gradient(135deg, #faa1a15d 0%, #ffffff 48%, #ffa5a5ff 100%)",
    darkAccent:
      "radial-gradient(circle at 16% 14%, rgba(255, 10, 10, 0.16), transparent 32%), linear-gradient(180deg, rgba(28,28,30,0.98) 0%, rgba(24, 22, 22, 0.98) 100%)",
    screenTone: "from-sky-400/90 via-cyan-300/80 to-white",
    techStack: ["Swift", "SpriteKit", "ECS"],
    githubUrl: "https://github.com/vicenzorm/Zenyth",
    appStoreUrl: "https://apps.apple.com/",
    iconSrc: "/zenyth1.png",
    screenshots: ["/zenyth01.png", "/zenyth2.png", "/zenyth3.png"],
    screenshotLayout: "landscape" as const,
    details:
      "Welcome to Zenyth, the Endless Tower, a top-down indie action game focused on survival, quick reflexes, and frantic combat. In a world where the only way out is up, you will need skill and strategy to face enemy hordes, clear each floor, and find the exit to the next level. Inspired by the classic room-by-room progression and dungeon crawling structure, Zenyth brings punishing yet rewarding close-quarters combat, complemented by vibrant and nostalgic pixel art visuals.Key Features:Dynamic Melee Combat: Dominate the space around you with brutal physical attacks. Manage your cooldowns and position yourself perfectly to avoid fatal damage.Infinite Progression: The difficulty scales with every new floor. Stronger, faster, and more numerous enemies will try to stop your ascent. How far can you go?Pure Survival: Clear rooms infested with enemies to pave your way. Each floor is a new endurance test.Native Performance: Developed natively for the Apple ecosystem, ensuring extremely smooth gameplay, responsive controls, and high performance.Do you have what it takes to master the tower? Enter the arena and prove your strength!",
  },
  {
    id: "project-two",
    name: "Break! Side Quests",
    description:
      "Daily side quests that turn small moments into playful progress, streaks, and rewards.",
    eyebrow: "App Store Project",
    lightAccent:
      "linear-gradient(135deg, #a9effbff 0%, #ffffff 52%, #c9fbfaff 100%)",
    darkAccent:
      "radial-gradient(circle at 84% 18%, rgba(96, 244, 249, 0.25), transparent 28%), linear-gradient(180deg, rgba(36, 37, 38, 0.98) 0%, rgba(28, 30, 30, 0.98) 100%)",
    screenTone: "from-neutral-900 via-neutral-700 to-neutral-100",
    techStack: ["Swift", "SwiftUI", "MVVM", "CloudKit"],
    githubUrl: "https://github.com/MarquIln/ThinkDifferentApp",
    appStoreUrl:
      "https://apps.apple.com/br/app/break-side-quests/id6755115098?l=en-GB",
    iconSrc: "/iconBreak.png",
    screenshots: ["/break1.png", "/break2.png", "/break3.png", "/break4.png"],
    screenshotLayout: "portrait" as const,
    details:
      "Break! Side Quests uses lightweight game mechanics to encourage action through small challenges, badges, and momentum. It is a playful take on habit-building and exploration.",
  },
  {
    id: "project-three",
    name: "Pickture",
    description:
      "A party experience built around prompts, photos, and group voting for fast social fun.",
    eyebrow: "App Store Project",
    lightAccent:
      "linear-gradient(135deg, #ebd1faff 0%, #ffffff 46%, #e1ccfbff 100%)",
    darkAccent:
      "radial-gradient(circle at 22% 16%, rgba(150, 48, 209, 0.12), transparent 30%), linear-gradient(180deg, rgba(29, 28, 30, 0.98) 0%, rgba(23, 22, 24, 0.98) 100%)",
    screenTone: "from-emerald-400/90 via-teal-300/80 to-white",
    techStack: ["Swift", "SwiftUI", "MVVM", "GameCenter"],
    githubUrl: "https://github.com/gstfnsk/App-Challenge-II",
    appStoreUrl:
      "https://apps.apple.com/br/app/pickture/id6751908421?l=en-GB",
    iconSrc: "/iconPickture.png",
    screenshots: ["/pickture1.png", "/pickture2.png", "/pickture3.png", "/pickture4.png"],
    screenshotLayout: "portrait" as const,
    details:
      "Pickture is a social party game concept where players respond to prompts with photos and vote on the most creative result. The focus is on simplicity, humor, and fast interaction.",
  },
  {
    id: "project-four",
    name: "Panelinha",
    description:
      "Find new restaurants and make groups with your friends!",
    eyebrow: "iOS Project",
    lightAccent:
      "linear-gradient(135deg, #d1d9faff 0%, #ffffff 46%, #cce3fbff 100%)",
    darkAccent:
      "radial-gradient(circle at 22% 16%, rgba(48, 83, 209, 0.12), transparent 30%), linear-gradient(180deg, rgba(28,28,30,0.98) 0%, rgba(22,22,24,0.98) 100%)",
    screenTone: "from-emerald-400/90 via-teal-300/80 to-white",
    techStack: ["UIKit", "MVC", "CloudKit"],
    githubUrl: "https://github.com/yourusername/panelinha",
    appStoreUrl: "https://apps.apple.com/",
    iconSrc: "/iconPanelinha.png",
    screenshots: ["/panelinha1.png", "/panelinha2.png", "/panelinha3.png", "/panelinha4.png"],
    screenshotLayout: "portrait" as const,
    details:
      "Panelinha is the ideal app for anyone who loves discovering new restaurants and wants to make group decisions in a practical way. With Panelinha, you can explore detailed information about nearby restaurants, create private groups with friends, and choose together where to go out to eat. Key features include discovering restaurants with ratings and detailed information, creating private groups to discuss options, making collective decisions to avoid the usual indecision, and enjoying a simple, intuitive interface designed to make group planning easier. Whether it’s a last-minute lunch, a special gathering, or a happy hour, Panelinha makes choosing where to eat a more collaborative and enjoyable experience.",
  },
  {
    id: "project-five",
    name: "MaDots",
    description:
      "A minimal iOS app that helps you track focused time with simple 15-minute sessions and visual dots instead of pressure.",
    eyebrow: "iOS Project",
    lightAccent:
      "linear-gradient(135deg, #dfdfdfff 0%, #ffffff 46%, #c0cad4ff 100%)",
    darkAccent:
      "radial-gradient(circle at 22% 16%, rgba(210, 210, 210, 0.12), transparent 30%), linear-gradient(180deg, rgba(28,28,30,0.98) 0%, rgba(58, 58, 58, 0.98) 100%)",
    screenTone: "from-emerald-400/90 via-teal-300/80 to-white",
    techStack: ["UIKit", "MVC", "CoreData"],
    githubUrl: "https://github.com/Fortes1608/MaDots",
    appStoreUrl: "https://apps.apple.com/",
    iconSrc: "/iconMadots.png",
    screenshots: ["/madots1.png","/madots2.png"],
    screenshotLayout: "portrait" as const,
    details:
      "This app is designed to help you stay present and track real focus without goals, streaks, or guilt. You choose up to three focus categories, assign a color to each, and start a simple 15-minute timer with a tap. Every completed session becomes a colored dot on your timeline, creating a calm visual record of how you spend your attention. Over time, these subtle patterns help you understand when and how you focus best — without charts, noise, or pressure. The experience is minimal, intuitive, and centered on clarity, making it easier to build consistent focus through simplicity.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      {products.map((product, index) => (
        <ProductSection
          key={product.id}
          {...product}
          reverse={index % 2 === 1}
        />
      ))}
      <About />
      <Contact />
    </main>
  );
}
