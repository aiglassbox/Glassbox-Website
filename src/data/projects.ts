import { A } from "./site";

export type Project = {
  slug: string;
  name: string;
  card: string;
  cover: string;
  gallery: string[];
  tagline: string;
  intro: string;
  body: string;
  results: string;
  year: string;
  scope: string;
  timeline: string;
  status: string;
  preview: string;
};

export const projects: Project[] = [
  {
    slug: "insurance",
    name: "Insurance Player",
    card: A("73igyKZXdSW8DTMpUdfroZgsw.jpg"),
    cover: A("4DYyWWmV14qFdgXQ9ckzO76htw4.png"),
    gallery: [A("1CmAReQl2fVgqq5LiHBxZ4XvNAc.png"), A("X8a7igKqE2919YI7cEjAGm4VSF4.png")],
    tagline: "De-Aged. Re-Energised. Future-Ready.",
    intro:
      "Transforming a legacy insurer into a brand built for the modern Indian consumer — without losing the credibility it spent decades earning.",
    body:
      "Ageas carried the authority of an established insurance player, but its identity no longer reflected the expectations of a modern, digitally native audience. The challenge was not simply to refresh the brand, but to de-age and re-energise it without losing credibility. We developed a contemporary visual, sonic and motion system that infused agility and warmth into the brand — creating a cohesive experience across physical, digital and communication touchpoints, and positioning Ageas as an insurer built for today's consumer.",
    results:
      "The transformation came to life most visibly in the 'Har Wada Mumkin' campaign with Sachin Tendulkar — a platform that gave the refreshed brand its clearest expression yet. 30M+ TVC views, 163M+ pan-India viewers, and a digital phase that generated 36M+ impressions: proof that a brand built for today's consumer doesn't just look different — it performs differently too.",
    year: "2025",
    scope: "Brand, Motion & Sonic",
    timeline: "16 weeks",
    status: "Live project",
    preview: "#",
  },
  {
    slug: "uk-coffee",
    name: "UK Coffee",
    card: A("8AFDwJazXH9ditYWThksaaP9jYM.jpg"),
    cover: A("BWqMhPBZdO9i3A0Si3UR7ccAIc.png"),
    gallery: [A("LhSWoZOPr8IF6GBO0rpHmLU5Js.png"), A("jvUVqnzFKcbAPtjyunsAtNUkG8.png")],
    tagline:
      "Sharpened a beloved coffee brand to punch harder, speak louder, and move smarter in the competitive UK coffee aisle.",
    intro:
      "Redefining growth strategy for a niche UK flavoured coffee brand with 50+ varieties and a plateau problem.",
    body:
      "In a cluttered UK coffee market, Beanies — known for its 50+ flavoured varieties — had hit a plateau. Its vibrant product world wasn't translating into consumer excitement, and its positioning lacked the sharpness needed to drive trial or loyalty. We redefined Beanies' growth story by building a refreshed, dual-messaging strategy rooted in research-led TOFU and BOFU D2C frameworks. Layered with an AI-powered creative engine, we delivered motion-first, performance-led assets designed to scale across markets — infusing the brand with distinctive tonality, agile operations, and global adaptability.",
    results:
      "The results followed the strategy. Six new listings across major UK grocery and specialty retail chains. Top 5 on Amazon's flavoured coffee category. A 3× improvement in ROAS. Beanies went from a niche favourite coasting on loyalty to a category challenger actively growing its audience — and its shelf presence.",
    year: "2024",
    scope: "Growth Strategy, D2C",
    timeline: "12 weeks",
    status: "Live project",
    preview: "#",
  },
  {
    slug: "ev-player",
    name: "EV Player",
    card: A("gcCOK3eBfHG7P5Zcxtv9TwUq5A.jpg"),
    cover: A("Ol1Zr9rw6cqy5lAX8anUOvC96uQ.png"),
    gallery: [A("x4MGkvtO5s4trjIGm6gPmiPZbY.png"), A("eqtagxNJ6ssw5Mc5AZ1sCtxLOZM.png")],
    tagline:
      "Unlocked $30M in procurement efficiencies while redefining the marketing playbook for a leading EV player.",
    intro:
      "Bringing spend intelligence, data strategy and structural rigour to a high-velocity brand scaling fast.",
    body:
      "A leading EV player needed more than a creative partner — they needed a thinking partner embedded inside the system. We audited, restructured and future-proofed their marketing operations from the ground up: procurement efficiencies, content at scale blueprinting, digital-first D2C thinking and end-to-end martech transformation. Every lever was pulled with a single mandate — deliver measurable value at pace.",
    results:
      "The outcome wasn't just a leaner operation — it was a future-proofed marketing architecture built to compound value over time. $36M in USD savings over seven months. A 104% increase in digital audiences reached. A 58% uplift in pan-India search clicks. Numbers that speak to what happens when commercial rigour and creative intelligence work from the same playbook.",
    year: "2025",
    scope: "Procurement, Martech",
    timeline: "7 months",
    status: "Live project",
    preview: "#",
  },
  {
    slug: "footwear-brand",
    name: "Footwear Brand",
    card: A("eII1CsBFMUv0tWAVY9REnIiw.jpg"),
    cover: A("LVa0XkeTMoQwwLi32BM5vLqrpA.png"),
    gallery: [A("N6ZG2EJ1IQSRAQh7Lh3brLnZK5A.png"), A("OuMUjvmQDEQwLVcTFk6HgmIAyx0.png")],
    tagline: "Transformed the media strategy for India's favourite footwear brand.",
    intro:
      "Repositioning a comfort-first legacy brand toward a younger, style-driven demographic through new-age channels and content-to-commerce thinking.",
    body:
      "Bata, known for its comfort and formal footwear, faced a challenge in shedding its perception as a brand for older consumers. With an average consumer age of 30–35 years, the goal was to lower this to 25–30 years, appealing to a younger, style-driven demographic. The brand needed to elevate its equity around casual and sneaker footwear while leveraging new-age marketing channels to connect with this younger cohort. We built previously unexplored content-to-commerce strategies into the marketing mix.",
    results:
      "The media mix was rebuilt from the ground up — integrating influencer ecosystems, social-first content formats, and performance channels that simply hadn't been part of Bata's playbook before. The goal wasn't just to reach a younger audience; it was to earn their attention at the exact moment they were forming their footwear preferences for life. A 30% improvement in CAC was the first signal that the repositioning was landing.",
    year: "2024",
    scope: "Media Strategy, Influencer",
    timeline: "10 weeks",
    status: "Live project",
    preview: "#",
  },
  {
    slug: "pan-asian-restaurant",
    name: "Pan-Asian Restaurant",
    card: A("HSuCYseGw4ZE1rGvst62AgiKg.jpg"),
    cover: A("jvUVqnzFKcbAPtjyunsAtNUkG8.png"),
    gallery: [A("4DYyWWmV14qFdgXQ9ckzO76htw4.png"), A("BWqMhPBZdO9i3A0Si3UR7ccAIc.png")],
    tagline:
      "Consolidating five fragmented agency relationships into one accountable, performance-linked partnership with a unified national narrative.",
    intro: "Resetting the PR story for India's leading pan-Asian restaurant.",
    body:
      "Foo's PR was scattered across 5 micro-market agencies, speaking fragmented stories, overlapping fees, no single owner. With the restaurant growing at scale across different markets, we are managing an India-fit pitch to appoint one accountable partner for Foo — resetting scopes, rates, and wiring in pay-for-performance. The outcome: a unified national narrative with local agility and a cleaner, leaner PR spend.",
    results:
      "The larger ambition goes well beyond cost efficiency. Foo is a brand with genuine cultural cachet, an expanding footprint, and a growth story still being written. The right PR partner — scoped clearly, incentivised correctly, and aligned to business outcomes — won't just amplify that story. They'll help shape it.",
    year: "2025",
    scope: "PR Consolidation",
    timeline: "Ongoing",
    status: "Live project",
    preview: "#",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
