import DownloaderArea from "@/components/downloaderArea";
import Link from "next/link";

const date = new Date();

async function getGithubStars(): Promise<{ star: number; update: string } | null> {
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

    return { "star": data.stargazers_count, "update": data.updated_at };
  } catch {
    return null;
  }
}

const extractVideo = async (url: string) => {
  const response = await fetch("/api/extract-video", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error ?? "Video bulunamadı.");
  }

  console.log(data.videos);
};

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
  const githubData = await getGithubStars();

  return (
    <main className="hero-shell relative flex min-h-screen flex-col overflow-hidden">
      {/* Background effects */}
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-grid" />

      {/* Navbar */}
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 md:px-10 gap-4 max-[450px]:flex-col max-[450px]:items-center max-[450px]:gap-3">
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

          {githubData !== null && (
            <span className="github-stars">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-3.5 w-3.5 text-amber-400"
              >
                <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8l-6.2 3.3L7 14.2 2 9.3l6.9-1L12 2Z" />
              </svg>
              <span>{githubData.star}</span>
            </span>
          )}
        </a>
      </header>

      {/* Downloader Area */}
      <DownloaderArea />

      <footer className="flex flex-row justify-between max-sm:flex-col max-sm:justify-center max-sm: items-center max-sm:gap-8 relative z-10 border-t border-white/6 px-6 py-6 text-center text-xs text-zinc-500">
        <div className="left flex flex-1 justify-start items-center text-md">
          <p>Last updated: {githubData?.update} | Version: {process.env.VERSION}</p>
        </div>
        <div className="middle flex flex-1 justify-center items-center text-md">
          <p>Open source, made with care. © {date.getFullYear()} LinkToMP4</p>
        </div>
        <div className="right flex flex-1 justify-end items-center">
          <a href="https://liriandev.com" target="_blank" rel="noreferrer" className="font-[tanNimbus] text-lg">
            Liriandev
          </a>
        </div>
      </footer>
    </main>
  );
}
