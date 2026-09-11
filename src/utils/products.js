export default [
  {
    id: "CodeFlow",
    title: "CodeFlow",
    description:
      "CodeFlow is a single-page GitHub analytics dashboard that takes any GitHub username and surfaces a year-long contribution heatmap, language distribution, top-starred repos, a 30-day commit timeline, and a sortable, filterable, CSV-exportable repos table — all wrapped in a clean dark/light theme. Built fully client-side with React, TypeScript, Tailwind v4, TanStack Query, Zustand, Zod, and Recharts. Zod validates every API response at the boundary so broken data fails loudly instead of silently corrupting charts. The data layer is fully decoupled from the UI, which made adding features like CSV export trivial. Debouncing filter inputs turned a stuttery experience into a smooth one — a reminder that performance is felt, not just measured.",
    metaDescription:
      "CodeFlow: a GitHub analytics dashboard with contribution heatmaps, language stats, commit timelines, and exportable repo data. Built with React, TypeScript, TanStack Query, and Recharts.",
    image: "/images/img66.webp",
    live: "https://codeflow-amg.vercel.app/",
    code: "https://github.com/Genius-mu/codeflow",
    stacks: [
      "react",
      "typescript",
      "tailwind CSS",
      "tanstack query",
      "zustand",
      "zod",
      "recharts",
    ],
    imgs: ["/images/img66.webp", "/images/img67.webp"],
  },
  {
    id: "Inkly",
    title: "Inkly",
    description:
      "Inkly is a real-time collaborative whiteboard I built to demonstrate full-stack product engineering — from canvas rendering and hit-testing math to authenticated multi-user state sync. It's not trying to replace Figma; it's a demonstration of the architecture and product-thinking that goes into building tools like Figma at small scale.",
    metaDescription:
      "Inkly: infinite-canvas drawing app with world-space coordinates, zoom-to-cursor, unified pointer input, and realtime-ready architecture. Built with React, TypeScript, Canvas API, Zustand, and Supabase.",
    image: "/images/img71.webp",
    live: "https://inklyma.vercel.app/",
    code: "https://github.com/Genius-mu/Inkly",
    stacks: [
      "react",
      "typescript",
      "vite",
      "tailwind CSS",
      "zustand",
      "canvas API",
      "pointer events API",
      "supabase",
    ],
    imgs: ["/images/img70.webp", "/images/img71.webp"],
  },
  {
    id: "Navilag",
    title: "Navilag",
    description:
      "NaviLag is a campus survival platform built to end the sheer panic of being a lost student at the University of Lagos. I built it because I vividly remember the frustration of wandering under the scorching sun, missing crucial classes, and relying on confusing directions just to find a lecture hall. By combining interactive campus routing, dynamic timetables, and a past-question archive, it acts as the ultimate digital upperclassman. Architecturally, I paired a Next.js frontend and Supabase backend with custom spatial routing to keep map interactions lightning-fast even on patchy campus networks, proving that good software should instantly get you where you need to be without adding to your stress.",
    metaDescription:
      "NaviLag: The ultimate campus navigation and student survival app for the University of Lagos. Find real-time shortcuts, dynamic timetables, and past questions instantly. Built with React.",
    image: "/images/img80.webp",
    live: "https://navilag.vercel.app/",
    code: "https://github.com/Genius-mu/[navilag-repo]",
    stacks: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Leaflet",
      "Framer Motion",
      "Tailwind CSS",
      "Vercel",
    ],
    imgs: ["/images/img78.webp", "/images/img79.webp"],
  },
  {
    id: "Mordyn",
    title: "Mordyn",
    description:
      "Most e-commerce frontends die the same death: filters that reload the page, carts that lose state on refresh, and product grids that feel sluggish the moment you have more than 20 items. Mordyn is a modern storefront built to dodge all three. Users can browse a full product catalog, filter by category and price, sort listings, and manage a shopping cart — all with zero full-page reloads and instant feedback on every interaction. I architected the state layer so the cart persists across sessions without a backend, and decoupled filter logic from the product grid so adding new filter dimensions (size, color, rating) takes minutes instead of a rewrite. Framer Motion animations are tuned to communicate state — adding to cart should feel like something happened, not just look like it. Fully responsive from a 320px phone to a widescreen monitor, because shopping happens everywhere except where you expect it to.",
    metaDescription:
      "Mordyn: modern, responsive e-commerce storefront with instant filtering, persistent cart, and smooth product browsing. Built with React, Vite, Tailwind, and Framer Motion.",
    image: "/images/img68.webp",
    live: "https://mordyn.vercel.app/",
    code: "https://github.com/Genius-mu/mordyn",
    stacks: [
      "react",
      "vite",
      "tailwind CSS",
      "framer motion",
      "react-router",
      "lucide-react",
      "localStorage",
    ],
    imgs: ["/images/img68.webp", "/images/img69.webp"],
  },
];
