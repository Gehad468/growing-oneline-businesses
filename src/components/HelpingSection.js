// src/components/Features.js
import React from 'react';
import { BsFillPlayCircleFill } from "react-icons/bs";
import GradientButton from './buttons';
import TextBlock from './TextBlock';
import { section } from 'framer-motion/client';
const HelpingSection = () => {


  return (
    <section>
      <div>
        <span>Companies we've helped build.
        </span>
      </div>

  <div >
      <TextBlock
        title="WE HELP YOU"
        subtitle="Sell Stunning Products"
        description="We 'll guide you through our unique 5-step brand building framework"
      />
      <GradientButton
        text="MORE DETAILS"
        icon={<BsFillPlayCircleFill />}
      ></GradientButton>
    
  </div>
  </section>
  );
};
export default HelpingSection;
