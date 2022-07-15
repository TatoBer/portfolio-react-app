import React from 'react'
import '../styles/nav.css';
import { GrHomeRounded } from "react-icons/gr";

export default function Nav({children}) {
  return (

    <>
      <nav className='main-nav'>
          <a href="#inicio">
            <h2>{children}</h2>
          </a>
      </nav>
      <div id='inicio' className='top-separator'></div>
    </>
    
  )
}
