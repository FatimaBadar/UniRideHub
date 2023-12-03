import React from 'react'
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from '../Context/userContext';
import Rating from '@mui/material/Rating';
import './css/ridecard.css';

const PreviousRides = () => {
  // Dummy data for previous rides
  const {userId, setUserId} = useContext(UserContext);
  const [userData,setUserData] = useState([]);
  const [rideData, setRideData] = useState([]);
  const [userRideData, setUserRideData] = useState([]);

  useEffect(() => {
    getUserData(userId);
    getUserRideData(userId);
  }, [userId])

  const getUserData = async (id) => {
    await axios.get(`https://localhost:7249/api/User/GetUser/${id}`)
    .then((response)=>{
      console.log(response.data.responseData)
      setUserData(response.data.responseData)
    }).catch((error) => {
      console.log(error)
    })
  }

  const getUserRideData = async (id) => {
    await axios.get( `https://localhost:7249/api/UserRide/GetUserRide/${id}`)
    .then((response) => {
      console.log(response.data)
      setUserRideData(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    getRideData(userRideData)
  },[userRideData])

  const getRideData = async (data) => {
    const rideIds = data.map((ride) => ride.ride_id);
    const fetchedRideData = [];
    for (const rideId of rideIds) {
      await axios.get(`https://localhost:7249/api/Ride/Getride/${rideId}`)
      .then((response) => {
        fetchedRideData.push(response.data);
      }).catch((error) => {
        console.log(error)
      })
    }
    console.log(fetchedRideData)
    setRideData(fetchedRideData)
  }

  const previousRidesData = [
    // Previous ride 1
    {
      name: 'Jane Smith',
      phoneNumber: '987-654-3210',
      carModel: 'Honda Accord',
      rideTime: '10:00 AM',
      source: 'X',
      destination: 'Y',
      middleRoutes: ['P', 'Q', 'R'],
    },
    {
        name: 'Jane Smith',
        phoneNumber: '987-654-3210',
        carModel: 'Honda Accord',
        rideTime: '10:00 AM',
        source: 'X',
        destination: 'Y',
        middleRoutes: ['P', 'Q', 'R'],
      },
    // Previous ride 2...
  ];

  return (
    <div className="previous-rides">
      <h2>Rides History</h2>
      {rideData.map((ride, index) => (
        <div key={index} className="ride-card">
          <div className="ride-info">
            <div className='ride-info'>
            <p> <b>Name: </b>{userData.first_name + " " + userData.last_name}</p>
            <p> <b>Phone Number: </b>{userData.mobile}</p>
            <p> <b>User Type: </b>{userData.userType}</p>
            </div>
            <div className='ride-info'>
            <p> <b>Ride ID: </b>{ride.id}</p>
            </div>
            <div className='ride-info'>
            <p> <b>Source: </b>{ride.source}</p>
            <p> <b>Destination: </b>{ride.destination}</p>
            </div>
            <div className='ride-info'>
            {/* <p> <b>Middle Routes: </b>{ride.middleRoutes.join(', ')}</p> */}
            <p> <b>Middle Routes: </b>{ride.mid_routes}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviousRides;
