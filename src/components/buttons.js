import React from 'react';
import '../Button.css'; 

const GradientButton = ({ text,icon }) => {
  return (
    <button className="gradient-button">
      {text}
      {icon && <span className="button-icon">{icon}</span>}
    </button>
  );
};

export default GradientButton;
