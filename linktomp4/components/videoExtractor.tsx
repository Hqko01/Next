"use client";

import { useState } from "react";

type VideoExtractorProps = {
    onVideosFound: (videos: string[]) => void;
};

export default function VideoExtractor({ onVideosFound }: VideoExtractorProps) {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [videos, setVideos] = useState<string[]>([]);
    const [error, setError] = useState("");

    async function handleExtract() {
        const trimmedUrl = url.trim();

        if (!trimmedUrl) {
            setError("Lütfen video sayfasının bağlantısını gir.");
            return;
        }

        try {
            const parsedUrl = new URL(trimmedUrl);

            if (!["http:", "https:"].includes(parsedUrl.protocol)) {
                throw new Error("Geçerli bir HTTP veya HTTPS bağlantısı gir.");
            }
        } catch {
            setError("Lütfen geçerli bir internet adresi gir.");
            return;
        }

        setLoading(true);
        setError("");
        setVideos([]);
        onVideosFound([]);

        try {
            const response = await fetch("/api/extract-video", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ url: trimmedUrl }),
            });

            const data = await response.json();

            console.log(data);

            if (!response.ok) {
                throw new Error(data.error || "Video bulunamadı.");
            }

            const extractedVideos: string[] = data.videos ?? [];
            setVideos(extractedVideos);
            onVideosFound(extractedVideos);

            if (!data.videos?.length) {
                setError("Bu sayfada desteklenen bir video bulunamadı.");
            }
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Bir hata oluştu."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full flex flex-row items-center justify-center gap-2">
            <span className="flex flex-row items-center justify-center gap-2 w-full">
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
                <input
                    type="text"
                    placeholder="Paste your video page URL here..."
                    id="url-input"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => {
                        setError("");
                        if (e.key === "Enter") handleExtract();
                    }}
                    className="outline-none w-full h-full px-1 py-2 truncate text-left text-sm text-zinc-500 sm:text-base"
                />
            </span>

            {!error ? <button
                type="button"
                onClick={handleExtract}
                disabled={loading}
                className="cursor-pointer group flex shrink-0 items-center justify-center gap-3 rounded-xl bg-emerald-400 px-4 py-3 max-[450px]:px-3 font-semibold text-zinc-950 transition hover:bg-emerald-300 disabled:cursor-wait disabled:opacity-60"
            >
                {loading ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="currentColor" d="M4 16h4v4H4V16z" className="st0">
                        <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin=".2" calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
                    </path>
                    <path fill="currentColor" d="M10 16h4v4h-4V16z" className="st0">
                        <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin=".4" calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
                    </path>
                    <path fill="currentColor" d="M16 16h4v4h-4V16z" className="st0">
                        <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin=".6" calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
                    </path>
                    <path fill="currentColor" d="M4 10h4v4H4V10z" className="st0">
                        <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin=".8" calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
                    </path>
                    <path fill="currentColor" d="M10 10h4v4h-4V10z" className="st0">
                        <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1" calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
                    </path>
                    <path fill="currentColor" d="M16 10h4v4h-4V10z" className="st0">
                        <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1.2" calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
                    </path>
                    <path fill="currentColor" d="M4 4h4v4H4V4z" className="st0">
                        <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1.4" calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
                    </path>
                    <path fill="currentColor" d="M10 4h4v4h-4V4z" className="st0">
                        <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1.6" calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
                    </path>
                    <path fill="currentColor" d="M16 4h4v4h-4V4z" className="st0">
                        <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1.8" calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
                    </path>
                </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-4 h-4" ><path d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z" /></svg>}
            </button> :
                <button
                    type="button"
                    className="cursor-pointer group flex shrink-0 items-center justify-center gap-3 rounded-xl bg-red-400 px-4 py-3 max-[450px]:px-3 font-semibold text-zinc-950 transition hover:bg-emerald-300 disabled:cursor-wait disabled:opacity-60">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M11 7h2v7h-2zm0 8h2v2h-2z" />
                        <path fill="currentColor" d="m21.707 7.293l-5-5A1 1 0 0 0 16 2H8a1 1 0 0 0-.707.293l-5 5A1 1 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A1 1 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A1 1 0 0 0 22 16V8a1 1 0 0 0-.293-.707M20 15.586L15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414z" />
                    </svg>
                </button>
            }
        </div>
    );
}
