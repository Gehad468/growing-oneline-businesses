import React from 'react';
import { BsFillPlayCircleFill } from "react-icons/bs";
import GradientButton from './buttons';
import TextBlock from './TextBlock';
import icom from '../images/icom.png';
import smart from '../images/Smart.png';
import media from '../images/media.png';
import westin from '../images/westin-guest-office.svg';
import live from '../images/live.jpg';
import chair from '../images/chair.png';
import headphone from'../images/headphone.png';
import ProductBlock from './productBlock';
const HelpingSection = () => {


  return (
    <section>
   <div   className="companies-section">
  <span>Companies we've helped build.</span>
  <div className="logos">
  <img src={icom} alt="Company 1" />
  <img src={smart} alt="Company 2" />
  <img src={media} alt="Company 3" />
  <img src={westin} alt="Company 4" />
  <img src={live} alt="Company 5" />
</div>

</div>


  <div className='help'>

      <TextBlock
        title="WE HELP YOU"
        subtitle="Sell Stunning Products"
        description="We 'll guide you through our unique 5-step brand building framework"
      />
   
    

  <div className="products-section">
      <ProductBlock
        image={chair}
        title="Minimal Chair"
        price="204.00"
        backgroundColor="#F6D982"
      />
      <ProductBlock
        image={headphone}
        title="Headphone"
        price="74.00"
        backgroundColor="#C3A8F6"
      />
    </div>

    </div>
    <GradientButton
        text="MORE DETAILS"
        icon={<BsFillPlayCircleFill />}
      ></GradientButton>
  </section>
  );
};
export default HelpingSection;
