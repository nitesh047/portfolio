import Link from "next/link";
import { nav } from "@/content/data";

export default function SiteHeader() {
  return (
    <header className="border-b hairline">
      <div className="max-w-content mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-[15px] font-bold tracking-[-0.01em] text-ink hover:text-signal transition-colors"
        >
          nitesh.saini
        </Link>
        <nav className="flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-graphite hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
