import React from 'react';
import '../App.css';
import { BsSearch } from'react-icons/bs';
import Man from '../images/man1.png';
import dots from '../images/dots.png';
const Header = () => {
  return (
    <section className='header-section'>
    <div >
        <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">Get Started Now</a></li>
        </ul>
    </div >
    <div className='text-header'>
      <div>
<img src={Man} alt="Man" />
      </div>
      <div className='right-header'>
   <h1>We Help You Build & Grow an Online Business</h1> 
   
   <div className="input-container">
          <input
            placeholder="Tell us what you need to build..."
            className="input-header"
          />
          <BsSearch className="search-icon" />
        </div>
        <div className='dots-img'>
   <img src={dots} alt="Dots"  />
   </div>
   </div>

   </div>
  
    </section>

  );
};

export default Header;
