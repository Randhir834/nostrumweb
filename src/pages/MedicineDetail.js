import React from 'react';
import { useParams } from 'react-router-dom';

const MedicineDetail = () => {
  const { id } = useParams();

  const medicines = [
    { id: 1, name: 'Paracetamol', description: 'Used for relieving pain and reducing fever.' },
    { id: 2, name: 'Ibuprofen', description: 'A non-steroidal anti-inflammatory drug (NSAID).' },
    { id: 3, name: 'Antibiotic', description: 'Used to treat bacterial infections.' },
  ];

  const medicine = medicines.find((med) => med.id === parseInt(id));

  return (
    <div style={styles.container}>
      {medicine ? (
        <>
          <h2>{medicine.name}</h2>
          <p>{medicine.description}</p>
        </>
      ) : (
        <p>Medicine not found!</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
};

export default MedicineDetail;
