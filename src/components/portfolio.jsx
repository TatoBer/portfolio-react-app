import React from "react";
import "../styles/portfolio.css";
import navCreatorImg from "../images/navcreator.jpg";

export default function Portfolio() {
  const openNavCreatorCard = () => {
    document.querySelector(".navCreator").classList.remove("closed");
  };

  return (
    <div className="portfolio-container">
      <div id="portfolio" className="topath"></div>
      <h2 className="abm-h2">PORTAFOLIO</h2>
      <div className="portfolio-div">
        <div className="portfolio-item" onClick={openNavCreatorCard}>
          <span>
            <img src={navCreatorImg} alt="navCreator" />
          </span>
          <h3>
            nav<b>creator</b>
          </h3>
        </div>
      </div>
    </div>
  );
}
