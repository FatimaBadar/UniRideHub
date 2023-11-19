// RideDetailCard.js
import React from 'react';
import './css/ridecard.css';

const RideDetailCard = ({ ride }) => {
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
    </div>
    </div>
  );
};

export default RideDetailCard;
