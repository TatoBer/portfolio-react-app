import React from "react";
import "../styles/portfolioCards.css";
import { FaCss3, FaReact, FaNpm } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { BiLinkExternal } from "react-icons/bi";
import { IoMdCloseCircle } from "react-icons/io";
import { SiJavascript, SiWebpack, SiFirebase } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

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
            Esta fue creada utilizando las siguientes tecnologias:{" "}
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
            rel="noreferrer"
            href="https://glowing-paprenjak-aa0225.netlify.app/"
          >
            Ir al sitio
            <BiLinkExternal />
          </a>
        </div>
      </div>
      <div className="portfolio-card-container buttonCreator closed">
        <button onClick={closeCards}>
          Cerrar <IoMdCloseCircle />{" "}
        </button>
        <div className="portfolio-card">
          <p>
            button<b>creator</b> es una app web, la cual fue creada con la
            finalidad de crear botones con estilos personalizados de una manera
            facil y rapida. Esta fue llevada a cabo utilizando las siguientes
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
          <a target="_blank" rel="noreferrer" href="https://elegant-khapse-7135d5.netlify.app/">
            Ir al sitio
            <BiLinkExternal />
          </a>
        </div>
      </div>
      <div className="portfolio-card-container NoteHub closed">
        <button onClick={closeCards}>
          Cerrar <IoMdCloseCircle />{" "}
        </button>
        <div className="portfolio-card">
          <p>
            NoteHub es una aplicacion con diseño "mobile only", creada para experimentar con varias
            tecnologias y crear mi primer inicio de sesion y database mediante firebase.
            Esta fue creada utilizando las siguientes tecnologias:
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
            <div>
              <SiFirebase />
            </div>
            <div>
              <TbBrandNextjs />
            </div>
          </ul>
          <a target="_blank" rel="noreferrer" href="https://next-firebase-login-one.vercel.app/">
            Ir al sitio
            <BiLinkExternal />
          </a>
        </div>
      </div>
    </>
  );
}
