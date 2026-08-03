import Link from "next/link";
import { nav } from "@/content/data";

export default function SiteHeader() {
  return (
    <header className="border-b hairline">
      <div className="max-w-content mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-ink hover:text-signal transition-colors"
        >
          nitesh<span className="text-signal">.</span>saini
        </Link>
        <nav className="flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="eyebrow px-3 py-2 rounded hover:text-ink hover:bg-signalDim transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
