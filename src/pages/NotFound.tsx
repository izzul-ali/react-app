import { Link } from "react-router-dom"

const NotFond = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-7xl mb-4 font-bold">404</h1>
                <Link to='/' className="text-sm px-4 py-1 bg-[#22c55e] rounded shadow-sm">Home Page</Link>
            </div>
        </div>
    )
}

export default NotFond