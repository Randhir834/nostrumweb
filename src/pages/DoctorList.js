// src/pages/DoctorList.js
import React from 'react';
import { Link } from 'react-router-dom';

const DoctorList = () => {
  // Sample doctors array
  const doctors = [
    { id: 1, name: 'Dr. John Doe' },
    { id: 2, name: 'Dr. Jane Smith' }
  ];

  return (
    <div>
      <h2>Doctors Available</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            <Link to={`/doctors/${doctor.id}`}>{doctor.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
