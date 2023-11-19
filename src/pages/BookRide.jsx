// App.js
import React, { useState } from 'react';
import RideDetailCard from '../components/RideDetails';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './css/bookride.css';

const dummyData = [
  // Your dummy ride data here
  // Example:
  {
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    rideTime: '10:00 AM',
    rideFare: '$20',
    source: 'City A',
    destination: 'City B',
    middleRoutes: ['P', 'E', 'F'],
  },
  {
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    rideTime: '11:00 AM',
    rideFare: '$20',
    source: 'City B',
    destination: 'City D',
    middleRoutes: ['P', 'Q', 'R'],
  },
  // More ride data...
];

const BookRide = () => {
    const [rides, setRides] = useState(dummyData);
    const [filteredRides, setFilteredRides] = useState(dummyData);
  
    const filterRides = (filters) => {
      const { filterType, searchTerm } = filters;
      const filtered = rides.filter((ride) => {
        switch (filterType) {
          case 'source':
            return ride.source.toLowerCase().includes(searchTerm.toLowerCase());
          case 'destination':
            return ride.destination.toLowerCase().includes(searchTerm.toLowerCase());
          case 'middleRoute':
            return ride.middleRoutes.some((route) =>
              route.toLowerCase().includes(searchTerm.toLowerCase())
            );
          case 'time':
            return ride.rideTime.toLowerCase().includes(searchTerm.toLowerCase());
          default:
            return false;
        }
      });
      setFilteredRides(filtered);
    };
  
    const resetFilters = () => {
      setFilteredRides(rides);
    };
  
    return (
      <>
      <Navbar />
      <div className="book-ride">
        <SearchBar onFilter={filterRides} onReset={resetFilters} />
        <div className="ride-list">
          {filteredRides.map((ride, index) => (
            <RideDetailCard key={index} ride={ride} />
          ))}
        </div>
      </div>
      <Footer />
      </>
    );
  };
  
  export default BookRide;
  