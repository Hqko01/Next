import * as cheerio from "cheerio";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { url } = await req.json();

        if (typeof url !== "string") {
            return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
        }

        const parsedUrl = new URL(url);

        if (!["http:", "https:"].includes(parsedUrl.protocol)) {
            return NextResponse.json(
                { error: "Only HTTP and HTTPS links are supported." },
                { status: 400 }
            );
        }

        const response = await fetch(parsedUrl.href, {
            headers: {
                "User-Agent": "Mozilla/5.0",
                Accept: "text/html",
            },
            signal: AbortSignal.timeout(10000),
            redirect: "error",
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: "Failed to fetch the page." },
                { status: 400 }
            );
        }

        const contentType = response.headers.get("content-type") ?? "";

        if (!contentType.includes("text/html")) {
            return NextResponse.json(
                { error: "Only HTML pages are supported." },
                { status: 400 }
            );
        }

        const html = await response.text();
        const $ = cheerio.load(html);
        const videos = new Set<string>();

        const addUrl = (value?: string) => {
            if (!value) return;

            try {
                const videoUrl = new URL(value, parsedUrl).href;

                if (
                    ["http:", "https:"].includes(new URL(videoUrl).protocol) &&
                    /\.(mp4|webm|ogg)(?:$|[?#])/i.test(videoUrl)
                ) {
                    videos.add(videoUrl);
                }
            } catch {
                // pass if the URL is invalid
            }
        };

        $("video").each((_, element) => {
            addUrl($(element).attr("src"));
        });

        $("video source, source").each((_, element) => {
            const type = $(element).attr("type") ?? "";
            const src = $(element).attr("src");

            if (
                type.startsWith("video/") ||
                /\.(mp4|webm|ogg)(?:$|[?#])/i.test(src ?? "")
            ) {
                addUrl(src);
            }
        });

        $('meta[property="og:video"], meta[property="og:video:url"], meta[name="twitter:player:stream"]').each(
            (_, element) => {
                addUrl($(element).attr("content"));
            }
        );

        return NextResponse.json({
            success: true,
            videos: Array.from(videos),
            count: videos.size,
        });
    }
    catch {
        return NextResponse.json(
            { error: "Page could not be read or the link is invalid." },
            { status: 400 }
        );
    }
}