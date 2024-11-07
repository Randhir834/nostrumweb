// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <h1 style={styles.title}>Welcome to NOSTRUM</h1>
        <p style={styles.subtitle}>Your Health, Our Priority</p>
        <p style={styles.description}>
          Explore a range of services including online medical appointments, medicine delivery, and personalized health plans.
        </p>
        <div style={styles.buttonsContainer}>
          <Link to="/doctors" style={{ ...styles.button, ...styles.primaryButton }}>Find a Doctor</Link>
          <Link to="/appointments" style={{ ...styles.button, ...styles.primaryButton }}>Book an Appointment</Link>
          <Link to="/articles" style={{ ...styles.button, ...styles.secondaryButton }}>Health Articles</Link>
        </div>
      </div>
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
          <h3 style={styles.infoTitle}>Medicine Delivery</h3>
          <p style={styles.infoText}>Order medicines online and have them delivered to your doorstep.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  heroSection: {
    textAlign: 'center',
    padding: '100px 20px',
    backgroundImage: 'url("/images/healthcare-background.png")', // Ensure this image is in your public/images folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    zIndex: 1,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: -1,
  },
  title: {
    fontSize: '3em',
    marginBottom: '0.5em',
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)',
    fontWeight: '700',
  },
  subtitle: {
    fontSize: '1.5em',
    marginBottom: '1em',
    fontWeight: '300',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
  },
  description: {
    fontSize: '1.2em',
    maxWidth: '600px',
    margin: '0 auto 2em auto',
    lineHeight: '1.6',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  button: {
    padding: '12px 25px',
    borderRadius: '8px',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1em',
    fontWeight: 'bold',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    display: 'inline-block',
  },
  primaryButton: {
    backgroundColor: '#4CAF50',
    border: '2px solid #4CAF50',
    boxShadow: '0px 4px 10px rgba(76, 175, 80, 0.5)',
  },
  secondaryButton: {
    backgroundColor: '#007BFF',
    border: '2px solid #007BFF',
    boxShadow: '0px 4px 10px rgba(0, 123, 255, 0.5)',
  },
  buttonHover: {
    transform: 'scale(1.05)',
    boxShadow: '0px 6px 12px rgba(76, 175, 80, 0.6)',
  },
  infoSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    padding: '50px 20px',
    backgroundColor: '#f7f9fc',
    flexWrap: 'wrap',
  },
  infoCard: {
    maxWidth: '300px',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    margin: '15px',
    cursor: 'pointer',
  },
  infoCardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
  },
  infoTitle: {
    fontSize: '1.5em',
    color: '#333',
    marginBottom: '10px',
    fontWeight: '600',
  },
  infoText: {
    fontSize: '1em',
    color: '#666',
  },
};

// Hover effects for buttons and cards
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('mouseenter', () => button.style.transform = 'scale(1.05)');
  button.addEventListener('mouseleave', () => button.style.transform = 'scale(1)');
});

document.querySelectorAll('.infoCard').forEach(card => {
  card.addEventListener('mouseenter', () => card.style.transform = 'scale(1.05)');
  card.addEventListener('mouseleave', () => card.style.transform = 'scale(1)');
});

export default Home;
