import React from "react";
import GradientButton from "./buttons";
import TextBlock from "./TextBlock";
import { BsFillPlayCircleFill } from "react-icons/bs";

const DoingSection = () => {
  return (
    <div className="doing">
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
  );
};

export default DoingSection;
