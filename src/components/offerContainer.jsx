import React from "react";
import "../styles/offerContainer.css";
import BotonOp from "./botonOp";
import kakImg from "../images/kak.webp";
import keyImg from "../images/key.webp";
import Trade from "./trade";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function OfferContainer({ n }) {
  let resKak = document.querySelector(".resultadoKak");
  let resKeys = document.querySelector(".resultadoKeys");

  function CalculateR(n) {
    const kakx = document.querySelector(`.kak${n}`).parentElement.parentElement
      .children[1].children[0].children[0].children[1].innerHTML;
    const keyx = document.querySelector(`.kak${n}`).parentElement.parentElement
      .children[1].children[0].children[1].children[1].innerHTML;
    if (n == 1) {
      resKak.innerHTML = parseInt(resKak.innerHTML) - parseInt(kakx);
      resKeys.innerHTML = parseInt(resKeys.innerHTML) - parseInt(keyx);
    } else {
      resKak.innerHTML = parseInt(resKak.innerHTML) + parseInt(kakx);
      resKeys.innerHTML = parseInt(resKeys.innerHTML) + parseInt(keyx);
    }
  }

  const [ofers, setOfers] = useState([]);

  const [kak, setKak] = useState(0);

  function manejarKak(e) {
    setKak(e.target.value);
  }

  const [keys, setKeys] = useState(0);

  function manejarKeys(e) {
    setKeys(e.target.value);
  }

  function enviarForm(e) {
    e.preventDefault();
    const nuevoTrade = {
      id: uuidv4(),
      kak: parseInt(kak),
      keys: parseInt(keys),
      desact: "",
    };

    if (parseInt(kak) >= 0 && parseInt(keys) >= 0) {
      if (ofers.length < 8) {
        setKak(0);
        setKeys(0);
        const actualizarArr = [nuevoTrade, ...ofers];
        setOfers(actualizarArr);
        document.querySelector(`.trade-container form .kak${n} input`).value =
          "";
        document.querySelector(`.trade-container form .keys${n} input`).value =
          "";
        setTimeout(() => {
          CalculateR(n);
        }, 10);
      } else {
        alert("You can't add more than 8 characters");
      }
    } else {
      alert("You can only enter numbers");
    }
  }

  function eliminarTrade(id, lado) {
    const actu = ofers.filter((ofers) => ofers.id !== id);
    const eliminado = ofers.filter((ofers) => ofers.id == id);
    const eliminadoKak = eliminado[0].kak;
    const eliminadoKeys = eliminado[0].keys;
    if (lado == 1) {
      resKak.innerHTML = parseInt(resKak.innerHTML) + parseInt(eliminadoKak);
      resKeys.innerHTML = parseInt(resKeys.innerHTML) + parseInt(eliminadoKeys);
    } else {
      resKak.innerHTML = parseInt(resKak.innerHTML) - parseInt(eliminadoKak);
      resKeys.innerHTML = parseInt(resKeys.innerHTML) - parseInt(eliminadoKeys);
    }
    setOfers(actu);
  }

  return (
    <>
      <div className="trade-container">
        <form>
          <span className={`kak${n}`}>
            <img src={kakImg} alt="kakera" />
            <input onChange={manejarKak} type="text" placeholder="0" />
          </span>
          <span className={`keys${n}`}>
            <img src={keyImg} alt="keys" />
            <input onChange={manejarKeys} type="text" placeholder="0" />
          </span>
          <BotonOp click={enviarForm}>Add</BotonOp>
        </form>
        <div className="trade-li-container active">
          {ofers.map((value) => (
            <Trade
              eliminarTrade={eliminarTrade}
              lado={n}
              key={value.id}
              id={value.id}
              kak={value.kak}
              keys={value.keys}
              desact={value.desact}
            />
          ))}
        </div>
      </div>
    </>
  );
}
