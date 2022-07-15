import React from 'react'
import Nav from './components/nav'
import './styles/Home.css'
import gmailImg from './images/gmail.png'
import topggImg from './images/topgg.png'
import twitchImg from './images/twitch.png'
import youtubeImg from './images/youtube.png'
import calcImg from './images/calculator.png'
import Boton2 from './components/boton2'
import MainName from './components/mainName'
import kakImg from './images/kak.webp'
import celImg from './images/phone.png'
import toolsImg from './images/tools.png'
import carpetaImg from './images/carpeta.png'
import TradeApp from './TradeApp'
import Calculadora from './components/calculadora'
import Technologies from './components/technologies'

export default function Home() {

    

    function toggleTrade() {
        const ventanaCalc = document.querySelector(".calculadora")
        const ventanaTrade = document.querySelector(".trade-app")
        setTimeout(() => {
        ventanaTrade.classList.toggle("closed")
        ventanaCalc.classList.add("closed")
        }, 5);
        
    };

    function toggleCalc() {
        const ventanaCalc = document.querySelector(".calculadora")
        const ventanaTrade = document.querySelector(".trade-app")
        setTimeout(() => {
        ventanaCalc.classList.toggle("closed")
        ventanaTrade.classList.add("closed")
        }, 5);
        
    };

    function toggleTools() {
        setTimeout(() => {
        const ventana = document.querySelector(".tech-container")
        ventana.classList.toggle("closed")
        }, 5);
        
    };

  return (
    <>
    <Nav>HOME</Nav>
    <main>
        
        <MainName>TATO</MainName>
        <div className='direct-access'>
            <h1>ABOUT ME</h1>
            <div className='access-container'>
                <Boton2 func={toggleTools} img={toolsImg} text="Technologies"/>
                <Boton2 func={null} img={carpetaImg} text="Portfolio"/>
                <Boton2 func={null} img={celImg} text="Contact"/>
            </div>
            <Technologies />
        </div>
        <hr />
        <div className='direct-access mudae'>
            <h1>TOOLS</h1>
            <div className='access-container mudae-container'>
                <Boton2 func={toggleTrade} img={kakImg} text="Mudae calc."/>
                <Boton2 func={toggleCalc} img={calcImg} text="Calculator"/>
            </div>
            <TradeApp/>
            <Calculadora />
        </div>
        <hr />
    </main>
    </>
    
  )
  
}
