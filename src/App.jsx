import { useState } from 'react'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import UserAuth from './pages/UserAuth';
import Home from './pages/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  
  {
    path: "/auth",
    element: <UserAuth />,
  },

]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
