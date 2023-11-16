import { useState} from 'react'
import './App.css'
import Home from './pages/Home';
import Profile from './pages/Profile';
import RequestedRide from './pages/RequestedRide';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserState from './Context/UserState';
import RideState from './Context/RideState';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/requestedRide",
    element: <RequestedRide />,
  },
  // other routes defined here

]);

function App() {
 
  return (
    <>
      
      <UserState>
        <RideState>
        <RouterProvider router={router} />
        </RideState>
      </UserState>
    </>
  )
}

export default App
