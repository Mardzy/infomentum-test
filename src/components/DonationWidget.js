import React from 'react';

const DonationWidget = ()=> {
  return (
    <div id="donation" className="row no-gutters">
      <div className="col-lg-10 donation-left">
        <h2>MAKE A DONATION</h2>
        <div className="animal-select">
          <p>I want to help</p>
          <select className="animal rounded-0" value=''>
            <option value="a giraffe">a giraffe</option>
            <option value="a tiger">a tiger</option>
            <option value="a rhino">a rhino</option>
          </select>
        </div>
      </div>
      <div className="col-lg-2">
        <img src="src/assets/giraffe-image.jpg" alt="Donated Animal"/>
      </div>
    </div>
  );
};

export default DonationWidget;
