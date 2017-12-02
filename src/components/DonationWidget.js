import React from 'react';
import DonationSelect from './DonationSelect';
import DonationForm from './DonationForm';

const DonationWidget = ()=> {
  return (
    <div id="donation" className="row no-gutters">
      <div className="col-lg-9">
        <div className="container donation-left">
          <h2>MAKE A DONATION</h2>
          <DonationSelect />
          <div className="row">
            <p className="donate-sub-heading">I want to donate:</p>
          </div>
          <DonationForm />
        </div>
      </div>
      <div className="col-lg-3">
        <img src="src/assets/giraffe-image.jpg" alt="Donated Animal"/>
      </div>
    </div>
  );
};

export default DonationWidget;
