import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download the resume of Nitesh Saini, AI/ML engineer.",
};

export default function ResumePage() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-16">
      <h1 className="text-3xl font-semibold tracking-tightest2 mb-6">
        Resume
      </h1>
      <a
        href="/resume.pdf"
        download
        className="inline-flex items-center gap-2 bg-ink text-bg px-5 py-3 rounded-sm text-sm font-medium hover:bg-signal transition-colors"
      >
        Download PDF
      </a>
    </section>
  );
}
