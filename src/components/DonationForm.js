import React from 'react';

const DonationForm = ()=> {
  return (
    <form>
      <div className="donation-buttons row">
        <div
          className="donation-button"
          data-id="3"
        >£3</div>
        <div
          className="donation-button"
          data-id="5"
        >£5</div>
        <div
          className="donation-button"
          data-id="10"
        >£10</div>
        <p>or</p>
        <div className="pound-input">
          <i className="fa fa-gbp" aria-hidden="true"></i>
          <input
            className="pound" type="number"
            min="11"
            max="9999999999"
          />
        </div>
      </div>
      <div className="form-check">
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input"/>
          I want to do a monthly donation
        </label>
      </div>
      <button className="green row" type="submit">DONATE NOW</button>
    </form>
  );
};

export default DonationForm;
