
import Link from "next/link";

async function getGithubStars(): Promise<number | null> {
  const api = process.env.API;
  if (!api) return null;

  try {
    const response = await fetch(
      api,
      {
        next: { revalidate: 300 },
      }
    );

    if (!response.ok) return null;

    const data = await response.json();
    return data.stargazers_count;
  } catch {
    return null;
  }
}

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-5 w-5"
  >
    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-4 w-4 transition-transform group-hover:translate-x-1"
    aria-hidden="true"
  >
    <path d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

export default async function Home() {
  const stars = await getGithubStars();

  return (
    <main className="hero-shell relative flex min-h-screen flex-col overflow-hidden">
      {/* Background effects */}
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-grid" />

      {/* Navbar */}
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 md:px-10 gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="brand-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
              <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
            </svg>
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            LinkTo<span className="text-emerald-400">MP4</span>
          </span>
        </Link>

        <a
          href="https://github.com/Hqko01/Next"
          target="_blank"
          rel="noreferrer"
          className="github-nav font-[montserrat] font-semibold"
        >
          <GithubIcon />
          <span>Star on GitHub</span>

          {stars !== null && (
            <span className="github-stars">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-3.5 w-3.5 text-amber-400"
              >
                <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8l-6.2 3.3L7 14.2 2 9.3l6.9-1L12 2Z" />
              </svg>
              <span>{stars}</span>
            </span>
          )}
        </a>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 pb-24 pt-16 text-center md:pt-20">
        <div className="status-pill animate-fade-in">
          <span className="status-dot" />
          OPEN SOURCE · BUILT FOR EVERYONE
        </div>

        <h1 className="hero-title mt-8 max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[84px]">
          Your video.
          <br />
          <span className="gradient-text">One link away.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
          Turn supported video links into downloadable files.
          A simple, open-source way to find available formats
          and quality options.
        </p>

        {/* URL input preview */}
        <div className="url-card mt-11 w-full max-w-2xl p-2">
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="flex min-w-0 flex-1 items-center gap-3 px-4 py-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5 shrink-0 text-zinc-500"
                aria-hidden="true"
              >
                <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
                <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
              </svg>
              <span className="truncate text-left text-sm text-zinc-500 sm:text-base">
                Paste your video page URL here...
              </span>
            </div>

            <Link
              href="/download"
              className="group flex shrink-0 items-center justify-center gap-3 rounded-xl bg-emerald-400 px-6 py-4 font-semibold text-zinc-950 transition hover:bg-emerald-300"
            >
              Get started
              <ArrowIcon />
            </Link>
          </div>
          <p className="px-4 pb-2 pt-3 text-left text-xs text-zinc-500">
            Works with supported sources and downloadable media.
          </p>
        </div>

        {/* Features */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-zinc-400">
          <span className="flex items-center gap-2">
            <span className="feature-check">✓</span>
            Free & open source
          </span>
          <span className="flex items-center gap-2">
            <span className="feature-check">✓</span>
            Simple workflow
          </span>
          <span className="flex items-center gap-2">
            <span className="feature-check">✓</span>
            No account required
          </span>
        </div>

        {/* Download preview */}
        <div className="preview-card mt-16 w-full max-w-xl text-left">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-sm font-medium text-zinc-200">
                Available formats
              </span>
            </div>
            <span className="text-xs text-zinc-500">PREVIEW</span>
          </div>

          <div className="space-y-3 p-4 sm:p-5">
            {[
              { quality: "1080p", detail: "Full HD", size: "MP4" },
              { quality: "720p", detail: "HD", size: "MP4" },
              { quality: "480p", detail: "SD", size: "MP4" },
            ].map((item) => (
              <div
                key={item.quality}
                className="format-row flex items-center justify-between gap-3 rounded-xl border border-white/6 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="format-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="3" />
                      <path d="m10 9 5 3-5 3z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-medium text-zinc-200">
                      {item.quality}
                    </p>
                    <p className="mt-0.5 text-xs text-zinc-500">
                      {item.detail}
                    </p>
                  </div>
                </div>
                <span className="rounded-md border border-white/10 px-2 py-1 text-xs text-zinc-400">
                  {item.size}
                </span>
              </div>
            ))}
          </div>

          <p className="px-5 pb-4 text-xs leading-5 text-zinc-500">
            Illustrative preview. Actual formats depend on the source.
          </p>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/6 px-6 py-6 text-center text-xs text-zinc-500">
        Open source, made with care. © 2026 LinkToMP4
      </footer>
    </main>
  );
}
