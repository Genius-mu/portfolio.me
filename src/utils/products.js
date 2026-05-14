export default [
  {
    id: "CodeFlow",
    title: "CodeFlow - GitHub Analytics Dashboard",
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
    title: "Inkly - Infinite Canvas Drawing App",
    description:
      "Inkly is an infinite-canvas drawing app — think Figma's whiteboard or tldraw, scaled down to portfolio size but built with the same architectural ideas. Users draw freehand or with geometric tools, pan and zoom across an unbounded surface, undo/redo any action, erase objects, and export their work as PNG — all with full pan/zoom on desktop (mouse, keyboard, scroll wheel) and mobile (single-finger draw, two-finger pinch/pan). The app is built around a `Drawable` discriminated union: every mark on the canvas is a typed object stored in world-space coordinates, rendered through a view transform that handles hi-DPI scaling, zoom-to-cursor math, and pinch gestures. Zoom preserves the world point under the cursor — the same trick Figma and Procreate use. Strokes are smoothed via quadratic curves through midpoints, killing the jaggedness of raw pointer samples at zero latency cost. Pointer Events unify mouse, touch, and pen input through a single `Map<pointerId, Point>` — the map's size distinguishes single-finger draw from two-finger pan/pinch, so pan and zoom happen in the same frame without jerks. Single-player today, multiplayer-ready by design: a Supabase wrapper exposes a domain API (saveStroke, subscribeToRoom, broadcastAction) that falls back to no-ops until credentials are added, with deterministic ordering by (createdAt, userId) so every client converges to the same canvas.",
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
    id: "Relay",
    title: "Relay - Team Task & Issue Tracking Software",
    description:
      "Small teams don't fail because they lack tools — they fail because their tools have ten features they don't need and miss the three they do. Ticket-MA strips ticket management down to what actually moves work forward: create, assign, track, resolve. I built it for teams that want Jira's clarity without Jira's learning curve. Real-time updates keep everyone aligned without Slack pings, and the interface is intuitive enough that a new team member is productive in under five minutes. Architecturally, I separated state management from rendering logic so the app stays snappy even as ticket volume grows, and animations are tuned to communicate state changes (assigned, in-progress, resolved) without distracting from the work itself. A reminder that good software gets out of the way.",
    metaDescription:
      "Relay: lightweight team task and issue tracker with real-time updates and intuitive UX. Boost team productivity without Jira's complexity. Built with React.",
    image: "/images/img6.webp",
    live: "https://relay-alpha-three.vercel.app/",
    code: "https://github.com/Genius-mu/Ticket-Management-App",
    stacks: [
      "react",
      "vite",
      "tailwind CSS",
      "framer motion",
      "react-router",
      "lucide-react",
      "localStorage",
    ],
    imgs: ["/images/img30.webp", "/images/img31.webp"],
  },
  {
    id: "Mordyn",
    title: "Mordyn - Modern E-commerce Storefront",
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
