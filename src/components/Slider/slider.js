import React, { useEffect } from "react";
import './slider.css'
import Imagem1 from '../../assets/novas imagens/Imagem1.jpg'
import Imagem2 from '../../assets/novas imagens/Imagem2.jpeg'
import Imagem3 from '../../assets/novas imagens/Imagem3.jpeg'
import Imagem4 from '../../assets/novas imagens/Imagem4.jpeg'
import Imagem5 from '../../assets/novas imagens/Captura_de_tela_2024-05-23_025400-removebg-preview.png'


function Slider() {

    useEffect(()=> {

        const slider = document.querySelectorAll('.slider');
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');

        let currentSlider = 0;

        function hideSlider() {
            slider.forEach(item => item.classList.remove('on'));
        }

        function showSlider() {
            slider[currentSlider].classList.add('on');
        }

        function prevSlider() {
            hideSlider()
            if(currentSlider === 0){
                currentSlider = slider.length -1;
            } else {
                currentSlider--
            }
            showSlider();
        }

        function nextSlider() {
            hideSlider()
            if(currentSlider === slider.length -1){
                currentSlider = 0;
            } else {
                currentSlider++
            }
            showSlider();
        }

        prevButton.addEventListener('click', prevSlider);
        nextButton.addEventListener('click', nextSlider);


    },[])

    
    
    return (
        <>
            <div className="slider-container">
                <button id="prev-button">
                    <img src={Imagem5} alt="previous button" className="img-previous-button"/>
                </button>
                <div className="sliders">
                    <img src={Imagem1} alt="Imagem" className="slider on"/>
                    <img src={Imagem2} alt="Imagem" className="slider"/>
                    <img src={Imagem3} alt="Imagem" className="slider"/>
                    <img src={Imagem4} alt="Imagem" className="slider"/>
                </div>
                <button id="next-button">
                    <img src={Imagem5} alt="next button" className="img-next-button"/>
                </button>
            </div>
        </>
    )
}

export default Slider;