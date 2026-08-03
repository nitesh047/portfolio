import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nitesh Saini — AI/ML engineer, IIT Delhi 2023, Lead of Technology & AI at the Bharti Institute of Public Policy, ISB.",
};

export default function AboutPage() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-16">
      <h1 className="text-3xl font-semibold tracking-tightest2 mb-8">
        About
      </h1>
      <div className="max-w-2xl space-y-5 text-ink leading-relaxed">
        <p>
          I&apos;m an engineer who builds computer-vision and retrieval
          systems — from raw data collection through to production
          inference. My work spans instance segmentation (YOLOv8,
          Grounding DINO, SAM2), geospatial pipelines, and RAG systems
          backed by pgvector, deployed on AWS.
        </p>
        <p>
          I graduated from IIT Delhi in 2023 and currently lead Technology
          &amp; AI at the Bharti Institute of Public Policy, Indian School
          of Business, where I design and ship the ML systems behind the
          institute&apos;s research infrastructure.
        </p>
        <p>
          One of my datasets — 156,001 images built for bark and
          tree-species recognition — is published in{" "}
          <em>Nature Scientific Data</em>. I have further work on GNSS
          positioning targeting <em>GPS Solutions</em>, and an evaluations
          &amp; datasets submission at NeurIPS 2026.
        </p>
        <p>
          I&apos;m currently looking at senior AI/ML engineering and AI
          leadership roles at product companies and GCCs.
        </p>
      </div>
    </section>
  );
}
