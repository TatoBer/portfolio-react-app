import React from "react";
import imgWsp from "../images/wspp.png";
import imgMail from "../images/mail.png";
import "../styles/contact.css";

const copyMail = async () => {
  navigator.clipboard.writeText("tatobernardini@gmail.com");
  const alr = document.querySelector(".copy-mail");
  alr.classList.add("in");
  setTimeout(() => {
    alr.classList.remove("in");
  }, 2000);
};

export default function Contact() {
  return (
    <div className="contact-container">
      <div id="contact" className="topath"></div>
      <h2 className="abm-h2">CONTACTO</h2>
      <div className="cont-a-div">
        <a
          className="contact-div"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=543412676961&text=Hola%20Tato!"
        >
          <img src={imgWsp} alt="WhatsApp" />
          <p>WhatsApp</p>
        </a>
        <a className="contact-div" target="_blank" onClick={copyMail}>
          <img src={imgMail} alt="Mail" />
          <p>eMail</p>
        </a>
      </div>
    </div>
  );
}
