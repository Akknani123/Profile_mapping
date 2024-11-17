import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profiles.css'; // Custom CSS for additional styling
import { Card, Container, Row, Col } from 'react-bootstrap';

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch profiles from the server
    axios.get('http://localhost:5000/api/profiles')
      .then(response => setProfiles(response.data))
      .catch(error => console.error('Error fetching profiles:', error));
  }, []);

  return (
    <div className="profiles-section">
      <Container fluid className="profiles-container">
        <h2>Profiles</h2>
        <Row>
          <Col>
            {profiles.map(profile => (
              <Card key={profile.id} className="profile-card mb-3">
                {profile.photo && (
                  <Card.Img 
                    variant="top" 
                    src={`data:image/jpeg;base64,${Buffer.from(profile.photo).toString('base64')}`} 
                    alt={profile.name} 
                    className="profile-img"
                  />
                )}
                <Card.Body>
                  <Card.Title>{profile.name}</Card.Title>
                  <Card.Text>
                    <strong>Address:</strong> {profile.address}
                  </Card.Text>
                  <Card.Text>
                    {profile.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profiles;
