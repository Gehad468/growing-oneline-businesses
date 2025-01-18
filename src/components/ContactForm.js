import React from "react";
import GradientButton from "./buttons";
import { BsFillEnvelopeFill, BsFillChatLeftDotsFill } from "react-icons/bs";
import Man2 from "../images/man22.png";
import "../Contact.css";

const ContactForm = () => {
  return (
    <section className="contact-section">
      <div className="help">
        <div className="row-contact">
          <form action="" className="contact-form">
            <h2>Write Us</h2>

            <div className="input-wrapper">
              <BsFillEnvelopeFill className="icon" />
              <input type="email" placeholder="Your Email" className="box" />
            </div>

            <div className="textarea-wrapper">
              <BsFillChatLeftDotsFill className="icon" />
              <textarea
                placeholder="Enter your message"
                cols="30"
                rows="10"
                className="message"
              ></textarea>
            </div>

            <GradientButton text="SEND YOUR MESSAGE"></GradientButton>
          </form>
          <div className="contact-image">
            <img src={Man2} alt="man2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
