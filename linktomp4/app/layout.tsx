import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
});

const roboto = Roboto({
  variable: "--font-roboto",
});

const tanNimbus = localFont({
  src: "../public/fonts/tan-nimbus.ttf",
  variable: "--font-tan-nimbus",
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://liriandev.com"),

  title: {
    default: "Link to MP4 - Video Link Extractor & Downloader",
    template: "%s | Link to MP4",
  },

  description:
    "Link to MP4 is a free online video link extractor that helps you find video sources on websites. Explore YouTube, VK, Facebook, Instagram, TikTok, X, Reddit and other popular platform video links where supported.",

  applicationName: "Link to MP4",

  keywords: [
    "link to mp4",
    "video downloader",
    "online video downloader",
    "video link extractor",
    "mp4 downloader",
    "mp4 link extractor",
    "video URL extractor",
    "extract video URL",
    "youtube video download",
    "youtube downloader",
    "youtube mp4 download",
    "vk video download",
    "vk video downloader",
    "facebook video download",
    "instagram video download",
    "instagram reels downloader",
    "tiktok video download",
    "tiktok downloader",
    "twitter video download",
    "x video downloader",
    "reddit video download",
    "online video extractor",
    "video source finder",
    "web video extractor",
    "download video from link",
  ],

  alternates: {
    canonical: "/@linktomp4",
  },

  openGraph: {
    title: "Link to MP4 - Video Link Extractor & Downloader",
    description:
      "Find and extract supported video source links from websites with Link to MP4. A simple online tool for discovering video URLs.",
    url: "/@linktomp4",
    siteName: "Link to MP4",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Link to MP4 - Video Link Extractor & Downloader",
    description:
      "Find video source links from websites with Link to MP4. Explore supported video platforms and formats.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${roboto.variable} ${tanNimbus.variable} h-full antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
