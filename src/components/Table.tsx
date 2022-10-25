import { useTodoContext } from "../store/TodoContext"

const Table = () => {
    const { todolist, isComplete, setComplete, deleteTodo } = useTodoContext()
    return (
        <div className="overflow-x-scroll">
            <table className="w-full mt-10">
                <thead className="bg-black/20">
                    <tr>
                        <th className="py-2 px-1">No</th>
                        <th className="py-2 px-1">Activity</th>
                        <th className="py-2 px-1">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center text-sm tracking-wide">
                    {
                        todolist.map((v, i) => {
                            return (
                                <tr key={i} className={i % 2 !== 0 ? 'bg-black/10' : ''}>
                                    <td className="rounded py-3 px-1">{i + 1}</td>
                                    <td className="rounded py-3 px-1">{
                                        isComplete ? <del>{v}</del> : <p>{v}</p>
                                    }</td>
                                    <td className="rounded py-3 px-1 flex justify-center">
                                        <button onClick={() => deleteTodo(v)} className="px-2 py-1 bg-red-500 rounded ">X</button>
                                        <button onClick={() => setComplete(!isComplete)} className="px-2 py-1 bg-green-500 rounded ml-2">V</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table 