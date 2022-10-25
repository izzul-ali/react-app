import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router'
import { RouterProvider } from "react-router-dom";
import { TodoContextProvider } from './store/TodoContext';
import './assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Set context for global components*/}
    <TodoContextProvider>
      <RouterProvider router={Router} />
    </TodoContextProvider>
  </React.StrictMode>
)
