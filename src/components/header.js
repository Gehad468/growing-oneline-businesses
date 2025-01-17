import React from 'react';
import '../App.css';
import { BsSearch } from'react-icons/bs';
const Header = () => {
  return (
    <section>
    <div >
        <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">Get Started</a></li>
        </ul>
    </div >
    <div className='text-header'>
   <h1>We Help You Build & Grow an Online Business</h1> 
   <div className="input-container">
          <input
            placeholder="Tell us what you need to build..."
            className="input-header"
          />
          <BsSearch className="search-icon" />
        </div>
   </div>
    </section>

  );
};

export default Header;
