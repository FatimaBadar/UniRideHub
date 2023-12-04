// RideDetailCard.js
import React from 'react';
import './css/ridecard.css';
import {useState, useContext} from 'react';
import RideContext from '../Context/RideContext';


const RideDetailCard = ({ ride }) => {

  const {bookedRide, setBookedRide} = useContext(RideContext)
  const [isBooked, setIsBooked] = useState(false)
  const handleBook = () => {
    if (bookedRide.length === 0) {
      setBookedRide([...bookedRide, ride]);
      setIsBooked(true); // disable the button
    } else {
      alert('You have already booked a ride.');
    }
  };


  return (
    <div className="all-rides">
    <div className="ride-card">
      <p>Name: {ride.name}</p>
      <p>Phone Number: {ride.phoneNumber}</p>
      <p>Ride Time: {ride.rideTime}</p>
      <p>Car Model: {ride.carModel}</p>
      <p>Source: {ride.source}</p>
      <p>Destination: {ride.destination}</p>
      <p>Middle Route: {ride.middleRoutes.join(', ')}</p>
      <button className='book-button' onClick={handleBook} disabled={isBooked}>{isBooked ? 'Booked' : 'Book'}</button>
    </div>
    </div>
  );
};

export default RideDetailCard;
