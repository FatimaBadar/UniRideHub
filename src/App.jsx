import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import RideCreation from './pages/RideCreation';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import UserAuth from './pages/UserAuth';
import Home from './pages/Home';
import MyRide from './pages/MyRide';
import BookRide from './pages/BookRide';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  
  {
    path: "/auth",
    element: <UserAuth />,
  },

  {
    path: "/myride",
    element: <MyRide userType='driver'/>,
  },

  {
    path: "/bookride",
    element: <BookRide />,
  },

  {
    path: "/createRide",
    element: <RideCreation />,
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
