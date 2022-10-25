import InputForm from "../components/InputForm"
import Table from "../components/Table"

const Todo = () => {
    return (
        <div className="min-h-screen">
            <h1 className="text-center text-3xl font-bold">React Todolist</h1>
            <InputForm />
            <Table />
        </div>
    )
}

export default Todo