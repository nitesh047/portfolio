import type { Metadata } from "next";
import { publications } from "@/content/data";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Peer-reviewed datasets and papers by Nitesh Saini, including Nature Scientific Data and NeurIPS.",
};

const statusLabel: Record<string, string> = {
  published: "published",
  submitted: "under review",
  "in-prep": "in preparation",
};

export default function PublicationsPage() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-16">
      <h1 className="text-3xl font-semibold tracking-tightest2 mb-2">
        Publications
      </h1>
      <p className="text-graphite max-w-xl mb-10">
        Dataset and evaluation work, peer-reviewed and in progress.
      </p>

      <ul className="divide-y hairline border-y hairline">
        {publications.map((pub) => (
          <li
            key={pub.title}
            className="bracket-frame py-6 grid md:grid-cols-[1fr_auto] gap-3 md:items-center px-2"
          >
            <span className="bracket-tr" />
            <span className="bracket-br" />
            <div>
              <h2 className="text-ink font-medium leading-snug max-w-2xl">
                {pub.title}
              </h2>
              <p className="eyebrow mt-1.5 text-signal">{pub.venue}</p>
            </div>
            <div className="flex md:flex-col md:items-end gap-2 md:gap-1">
              <span className="eyebrow">{pub.year}</span>
              <span className="eyebrow">{statusLabel[pub.status]}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
