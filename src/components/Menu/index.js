import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assests/img/valdimflix.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from './components/ButtonLinks';
function Menu(){
return (
    <nav className="Menu">
        <Link to="/">
        <img className="Logo" src={Logo} alt="valdimflix logo"/>
        </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
             novo video
        </Button>
    </nav>
    );
}
export default Menu;