import React from 'react'
import '../styles/calculadora.css';
import BotonCalc from './botonCalc';
import {Pantalla} from './pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';

export default function Calculadora() {

    const [input, setInput] = useState("");
    function agregarInput(val){
        let subs = Array.from(input);
        subs = subs[subs.length-1];
        if (((subs != "+") && (subs != "-") && (subs != "*") && (subs != "/")) || (val >= 0)) {
            setInput(input + val);
        }
    };
    function borrarUlt(){
        const aa = Array.from(input);
        aa.pop();
        setInput(aa.join(""));
    };
    function borrarTodo(){
        setInput("");
    };
    function calcular(){
        let subs = Array.from(input);
        let aa = evaluate(input);
        if(input && (subs[subs.length-1] >= 0)){
            setInput(aa);
        }
    };

  return (
    <>
        <div className='calculadora closed'>
            <Pantalla input={input} />
            <div className='botones-div'>
                <div className='fila'>
                    <BotonCalc click={borrarTodo} tipo="operador">C</BotonCalc>
                    <BotonCalc click={agregarInput} tipo="operador">/</BotonCalc>
                    <BotonCalc click={agregarInput} tipo="operador">*</BotonCalc>
                    <BotonCalc click={borrarUlt} tipo="operador">🢘</BotonCalc>
                </div>
                <div className='fila'>
                    <BotonCalc click={agregarInput} tipo="numero">7</BotonCalc>
                    <BotonCalc click={agregarInput} tipo="numero">8</BotonCalc>
                    <BotonCalc click={agregarInput} tipo="numero">9</BotonCalc>
                    <BotonCalc click={agregarInput} tipo="operador">-</BotonCalc>
                </div>
                <div className='fila'>
                    <BotonCalc click={agregarInput} tipo="numero">4</BotonCalc>
                    <BotonCalc click={agregarInput} tipo="numero">5</BotonCalc>
                    <BotonCalc click={agregarInput} tipo="numero">6</BotonCalc>
                    <BotonCalc click={agregarInput} tipo="operador">+</BotonCalc>
                </div>
                <div className='fila'>
                    <BotonCalc click={agregarInput} tipo="numero">1</BotonCalc>
                    <BotonCalc click={agregarInput} tipo="numero">2</BotonCalc>
                    <BotonCalc click={agregarInput} tipo="numero">3</BotonCalc>
                    <BotonCalc click={calcular} tipo="operador">=</BotonCalc>
                </div>
                <div className='fila'>
                    <BotonCalc click={agregarInput} tipo="numero">0</BotonCalc>
                    <BotonCalc click={agregarInput} tipo="numero">.</BotonCalc>
                </div>
            </div>
            
        </div>
    </>
  )
}
