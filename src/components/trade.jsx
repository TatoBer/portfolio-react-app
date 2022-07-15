import React from 'react'
import { TiDelete } from "react-icons/ti";
import kakImg from '../images/kak.webp';
import keyImg from '../images/key.webp';

export default function Trade({kak,keys,id,desact,lado,eliminarTrade}) {
  return (
    <div className={desact} >
        <span>
            <img src={kakImg} alt='kakera' />
            <h4>{kak}</h4>
        </span>
        <span>
            <img src={keyImg} alt='kakera' />
            <h4>{keys}</h4>
        </span>
        <div onClick={()=>eliminarTrade(id, lado)}>
            <TiDelete />
        </div>
    </div>
  )
}
