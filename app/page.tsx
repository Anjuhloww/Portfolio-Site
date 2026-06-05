import ScrollReveal from "./ScrollReveal";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <ScrollReveal>
        <section className="max-w-[800px] mx-auto px-6 pt-24 pb-16 md:pt-36 md:pb-24">
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-5xl md:text-7xl font-normal tracking-tight leading-tight">
            Angelo Sacco
          </h1>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/angelo-sacco-as/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:opacity-70"
              style={{ color: "var(--color-accent)" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="mailto:angelo.sacco2002@gmail.com"
              aria-label="Email"
              className="transition-colors hover:opacity-70"
              style={{ color: "var(--color-accent)" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* About Section */}
      <ScrollReveal>
        <section className="max-w-[800px] mx-auto px-6 pb-16 md:pb-24">
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-2xl md:text-3xl mb-4">
            About
          </h2>
          <div
            className="max-w-[600px] space-y-4 text-base leading-relaxed"
            style={{ color: "var(--color-muted)" }}
          >
            <p>
              I&apos;m an early-career professional with a background in
              Economics, an MBA, and a Master&apos;s in Health Administration.
              I&apos;m drawn to the messy, high-stakes space where healthcare
              meets finance, and I believe better tools can make it more
              transparent and accessible. The projects below sit at the
              intersection of my professional and personal interests — each
              represents something I&apos;ve studied, questioned, or wanted to
              exist. Thanks for checking out my work.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Projects Section */}
      <ScrollReveal>
        <section className="max-w-[800px] mx-auto px-6 pb-16 md:pb-24">
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-2xl md:text-3xl mb-8">
            Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div
              className="block rounded-xl border"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-card-bg)",
              }}
            >
              <div
                className="flex items-center justify-center rounded-t-xl h-48 text-sm"
                style={{
                  backgroundColor: "var(--color-tag-bg)",
                  color: "var(--color-muted)",
                }}
              >
                Preview coming soon
              </div>
              <div className="p-5">
                <p
                  className="font-[family-name:var(--font-instrument-serif)] text-xl"
                  style={{ color: "var(--color-muted)" }}
                >
                  coming soon...
                </p>
              </div>
            </div>

            <div
              className="block rounded-xl border"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-card-bg)",
              }}
            >
              <div
                className="flex items-center justify-center rounded-t-xl h-48 text-sm"
                style={{
                  backgroundColor: "var(--color-tag-bg)",
                  color: "var(--color-muted)",
                }}
              >
                Preview coming soon
              </div>
              <div className="p-5">
                <p
                  className="font-[family-name:var(--font-instrument-serif)] text-xl"
                  style={{ color: "var(--color-muted)" }}
                >
                  coming soon...
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Background Section */}
      <ScrollReveal>
        <section className="max-w-[800px] mx-auto px-6 pb-16 md:pb-24">
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-2xl md:text-3xl mb-6">
            Background
          </h2>
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
            <div className="flex items-start gap-3">
              <div
                className="w-2 h-2 rounded-full mt-2 shrink-0"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
              <div>
                <p className="font-medium text-sm">B.S. Economics</p>
                <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                  University of Scranton · 2020–2024
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div
                className="w-2 h-2 rounded-full mt-2 shrink-0"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
              <div>
                <p className="font-medium text-sm">MBA</p>
                <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                  University of Scranton · 2024–2026
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div
                className="w-2 h-2 rounded-full mt-2 shrink-0"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
              <div>
                <p className="font-medium text-sm">MHA</p>
                <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                  University of Scranton · 2024–2026
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <ScrollReveal>
        <footer
          className="max-w-[800px] mx-auto px-6 pb-12 pt-8 border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm"
            style={{ color: "var(--color-muted)" }}
          >
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/angelo-sacco-as/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:opacity-70"
                style={{ color: "var(--color-accent)" }}
              >
                LinkedIn
              </a>
              <a
                href="mailto:angelo.sacco2002@gmail.com"
                className="transition-colors hover:opacity-70"
                style={{ color: "var(--color-accent)" }}
              >
                Email
              </a>
            </div>
            <p>&copy; 2026</p>
          </div>
        </footer>
      </ScrollReveal>
    </main>
  );
}
