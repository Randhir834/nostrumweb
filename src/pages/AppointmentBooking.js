// src/pages/AppointmentBooking.js
import React, { useState } from 'react';

const AppointmentBooking = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBooking = () => {
    alert(`Appointment booked on ${date} at ${time}`);
    // Add booking logic here
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <button onClick={handleBooking}>Book Appointment</button>
    </div>
  );
};

export default AppointmentBooking;
