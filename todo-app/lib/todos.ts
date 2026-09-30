export type Todo = { id: number, text: string, completed: boolean };

export let todos: Todo[] = [
    { id: 1, text: "first todo", completed: false },
];

type actionType = "GET" | "ADD" | "DELETE" | "TOGGLE";

export async function todoFunc(
    func: actionType,
    id?: number,
    text: string = "null",
    completed: boolean = false
) {
    if (func === "GET") {
        return todos;
    }
    else if (func === "ADD") {
        const newTodo: Todo = {
            id: Date.now(),
            text,
            completed
        };

        todos.push(newTodo);
        return newTodo;
    }
    else if (func === "DELETE") {
        if (!id) return;

        todos = todos.filter((todo) => todo.id !== id);
        return id;
    }
    else if (func === "TOGGLE") {
        if (!id) return;

        todos = todos.map((todo) => {
            return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
        });
    }
}