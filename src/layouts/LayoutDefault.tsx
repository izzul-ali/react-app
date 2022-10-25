import { Link, Outlet } from "react-router-dom"

const LayoutDefault = () => {
    return (
        <div className="p-3 space-y-10 overflow-hidden">
            <header className="flex justify-between items-center">
                <h1 className="text-base font-bold italic tracking-wide">ReactTodolist</h1>
                <nav className="space-x-3 text-sm">
                    <Link to='/'>Home</Link>
                    <Link to='/list'>List</Link>
                    <Link to='/404'>404</Link>
                </nav>
            </header>
            <Outlet />
        </div>
    )
}

export default LayoutDefault