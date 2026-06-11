import type { Metadata } from "next";
import { ProjectsList } from "@/components/sections/ProjectsList";

export const metadata: Metadata = {
  title: "Projects - Glassbox",
  description: "Selected work from Glassbox, a creative studio.",
};

export default function ProjectsPage() {
  return <ProjectsList />;
}
