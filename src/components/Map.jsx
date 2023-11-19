import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import SearchControl from './SearchControl';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
 iconUrl: markerIcon,
 iconRetinaUrl: markerIcon2x,
 shadowUrl: markerShadow,
});

export default function Map() {
 const [position, setPosition] = useState([24.8422, 67.0516]); // Karachi city coordinates
 const [locationName, setLocationName] = useState("");
 const [markerPositions, setMarkerPositions] = useState([]);
 const markerRef = useRef(null);

 const handleLocationSelect = (location) => {
  if (markerPositions.length < 7) {
    setMarkerPositions([...markerPositions, location]);
  }
 };

 useEffect(() => {
  if (markerRef.current) {
    markerRef.current.dragging.enable();
  }
 }, []);

 return (
  <div style={{height: "100vh",display: "flex", justifyContent: "center", alignItems: "center" }}>
    <MapContainer
      style={{ height: "75vh", width: "75%",marginBottom:"300px"}}
      center={position}
      zoom={15}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={position}
        draggable
        ref={markerRef}
        eventHandlers={{
          dragend() {
            const marker = markerRef.current;
            if (marker != null) {
              const newPosition = marker.getLatLng();
              setPosition(newPosition);
           
              // Reverse geocode the coordinates
              const lat = newPosition.lat;
              const lon = newPosition.lng;
              axios
                .get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
                .then((response) => {
                  const locationName = response.data.display_name;
                  setLocationName(locationName);
                })
                .catch((error) => {
                  console.error(error);
                });
           
              // Add the new position to the markerPositions array
              if (markerPositions.length < 7) {
                setMarkerPositions([...markerPositions, newPosition]);
              }
            }
           },
           
        }}
      >
        <Popup>{locationName}</Popup>
      </Marker>
      {markerPositions.map((position, index) => (
 <Marker key={index} position={position} draggable>
   <Popup>{`Marker ${index + 1}`}</Popup>
 </Marker>
))}

      <SearchControl onLocationSelect={handleLocationSelect}/>
    </MapContainer>
  </div>
 );
}
