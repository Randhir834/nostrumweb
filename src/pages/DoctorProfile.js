// src/pages/DoctorProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';

const DoctorProfile = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Doctor Profile</h2>
      <p>Details for Doctor ID: {id}</p>
      {/* Add doctor details here */}
    </div>
  );
};

export default DoctorProfile;
