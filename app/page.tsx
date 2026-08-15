import type { Metadata } from "next";
import Link from "next/link";
import { projects, publications } from "@/content/data";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const featured = projects.filter(
    (p) => p.slug === "monodbh" || p.slug === "barkvisionai"
  );

  return (
    <>
      {/* Hero */}
      <section className="max-w-content mx-auto px-6 md:px-10 pt-10 sm:pt-14 pb-16">
        <div className="max-w-[980px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.02em] leading-[1.15] sm:leading-[1.1] max-w-3xl">
            I build AI systems for computer vision, geospatial intelligence,
            and data infrastructure.
          </h1>

          <p className="mt-5 sm:mt-6 max-w-2xl text-graphite text-base sm:text-lg leading-relaxed">
            IIT Delhi &rsquo;23. Technology &amp; AI Lead at Bharti Institute of Public Policy,
            ISB Hyderabad. I build end-to-end pipelines that collect,
            structure, and analyze data from the physical world — turning
            raw sensor and image data into production-grade AI systems and
            inference across cloud and on-prem infrastructure.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-ink text-bg px-5 sm:px-[22px] py-2.5 sm:py-3 rounded-lg text-sm sm:text-[15px] font-semibold hover:bg-signal transition-colors"
            >
              View work
              <span className="text-[13px]">→</span>
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 border hairline px-5 sm:px-[22px] py-2.5 sm:py-3 rounded-lg text-sm sm:text-[15px] font-semibold text-ink hover:border-signal hover:text-signal transition-colors"
            >
              Resume
            </Link>
          </div>

          <div className="mt-10 sm:mt-14 flex flex-wrap gap-x-8 gap-y-6 sm:gap-12 pt-6 sm:pt-8 border-t hairline">
            {[
              { value: "Technology & AI Lead", label: "BIPP, ISB", accent: true },
              { value: "nCount", label: "AI + Geospatial Systems" },
              { value: "Nature Scientific Data", label: "Research Publication" },
              { value: "IIT Delhi '23", label: "B.Tech. · Engineering" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className={`text-base sm:text-lg font-extrabold tracking-[-0.02em] ${
                    stat.accent ? "text-signal" : "text-ink"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-[13px] text-graphite mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
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
