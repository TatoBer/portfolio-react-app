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
        setTimeout(() => {
        const ventana = document.querySelector(".trade-app")
        ventana.classList.toggle("closed")
        }, 5);
        
    };

    function toggleCalc() {
        setTimeout(() => {
        const ventana = document.querySelector(".calculadora")
        ventana.classList.toggle("closed")
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
            <h1>DIRECT ACCESS</h1>
            <div className='access-container'>
                <Boton2 target="_blank" href="https://mail.google.com/mail/?tab=rm&authuser=0&ogbl" img={gmailImg} text="Gmail"/>
                <Boton2 target="_blank" href="https://www.youtube.com/" img={youtubeImg} text="YouTube" />
                <Boton2 target="_blank" href="https://top.gg/bot/432610292342587392/vote" img={topggImg} text="TopGG" />
                <Boton2 target="_blank" href="https://www.twitch.tv/" img={twitchImg} text="Twitch" />
            </div>
        </div>
        <hr />
        <div className='direct-access mudae'>
            <h1>MUDAE TOOLS</h1>
            <div className='access-container mudae-container'>
                <Boton2 func={toggleTrade} img={kakImg} text="Trade calc."/>
            </div>
            <TradeApp/>
        </div>
        <hr />
        <div className='direct-access'>
            <h1>EXTRAS</h1>
            <div className='access-container'>
                <Boton2 func={toggleCalc} img={calcImg} text="Calculator"/>
            </div>
            <Calculadora />
        </div>
        <hr />
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
    </main>
    </>
    
  )
}
