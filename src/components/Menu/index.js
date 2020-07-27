import React from 'react';
import Logo from '../../assests/img/valdimflix.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from './components/ButtonLinks';
function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="valdimflix logo"/>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                novo video
            </Button>
        </nav>
    );
}
export default Menu;