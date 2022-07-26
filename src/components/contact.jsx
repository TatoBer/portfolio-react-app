import React from "react";
import imgWsp from "../images/wspp.png";
import imgMail from "../images/mail.png";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div id="contact" className="topath"></div>
      <h2 className="abm-h2">CONTACTO</h2>
      <div className="cont-a-div">
        <a
          className="contact-div"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=543412676961&text=Hello,%20I%20contact%20you%20to%20consult%20for%20a%20customized%20web%20page"
        >
          <img src={imgWsp} alt="WhatsApp" />
          <p>WhatsApp</p>
        </a>
        <a className="contact-div" target="_blank">
          <img src={imgMail} alt="Mail" />
          <p>eMail</p>
        </a>
      </div>
    </div>
  );
}
