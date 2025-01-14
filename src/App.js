// src/App.js
import React from 'react';
import Background1 from './components/background1';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import Features from './components/features';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <div>
      <Background1 />
      <Header />
      <HeroSection />
      <Features />
      <ContactForm />
    </div>
  );
};

export default App;
