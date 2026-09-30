import { todoFunc, Todo } from "@/lib/todos";

export default async function Home() {
  const list = (await todoFunc("GET")) as Todo[];

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
          {list.length === 0 ? (<p>Boş</p>) : (
            list.map((todo) => (
              <div key={todo.id} className={!todo.completed ? "todo relative flex flex-row items-center justify-between w-full bg-[rgba(255,255,255,0.07)] p-4 rounded-xl" : "todo relative flex flex-row items-center justify-between w-full bg-[rgba(255,255,255,0.07)] p-4 rounded-xl scale-95 opacity-70 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-xl after:content-[''] after:absolute after:top-[50%] after:left-[50%] after:translate-[-50%] after:bg-[#14b74a] after:w-[110%] after:h-1 after:rounded-xl"}>
                <div className="text">
                  <p className="text-l font-bold text-[rgba(255,255,255,0.7)]">
                    {todo.text}
                  </p>
                </div>
                <div className="buttons flex flex-row gap-4">
                  <button className="bg-[rgba(255,255,255,.07)] p-2 rounded-xl cursor-pointer transition-all duration-100 hover:bg-[rgba(255,255,255,.1)] active:bg-[rgba(255,255,255,.15)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check preview-icon"><path d="M20 6 9 17l-5-5" /></svg>
                  </button>
                  <button className="bg-[rgba(255,255,255,.07)] p-2 rounded-xl cursor-pointer transition-all duration-100 hover:bg-[rgba(255,255,255,.1)] active:bg-[rgba(255,255,255,.15)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-pen preview-icon"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" /></svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div >
    </main >
  );
}
