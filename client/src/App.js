import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import MapContent from './components/Mapcontent';

import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is imported

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid mt-4">
        <div className="row">
          {/* Profile Section */}
          <div className="col-md-3">
            <div className="profile" style={{ width: '300px' }}>
              <Profile />
            </div>
          </div>
          {/* Map Section */}
          <div className="col-md-9">
            <MapContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
