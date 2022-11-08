import React from "react";
import "../styles/portfolio.css";
import navCreatorImg from "../images/navcreator.jpg";
import buttonCreatorImg from "../images/butcreator.jpg";
import loginAPPImg from "../images/loginapp.jpg";
import collectionAImg from "../images/collectionA.jpg";
import infinityGradientsImg from "../images/infinityGradients.jpg";
import pokeGameImg from "../images/pokeGame.jpg";

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <div id="portfolio" className="topath"></div>
      <h2 className="abm-h2">PORTAFOLIO</h2>
      <div className="portfolio-div">
      <PortfolioItem
          clase=".pokeGame"
          image={pokeGameImg}
          alt="pokeGame"
          nuevo={true}
        >
          Pokemon <b>Game</b>
        </PortfolioItem>
        <PortfolioItem
          clase=".collectionA"
          image={collectionAImg}
          alt="collectionA"
        >
          COLLECTION <b>A</b>
        </PortfolioItem>
        <PortfolioItem
          clase=".infinityGradients"
          image={infinityGradientsImg}
          alt="InfinityGradients"
        >
          Infinity <b>Gradients</b>
        </PortfolioItem>
        <PortfolioItem
          clase=".navCreator"
          image={navCreatorImg}
          alt="NavCreator"
        >
          nav<b>creator</b>
        </PortfolioItem>
        <PortfolioItem
          clase=".buttonCreator"
          image={buttonCreatorImg}
          alt="ButtonCreator"
        >
          button<b>creator</b>
        </PortfolioItem>
        <PortfolioItem clase=".NoteHub" image={loginAPPImg} alt="NoteHub">
          Note<b>Hub</b>
        </PortfolioItem>
      </div>
    </div>
  );
}

const PortfolioItem = ({ image, children, alt, clase, nuevo }) => {
  return (
    <div
      className="portfolio-item"
      onClick={() => document.querySelector(clase).classList.remove("closed")}
    >
      <span>
        <img src={image} alt={alt} />
      </span>
      <h3>{children}</h3>
      {nuevo &&<div className="new">NEW!</div>}
    </div>
  );
};
