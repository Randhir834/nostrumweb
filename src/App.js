import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'; // Home page
import DoctorList from './pages/DoctorList';
import DoctorProfile from './pages/DoctorProfile';
import AppointmentBooking from './pages/AppointmentBooking';
import MedicineDelivery from './pages/MedicineDelivery';
import MedicineDetail from './pages/MedicineDetail';  // For individual medicine details

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/doctors" style={styles.navLink}>Doctors</Link>
          <Link to="/appointments" style={styles.navLink}>Appointments</Link>
          <Link to="/medicine-delivery" style={styles.navLink}>Medicine Delivery</Link>
        </nav>

        {/* Routes Setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/doctors/:id" element={<DoctorProfile />} />
          <Route path="/appointments" element={<AppointmentBooking />} />
          <Route path="/medicine-delivery" element={<MedicineDelivery />} />
          <Route path="/medicine-delivery/:id" element={<MedicineDetail />} /> {/* Medicine detail page */}
        </Routes>
      </div>
    </Router>
  );
};

// Styling
const styles = {
  nav: {
    padding: '10px 20px',
    backgroundColor: '#333',
    textAlign: 'center',
  },
  navLink: {
    color: 'white',
    margin: '0 15px',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
  navLinkHover: {
    color: '#00BFFF',
  },
};

export default App;
