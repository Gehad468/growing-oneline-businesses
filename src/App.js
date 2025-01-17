// src/App.js
import React from 'react';
import Background1 from './components/background1';
import Header from './components/header';
import HelpingSection from './components/HelpingSection';
import ContactForm from './components/ContactForm';
import Cards from './components/Card';
import DoingSection from './components/DoingSection';
const App = () => {
  return (
    <div>
      {/* <Background1 /> */}
      {/* <Header /> */}
      {/* <Cards/> */}
      {/* <Features /> */}
      <HelpingSection />
      <DoingSection/>
      {/* <ContactForm /> */}
    </div>
  );
};

export default App;
