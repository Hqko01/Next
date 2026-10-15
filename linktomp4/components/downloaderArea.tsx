"use client";

import { useState } from "react";
import Image from "next/image";
import VideoExtractor from "@/components/videoExtractor";
import Result from "@/components/availableFormats";

export default function DownloaderArea() {
    const [videos, setVideos] = useState<string[]>([]);

    return (
        <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 pb-24 pt-8 text-center md:pt-0">
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
                    <div className="flex flex-row min-w-0 flex-1 items-center gap-3 px-4 py-1 max-[450px]:px-2">
                        <VideoExtractor onVideosFound={setVideos} />
                    </div>
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
            <div className="preview-card mt-16 w-full max-w-xl text-lef">
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
                    <Result video={videos} />
                </div>

                <p className="px-5 pb-4 text-xs leading-5 text-zinc-500">
                    Illustrative preview. Actual formats depend on the source.
                </p>
            </div>
        </section>
    )
}