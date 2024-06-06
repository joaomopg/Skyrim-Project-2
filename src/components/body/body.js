import React from "react";
import Wallpaper from '../../assets/46e9edf04c80b04c62c5db3ad8298a8b.png';
import Trailer from '../../assets/SkyrimTrailer.mp4'
import './body.css';
import Button from "../button/button";

function Body() {
    return (
        <>
        <div id="wallpaper">
            <img className="wallpaper-image" src={Wallpaper} />
        </div>
        <div className="body">
            <div className="body-countainer">
                <video controls className="video">
                    <source src={Trailer}/>
                </video>
                <div className="span-button-content">
                    <div className="sinopse">
                        Skyrim é a terra natal de um povo bravo chamados de Nords (uma raça de humanos) 
                        onde além da Grande Guerra, irrompeu uma guerra civil após o assassinato do Alto Rei de Skyrim, Torygg. 
                        E diante de todas estas guerras e problemas, a província se encontra dividida: de um lado, 
                        os StormCloaks, rebeldes comandados por Ulfric que buscam a independência de Skyrim perante o império; 
                        do outro, os Imperiais, militares comandados por Tullius e aliados ao império.
                    </div>
                    <Button/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Body;