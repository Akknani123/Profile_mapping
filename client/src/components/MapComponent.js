// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Validate coordinates function
const isValidCoordinates = (lat, lng) => {
  return lat !== undefined && lng !== undefined && !isNaN(lat) && !isNaN(lng);
};

const MapComponent = ({ data }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((item, index) => {
        const { latitude, longitude } = item;

        if (isValidCoordinates(latitude, longitude)) {
          return (
            <Marker key={index} position={[latitude, longitude]}>
              <Popup>{item.name}</Popup>
            </Marker>
          );
        } else {
          console.error(`Invalid coordinates for item at index ${index}: ${item.name}`);
          return null;
        }
      })}
    </MapContainer>
  );
};

export default MapComponent;
