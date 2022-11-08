import React from "react";
import "../styles/portfolioCards.css";
import { FaCss3, FaReact, FaNpm } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { BiLinkExternal } from "react-icons/bi";
import { IoMdCloseCircle } from "react-icons/io";
import {
  SiJavascript,
  SiWebpack,
  SiFirebase,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function PorfolioCards() {
  const closeCards = () => {
    document.querySelectorAll(".portfolio-card-container").forEach((o, i) => {
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://elegant-khapse-7135d5.netlify.app/"
          >
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
            NoteHub es una aplicacion con diseño "mobile only", creada para
            experimentar con varias tecnologias y crear mi primer inicio de
            sesion y database mediante firebase. Esta fue creada utilizando las
            siguientes tecnologias:
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://next-firebase-login-one.vercel.app/"
          >
            Ir al sitio
            <BiLinkExternal />
          </a>
        </div>
      </div>
      <div className="portfolio-card-container collectionA closed">
        <button onClick={closeCards}>
          Cerrar <IoMdCloseCircle />{" "}
        </button>
        <div className="portfolio-card">
          <p>
            "Collection A" es un juego web de colleccion de cartas de anime.
            Este es actualmente mi mayor proyecto, cuenta con sistema de login,
            inventario, pack opening, casino, estadisticas y logros. Fue creada
            usando las siguientes tecnologias:
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
              <SiMongodb />
            </div>
            <div>
              <SiNodedotjs />
            </div>
            <div>
              <SiExpress />
            </div>
          </ul>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://collection-a.online/"
          >
            Ir al sitio
            <BiLinkExternal />
          </a>
        </div>
      </div>
      <div className="portfolio-card-container pokeGame closed">
        <button onClick={closeCards}>
          Cerrar <IoMdCloseCircle />{" "}
        </button>
        <div className="portfolio-card">
          <p>
            Pokemon Game es un juego de pokemon, creado con React y TypeScript,
            utilizando la Pokemon API. En este proyecto logre mejorar la
            legibilidad de mi codigo, aprendiendo a utilizar correctamente los
            componentes, los custom-hooks, organizando de manera mas ordenada
            los archivos, etc. (Actualmente se encuentra en desarrollo)
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
              <SiNodedotjs />
            </div>
            <div>
              <SiTypescript />
            </div>
          </ul>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://aesthetic-dodol-e83ac8.netlify.app/"
          >
            Ir al sitio
            <BiLinkExternal />
          </a>
        </div>
      </div>
      <div className="portfolio-card-container infinityGradients closed">
        <button onClick={closeCards}>
          Cerrar <IoMdCloseCircle />{" "}
        </button>
        <div className="portfolio-card">
          <p>
            "Infinity Gradients" es una pagina web que genera automaticamente
            backgrounds gradient para usar copiar rapido y facil. Fue creado
            utilizando:
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
            href="https://lucent-haupia-90f91b.netlify.app/"
          >
            Ir al sitio
            <BiLinkExternal />
          </a>
        </div>
      </div>
    </>
  );
}
