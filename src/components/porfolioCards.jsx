import React from "react";
import "../styles/portfolioCards.css";
import { FaCss3, FaReact, FaNpm } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { BiLinkExternal } from "react-icons/bi";
import { IoMdCloseCircle } from "react-icons/io";
import { SiJavascript, SiWebpack } from "react-icons/si";

export default function PorfolioCards() {
  const closeCards = () => {
    document.querySelectorAll(".portfolio-card-container").forEach((o, i) => {
      console.log(document.querySelectorAll(".portfolio-card-container")[i]);
      document
        .querySelectorAll(".portfolio-card-container")
        [i].classList.add("closed");
    });
  };

  return (
    <>
      <div className="portfolio-card-container navCreator closed">
        <button onClick={closeCards}>
          Cerrar <IoMdCloseCircle />{" "}
        </button>
        <div className="portfolio-card">
          <p>
            nav<b>creator</b> es mi primera aplicacion web con una utilidad
            real, la cual es crear navs de una manera facil, rapida y practica.
            Esta fue creada en 15 horas, y utilizando las siguientes
            tecnologias:{" "}
          </p>
          <ul>
            <div>
              <FaCss3 />
            </div>
            <div>
              <FaReact />
            </div>
            <div>
              <ImHtmlFive2 />
            </div>
            <div>
              <SiJavascript />
            </div>
            <div>
              <FaNpm />
            </div>
            <div>
              <SiWebpack />
            </div>
          </ul>
          <a
            target="_blank"
            href="https://glowing-paprenjak-aa0225.netlify.app/"
          >
            Ir al sitio
            <BiLinkExternal />
          </a>
        </div>
      </div>
    </>
  );
}