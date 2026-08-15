import { person } from "@/content/data";

export default function SiteFooter() {
  return (
    <footer className="border-t hairline mt-24">
      <div className="max-w-content mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="eyebrow">
          © {new Date().getFullYear()} Nitesh Saini — Hyderabad, India
        </p>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${person.email}`}
            className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-signal hover:text-signalDeep transition-colors"
          >
            email
          </a>
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-signal hover:text-signalDeep transition-colors"
          >
            github
          </a>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-signal hover:text-signalDeep transition-colors"
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
