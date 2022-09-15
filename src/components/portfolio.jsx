import React from "react";
import "../styles/portfolio.css";
import navCreatorImg from "../images/navcreator.jpg";
import buttonCreatorImg from "../images/butcreator.jpg";
import loginAPPImg from "../images/loginapp.jpg";
import collectionAImg from "../images/collectionA.jpg";
import infinityGradientsImg from "../images/infinityGradients.jpg";

export default function Portfolio() {
  const openNavCreatorCard = () => {
    document.querySelector(".navCreator").classList.remove("closed");
  };

  const openInfinityGradients = () => {
    document.querySelector(".infinityGradients").classList.remove("closed");
  };

  const openButtonCreatorCard = () => {
    document.querySelector(".buttonCreator").classList.remove("closed");
  };

  const openCollectionACard = () => {
    document.querySelector(".collectionA").classList.remove("closed");
  };


  const openNoteHubCard = () => {
    document.querySelector(".NoteHub").classList.remove("closed");
  };

  return (
    <div className="portfolio-container">
      <div id="portfolio" className="topath"></div>
      <h2 className="abm-h2">PORTAFOLIO</h2>
      <div className="portfolio-div">
        <div className="portfolio-item" onClick={openCollectionACard}>
          <span>
            <img src={collectionAImg} alt="collection a" />
          </span>
          <h3>
            COLLECTION <b>A</b>
          </h3>
        </div>

        <div className="portfolio-item" onClick={openInfinityGradients}>
          <span>
            <img src={infinityGradientsImg} alt="InfinityGradients" />
          </span>
          <h3>
            Infinity <b>Gradients</b>
          </h3>
        </div>

        <div className="portfolio-item" onClick={openNavCreatorCard}>
          <span>
            <img src={navCreatorImg} alt="navCreator" />
          </span>
          <h3>
            nav<b>creator</b>
          </h3>
        </div>

        <div className="portfolio-item" onClick={openButtonCreatorCard}>
          <span>
            <img src={buttonCreatorImg} alt="navCreator" />
          </span>
          <h3>
            button<b>creator</b>
          </h3>
        </div>

        <div className="portfolio-item" onClick={openNoteHubCard}>
          <span>
            <img src={loginAPPImg} alt="NoteHub" />
          </span>
          <h3>
            Note<b>Hub</b>
          </h3>
        </div>
      </div>
    </div>
  );
}
