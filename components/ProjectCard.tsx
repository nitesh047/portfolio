import Link from "next/link";
import type { Project } from "@/content/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="bracket-frame group block bg-surface border hairline rounded-sm p-6 transition-colors hover:border-signal"
    >
      <span className="bracket-tr" />
      <span className="bracket-br" />
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight text-ink group-hover:text-signal transition-colors">
          {project.name}
        </h3>
        {project.status === "in-progress" && (
          <span className="eyebrow shrink-0 text-graphite">draft</span>
        )}
      </div>
      <p className="mt-2 text-graphite text-sm leading-relaxed">
        {project.oneLiner}
      </p>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
        {project.metrics.map((m) => (
          <div key={m.label} className="flex items-baseline gap-1.5">
            <span className="stat-value text-sm text-signal">{m.value}</span>
            <span className="eyebrow">{m.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-xs font-mono px-2 py-1 rounded-sm bg-bg text-graphite border hairline"
          >
            {s}
          </span>
        ))}
      </div>
    </Link>
  );
}
