export const A = (f: string) => `/assets/${f}`;

export const social = {
  email: "hello@glassbox.io",
  mailto: "mailto:hello@glassbox.io",
  behance: "https://www.behance.net/",
  dribbble: "https://dribbble.com/",
  x: "https://x.com/",
};

export const navLinks = [
  { label: "Works", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    no: "_001",
    title: "Branding",
    desc: "We craft logos and brand systems that leave a lasting impression.",
  },
  {
    no: "_002",
    title: "Development",
    desc: "Beautiful and functional websites built with purpose and precision.",
  },
  {
    no: "_003",
    title: "SEO Optimization",
    desc: "Get found faster with tailored SEO strategies backed by real data.",
  },
  {
    no: "_004",
    title: "Social Media",
    desc: "We plan, post, and grow your brand across every platform with purpose.",
  },
  {
    no: "_005",
    title: "AI Apps",
    desc: "Get purpose-built AI applications that combine precision with maximum ROI.",
  },
];

export const stats = [
  { value: "3", suffix: "m+", label: "Capital raised by brands we helped out." },
  { value: "289", suffix: "", label: "Brands launched through our creative process." },
  { value: "56", suffix: "", label: "Awards recognizing our branding excellence." },
  { value: "97", suffix: "%", label: "Client satisfaction rate across all delivered work." },
];

export const testimonials = [
  {
    quote:
      "Working with Glassbox felt like hiring a creative greenhouse for our ideas. Everything grew faster and brighter than we imagined.",
    name: "Sarah Conor",
    role: "Founder, Clonify",
    img: A("yN8oP8ZViEml2iTJPEeku2zEM.jpg"),
  },
  {
    quote:
      "Working with Glassbox was a game-changer. They didn’t just design our brand — they captured its soul. Everything feels elevated, intentional, and totally us.",
    name: "Bruce Lee",
    role: "Design Director, Maiz",
    img: A("UhttJHgYv5v9K5nOB1SgfoSJNaE.jpg"),
  },
  {
    quote:
      "From concept to launch, the Glassbox team delivered with clarity, creativity, and style. We’ve never looked more professional — or more ourselves.",
    name: "John Headphone",
    role: "UFO, Marcom",
    img: A("j1bAxPZv9KXkSAWes0FMzAgWh50.jpg"),
  },
];

export const faqs = [
  {
    q: "What’s included in a the monthly package?",
    a: "Each monthly package includes a set number of design or development hours, dedicated project management, weekly updates, and priority support. We tailor it to fit your needs — whether that’s ongoing branding, web updates, or new creative assets.",
  },
  {
    q: "How long does a project usually take?",
    a: "Timelines depend on the scope, but most branding projects take 2–3 weeks, and full website builds range from 3–6 weeks. We’ll always give you a clear timeline upfront — and stick to it.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes — we offer flexible retainers and care plans after launch, covering everything from small content tweaks and performance monitoring to ongoing design and development support.",
  },
  {
    q: "Can I hire you for just a logo or one-off design?",
    a: "Yes — we take on one-off projects like logos, pitch decks, or landing pages. If it’s a good fit, we’re happy to jump in and help.",
  },
  {
    q: "What platforms do you build websites on?",
    a: "We primarily work with Framer, Webflow, and Shopify — but we’re flexible depending on your project needs and tech stack.",
  },
  {
    q: "How do payments work?",
    a: "For fixed-scope projects, we split payments into 50% upfront and 50% upon completion. For monthly retainers, payments are made at the start of each billing cycle. We accept most major payment methods.",
  },
  {
    q: "What if I’m not happy with the first concept?",
    a: "No problem — that’s part of the process. We include multiple rounds of revisions to ensure you’re completely happy with the final result. Your feedback helps us shape it just right.",
  },
];

// Only 3 genuine portrait images exist in /assets; they are arranged so the
// same photo never sits next to or directly above/below itself in the 2-col grid.
export const team = [
  { name: "Bruce Lee", role: "Creative Director", img: A("UhttJHgYv5v9K5nOB1SgfoSJNaE.jpg") },
  { name: "Sarah Conor", role: "Founder", img: A("yN8oP8ZViEml2iTJPEeku2zEM.jpg") },
  { name: "Sarah Silverman", role: "Brand Voice Lead", img: A("j1bAxPZv9KXkSAWes0FMzAgWh50.jpg") },
  { name: "Carl Sagan", role: "Project Manager", img: A("UhttJHgYv5v9K5nOB1SgfoSJNaE.jpg") },
  { name: "Taro Sakamoto", role: "UFO", img: A("yN8oP8ZViEml2iTJPEeku2zEM.jpg") },
  { name: "Frodo Baggins", role: "NGO", img: A("j1bAxPZv9KXkSAWes0FMzAgWh50.jpg") },
];

export const awards = [
  { org: "Awwwards", title: "Site of the Day", date: "Apr 2025" },
  { org: "CSS Design", title: "Best UX, UI & Innovation", date: "Mar 2025" },
  { org: "Webby", title: "Best Visual Design", date: "Oct 2024" },
  { org: "Framer", title: "Best Portfolio Website", date: "Aug 2024" },
  { org: "Figma", title: "Creator of the Year", date: "Jul 2024" },
  { org: "Creativepool", title: "People’s Choice Gold", date: "May 2024" },
  { org: "Communication Arts", title: "Web Excellence", date: "Feb 2024" },
  { org: "Awwwards", title: "Honorable Mention", date: "Oct 2023" },
  { org: "Indigo", title: "Gold for Branding", date: "Nov 2023" },
  { org: "Clutch", title: "Top Creative Agency", date: "Sep 2023" },
];
