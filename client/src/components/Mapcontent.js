import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapContent.css';

const MapContent = () => {
  const positions = [
    { lat: 51.505, lng: -0.09, label: "London, UK" },
    { lat: 51.5074, lng: -0.1278, label: "London" },
    { lat: 48.8566, lng: 2.3522, label: "Paris, France" },
    { lat: 52.52, lng: 13.405, label: "Berlin, Germany" },
    { lat: 41.9028, lng: 12.4964, label: "Rome, Italy" }
  ];

  return (
    <div className="map-content" style={{ height: '500px', width: '100%' }}>
      <h2>Welcome to Profile-Mapping!!!</h2>
      <MapContainer center={positions[0]} zoom={4} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {positions.map((position, index) => (
          <Marker key={index} position={[position.lat, position.lng]}>
            <Popup>{position.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapContent;
