import React from 'react';

const DonorList = ({ donors }) => {
  return (
    <ul>
      {donors.map((donor) => (
        <li key={donor._id}>{donor.name} - {donor.bloodType}</li>
      ))}
    </ul>
  );
};

export default DonorList;
