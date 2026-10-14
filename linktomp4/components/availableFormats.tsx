type AvailableFormatsProps = {
    video: string[];
};

export default function Result({ video }: AvailableFormatsProps) {
    const videoList = video.map((v, index) => {
        return (
            <div key={index} className="flex items-center justify-between gap-2">
                <div className="text flex flex-col items-start justify-center gap-1 overflow-hidden">
                    <h2 className="text-md font-[montserrat] text-zinc-200">Default Format</h2>
                    <span className="text-sm text-zinc-400 overflow-hidden text-nowrap">{v}</span>
                </div>
                <a className="text-xs text-emerald-500 px-4 py-2 border border-emerald-500 rounded-full hover:bg-white/5 hover:text-white transition duration-150" href={v} target="_blank" download>
                    Download
                </a>
            </div>
        );
    });
    return videoList;
}