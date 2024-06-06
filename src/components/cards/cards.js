import React, { useRef } from "react";
import './card.css';

function Card() {

    const modal1 = useRef()

    function showModal1() {
        modal1.current.style.visibility = 'visible'

    }

    const modal2 = useRef()

    function showModal2() {
        modal2.current.style.visibility = 'visible'
    }

    const modal3 = useRef()

    function showModal3() {
        modal3.current.style.visibility = 'visible'
    }

    function hideModal1() {
        modal1.current.style.visibility = 'hidden'
    }
    function hideModal2() {
        modal2.current.style.visibility = 'hidden'
    }
    function hideModal3() {
        modal3.current.style.visibility = 'hidden'    
    }

    
    return (
        <>
        <div className="cards-content">
            <div className="cards">
                <div className="card numero1" onClick={() => showModal1()}>Gameplay</div>
                <div className="card numero2" onClick={() => showModal2()}>Gameplay</div>
                <div className="card numero3" onClick={() => showModal3()}>Gameplay</div>
            </div>
        </div>
        <div className="modal-content">
            <div ref={modal1} className="modal" onClick={() => hideModal1()} >
                <div className="modal1-content"></div>
            </div>
            <div ref={modal2} className="modal" onClick={() => hideModal2()} >
                <div className="modal2-content"></div>
            </div>
            <div ref={modal3} className="modal" onClick={() => hideModal3()} >
                <div className="modal3-content"></div>
            </div>
        </div>
        </>
    )
}

export default Card;