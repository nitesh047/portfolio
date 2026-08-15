"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav } from "@/content/data";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="border-b hairline relative z-50">
      <div className="max-w-content mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-[15px] font-bold tracking-[-0.01em] text-ink hover:text-signal transition-colors"
        >
          nitesh.saini
        </Link>

        <nav className="hidden md:flex items-center gap-8">
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

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="md:hidden -mr-2 inline-flex h-9 w-9 items-center justify-center text-ink"
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="0" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="0" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        style={{ backgroundColor: "rgba(18, 17, 15, 0.45)" }}
        className={`md:hidden fixed inset-0 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-in drawer */}
      <aside
        className={`md:hidden fixed inset-y-0 right-0 w-72 max-w-[80%] bg-bg border-l hairline transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="h-16 px-6 flex items-center justify-end border-b hairline">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="-mr-2 inline-flex h-9 w-9 items-center justify-center text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <line x1="2" y1="2" x2="14" y2="14" />
              <line x1="14" y1="2" x2="2" y2="14" />
            </svg>
          </button>
        </div>
        <nav className="px-6 py-6 flex flex-col gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-graphite hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </header>
  );
}
