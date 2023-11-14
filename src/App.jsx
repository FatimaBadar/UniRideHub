import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import Profile from './pages/Profile';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },

  // other routes defined here

]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
