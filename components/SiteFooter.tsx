export default function SiteFooter() {
  return (
    <footer className="border-t hairline mt-24">
      <div className="max-w-content mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="eyebrow">
          © {new Date().getFullYear()} Nitesh Saini — Hyderabad, India
        </p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:hello@niteshsaini.com"
            className="eyebrow hover:text-signal transition-colors"
          >
            email
          </a>
          <a
            href="https://github.com"
            className="eyebrow hover:text-signal transition-colors"
          >
            github
          </a>
          <a
            href="https://linkedin.com"
            className="eyebrow hover:text-signal transition-colors"
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
