// src/App.js
import React from 'react';
import Background1 from './components/background1';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import Features from './components/features';
import ContactForm from './components/ContactForm';
import Cards from './components/Card';
const App = () => {
  return (
    <div>
      {/* <Background1 /> */}
      <Header />
      <Cards/>
      <HeroSection />
      <Features />
      <ContactForm />
    </div>
  );
};

export default App;
