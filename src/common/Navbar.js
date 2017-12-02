import React from 'react';


const Navbar =({handleClick})=>{

  return (
    <nav>
      <img src="src/assets/logos/lts-logo-dark.svg" alt="Little Zebra Foundation Logo Dark" />
      <ul onClick={handleClick}>
        <li className=""><a href="/" className="nav-links">What we do</a></li>
        <li className=""><a href="/about" className="nav-links">Get Involved</a></li>
        <li className=""><a href="/projects" className="nav-links">Shop</a></li>
        <li className=""><a href="/contact" className="nav-links">News</a></li>
      </ul>
      <div className="search">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input placeholder="Search term"/>
      </div>
      <button className="green">DONATE NOW</button>
    </nav>
  );
  // }
};

export default Navbar;
