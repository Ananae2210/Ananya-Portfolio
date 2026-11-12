export const site = {
  name: "Ananya Asthana",
  shortName: "Ananya",
  role: "UI/UX & Visual Design",
  email: "asthanaananya@gmail.com",
  linkedin: "https://www.linkedin.com/in/ananya-asthana-1a43391bb/",
  // No hosted resume yet. Set a URL (e.g. "/ananya-asthana-resume.pdf") to show the "My Resume" buttons.
  resume: "" as string,
  location: "Ghaziabad, India",
  currently: "Open to UI/UX and product design roles",
  approach: "Clear, consistent interfaces for data-heavy healthcare products.",
  description:
    "Ananya Asthana designs clear, consistent interfaces for data-heavy healthcare and AI products. UI/UX and visual design portfolio.",
};

export const nav = [
  { label: "Home", href: "/", key: "home" },
  { label: "Work", href: "/work/", key: "work" },
  { label: "AI × Design", href: "/ai-x-design/", key: "ai" },
  { label: "About", href: "/#about", key: "about" },
  { label: "Contact", href: "#contact", key: "contact" },
] as const;

export type NavKey = (typeof nav)[number]["key"];
