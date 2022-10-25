import { useTodoContext } from "../store/TodoContext"

const InputForm = () => {
    const { todo, saveTodo, setNewInputTodo } = useTodoContext()
    return (
        <form onSubmit={(e) => saveTodo(e)} className="w-full flex justify-center gap-3 mt-5">
            <input onChange={setNewInputTodo} value={todo} type="text" className="outline-none rounded border border-gray-400 py-1 px-3 shadow-md" />
            <button type="submit" className="py-1 px-2 outline-none rounded bg-green-500 text-sm">Save</button>
        </form>
    )
}

export default InputForm