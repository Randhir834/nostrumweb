import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link to navigate

const MedicineDelievery = () => {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const medicines = [
    { id: 1, name: 'Paracetamol', price: 10 },
    { id: 2, name: 'Ibuprofen', price: 15 },
    { id: 3, name: 'Antibiotic', price: 20 },
  ];

  const addToCart = (medicine) => {
    setCart([...cart, medicine]);
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Available Medicines</h2>
      <div style={styles.medicineList}>
        {medicines.map((medicine) => (
          <div key={medicine.id} style={styles.medicineCard}>
            <h4>{medicine.name}</h4>
            <p>Price: ${medicine.price}</p>
            <button style={styles.addButton} onClick={() => addToCart(medicine)}>Add to Cart</button>

            {/* Button to navigate to medicine detail page */}
            <Link to={`/medicine-delievery/${medicine.id}`} style={styles.viewButton}>View Details</Link>
          </div>
        ))}
      </div>

      <h3 style={styles.cartHeading}>Cart</h3>
      <div style={styles.cartSection}>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul style={styles.cartList}>
              {cart.map((item, index) => (
                <li key={index}>{item.name} - ${item.price}</li>
              ))}
            </ul>
            <button style={styles.checkoutButton} onClick={handleCheckout}>Proceed to Checkout</button>
          </>
        )}
      </div>

      {showCheckout && (
        <div style={styles.checkoutSection}>
          <h4>Checkout Form</h4>
          <form>
            <label>
              Name:
              <input type="text" name="name" required style={styles.input} />
            </label>
            <label>
              Address:
              <input type="text" name="address" required style={styles.input} />
            </label>
            <label>
              Payment Method:
              <select name="paymentMethod" required style={styles.select}>
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
              </select>
            </label>
            <button type="submit" style={styles.submitButton}>Submit Order</button>
          </form>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  medicineList: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  medicineCard: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '200px',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  viewButton: {
    display: 'block',
    marginTop: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    textAlign: 'center',
  },
  cartHeading: {
    marginTop: '30px',
  },
  cartSection: {
    marginTop: '20px',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#f7f7f7',
  },
  cartList: {
    listStyleType: 'none',
    padding: 0,
  },
  checkoutButton: {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  checkoutSection: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  select: {
    display: 'block',
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  submitButton: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default MedicineDelievery;
