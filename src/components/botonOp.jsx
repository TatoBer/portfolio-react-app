import React from 'react'
import '../styles/botonOp.css'

export default function BotonOp({children, click}) {
  return (
    <button onClick={click} className="custom-btn btn-11">{children}<div class="dot"></div></button>
  )
}
