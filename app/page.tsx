import Link from "next/link";
import { projects, publications } from "@/content/data";
import StatChip from "@/components/StatChip";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  const featured = projects.filter(
    (p) => p.slug === "monodbh" || p.slug === "barkvisionai"
  );

  return (
    <>
      {/* Hero — framed as a system status readout */}
      <section className="max-w-content mx-auto px-6 md:px-10 pt-20 pb-16">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-signal" />
          <span className="eyebrow text-signal">open to senior ai/ml roles</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tightest2 leading-[1.05] max-w-3xl">
          I ship computer-vision and RAG systems that hold up in production.
        </h1>

        <p className="mt-6 max-w-2xl text-graphite text-lg leading-relaxed">
          Lead of Technology &amp; AI at the Bharti Institute of Public Policy,
          ISB. IIT Delhi, 2023. I design detection, segmentation, and
          retrieval pipelines end-to-end — from data collection to
          production inference on AWS.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-ink text-bg px-5 py-3 rounded-sm text-sm font-medium hover:bg-signal transition-colors"
          >
            View work
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 border hairline px-5 py-3 rounded-sm text-sm font-medium text-ink hover:border-signal hover:text-signal transition-colors"
          >
            Resume
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
          <StatChip label="mask mAP50" value="0.953" />
          <StatChip label="dataset images" value="156,001" />
          <StatChip label="publication" value="Nature Sci. Data" />
          <StatChip label="grad year" value="IIT Delhi '23" />
        </div>
      </section>

      {/* Selected work */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-16 border-t hairline">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="eyebrow">// selected work</h2>
          <Link
            href="/work"
            className="eyebrow hover:text-signal transition-colors"
          >
            view all →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-16 border-t hairline">
        <h2 className="eyebrow mb-8">// stack</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-ink mb-3">
              Vision &amp; ML
            </h3>
            <ul className="space-y-1.5 text-graphite text-sm font-mono">
              <li>YOLOv8</li>
              <li>Grounding DINO</li>
              <li>SAM2</li>
              <li>RAG / pgvector</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-ink mb-3">
              Infrastructure
            </h3>
            <ul className="space-y-1.5 text-graphite text-sm font-mono">
              <li>AWS EC2</li>
              <li>AWS Lambda</li>
              <li>AWS S3</li>
              <li>AWS RDS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-ink mb-3">
              Domains
            </h3>
            <ul className="space-y-1.5 text-graphite text-sm font-mono">
              <li>Geospatial pipelines</li>
              <li>Instance segmentation</li>
              <li>Retrieval-augmented gen.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Publications teaser */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-16 border-t hairline">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="eyebrow">// publications</h2>
          <Link
            href="/publications"
            className="eyebrow hover:text-signal transition-colors"
          >
            view all →
          </Link>
        </div>
        <ul className="divide-y hairline border-y hairline">
          {publications.map((pub) => (
            <li
              key={pub.title}
              className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-2"
            >
              <span className="text-ink text-sm leading-snug max-w-2xl">
                {pub.title}
              </span>
              <div className="flex items-center gap-3 shrink-0">
                <span className="eyebrow text-signal">{pub.venue}</span>
                <span className="eyebrow">{pub.year}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
