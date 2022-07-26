import React from "react";
import "../styles/botonCalc.css";

export default function BotonCalc({ children, tipo, click }) {
  return (
    <div className={`boton-calc ${tipo}`} onClick={() => click(children)}>
      {children}
    </div>
  );
}
