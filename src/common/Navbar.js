import React from 'react';


const MainNav =({handleClick, condition})=>{

  return (
    <nav>
      <img src="src/assets/logos/lts-logo-dark.svg" alt="Little Zebra Foundation Logo Dark" />
      <ul onClick={handleClick} className={ condition ? 'nav menu opened' : 'nav menu'}>
        <li className=""><a href="/" className="nav-links">What we do</a></li>
        <li className=""><a href="/about" className="nav-links">Get Involved</a></li>
        <li className=""><a href="/projects" className="nav-links">Shop</a></li>
        <li className=""><a href="/contact" className="nav-links">News</a></li>
      </ul>
      <div className="search">
        <span className="fa fa-search"></span>
        <input placeholder="Search here"/>
      </div>
      <button className="green">DONATE NOW</button>
    </nav>
  );
  // }
};

export default MainNav;
