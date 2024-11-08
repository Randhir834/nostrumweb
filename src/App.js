import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DoctorList from './pages/DoctorList';
import DoctorProfile from './pages/DoctorProfile';
import AppointmentBooking from './pages/AppointmentBooking';
import MedicineDelivery from './pages/MedicineDelivery';
import MedicineDetail from './pages/MedicineDetail';
import SignUp from './pages/SignUp'; // Import SignUp component
import SignIn from './pages/SignIn'; // Import SignIn component

const App = () => {
  return (
    <Router>
      <div style={styles.container}>
        {/* Routes Setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/doctors/:id" element={<DoctorProfile />} />
          <Route path="/appointments" element={<AppointmentBooking />} />
          <Route path="/medicine-delivery" element={<MedicineDelivery />} />
          <Route path="/medicine-delivery/:id" element={<MedicineDetail />} />
          <Route path="/signin" element={<SignIn />} /> {/* Add Sign In Route */}
          <Route path="/signup" element={<SignUp />} /> {/* Add Sign Up Route */}
        </Routes>

        {/* Footer */}
        <footer style={styles.footer}>
          <p style={styles.footerText}>© 2024 NOSTRUM. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

// Styling
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  footer: {
    marginTop: 'auto',
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
  },
  footerText: {
    fontSize: '14px',
    margin: 0,
  },
};

export default App;
