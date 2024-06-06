import React from "react";
import Image from '../../assets/3fd7d5ec4295d95dfd3c57daeb0bcb0c.png'
import './footer.css'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <img src={Image} id="logo"/>
                    <span >Todos os direitos reservados ©</span>
                    <span >Desenvolvido por João Marcos</span>
                </div>
            </footer>
            <nav className="footer-navigation">
                <ul className="ul-footer">
                    <Link className="link-footer" to='/'>
                        <li className="li-footer">Home</li>
                    </Link>
                    <Link className="link-footer" to='/contatos'>
                        <li className="li-footer">Contatos</li>
                    </Link>
                    <Link className="link-footer" to='/fotos'>
                        <li className="li-footer">Fotos</li>
                    </Link>
                    <Link className="link-footer" to='/comentarios'>
                        <li className="li-footer">Comentários</li>
                    </Link>
                </ul>
            </nav>
        </>
        
    )
}

export default Footer;