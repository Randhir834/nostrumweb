import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    let validationErrors = {};

    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    }

    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setServerError("");

      try {
        const response = await axios.post('/api/signin', formData);

        if (response.status === 200) {
          console.log('Signed in:', formData);
          navigate('/dashboard'); // Redirect to a dashboard or home page after successful sign-in
        }
      } catch (error) {
        setServerError(error.response?.data?.message || "An error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Sign In</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={(e) => e.target.style.border = '1px solid #4CAF50'}
              onBlur={(e) => e.target.style.border = '1px solid #ddd'}
              style={styles.input}
            />
            {errors.email && <p style={styles.error}>{errors.email}</p>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onFocus={(e) => e.target.style.border = '1px solid #4CAF50'}
              onBlur={(e) => e.target.style.border = '1px solid #ddd'}
              style={styles.input}
            />
            {errors.password && <p style={styles.error}>{errors.password}</p>}
          </div>

          {serverError && <p style={styles.serverError}>{serverError}</p>}

          <button 
            type="submit" 
            style={{
              ...styles.submitButton,
              ...(isSubmitting ? styles.submitButtonDisabled : {}),
              ...(isSubmitting ? {} : styles.submitButtonHover),
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Sign In'}
          </button>
        </form>

        <p style={styles.redirectText}>
          Don't have an account? <Link to="/signup" style={styles.link}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f8',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    width: '400px',
    maxWidth: '100%',
    transition: 'transform 0.3s ease, opacity 0.3s ease',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '2em',
    color: '#333',
    fontWeight: '600',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
  },
  label: {
    marginBottom: '8px',
    fontSize: '1.1em',
    color: '#555',
    fontWeight: '500',
  },
  input: {
    padding: '12px 15px',
    fontSize: '1.1em',
    border: '1px solid #ddd',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border 0.3s ease',
  },
  error: {
    color: '#ff3b3b',
    fontSize: '0.9em',
    marginTop: '5px',
  },
  serverError: {
    color: '#ff3b3b',
    fontSize: '0.9em',
    textAlign: 'center',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  submitButton: {
    padding: '14px 20px',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1em',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    transform: 'scale(1)',
  },
  submitButtonHover: {
    backgroundColor: '#45a049',
    transform: 'scale(1.05)',
  },
  submitButtonDisabled: {
    backgroundColor: '#999',
    cursor: 'not-allowed',
  },
  redirectText: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '1em',
    color: '#555',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
    fontWeight: '600',
  },
};

export default SignIn;
