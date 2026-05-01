export default [
  {
    id: "CodeFlow",
    title: "CodeFlow - GitHub Analytics Dashboard",
    description:
      "CodeFlow is a single-page GitHub analytics dashboard that takes any GitHub username and surfaces a year-long contribution heatmap, language distribution, top-starred repos, a 30-day commit timeline, and a sortable, filterable, CSV-exportable repos table — all wrapped in a clean dark/light theme. Built fully client-side with React, TypeScript, Tailwind v4, TanStack Query, Zustand, Zod, and Recharts. Zod validates every API response at the boundary so broken data fails loudly instead of silently corrupting charts. The data layer is fully decoupled from the UI, which made adding features like CSV export trivial. Debouncing filter inputs turned a stuttery experience into a smooth one — a reminder that performance is felt, not just measured.",
    metaDescription:
      "CodeFlow: a GitHub analytics dashboard with contribution heatmaps, language stats, commit timelines, and exportable repo data. Built with React, TypeScript, TanStack Query, and Recharts.",
    image: "/images/img67.webp",
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
    id: "Alubarika",
    title: "Alubarika - FX Trading Platform & Client Management",
    description:
      "Most independent forex traders lose deals not because of skill, but because their online presence looks like an afterthought — scattered WhatsApp screenshots, no clear service breakdown, and no way for serious clients to verify legitimacy. Alubarika solves that. I built a centralized FX trading platform that lets currency traders showcase services, educate prospects on forex fundamentals, and handle client communication from one polished interface. The result is a website that converts skeptical visitors into trusting clients — with conversion-focused layouts, smooth Framer Motion transitions that feel premium without being slow, and a fully responsive design that holds up from a 320px Android to a 27-inch monitor. Engineered with reusable React components so adding a new service section takes minutes, not hours.",
    metaDescription:
      "Alubarika: professional FX trading platform helping forex traders showcase services, educate clients, and convert prospects. Built with React, Tailwind CSS, and Framer Motion.",
    image: "/images/img24.webp",
    live: "https://alubarika.vercel.app/",
    code: "https://github.com/Genius-mu/Alubarika",
    stacks: ["react", "tailwind CSS", "framer motion"],
    imgs: ["/images/img25.webp", "/images/img26.webp"],
  },
  {
    id: "ClarityQ",
    title: "ClarityQ - AI-Powered Knowledge Organization & Search",
    description:
      "Everyone hoards bookmarks, screenshots, and PDFs they swear they'll revisit — and then can't find them when it actually matters. ClarityQ is my answer to that problem. It's an AI-powered resource manager that lets you search your saved content the way you'd describe it to a friend: 'that article about React hooks I read last month' instead of digging through folders. Under the hood, it pairs natural language search with AI-driven categorization and contextual recommendations, so the app surfaces what you need before you finish typing. I designed the architecture so the AI layer is completely decoupled from the UI — meaning the search engine could be swapped or upgraded without touching a single component. Smooth, responsive, and built to make knowledge management feel effortless instead of like a second job.",
    metaDescription:
      "ClarityQ: AI-powered knowledge management app with natural language search and smart recommendations. Find any saved resource instantly. React, Tailwind, AI API.",
    image: "/images/img15.webp",
    live: "https://clarity-q.vercel.app/",
    code: "https://github.com/Genius-mu/ClarityQ",
    stacks: ["react", "tailwind CSS", "framer motion", "AI API"],
    imgs: ["/images/img28.webp", "/images/img29.webp"],
  },
  {
    id: "Ticket-MA",
    title: "Ticket-MA - Team Task & Issue Tracking Software",
    description:
      "Small teams don't fail because they lack tools — they fail because their tools have ten features they don't need and miss the three they do. Ticket-MA strips ticket management down to what actually moves work forward: create, assign, track, resolve. I built it for teams that want Jira's clarity without Jira's learning curve. Real-time updates keep everyone aligned without Slack pings, and the interface is intuitive enough that a new team member is productive in under five minutes. Architecturally, I separated state management from rendering logic so the app stays snappy even as ticket volume grows, and animations are tuned to communicate state changes (assigned, in-progress, resolved) without distracting from the work itself. A reminder that good software gets out of the way.",
    metaDescription:
      "Ticket-MA: lightweight team task and issue tracker with real-time updates and intuitive UX. Boost team productivity without Jira's complexity. Built with React.",
    image: "/images/img6.webp",
    live: "https://ticket-m-app.netlify.app/",
    code: "https://github.com/Genius-mu/Ticket-Management-App",
    stacks: ["react", "tailwind CSS", "framer motion"],
    imgs: ["/images/img30.webp", "/images/img31.webp"],
  },
  {
    id: "TimeDrip",
    title: "TimeDrip - Calculate & Eliminate Time Wastage",
    description:
      "We all know we waste time — but until you put a dollar amount on it, it doesn't sting enough to change. TimeDrip translates time-wasting habits into hard financial losses, then gives you a personalized action plan to recover them. Log your daily activities, and the app calculates exactly how much your scrolling, context-switching, and unproductive meetings are costing you per day, week, and year. The recommendations engine adapts to your patterns instead of giving generic advice. I built persistence with localStorage so your data stays yours — no account, no backend, no privacy trade-offs — and obsessed over the input flow so logging an activity takes three seconds, not thirty. Because a productivity app you don't open is just another time-waster.",
    metaDescription:
      "TimeDrip: productivity app that calculates the financial cost of wasted time and delivers personalized recommendations. Optimize your day. React, Tailwind, localStorage.",
    image: "/images/img21.webp",
    live: "https://time-drip.vercel.app/",
    code: "https://github.com/Genius-mu/TimeDrip",
    stacks: ["react", "tailwind CSS", "framer motion", "localStorage"],
    imgs: ["/images/img32.webp", "/images/img33.webp"],
  },
  {
    id: "HabitXP",
    title: "HabitXP - Build Lasting Habits with Streak Tracking",
    description:
      "Habit apps fail for one reason: they treat habit-building like data entry instead of identity-building. HabitXP flips that. Every habit logged, every streak extended, every milestone hit is visualized in a way that makes you feel the progress — not just record it. I engineered the persistence layer with both localStorage and IndexedDB so streaks survive offline use, browser crashes, and device migrations (the kind of edge cases that quietly kill user trust in tracker apps). The streak visualizations are tuned for emotional payoff: the moment you log day 30 should feel different from day 3. Fully responsive, smoothly animated, and built around a simple thesis — what you measure, you improve, but what you celebrate, you sustain.",
    metaDescription:
      "HabitXP: habit tracker app with streak visualizations and offline-first persistence. Build consistency, celebrate progress. React, Tailwind, IndexedDB.",
    image: "/images/img34.webp",
    live: "https://habit-gx29.vercel.app/",
    code: "https://github.com/Genius-mu/HabitXP",
    stacks: [
      "react",
      "tailwind CSS",
      "framer motion",
      "localStorage",
      "indexDB",
    ],
    imgs: ["/images/img34.webp", "/images/img35.webp"],
  },
  {
    id: "Padi",
    title: "Padi - Multilingual Voice Assistant for African Languages",
    description:
      "Voice assistants work flawlessly — if you speak the five languages Silicon Valley considers worth supporting. For the millions of Africans who speak Pidgin, Hausa, or Igbo at home, technology becomes something you adapt to rather than something that adapts to you. Padi changes that. It's a voice assistant that speaks Pidgin with Mama, Hausa with Papa, and Igbo with Grandma — bringing AI into homes that have been excluded from the conversation. Built during a hackathon under tight time constraints (and ranked among the winners), Padi integrates yarnGPT for African-language understanding and was architected so additional dialects can be added without rewriting core logic. The deeper lesson: inclusive technology isn't a feature, it's a design decision made at the start.",
    metaDescription:
      "Padi: hackathon-winning voice assistant for Pidgin, Hausa, and Igbo. Bringing AI to African languages. Built with Flutter and yarnGPT.",
    image: "/images/img20.webp",
    live: "https://padi-hackathon.vercel.app/",
    code: "https://github.com/Genius-mu/padi-hackathon",
    stacks: ["flutter", "tailwind CSS", "framer motion", "yarnGpt", "API"],
    imgs: ["/images/img36.webp", "/images/img37.webp"],
  },
  {
    id: "Invoice Generator",
    title: "Invoice Generator - Fast Professional Invoice Creator",
    description:
      "Freelancers don't need another bloated SaaS with monthly fees to send a $200 invoice. They need to type the details, hit download, and get back to work. That's exactly what Invoice Generator does. No signup, no subscription, no upsell — just a clean form, instant PDF generation, and a professional-looking invoice in under 60 seconds. I handled PDF generation entirely client-side, which means client data never touches a server (a real concern for freelancers handling sensitive client info). Field validation prevents the common errors that get invoices rejected by accounting departments, and the layout was designed to look credible whether the recipient is a startup founder or a Fortune 500 procurement officer. Sometimes the best product is the one that respects the user's time.",
    metaDescription:
      "Invoice Generator: free, fast, client-side invoice creator for freelancers. No signup, instant PDF download, professional templates. React, Tailwind.",
    image: "/images/img8.webp",
    live: "https://invoice-generator-livid-five.vercel.app/",
    code: "https://github.com/Genius-mu/Invoice-Generator",
    stacks: ["react", "tailwind CSS", "framer motion", "PDF generation"],
    imgs: ["/images/img54.webp", "/images/img55.webp"],
  },
  {
    id: "Spelling Game",
    title: "Spelling Game - Interactive Spelling Improvement Tool",
    description:
      "Learning apps usually pick a side: either they're fun and forget the learning, or they're educational and forget the fun. Spelling Game refuses the trade-off. It's a fast, animated, instantly-rewarding spelling trainer that gives feedback the moment you commit to an answer — keeping the dopamine loop tight enough to make practice addictive. I tuned the game loop so wrong answers teach instead of punish, and the score system is calibrated to reward consistency over streaks (because real learning is showing up daily, not getting one perfect run). Smooth Framer Motion animations make every interaction feel alive without slowing the pace. A small project that taught me a big lesson: in education tech, friction is the enemy of learning.",
    metaDescription:
      "Spelling Game: interactive spelling trainer with instant feedback, score tracking, and addictive game loop. Make learning effortless. React, Framer Motion.",
    image: "/images/img38.webp",
    live: "https://spell-goat.vercel.app/",
    code: "https://github.com/Genius-mu/Spell-Goat",
    stacks: ["react", "tailwind CSS", "framer motion"],
    imgs: ["/images/img38.webp", "/images/img39.webp"],
  },
  {
    id: "HeB",
    title: "Heart Breaking - Creative Emotional Design Portfolio",
    description:
      "Most portfolios prove you can build. Heart Breaking proves you can feel. It's a deliberately atmospheric, dark-themed creative piece that uses pacing, motion, and restraint to communicate emotion the way a short film would — through what's shown and what's withheld. I built it as a deliberate exercise in using technical tools (Framer Motion choreography, custom timing functions, layered typography) to create something that lingers after the tab closes. The challenge wasn't the code — it was knowing when to stop adding. Every animation curve, every fade duration, every silence between sections was chosen. The takeaway: technical skill becomes craft when you know what to leave out.",
    metaDescription:
      "Heart Breaking: atmospheric, emotionally-driven creative portfolio piece. Dark aesthetic, choreographed motion, cinematic pacing. React, Framer Motion.",
    image: "/images/img18.webp",
    live: "https://heart-breaking.vercel.app/",
    code: "https://github.com/Genius-mu/heart-breaking",
    stacks: ["react", "tailwind CSS", "framer motion"],
    imgs: ["/images/img40.webp", "/images/img41.webp"],
  },
  {
    id: "CryptoEn",
    title: "CryptoEn - Modern Cryptocurrency Payment Platform",
    description:
      "Crypto interfaces have a trust problem. Most look either intimidatingly technical or suspiciously cartoonish — and both kill conversion for new users. CryptoEn was my attempt at the third path: a sleek, dark-themed payment platform that looks like fintech, not like a meme coin. I designed every interaction around reducing the cognitive load that makes first-time crypto users freeze — clear visual hierarchy, predictable patterns, status indicators that explain what's happening before the user has to ask. The result is an interface that feels familiar to anyone who's used a banking app, while still respecting the technical realities of blockchain transactions. Sometimes the most innovative work is making unfamiliar things feel obvious.",
    metaDescription:
      "CryptoEn: sleek dark-themed crypto payment platform designed to onboard first-time users with fintech-grade UX. React, Tailwind, Framer Motion.",
    image: "/images/img17.webp",
    live: "https://cryptoen.vercel.app/",
    code: "https://github.com/Genius-mu/crypto.me",
    stacks: ["react", "tailwind CSS", "framer motion"],
    imgs: ["/images/img42.webp", "/images/img43.webp"],
  },
  {
    id: "CrossChain",
    title: "CrossChain - Multi-Chain Asset Bridge & Transfer",
    description:
      "Cross-chain bridges have a brutal UX reputation — and a worse security one. Users have lost millions to bridges that prioritized speed over safety, or hid critical confirmation steps behind confusing flows. CrossChain is my take on getting both right. It enables secure asset transfers across Ethereum, Polygon, and Arbitrum with an interface that surfaces transaction risks before users sign, not after. I integrated smart contract interactions with web3.js and engineered the confirmation flow so users always know exactly what they're approving, what it costs, and what could go wrong. The technical challenge was real — async chain interactions, gas estimation, error recovery — but the UX challenge was harder: making blockchain feel as predictable as Venmo.",
    metaDescription:
      "CrossChain: secure multi-chain bridge for Ethereum, Polygon, and Arbitrum with transparent risk surfacing. Built with React, web3.js, and smart contracts.",
    image: "/images/img22.webp",
    live: "https://cross4chain.vercel.app/",
    code: "https://github.com/Genius-mu/CrossChain",
    stacks: ["react", "web3.js", "smart contracts", "tailwind CSS"],
    imgs: ["/images/img44.webp", "/images/img45.webp"],
  },
  {
    id: "web3Q",
    title: "web3Q - Web3 Asset Transfer & Blockchain Bridge",
    description:
      "Web3 onboarding is where most users quit. Wallet popups, gas warnings, network switches — every step is a chance to lose someone forever. web3Q is built to keep them. It's a streamlined asset transfer platform across Ethereum, Polygon, and Arbitrum that treats every interaction as a moment of trust to be earned. I integrated wallet connection, network detection, and transaction signing into a single coherent flow, with clear feedback at each step so users never feel stranded mid-transaction. Animations weren't decoration — they were communication, signaling progress on operations that take 15-60 seconds (an eternity in UI time). The deeper engineering challenge was handling chain reorgs, RPC failures, and dropped transactions gracefully. The deeper UX challenge was making all of that invisible.",
    metaDescription:
      "web3Q: streamlined Web3 asset transfer across Ethereum, Polygon, and Arbitrum with onboarding-first UX. React, web3.js, Tailwind, Framer Motion.",
    image: "/images/img23.webp",
    live: "https://web3-gm.vercel.app/",
    code: "https://github.com/Genius-mu/web3",
    stacks: ["react", "web3.js", "tailwind CSS", "framer motion"],
    imgs: ["/images/img46.webp", "/images/img47.webp"],
  },
  {
    id: "Vektor",
    title: "Vektor - Professional Business Website & Brand Builder",
    description:
      "A business with a weak website doesn't lose customers — it loses them silently, before any conversation can happen. Vektor is a modern business website template engineered to fix the two killers I see most often: confusing navigation and a brand identity that whispers when it should speak. Clean section hierarchy guides visitors from curiosity to contact without making them think. Smooth, purposeful interactions build the kind of subconscious trust that makes people pick up the phone. I built the layout system to be modular, so swapping in new services, testimonials, or case studies takes minutes — meaning the site stays fresh as the business grows instead of becoming a relic the team's afraid to touch.",
    metaDescription:
      "Vektor: modern business website template with clean navigation, strong brand identity, and modular content sections. React, Tailwind, Framer Motion.",
    image: "/images/img13.webp",
    live: "https://vektor-phi.vercel.app/",
    code: "https://github.com/Genius-mu/Vektor",
    stacks: [
      "react",
      "tailwind CSS",
      "react-router",
      "framer-motion",
      "lucide-react",
    ],
    imgs: ["/images/img48.webp", "/images/img49.webp"],
  },
  {
    id: "Special Todo",
    title: "Special Todo - Elegant Task Management App",
    description:
      "The todo app is a developer cliché — and that's exactly why I rebuilt it. Not to add features, but to study the boring fundamentals: how does a task feel as you complete it? How does the app behave when you reload after losing internet? What's the right animation curve for an item being deleted versus checked off? Special Todo is the result of obsessing over those tiny details. localStorage persistence means your tasks survive refreshes and offline use without a single backend call. Smooth, intentional animations make checking off a task quietly satisfying. It's a small app, but every interaction was deliberate — because the difference between forgettable software and software people actually use lives in the details no one would think to ask for.",
    metaDescription:
      "Special Todo: elegant React task manager with offline persistence and intentional micro-interactions. Productivity that respects the user. React, Tailwind, localStorage.",
    image: "/images/img52.webp",
    live: "https://todap.vercel.app/",
    code: "https://github.com/Genius-mu/to-do",
    stacks: [
      "react",
      "tailwind CSS",
      "framer-motion",
      "lucide-react",
      "localStorage",
    ],
    imgs: ["/images/img52.webp", "/images/img53.webp"],
  },
  {
    id: "Electiz",
    title: "Electiz - Electrical Services Professional Landing Page",
    description:
      "Electricians are some of the most skilled tradespeople around — and some of the worst-served by web design. Most electrical service sites look like they were built in 2009 and never updated, costing real businesses real customers. Electiz is what a modern electrical services landing page should look like: confident visuals, clear service breakdowns, prominent calls-to-action, and a layout structured around how customers actually decide to hire (credibility first, then services, then contact). I built it fully responsive because the customer searching for an emergency electrician is on their phone, not at a desk. The conversion-focused architecture means every section earns its place by either building trust or driving action. No fluff, no filler.",
    metaDescription:
      "Electiz: conversion-focused landing page for electrical services. Clean visuals, mobile-first design, credibility-driven layout. React, Tailwind, Framer Motion.",
    image: "/images/img9.webp",
    live: "https://electiz.netlify.app/",
    code: "https://github.com/Genius-mu/Electiz",
    stacks: [
      "react",
      "tailwind CSS",
      "react-router",
      "framer-motion",
      "lucide-react",
    ],
    imgs: ["/images/img56.webp", "/images/img57.webp"],
  },
  {
    id: "DOM",
    title: "DOM - AI Image Generation Landing Page",
    description:
      "AI image generation is one of the most exciting tech shifts in years — but most products selling it look indistinguishable from each other. DOM is my refined take on standing out in a crowded space. I started from an existing design concept and rebuilt it with sharper visual hierarchy, smoother interactions, and a layout that actually showcases what the AI can do instead of burying it under marketing copy. Integrated with an image generation API so the demos are real outputs, not stock illustrations — because nothing kills credibility in the AI space faster than fake examples. The takeaway from this build: when everyone is shouting about AI, the differentiator is no longer the model — it's the experience wrapped around it.",
    metaDescription:
      "DOM: AI image generation landing page with refined design and live demo integration. Stand out in the crowded AI space. React, Tailwind, image generation API.",
    image: "/images/img11.webp",
    live: "https://amenadom.netlify.app/",
    code: "https://github.com/Genius-mu/-DOM1-",
    stacks: [
      "react",
      "tailwind CSS",
      "image generation API",
      "react-router",
      "framer-motion",
      "lucide-react",
    ],
    imgs: ["/images/img58.webp", "/images/img59.webp"],
  },
  {
    id: "Tania",
    title: "Tania - Wellness & Massage Service Landing Page",
    description:
      "Wellness brands sell a feeling, not a service — and most websites in the space completely miss that. Loud colors, cluttered layouts, and aggressive CTAs in an industry that exists to help people slow down. Tania is the opposite. Refined from an original design concept, it uses calming palettes, generous whitespace, and softly-paced animations to make the booking experience feel like the start of the relaxation, not an interruption to it. Every spacing decision was tuned to feel like a deep breath. The responsive flow holds that calm from desktop to mobile without compromise. A reminder that great UX isn't always about efficiency — sometimes it's about emotional alignment with what the product actually delivers.",
    metaDescription:
      "Tania: wellness and massage service landing page with calming, emotionally-aligned design. Booking experience that begins the relaxation. React, Tailwind, Framer Motion.",
    image: "/images/img10.webp",
    live: "https://tania-orcin.vercel.app/",
    code: "https://github.com/Genius-mu/Tania",
    stacks: [
      "react",
      "tailwind CSS",
      "framer motion",
      "react-counter-up",
      "react-router",
      "framer-motion",
      "lucide-react",
    ],
    imgs: ["/images/img60.webp", "/images/img61.webp"],
  },
  {
    id: "Charcoal Website",
    title: "Charcoal Website - Modern Dark-Themed Landing Page",
    description:
      "Dark themes are everywhere — and most of them look identical because designers reach for the same default grays and call it 'modern.' Charcoal Website is my study in how dark themes actually work when you take them seriously. Refined from an original design, it leans on careful contrast tuning, layered depth through subtle background variations, and typography weighted to stay readable in low-light environments without sacrificing elegance. Fully responsive across every device size, with layout decisions made to preserve the same atmosphere from a 13-inch laptop to a phone in a dim room. Building this taught me that 'dark theme' isn't a color choice — it's an entire design system that has to be designed from the ground up, not retrofitted.",
    metaDescription:
      "Charcoal Website: refined dark-themed landing page with layered depth, careful contrast, and responsive elegance. React, Tailwind, Framer Motion.",
    image: "/images/img16.webp",
    live: "https://charcoal-web.vercel.app/",
    code: "https://github.com/Genius-mu/Chakol-web",
    stacks: ["react", "tailwind CSS", "framer motion"],
    imgs: ["/images/img62.webp", "/images/img63.webp"],
  },
  {
    id: "Estate Zoom",
    title: "Estate Zoom - Real Estate Property Search Platform",
    description:
      "Real estate platforms are some of the most-used and worst-designed apps people interact with — clunky filters, slow maps, and contact forms that disappear into the void. Estate Zoom is my answer to all three. It's a modern property search platform where listings load fast, the map and list views stay synchronized, and contacting an agent feels as direct as texting a friend. I integrated a map API to power location-based discovery and engineered the filter logic to update results without reloading the page, because every reload is a moment users mentally check out. The deeper goal was emotional: house-hunting is stressful, and the product that respects that stress wins. Buying a home is the biggest decision most people make — the platform that helps them shouldn't make it harder.",
    metaDescription:
      "Estate Zoom: modern real estate platform with synchronized map search, instant filters, and direct agent contact. Property search that respects users. React, Tailwind, map API.",
    image: "/images/img65.webp",
    live: "https://estate-zoom.vercel.app/",
    code: "https://github.com/Genius-mu/Chakol-web",
    stacks: ["react", "tailwind CSS", "framer motion", "map API"],
    imgs: ["/images/img65.webp", "/images/img64.webp"],
  },
];
