import React from 'react';

const DonationSelect = ({handleChange, selectedAnimal})=> {
  // console.log('select', handleChange, selectedAnimal);
  return (
    <div className="animal-select">
      <p>I want to help</p>
      <select
        className="animal rounded-0"
        onChange={handleChange}
        name={selectedAnimal}
        id={selectedAnimal}
      >
        <option value="">choose an animal</option>
        <option value="giraffe">a giraffe</option>
        <option value="tiger">a tiger</option>
        <option value="rhino">a rhino</option>
      </select>
    </div>
  );
};

export default DonationSelect;
