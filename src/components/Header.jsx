import {Link} from 'react-router-dom'

import imgLogo from '../assets/martinelli.jpg'
import '../styles/Header.css'
export default function Header() {
    return (
        <header className="cabecalho">
            <img src={imgLogo} alt="Logotipo da empresa" className="imgLogo" />
            <nav className='Menu'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#">Títulos</a></li>
                    <li><Link to="/Sobre">Sobre</Link></li>
                    <li><a href="#">Historia</a></li>
                    <li><a href="#">Gols</a></li>
                    <li><a href="#">Assistencias</a></li>
               </ul>
            </nav>
        </header>
    )
}