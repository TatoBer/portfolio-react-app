import React from "react";
import OfferContainer from "./components/offerContainer";
import kakImg from "./images/kak.webp";
import keyImg from "./images/key.webp";
import "./styles/TradeApp.css";

export default function TradeApp() {
  return (
    <>
      <div className="trade-app closed">
        <div className="trade-flex-container">
          <OfferContainer n="1" />
          <OfferContainer n="2" />
        </div>
        <div className="result-container">
          <h3>PROFIT</h3>
          <div className="resultados-flex">
            <span className="kakChild">
              <img src={kakImg} alt="Kakera" />
              <div className="resultadoKak">0</div>
            </span>
            <span>
              <img src={keyImg} alt="Key" />
              <div className="resultadoKeys">0</div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
