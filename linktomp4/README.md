# LinkToMP4

A simple, modern, and open-source web application for extracting available video sources from webpage URLs and providing downloadable video options.

## Overview

LinkToMP4 allows users to submit a webpage URL containing a video, detect accessible video sources, and explore available download options.

The goal is to make video access and downloading straightforward through a clean interface and a simple workflow.

## Features

- **URL-based video detection** — Analyze a submitted webpage to identify accessible video sources.
- **Download options** — Display available video formats and quality options.
- **Simple interface** — A clean and responsive user experience.
- **Open source** — Built for community contributions and further development.

## How It Works

1. Paste a webpage URL into the input field.
2. LinkToMP4 analyzes the page and searches for accessible video sources.
3. Available video formats and quality options are displayed.
4. Select a supported option and download the video.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Hqko01/Next/tree/main/linktomp4
cd LinkToMP4
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Limitations

Video detection depends on the source website, its accessibility, and the media formats it provides. Some websites may restrict access or require authentication.

LinkToMP4 is intended for videos that users are authorized to access and download. Users are responsible for respecting copyright laws and the terms of service of source websites.

## Contributing

Contributions, bug reports, and feature suggestions are welcome. Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

# Versions

- Version 0.1.1 - <strong>14.10.2026 | 20:00</strong>

Version 0.0.1 searches for the source in the `src` attribute of tags such as `<video>` found on simple websites and returns the source it finds as the result.

![Version 0.1.1 Screenshot] (https://hizliresim.com/dqsxb6pk)