import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Transparent Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.navBrand}>
          <h2 style={styles.navLogo}>NOSTRUM</h2>
        </div>
        <ul style={styles.navLinks}>
          <li><Link to="/doctors" style={styles.navLink}>Find a Doctor</Link></li>
          <li><Link to="/appointments" style={styles.navLink}>Book an Appointment</Link></li>
          <li><Link to="/articles" style={styles.navLink}>Health Articles</Link></li>
          <li><Link to="/medicine-delivery" style={styles.navLink}>Medicine Delivery</Link></li>
          <li><Link to="/signin" style={{ ...styles.navLink, ...styles.authButton }}>Sign In</Link></li>
          <li><Link to="/signup" style={{ ...styles.navLink, ...styles.authButton }}>Sign Up</Link></li>
        </ul>
      </nav>

      {/* Hero Section with Transparent Overlay */}
      <div style={styles.heroSection}>
        <div style={styles.overlay}></div>
        <h1 style={styles.title}>Welcome to NOSTRUM</h1>
        <p style={styles.subtitle}>Your Health, Our Priority</p>
        <p style={styles.description}>
          Explore a range of services including online medical appointments, personalized health plans, and fast medicine delivery.
        </p>
        <div style={styles.buttonsContainer}>
          <Link to="/doctors" style={{ ...styles.button, ...styles.primaryButton }}>Find a Doctor</Link>
          <Link to="/appointments" style={{ ...styles.button, ...styles.primaryButton }}>Book an Appointment</Link>
          <Link to="/medicine-delivery" style={{ ...styles.button, ...styles.secondaryButton }}>Order Medicines</Link>
        </div>
      </div>

      {/* Info Section */}
      <div style={styles.infoSection}>
        <div style={styles.infoCard}>
          <h3 style={styles.infoTitle}>Trusted Doctors</h3>
          <p style={styles.infoText}>Connect with certified doctors for reliable medical consultations.</p>
        </div>
        <div style={styles.infoCard}>
          <h3 style={styles.infoTitle}>Personalized Plans</h3>
          <p style={styles.infoText}>Get subscription-based diet and workout plans tailored for you.</p>
        </div>
        <div style={styles.infoCard}>
          <h3 style={styles.infoTitle}>Fast Medicine Delivery</h3>
          <p style={styles.infoText}>Order your medicines with ease and get them delivered to your doorstep in no time.</p>
        </div>
      </div>

      {/* Medicine Delivery Section */}
      <div style={styles.medicineDeliverySection}>
        <h2 style={styles.medicineDeliveryTitle}>Fast & Reliable Medicine Delivery</h2>
        <p style={styles.medicineDeliveryText}>
          Running out of essential medicines? Order online and get them delivered at your doorstep without any hassle.
          Your health is just a click away!
        </p>
        <div style={styles.medicineDeliveryButtons}>
          <Link to="/medicine-delivery" style={styles.medicineDeliveryButton}>
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Roboto, sans-serif',
    color: '#333',
    margin: 0,
    padding: 0,
  },
  navbar: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px 30px',
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 10,
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
  },
  navBrand: {
    display: 'inline-block',
    fontSize: '2em',
    color: '#fff',
    fontWeight: '700',
  },
  navLogo: {
    margin: 0,
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '25px',
    margin: 0,
    padding: 0,
    float: 'right',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    padding: '12px 20px',
    fontSize: '1.1em',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  authButton: {
    backgroundColor: 'linear-gradient(45deg, #FF6347, #FF4500)',
    color: '#fff',
    borderRadius: '25px',
    padding: '12px 30px',
    boxShadow: '0 4px 15px rgba(255, 99, 71, 0.4)',
    fontSize: '1.1em',
    fontWeight: '600',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(255, 99, 71, 0.6)',
    },
  },
  heroSection: {
    position: 'relative',
    textAlign: 'center',
    padding: '140px 20px 20px 20px',
    backgroundImage: 'url("/images/healthcare-background.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: '80px',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))',
    zIndex: -1,
  },
  title: {
    fontSize: '4em',
    marginBottom: '0.5em',
    fontWeight: '700',
    textShadow: '3px 5px 10px rgba(0, 0, 0, 0.8)',
  },
  subtitle: {
    fontSize: '2em',
    marginBottom: '1.2em',
    fontWeight: '400',
    textShadow: '2px 4px 6px rgba(0, 0, 0, 0.6)',
  },
  description: {
    fontSize: '1.3em',
    maxWidth: '700px',
    margin: '0 auto 2.5em auto',
    lineHeight: '1.7',
    textShadow: '1px 2px 6px rgba(0, 0, 0, 0.5)',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  button: {
    padding: '16px 28px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontSize: '1.2em',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
  },
  primaryButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    boxShadow: '0px 8px 16px rgba(76, 175, 80, 0.5)',
    border: 'none',
  },
  secondaryButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    boxShadow: '0px 8px 16px rgba(0, 123, 255, 0.5)',
    border: 'none',
  },
  infoSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    padding: '50px 20px',
    backgroundColor: '#f7f9fc',
    flexWrap: 'wrap',
    boxShadow: '0px -4px 12px rgba(0, 0, 0, 0.1)',
  },
  infoCard: {
    maxWidth: '300px',
    padding: '25px',
    borderRadius: '15px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
    },
  },
  infoTitle: {
    fontSize: '1.5em',
    marginBottom: '0.8em',
    color: '#333',
    fontWeight: '600',
  },
  infoText: {
    fontSize: '1em',
    color: '#666',
  },
  medicineDeliverySection: {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#e8f5e9',
  },
  medicineDeliveryTitle: {
    fontSize: '2.5em',
    color: '#2e7d32',
    marginBottom: '1em',
  },
  medicineDeliveryText: {
    fontSize: '1.2em',
    maxWidth: '600px',
    margin: '0 auto 1.5em auto',
    color: '#4f4f4f',
    lineHeight: '1.6',
  },
  medicineDeliveryButton: {
    backgroundColor: '#2e7d32',
    color: '#fff',
    padding: '14px 32px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontSize: '1.1em',
    fontWeight: '600',
    boxShadow: '0 6px 12px rgba(46, 125, 50, 0.5)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 10px 20px rgba(46, 125, 50, 0.6)',
    },
  },
};

export default Home;
