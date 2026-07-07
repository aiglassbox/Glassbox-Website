import { A } from "./site";

export type Project = {
  slug: string;
  name: string;
  card: string;
  cover: string;
  // Optional hero video shown on the project detail page instead of the cover
  // image. The works-page thumbnail always uses `cover`.
  video?: string;
  // Optional videos that replace gallery items by index on the detail page.
  galleryVideos?: (string | undefined)[];
  // Optional short captions shown beneath each gallery item (by index).
  galleryCaptions?: (string | undefined)[];
  // Optional headline metrics rendered as animated counters after the body.
  metrics?: { value: string; suffix: string; prefix?: string; label: string }[];
  gallery: string[];
  tagline: string;
  intro: string;
  body: string;
  results: string;
  year: string;
  scope: string;
  industry: string;
  status: string;
  preview: string;
};

export const projects: Project[] = [
  {
    slug: "insurance",
    name: "Ageas Federal",
    card: A("proj-insurance-cover.jpg"),
    cover: A("proj-insurance-cover.jpg"),
    video: "/videos/ageas.mp4",
    galleryVideos: ["/videos/ageas-creative.mp4"],
    metrics: [
      { value: "30", suffix: "M+", label: "TVC views" },
      { value: "163", suffix: "M+", label: "Pan-India viewers" },
      { value: "36", suffix: "M+", label: "Digital impressions" },
    ],
    gallery: [A("proj-insurance-1.jpg"), A("proj-insurance-2.jpg")],
    galleryCaptions: [
      "The ‘Har Wada Mumkin’ platform — TVC and metro takeover with Sachin Tendulkar.",
      "Strategy, reframed as play — the team behind the relaunch.",
    ],
    tagline: "De-Aged. Re-Energised. Future-Ready.",
    intro:
      "Transforming a legacy insurer into a brand built for the modern Indian consumer, without losing the credibility it spent decades earning.",
    body:
      "Ageas carried the authority of an established insurance player, but its identity no longer reflected the expectations of a modern, digitally native audience. The challenge was not simply to refresh the brand, but to de-age and re-energise it without losing credibility. We developed a contemporary visual, sonic and motion system that infused agility and warmth into the brand, creating a cohesive experience across physical, digital and communication touchpoints, and positioning Ageas as an insurer built for today's consumer.",
    results:
      "The transformation came to life most visibly in the 'Har Wada Mumkin' campaign with Sachin Tendulkar, a platform that gave the refreshed brand its clearest expression yet. 30M+ TVC views, 163M+ pan-India viewers, and a digital phase that generated 36M+ impressions: proof that a brand built for today's consumer doesn't just look different, it performs differently too.",
    year: "2025",
    scope: "Brand Identity Transformation, Digital Optimization, Online & Offline Growth",
    industry: "Life Insurance",
    status: "Live project",
    preview: "#",
  },
  {
    slug: "tom-benz",
    name: "Tom Benz",
    card: A("proj-tombenz-cover.jpg"),
    cover: A("proj-tombenz-cover.jpg"),
    gallery: [A("proj-tombenz-1.jpg"), A("proj-tombenz-2.jpg")],
    galleryCaptions: [
      "The brand world in the wild: HORECA, retail, merchandise and home delivery.",
      "Anchored in the essence of the wine, from vineyard to table.",
    ],
    tagline: "Bottled for the free-spirited.",
    intro:
      "Taking Tom Benz from a boutique wine to a lifestyle-driven brand ready to scale across the UK market.",
    body:
      "Tom Benz was ready to move beyond being a boutique wine with a loyal following and step into the UK market as a lifestyle-driven brand with a strong point of view. The ambition was to craft a brand playbook that could guide this expansion, preserving the brand's quiet confidence and European charm while building relevance with a new, discerning audience. We defined Tom Benz's narrative, tone of voice, identity usage, and an ecosystem of brand experiences that extend far beyond the label, building a cohesive brand world that flexes across retail, digital, and cultural spaces.",
    results:
      "We took Tom Benz from a two-dimensional label to a rich, multi-layered brand universe built for scale and storytelling. Anchored in the essence of the wine, we developed a storyline that captures its quiet confidence, German heritage, and modern spirit. That narrative became the foundation for a brand book defining everything from tone of voice to visual identity, and a rollout toolkit that made the brand market-ready across retail, wholesale, HORECA and communications. What began as a label became a living brand world, ready to speak, flex, and grow wherever it goes.",
    year: "2025",
    scope: "Brand Identity Design, Brand Voice & Messaging, Brand Evolution & Stewardship, Personality Definition, Brand Playbook",
    industry: "Wine & Spirits",
    status: "Live project",
    preview: "#",
  },
  {
    slug: "ev-player",
    name: "TATA EV",
    card: A("proj-ev-cover.jpg"),
    cover: A("proj-ev-cover.jpg"),
    metrics: [
      { value: "36", suffix: "M", prefix: "$", label: "USD savings delivered over a 7-month engagement." },
      { value: "104", suffix: "%", label: "Increase in potential audiences reached on digital." },
      { value: "58", suffix: "%", label: "Increase in search clicks at a pan-India level." },
    ],
    gallery: [A("proj-ev-1.jpg"), A("proj-ev-2.jpg")],
    tagline:
      "Unlocked $30M in procurement efficiencies while redefining the marketing playbook for a leading EV player.",
    intro:
      "Bringing spend intelligence, data strategy and structural rigour to a high-velocity brand scaling fast.",
    body:
      "A leading EV player needed more than a creative partner, they needed a thinking partner embedded inside the system. We audited, restructured and future-proofed their marketing operations from the ground up: procurement efficiencies, content at scale blueprinting, digital-first D2C thinking and end-to-end martech transformation. Every lever was pulled with a single mandate, deliver measurable value at pace.",
    results:
      "The outcome wasn't just a leaner operation, it was a future-proofed marketing architecture built to compound value over time. $36M in USD savings over seven months. A 104% increase in digital audiences reached. A 58% uplift in pan-India search clicks. Numbers that speak to what happens when commercial rigour and creative intelligence work from the same playbook.",
    year: "2025",
    scope: "Innovation Workshopping, CX Audit & Strategy, Data Strategy Frameworks, Martech Transformation",
    industry: "Electric Vehicles",
    status: "Live project",
    preview: "#",
  },
  {
    slug: "footwear-brand",
    name: "Bata",
    card: A("proj-footwear-cover.jpg"),
    cover: A("proj-footwear-cover.jpg"),
    metrics: [
      { value: "30", suffix: "%", label: "Cost improvement in CAC." },
    ],
    gallery: [A("proj-footwear-1.jpg"), A("proj-footwear-2.jpg")],
    tagline: "Transformed the media strategy for India's favourite footwear brand.",
    intro:
      "Repositioning a comfort-first legacy brand toward a younger, style-driven demographic through new-age channels and content-to-commerce thinking.",
    body:
      "Bata, known for its comfort and formal footwear, faced a challenge in shedding its perception as a brand for older consumers. With an average consumer age of 30–35 years, the goal was to lower this to 25–30 years, appealing to a younger, style-driven demographic. The brand needed to elevate its equity around casual and sneaker footwear while leveraging new-age marketing channels to connect with this younger cohort. We built previously unexplored content-to-commerce strategies into the marketing mix.",
    results:
      "The media mix was rebuilt from the ground up, integrating influencer ecosystems, social-first content formats, and performance channels that simply hadn't been part of Bata's playbook before. The goal wasn't just to reach a younger audience; it was to earn their attention at the exact moment they were forming their footwear preferences for life. A 30% improvement in CAC was the first signal that the repositioning was landing.",
    year: "2024",
    scope: "Partnership Transformation, Ongoing Media Optimisation, Business Transformation",
    industry: "Footwear",
    status: "Live project",
    preview: "#",
  },
  {
    slug: "pan-asian-restaurant",
    name: "FOO",
    card: A("proj-foo-cover.jpg"),
    cover: A("proj-foo-cover.jpg"),
    metrics: [
      { value: "600", suffix: "%", label: "Increase in organic traffic through targeted paid campaigns." },
      { value: "10", suffix: "%", label: "Month-on-month increase in footfalls." },
    ],
    gallery: [A("proj-foo-2.jpg"), A("proj-foo-1.jpg")],
    galleryVideos: ["/videos/foo.mp4", undefined],
    galleryCaptions: [
      "Mapped a digital-first touchpoint strategy spanning Search, Social, Performance Marketing, and E-commerce for a leading Pan-India restaurant brand.",
      "The FOO brand world, from ramen to fresh brew.",
    ],
    tagline:
      "Consolidating five fragmented agency relationships into one accountable, performance-linked partnership with a unified national narrative.",
    intro: "Resetting the PR story for India's leading pan-Asian restaurant.",
    body:
      "Foo's PR was scattered across 5 micro-market agencies, speaking fragmented stories, overlapping fees, no single owner. With the restaurant growing at scale across different markets, we are managing an India-fit pitch to appoint one accountable partner for Foo, resetting scopes, rates, and wiring in pay-for-performance. The outcome: a unified national narrative with local agility and a cleaner, leaner PR spend.",
    results:
      "The larger ambition goes well beyond cost efficiency. Foo is a brand with genuine cultural cachet, an expanding footprint, and a growth story still being written. The right PR partner, scoped clearly, incentivised correctly, and aligned to business outcomes, won't just amplify that story. They'll help shape it.",
    year: "2025",
    scope: "Digital Media Planning & Buying, SEO, Programmatic, E-commerce",
    industry: "Food & Beverage",
    status: "Live project",
    preview: "#",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
