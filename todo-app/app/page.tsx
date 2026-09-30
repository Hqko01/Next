import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="card w-lg">
        <div className="title flex flex-col items-center justify-center gap-4 p-4 mb-4">
          <h1 className="text-5xl font-bold">Todo App</h1>
          <p className="text-lg text-center text-white opacity-30">
            Create, manage, and complete your tasks with ease.
          </p>
        </div>
        <div className="output flex flex-col items-center justify-center gap-4">
          <div itemID="1" className="todo flex flex-row items-center justify-between w-full bg-[rgba(255,255,255,0.07)] p-4 rounded-xl">
            <div className="text">
              <p className="text-l font-bold text-[rgba(255,255,255,0.7)]">
                Lorem ipsum
              </p>
            </div>
            <div className="buttons flex flex-row gap-4">
              <button className="bg-[rgba(255,255,255,.07)] p-2 rounded-xl cursor-pointer transition-all duration-100 hover:bg-[rgba(255,255,255,.1)] active:bg-[rgba(255,255,255,.15)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check preview-icon"><path d="M20 6 9 17l-5-5" /></svg>
              </button>
              <button className="bg-[rgba(255,255,255,.07)] p-2 rounded-xl cursor-pointer transition-all duration-100 hover:bg-[rgba(255,255,255,.1)] active:bg-[rgba(255,255,255,.15)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen preview-icon"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" /></svg>
              </button>
            </div>
          </div>
          <div itemID="2" className="completed todo flex flex-row items-center justify-between w-full bg-[rgba(255,255,255,0.07)] p-4 rounded-xl">
            <div className="text">
              <p className="text-l font-bold text-[rgba(255,255,255,0.7)]">
                Lorem ipsum
              </p>
            </div>
            <div className="buttons flex flex-row gap-4">
              <button className="bg-[rgba(255,255,255,.07)] p-2 rounded-xl cursor-pointer transition-all duration-100 hover:bg-[rgba(255,255,255,.1)] active:bg-[rgba(255,255,255,.15)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check preview-icon"><path d="M20 6 9 17l-5-5" /></svg>
              </button>
              <button className="bg-[rgba(255,255,255,.07)] p-2 rounded-xl cursor-pointer transition-all duration-100 hover:bg-[rgba(255,255,255,.1)] active:bg-[rgba(255,255,255,.15)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen preview-icon"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div >
    </main >
  );
}
