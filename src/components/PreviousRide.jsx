// PreviousRides component
import React from 'react';
import './css/ridecard.css';
const PreviousRides = () => {
  // Dummy data for previous rides
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
      {previousRidesData.map((ride, index) => (
        <div key={index} className="ride-card">
          <div className="ride-info">
            <div className='ride-info'>
            <p> <b>Name: </b>{ride.name}</p>
            <p> <b>Phone Number: </b>{ride.phoneNumber}</p>
            </div>
            <div className='ride-info'>
            <p> <b>Car Model: </b>{ride.carModel}</p>
            <p> <b>Ride Time: </b>{ride.rideTime}</p>
            </div>
            <div className='ride-info'>
            <p> <b>Source: </b>{ride.source}</p>
            <p> <b>Destination: </b>{ride.destination}</p>
            </div>
            <div className='ride-info'>
            <p> <b>Middle Routes: </b>{ride.middleRoutes.join(', ')}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviousRides;
