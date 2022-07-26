import React from "react";
import Nav from "./components/nav";
import "./styles/Home.css";
import gmailImg from "./images/gmail.png";
import topggImg from "./images/topgg.png";
import twitchImg from "./images/twitch.png";
import youtubeImg from "./images/youtube.png";
import calcImg from "./images/calculator.png";
import Boton2 from "./components/boton2";
import MainName from "./components/mainName";
import kakImg from "./images/kak.webp";
import celImg from "./images/phone.png";
import toolsImg from "./images/tools.png";
import carpetaImg from "./images/carpeta.png";
import TradeApp from "./TradeApp";
import Calculadora from "./components/calculadora";
import Technologies from "./components/technologies";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Portfolio from "./components/portfolio";
import PorfolioCards from "./components/porfolioCards";

export default function Home() {
  function toggleTrade() {
    const ventanaCalc = document.querySelector(".calculadora");
    const ventanaTrade = document.querySelector(".trade-app");
    setTimeout(() => {
      ventanaTrade.classList.toggle("closed");
      ventanaCalc.classList.add("closed");
    }, 5);
  }

  function toggleCalc() {
    const ventanaCalc = document.querySelector(".calculadora");
    const ventanaTrade = document.querySelector(".trade-app");
    setTimeout(() => {
      ventanaCalc.classList.toggle("closed");
      ventanaTrade.classList.add("closed");
    }, 5);
  }

  return (
    <>
      <Nav>INICIO</Nav>
      <PorfolioCards />
      <main>
        <MainName>TATO</MainName>
        <div className="direct-access">
          <h1>SOBRE MI</h1>
          <div className="access-container">
            <Boton2
              href="#skillset"
              func={null}
              img={toolsImg}
              text="Skillset"
            />
            <Boton2
              href="#portfolio"
              func={null}
              img={carpetaImg}
              text="Portafolio"
            />
            <Boton2 href="#contact" func={null} img={celImg} text="Contacto" />
          </div>
          <Technologies />
          <Portfolio />
          <Contact />
        </div>
        <hr />
        <div className="direct-access mudae">
          <h1>EXTRAS</h1>
          <div className="access-container mudae-container">
            <Boton2 func={toggleTrade} img={kakImg} text="Mudae calc." />
            <Boton2 func={toggleCalc} img={calcImg} text="Calculadora" />
          </div>
          <TradeApp />
          <Calculadora />
        </div>
        <Footer />
      </main>
    </>
  );
}
