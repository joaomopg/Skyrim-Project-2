import React from "react";
import Logo from '../../assets/3fd7d5ec4295d95dfd3c57daeb0bcb0c.png';
import { Link } from "react-router-dom";
import './header.css';

function Header() {

    return (
        <>
        <header className="header">
            <img id='logo' src={Logo} alt="logo"/>
            <nav className="header-navigation">
                <ul className="ul-header">
                    <Link className="Link" to='/'>
                        <li className="li-header">Home</li>
                    </Link>
                    <Link className="Link" to='/contatos'>
                        <li className="li-header">Contatos</li>
                    </Link>
                    <Link className="Link" to='/fotos'>
                        <li className="li-header">Fotos</li>
                    </Link>
                    <Link className="Link" to='/comentarios'>
                        <li className="li-header">Comentários</li>
                    </Link>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header;