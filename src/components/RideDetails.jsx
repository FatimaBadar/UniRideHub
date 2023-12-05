// RideDetailCard.js
import React from 'react';
import './css/ridecard.css';
import {useState, useContext} from 'react';
import RideContext from '../Context/RideContext';


const RideDetailCard = ({ ride, user }) => {

  const {bookedRide, setBookedRide, rideConfirmation, setRideConfirmation} = useContext(RideContext)
  const [isBooked, setIsBooked] = useState(false)
  console.log("start booked ride: ", bookedRide);

  const handleBook = async() => {
    // console.log("ride check ", ride);
    // if (bookedRide.length === 0) {
      setIsBooked(true); // disable the button
      setBookedRide([...bookedRide, ride]);
      console.log("booked ride: ", bookedRide);
      setRideConfirmation(true);
    // } 
    // else {
    //   alert('You have already booked a ride.');
    // }
  };

  return (
    <div className="all-rides">
    <div className="ride-card">
    {user && <p> Name: {user.first_name + " " + user.last_name}</p>}
    {user && <p> Phone Number: {user.mobile}</p>}
      <p>Ride Time: {ride.time + " " + ride.date}</p>
      <p>Available Seats: {ride.total_Seats}</p>
      <p>Source: {ride.source}</p>
      <p>Destination: {ride.destination}</p>
      <p>Middle Route: {ride.mid_routes}</p>
      <button className='book-button' onClick={handleBook} disabled={isBooked}>
        {isBooked ? 'Booked' : 'Book'}
        </button>
    </div>
    </div>
  );
};

export default RideDetailCard;
