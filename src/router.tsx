import { createBrowserRouter } from "react-router-dom";
import LayoutDefault from "./layouts/LayoutDefault";
import List from "./pages/List";
import NotFound from "./pages/NotFound";
import Todo from "./pages/Todo";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Todo />
      },
      {
        path: 'list',
        element: <List />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

export default router