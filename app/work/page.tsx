import type { Metadata } from "next";
import { projects } from "@/content/data";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Computer-vision and ML systems built by Nitesh Saini — detection, segmentation, and retrieval pipelines shipped to production.",
};

export default function WorkPage() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-16">
      <h1 className="text-3xl font-semibold tracking-tightest2 mb-2">Work</h1>
      <p className="text-graphite max-w-xl mb-10">
        System design, metrics, and tradeoffs behind each build.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
