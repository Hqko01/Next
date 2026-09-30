import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="card w-lg">
        <div className="title flex flex-col items-center justify-center gap-4 p-4 mb-4 border-2 border-green-500">
          <h1 className="text-5xl font-bold">Todo App</h1>
          <p className="text-lg text-center text-white opacity-30">
            Create, manage, and complete your tasks with ease.
          </p>
        </div>
      </div>
    </main>
  );
}
