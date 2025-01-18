import React from 'react';

import ContactForm from '../components/ContactForm';
import Cards from '../components/Card';
import DoingSection from '../components/DoingSection';
const LeftSide = () => {
  return (
    <div >
       <Cards/>
      <DoingSection/>
      <ContactForm />
    </div>
  );
};

export default LeftSide;
