import React from 'react';

const Footer = ()=> {
  return (
    <footer>
      <div className="container">
        <ul className="mb-3 row nav">
          <li className="col-md-2 col-sm-4"><a>WHO WE ARE</a></li>
          <li className="col-md-2 col-sm-4"><a>GET INVOLVED</a></li>
          <li className="col-md-2 col-sm-4"><a>FOLLOW US</a></li>
        </ul>
        <div className="row mr-0">
          <ul className="col-md-2 col-sm-4">
            <li><a href="#">Our history</a></li>
            <li><a href="#">Press centre</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
          <ul className="col-md-2 col-sm-4">
            <li><a href="#">Join us</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
          <ul className="col-md-2 col-sm-3 nav justify-content-around p-0 ml-2">
            <li><a href="#"><img src="src/assets/logos/facebook-logo.svg" alt="facebook logo"/></a></li>
            <li><a href="#"><img src="src/assets/logos/pinterest-logo.svg" alt="pinterest logo"/></a></li>
            <li><a href="#"><img src="src/assets/logos/twitter-logo.svg" alt="twitter logo"/></a></li>
            <li><a href="#"><img src="src/assets/logos/youtube-logo.svg" alt="youtube logo"/></a></li>
          </ul>
          <div className="col-md-2   address">
            <img src="src/assets/logos/lts-logo-light.svg" alt="light logo"/>
            <ul className="address-list">
              <li>3 Warren Rd,</li>
              <li>Mary Tavy,</li>
              <li>Tavistock PL19 9PF,</li>
              <li>United Kingdom</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
