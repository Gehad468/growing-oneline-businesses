import React from "react";
import GradientButton from "./buttons";
import TextBlock from "./TextBlock";
import { BsFillPlayCircleFill } from "react-icons/bs";

const DoingSection = () => {
  return (
    <div className="doing-section">
      <div className="doing-container">
        <div className="numbers-circles">
          <div className="circle-container">
            <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#00C989"
                d="M67.9,-53.3C84.1,-33.9,90.7,-5.8,84.2,18C77.8,41.8,58.4,61.4,35.5,71.6C12.6,81.8,-13.8,82.6,-34.6,72.4C-55.4,62.2,-70.6,40.9,-75.7,17.6C-80.8,-5.8,-75.8,-31.1,-61.5,-50.2C-47.2,-69.2,-23.6,-81.9,1.1,-82.8C25.9,-83.7,51.7,-72.8,67.9,-53.3Z"
                transform="translate(100 100)"
              />
            </svg>
            <div className="circle-text">
              <h3>$7,654</h3>
              <p>Total Revenue</p>
            </div>
          </div>

          <div className="circle-container">
            <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#00B8D9"
                d="M67.9,-53.3C84.1,-33.9,90.7,-5.8,84.2,18C77.8,41.8,58.4,61.4,35.5,71.6C12.6,81.8,-13.8,82.6,-34.6,72.4C-55.4,62.2,-70.6,40.9,-75.7,17.6C-80.8,-5.8,-75.8,-31.1,-61.5,-50.2C-47.2,-69.2,-23.6,-81.9,1.1,-82.8C25.9,-83.7,51.7,-72.8,67.9,-53.3Z"
                transform="translate(100 100)"
              />
            </svg>
            <div className="circle-text">
              <h3>$9,978</h3>
              <p>Total Revenue</p>
            </div>
          </div>
        </div>

        <div className="text-section">
          <TextBlock
            title="WHAT WE DO"
            subtitle="Increase our Customers Sales"
            description="Our Customers are seeing big results within the first three months"
          />
          <GradientButton
            text="MORE DETAILS"
            icon={<BsFillPlayCircleFill />}
          ></GradientButton>
        </div>
      </div>
    </div>
  );
};

export default DoingSection;
