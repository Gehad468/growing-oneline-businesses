import React from "react";

const TextBlock = ({ title, subtitle, description }) => {
  return (
    <div className="text-block">
      <h4>{title}</h4>
      <h1>{subtitle}</h1>
      <p>{description}</p>
    </div>
  );
};

export default TextBlock;
