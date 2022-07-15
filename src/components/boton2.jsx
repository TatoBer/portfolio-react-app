import React from 'react'
import '../styles/boton2.css'

export default function Boton2({href, img, text, target, func}) {
  return (
    <div className='boton-2-div'>
      <a onClick={func} className='button-2' href={href} target={target}>
        <img src={img} alt={text}  />
      </a>
      <span class="tooltip-2">{text}</span>
    </div>
  )
}
