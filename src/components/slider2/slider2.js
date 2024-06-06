import React, { useEffect, useState } from "react";
import Seta from "../../assets/novas imagens/Captura_de_tela_2024-05-23_025400-removebg-preview.png"
import Imagem1 from "../../assets/novas imagens/Imagem1.jpg"
import Imagem2 from "../../assets/novas imagens/Imagem2.jpeg"
import Imagem3 from "../../assets/novas imagens/Imagem3.jpeg"
import './slider2.css'

function Slider2() {

    useEffect(()=> {

        const slider = document.querySelectorAll('.slider2');
        const prevButton = document.getElementById('prev-button2')
        const nextButton = document.getElementById('next-button2')

        let currentIndex = 0;

        function hideSlider() {
            slider.forEach((item)=> {
                item.classList.remove('on')
            })
        }

        function showSlider() {
            slider[currentIndex].classList.add('on');
        }

        function previousSlider(){
            hideSlider();
            if (currentIndex === 0) {
                currentIndex = slider.length -1;
            } else {
                currentIndex--
            }
            showSlider()
        }

        function nextSlider(){
            hideSlider();
            if (currentIndex === slider.length -1) {
                currentIndex = 0;
            } else {
                currentIndex++
            }
            showSlider()
        }

        prevButton.addEventListener('click', previousSlider);
        nextButton.addEventListener('click', nextSlider);

    }, [])


    return (
        <>
            <div className="slider-countainer2">
                <button id="prev-button2">
                    <img src={Seta} alt="Button Image" className="button-image2"/>
                </button>
                <div className="sliders2">
                    <img src={Imagem1} alt="Primeira Imagem" className="slider2 on"/>
                    <img src={Imagem2} alt="Segunda Imagem" className="slider2"/>
                    <img src={Imagem3} alt="Terceira Imagem" className="slider2"/>
                </div>
                <button id="next-button2">
                    <img src={Seta} alt="Button Image" className="button-image2"/>
                </button>
            </div>
        </>
    )
}

export default Slider2;