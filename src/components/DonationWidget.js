import React from 'react';

const DonationWidget = ()=> {
  return (
    <div id="donation">
      <h2>MAKE A DONATION</h2>
      <div className="animal-select">
        <p>I want to help</p>
        <select id="animal" onChange='{}' value=''>
          <option value="a giraffe">a giraffe</option>
          <option value="a tiger">a tiger</option>
          <option value="a rhino">a rhino</option>
        </select>
      </div>

    </div>
  );
};

export default DonationWidget;
