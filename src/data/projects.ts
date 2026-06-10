import { A } from "./site";

export type Project = {
  slug: string;
  name: string;
  card: string;
  cover: string;
  gallery: string[];
  intro: string;
  body: string;
  year: string;
  scope: string;
  timeline: string;
  status: string;
  preview: string;
};

export const projects: Project[] = [
  {
    slug: "lunar",
    name: "Lunar+",
    card: A("73igyKZXdSW8DTMpUdfroZgsw.jpg"),
    cover: A("4DYyWWmV14qFdgXQ9ckzO76htw4.png"),
    gallery: [A("1CmAReQl2fVgqq5LiHBxZ4XvNAc.png"), A("X8a7igKqE2919YI7cEjAGm4VSF4.png")],
    intro:
      "Lunar is a vintage marketplace with a passion for unique, character-rich pieces. As their audience evolved, they needed a brand and digital presence that felt fresh, expressive, and culturally relevant. We partnered with Flea to reimagine their identity and craft a bold, story-driven website experience.",
    body:
      "We crafted a fresh, expressive brand identity for Flea, blending retro-inspired elements with bold modern visuals. A new website experience brought their story to life through playful layouts, dynamic typography, and interactive moments.",
    year: "10.25",
    scope: "Branding, UI",
    timeline: "4 weeks",
    status: "Live project",
    preview: "https://clonify.io/",
  },
  {
    slug: "clonify",
    name: "Clonify",
    card: A("8AFDwJazXH9ditYWThksaaP9jYM.jpg"),
    cover: A("BWqMhPBZdO9i3A0Si3UR7ccAIc.png"),
    gallery: [A("LhSWoZOPr8IF6GBO0rpHmLU5Js.png"), A("jvUVqnzFKcbAPtjyunsAtNUkG8.png")],
    intro:
      "Clonify is a boutique creative agency focused on playful branding and personality-driven campaigns, known for its cheeky tone and bold visuals. As they grew, they needed an identity and site that matched their fearless, witty energy.",
    body:
      "We rebuilt Clonify’s brand identity using bright colors, lively typography, and witty microcopy. Interactive website elements and expressive layouts were introduced to match the agency’s voice and turn every visit into a memorable experience.",
    year: "01.25",
    scope: "Branding",
    timeline: "8 weeks",
    status: "Live project",
    preview: "https://clonify.io/",
  },
  {
    slug: "grotesks",
    name: "Grotesks",
    card: A("eII1CsBFMUv0tWAVY9REnIiw.jpg"),
    cover: A("LVa0XkeTMoQwwLi32BM5vLqrpA.png"),
    gallery: [A("N6ZG2EJ1IQSRAQh7Lh3brLnZK5A.png"), A("OuMUjvmQDEQwLVcTFk6HgmIAyx0.png")],
    intro:
      "Grotesks is a template studio for Framer creators, offering clean, modern website templates built for speed and style. As their collection grew, they needed a brand and site refresh that showcased their products clearly while reflecting the creativity of their growing community.",
    body:
      "We redesigned Clonify’s brand and site with a crisp, minimal aesthetic and a focus on usability. Clean layouts, playful moments, and a streamlined browsing experience made it easier for users to discover, preview, and purchase templates — while reinforcing Clonify’s fresh, creator-first identity.",
    year: "08.25",
    scope: "Branding",
    timeline: "12 weeks",
    status: "Live project",
    preview: "https://clonify.io/",
  },
  {
    slug: "zypher",
    name: "Zypher",
    card: A("gcCOK3eBfHG7P5Zcxtv9TwUq5A.jpg"),
    cover: A("Ol1Zr9rw6cqy5lAX8anUOvC96uQ.png"),
    gallery: [A("x4MGkvtO5s4trjIGm6gPmiPZbY.png"), A("eqtagxNJ6ssw5Mc5AZ1sCtxLOZM.png")],
    intro:
      "Zypher is a social-first creative agency built around bold ideas, fast culture, and playful storytelling. They came to us for a brand and web refresh that better reflected their upbeat energy, creative range, and knack for turning everyday moments into viral campaigns.",
    body:
      "We delivered a bold, colorful brand identity paired with a fast, interactive website experience. Featuring dynamic visuals, conversational copy, and movement-packed layouts, Zypher’s new look captures their fearless voice and positions them as the go-to agency for standout social storytelling.",
    year: "02.25",
    scope: "Branding, Motion",
    timeline: "9 weeks",
    status: "Live project",
    preview: "https://clonify.io/",
  },
  {
    slug: "blob",
    name: "Blob",
    card: A("HSuCYseGw4ZE1rGvst62AgiKg.jpg"),
    cover: A("jvUVqnzFKcbAPtjyunsAtNUkG8.png"),
    gallery: [A("4DYyWWmV14qFdgXQ9ckzO76htw4.png"), A("BWqMhPBZdO9i3A0Si3UR7ccAIc.png")],
    intro:
      "Blob is an interactive polling platform designed to spark conversations and gather opinions in real time. As they prepared to expand their audience, they needed a brand and digital experience that felt approachable, fun, and effortlessly easy to use.",
    body:
      "We rebranded Blob with bright, friendly visuals and conversational copy, creating a digital space that felt lively and welcoming. The updated website and product UI prioritized simplicity and engagement, turning every poll into a quick, intuitive, and shareable moment for users.",
    year: "12.25",
    scope: "Motion, 3D",
    timeline: "2 weeks",
    status: "Live project",
    preview: "https://clonify.io/",
  },
  {
    slug: "things",
    name: "Things",
    card: A("j1bAxPZv9KXkSAWes0FMzAgWh50.jpg"),
    cover: A("OuMUjvmQDEQwLVcTFk6HgmIAyx0.png"),
    gallery: [A("x4MGkvtO5s4trjIGm6gPmiPZbY.png"), A("LVa0XkeTMoQwwLi32BM5vLqrpA.png")],
    intro:
      "Things is a productivity studio crafting calm, focused tools for makers. They wanted an identity and site that felt as considered and tactile as the products themselves — quiet, confident, and deeply usable.",
    body:
      "We shaped a refined, minimal brand system and a website experience built around clarity and rhythm. Generous space, precise typography, and subtle motion let the product take center stage while still feeling distinctly human.",
    year: "06.25",
    scope: "Branding, UI",
    timeline: "5 weeks",
    status: "Live project",
    preview: "https://clonify.io/",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
