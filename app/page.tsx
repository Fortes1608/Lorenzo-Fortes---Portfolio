import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ProductSection } from "@/components/product-section";
function rgba(hex: string, alpha: number) {
  const value = parseInt(hex.slice(1), 16);
  return `rgba(${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}, ${alpha})`;
}

// Builds the light/dark section backgrounds from an app's brand colors.
function brandGradients(primary: string, secondary: string = primary) {
  return {
    lightAccent: `linear-gradient(135deg, ${rgba(primary, 0.5)} 0%, #ffffff 50%, ${rgba(secondary, 0.42)} 100%)`,
    darkAccent: `radial-gradient(circle at 16% 12%, ${rgba(primary, 0.62)}, transparent 46%), radial-gradient(circle at 90% 94%, ${rgba(secondary, 0.38)}, transparent 44%), linear-gradient(180deg, rgba(28, 28, 30, 0.98) 0%, rgba(22, 22, 24, 0.98) 100%)`,
  };
}

const products = [
  {
    id: "project-one",
    name: "Zenyth",
    description:
      "Zenyth is a top-down indie action game focused on survival and combat.",
    eyebrow:"iOS Project",
    ...brandGradients("#FF2D2D", "#FF8A8A"),
    screenTone: "from-sky-400/90 via-cyan-300/80 to-white",
    techStack: ["Swift", "SpriteKit", "ECS"],
    githubUrl: "https://github.com/vicenzorm/Zenyth",
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
    ...brandGradients("#0FB5C6", "#60F4F9"),
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
    ...brandGradients("#9630D1", "#4878F8"),
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
    ...brandGradients("#3053D1", "#3A3A9E"),
    screenTone: "from-emerald-400/90 via-teal-300/80 to-white",
    techStack: ["UIKit", "MVC", "CloudKit"],
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
    ...brandGradients("#8E949C", "#C0CAD4"),
    screenTone: "from-emerald-400/90 via-teal-300/80 to-white",
    techStack: ["UIKit", "MVC", "CoreData"],
    githubUrl: "https://github.com/Fortes1608/MaDots",
    iconSrc: "/iconMadots.png",
    screenshots: ["/madots1.png","/madots2.png"],
    screenshotLayout: "portrait" as const,
    details:
      "This app is designed to help you stay present and track real focus without goals, streaks, or guilt. You choose up to three focus categories, assign a color to each, and start a simple 15-minute timer with a tap. Every completed session becomes a colored dot on your timeline, creating a calm visual record of how you spend your attention. Over time, these subtle patterns help you understand when and how you focus best — without charts, noise, or pressure. The experience is minimal, intuitive, and centered on clarity, making it easier to build consistent focus through simplicity.",
  },
  {
    id: "project-six",
    name: "Pip",
    description:
      "A gentle body fat tracker that turns two weekly photos into a private, judgement-free trend.",
    eyebrow: "iOS Project",
    ...brandGradients("#EC5A36", "#FF8A6B"),
    techStack: ["Swift", "SwiftUI", "Vision", "HealthKit", "StoreKit 2", "Swift Charts"],
    iconSrc: "/iconPip.png",
    screenshots: ["/pip1.png", "/pip2.png", "/pip3.png", "/pip4.png"],
    screenshotLayout: "portrait" as const,
    details:
      "Pip is a fitness tracker for people who want to see change that a bathroom scale cannot show. Twice a week you take a front and a side photo, guided out loud by a 10-second timer, and Pip estimates your body fat as an honest range, then tracks the weekly trend and the fat versus lean mass breakdown. Everything is analyzed on the device: Apple Vision finds the body outline, the waist is estimated from both photos and fed into a Relative Fat Mass formula recalibrated on NHANES DXA data. Photos never leave the iPhone, are excluded from backups and can be locked with Face ID. The product is deliberately gentle: no red numbers, no ideal body, one check-in per day, and a mascot that celebrates consistency instead of numbers. It integrates with Apple Health, has a free first check-in with a Plus subscription, and ships in English, Portuguese and Spanish.",
  },
  {
    id: "project-seven",
    name: "Novacula",
    description:
      "Selfie in, personalized haircut and beard plan out: hair type, face shape, routine and products.",
    eyebrow: "iOS Project",
    status: "In Development",
    ...brandGradients("#4F7A58", "#C9A45F"),
    techStack: ["Swift", "SwiftUI", "Vision", "RevenueCat", "Supabase", "Claude API"],
    iconSrc: "/iconNovacula.png",
    screenshots: ["/novacula1.png", "/novacula2.png", "/novacula3.png", "/novacula4.png"],
    screenshotLayout: "portrait" as const,
    details:
      "Novacula is a men's grooming app. You take two guided photos and the app returns your hair type (1A to 4C), your face shape and a plan: haircuts that suit you with instructions to show the barber, a beard style, a care routine with reminders and streaks, and product recommendations. Photo quality is checked locally with Apple Vision and the face shape teaser is estimated on the device; the full analysis goes through a Supabase Edge Function proxy that calls a vision model, with explicit AI consent, photos kept only in memory and no user accounts. Subscriptions run on RevenueCat with a trial, a vintage barbershop design system (custom type, tokens and motion), full PT-BR and English localization and XcodeGen-generated projects. Still in development, with a large scope already defined and implemented across the planned milestones.",
  },
  {
    id: "project-eight",
    name: "PerfumeHubBR",
    description:
      "A fragrance discovery app for the Brazilian market: find cheaper clones, review batches and build your scent profile.",
    eyebrow: "iOS Project",
    status: "In Development",
    ...brandGradients("#A59F96", "#D9D4CA"),
    techStack: ["Swift", "SwiftUI", "SwiftData", "MVVM", "Clean Architecture", "Supabase", "Python"],
    iconSrc: "/app-icon-placeholder.svg",
    screenshots: ["/perfumehub1.png", "/perfumehub2.png", "/perfumehub3.png"],
    screenshotLayout: "portrait" as const,
    details:
      "PerfumeHubBR is a native iOS app for the Brazilian fragrance market. It combines a catalog of more than 31,000 perfumes and 1,300 brands with features built around how people here actually buy: contratipos (cheaper alternatives to expensive designer scents), a batch inspector to evaluate a specific shipment, a virtual dressing table for your collection, an olfactory profile learned from it, and a weather-aware home that suggests what to wear given the heat. Under the hood it uses a zero-cost hybrid data architecture: Python pipelines compile and seed the catalog into Supabase's free tier with strict RLS, and the app keeps an aggressive offline cache in SwiftData, syncing with a cheap version check once per launch. Built with MVVM and Clean Architecture, Observation and a full test suite across Swift and Python. Still in development.",
  },
  {
    id: "project-nine",
    name: "Ennoa",
    description:
      "A private notebook for what you live between therapy sessions, adapted to each therapeutic approach.",
    eyebrow: "iOS Project · Team",
    status: "In Development",
    ...brandGradients("#4A7BAE", "#A8C8E8"),
    techStack: ["Swift", "SwiftUI", "SwiftData", "Supabase", "Sign in with Apple"],
    iconSrc: "/iconEnnoa.png",
    screenshots: ["/ennoa1.png", "/ennoa2.png"],
    screenshotLayout: "portrait" as const,
    details:
      "Ennoa is an iOS app that supports therapeutic continuity for adults. It turns notes that would be lost in daily life, such as a thought after a meeting, a dream on waking or an achievement worth recognizing, into a personal, organized memory. The experience adapts to the person's approach: a practical CBT mode for situations, thoughts and emotions, a freer psychodynamic mode for dreams and associations, a systemic mode for relationships and contexts, and a general mode. People can search and filter their timeline, and select entries to export as a local PDF shared through the native share sheet. Privacy is part of the product: offline-first with protected local data, optional sync with Supabase and row-level security, no AI interpretation, no diagnosis and nothing shared automatically. Built by a team, with local backups, conflict resolution for sync and a large unit test suite. Still in development.",
  },
  {
    id: "project-ten",
    name: "Footage",
    description:
      "Record a soccer shot and get instant, explainable biomechanics feedback, entirely on-device.",
    eyebrow: "iOS Project",
    status: "Receiving updates",
    ...brandGradients("#DC143C", "#2B3A67"),
    techStack: ["Swift", "SwiftUI", "SwiftData", "Vision", "Core ML", "YOLOv11", "Swift Charts"],
    iconSrc: "/iconFootage.png",
    screenshots: ["/footage1.png", "/footage2.png", "/footage3.png"],
    screenshotLayout: "portrait" as const,
    details:
      "Footage records a player's instep kick and extracts its biomechanics with a computer vision pipeline that runs entirely on the iPhone. Apple Vision's 3D human pose estimation tracks the body, a YOLOv11 model converted to Core ML detects the ball, and a shot event detector finds each strike in a continuous multi-shot session. From there it computes features such as knee flexion, hip rotation, torso lean, follow-through and balance, and breaks the technique score down into the stages of the kick: approach, plant, contact and follow-through, so the player knows exactly where points are lost. Every scored variable is traceable to sports biomechanics literature and nothing is a black box; features that cannot be validated are shown but not scored, a decision documented in ADRs after a pre-registered evaluation of the model. Complete and working, and continuously receiving improvements.",
  },
  {
    id: "project-eleven",
    name: "Graffitone",
    description:
      "A visionOS instrument where you paint music onto a wall with spray cans.",
    eyebrow: "visionOS Project · Team",
    ...brandGradients("#3B82D6", "#8CC8F5"),
    techStack: ["Swift", "SwiftUI", "RealityKit", "visionOS", "AVFoundation"],
    iconSrc: "/iconGraffitone.png",
    screenshots: ["/graffitone1.png"],
    screenshotLayout: "landscape" as const,
    details:
      "Graffitone is an experimental visionOS musical instrument. Users paint music onto a wall: each spray can color is an isolated musical stem (bass, guitar, hi-hat, piano and snare loops), so the wall becomes a living sequencer where every stroke adds a layer to the song. It was designed to feel playful, tactile and immediate, never like a drawing app. Painting is rendered into textures instead of spawning entities, keeping painting and rendering separate so performance stays high in RealityKit, and finished pieces are saved to a cover-flow gallery with their audio. Built by a team of developers and a designer.",
  },
  {
    id: "project-twelve",
    name: "Build Together",
    description:
      "A workspace for Scrum rituals: estimation sessions and retrospectives for teams, in real time.",
    eyebrow: "iOS Project · Team",
    ...brandGradients("#7B61E0", "#4F8FE0"),
    techStack: ["Swift", "SwiftUI", "TCA", "WebSockets", "Vapor", "PostgreSQL", "Docker"],
    iconSrc: "/app-icon-placeholder.svg",
    screenshots: ["/app-placeholder.svg"],
    screenshotLayout: "portrait" as const,
    details:
      "Build Together helps teams run Scrum rituals in a simpler, more structured way. It focuses on two collaboration flows: estimation sessions, where the team discusses and votes on backlog items in real time, and retrospectives, where it captures what went well, what did not and what to improve. Around them sit projects, participants, teams and Sign in with Apple. The client is modular, built with The Composable Architecture and shared DesignSystem and SharedKit Swift packages, with one module per feature. The backend is a Vapor API with Fluent, PostgreSQL, JWT, WebSocket sessions, Docker and auto-generated OpenAPI docs, following an MVC plus repository pattern and GitFlow with a squad per feature. Built by a team of iOS and backend developers.",
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
