import React from "react";
import "./ContactHome.css";
import emailBox from "../../Assets/emailbox.png";

const ContactHome = () => {
  return (
    <div className="secounddivdeails">
      <h1 className="deatilsfonttyello">
        Have an Awesome Project Idea? <br /> Let’s Discuss
      </h1>

      <div className="contactbar">
        <img src={emailBox} alt="Email" />
        <h1 className="EnterEmailtext">Enter Email Address</h1>
        <div className="buttionorange">
          <h1 className="sendbutttontext">Send</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;