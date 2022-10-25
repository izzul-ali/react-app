import { FormEvent, createContext, Dispatch, ReactNode, SetStateAction, useContext, useState, FormEventHandler, ChangeEvent } from "react"

type TodoApp = {
    todolist: string[] // Array<string>
    todo: string
    isComplete: boolean
    setComplete: Dispatch<SetStateAction<boolean>>
    setNewInputTodo: (e: ChangeEvent<HTMLInputElement>) => void
    saveTodo: (e: FormEvent<HTMLFormElement>) => void
    deleteTodo: (act: string) => void
}

type Props = {
    children: ReactNode
}

export const TodoContext = createContext<TodoApp | null>(null)

export const TodoContextProvider = ({ children }: Props) => {
    const [todolist, setTodolist] = useState<Array<string>>([])
    const [newTodoInput, setNewTodo] = useState<string>('')
    const [isComplete, setComplete] = useState(false)

    const setNewInputTodo = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const saveTodo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newTodoInput) { setTodolist([...todolist, newTodoInput]) }
        setNewTodo('')
    }

    const deleteTodo = (act: string) => {
        setTodolist(todolist.filter(activity => {
            return activity != act
        }))
    }

    return <TodoContext.Provider value={{
        todolist,
        isComplete,
        setComplete,
        saveTodo,
        setNewInputTodo,
        deleteTodo,
        todo: newTodoInput
    }}>{children}</TodoContext.Provider>
}

export const useTodoContext = () => {
    const todoContext = useContext(TodoContext)

    if (!todoContext) throw new Error("todo context not declare in this components");

    return todoContext
}