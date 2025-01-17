import React from "react";
import GradientButton from "./buttons";
import { BsFillEnvelopeFill, BsFillChatLeftDotsFill } from "react-icons/bs";

const ContactForm = () => {
  return (
    <section>
      <div className="row-contact">
        <form action="">
          <h2>Write Us</h2>

          <div className="input-wrapper">
            <BsFillEnvelopeFill className="icon" />
            <input
              type="email"
              placeholder="Your Email"
              className="box"
            />
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
      </div>
    </section>
  );
};

export default ContactForm;
