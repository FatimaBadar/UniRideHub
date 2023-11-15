import { useState} from 'react'
import './App.css'
import Home from './pages/Home';
import Profile from './pages/Profile';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserState from './Context/UserState';

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
      
      <UserState>
        <RouterProvider router={router} />
      </UserState>
    </>
  )
}

export default App
