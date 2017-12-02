import React from 'react';

const DonationSelect = ()=> {
  return (
    <div className="animal-select">
      <p>I want to help</p>
      <select className="animal rounded-0">
        <option value="giraffe">a giraffe</option>
        <option value="tiger">a tiger</option>
        <option value="rhino">a rhino</option>
      </select>
    </div>
  );
};

export default DonationSelect;
