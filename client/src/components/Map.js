import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css"; // Make sure this file exists

const Map = ({ profiles }) => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Assuming profiles is an array containing user addresses with lat/lng
    const updatedMarkers = profiles.map((profile) => {
      if (profile.address && profile.latitude && profile.longitude) {
        return {
          id: profile.id,
          position: [profile.latitude, profile.longitude],
          name: profile.name,
          photo: profile.photo, // If applicable
        };
      }
      return null;
    }).filter(marker => marker !== null);

    setMarkers(updatedMarkers);
  }, [profiles]);

  return (
    <div className="map-container">
      <MapContainer
        center={[51.505, -0.09]} // Default center, you can change this
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position}>
            <Popup>
              <strong>{marker.name}</strong>
              <br />
              {marker.photo && (
                <img src={marker.photo} alt={marker.name} width="50" />
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
