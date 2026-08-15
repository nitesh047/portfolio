import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/data";
import StatChip from "@/components/StatChip";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.oneLiner,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} — Nitesh Saini`,
      description: project.oneLiner,
    },
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <article className="max-w-content mx-auto px-6 md:px-10 py-16">
      <Link href="/work" className="eyebrow hover:text-signal transition-colors">
        ← work
      </Link>

      <h1 className="mt-6 text-4xl font-semibold tracking-tightest2">
        {project.name}
      </h1>
      <p className="mt-3 text-graphite text-lg max-w-2xl">
        {project.oneLiner}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.metrics.map((m) => (
          <StatChip key={m.label} label={m.label} value={m.value} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-xs font-mono px-2 py-1 rounded-sm bg-surface text-graphite border hairline"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-10 pt-10 border-t hairline prose-content max-w-2xl">
        <p className="text-ink leading-relaxed">{project.summary}</p>
        {project.status === "in-progress" && (
          <p className="mt-4 eyebrow text-signal">
            full case study in progress — architecture, dataset notes, and
            evaluation details to follow
          </p>
        )}
      </div>
    </article>
  );
}
