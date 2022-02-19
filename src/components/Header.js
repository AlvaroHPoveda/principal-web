import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div className='Header'>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li> <Link to="/aboutus">Sobre nosotros</Link></li>
                        <li> <Link to="/clothing">Boutique</Link></li>
                        <li> <Link to="/jewerly">Joyería</Link></li>
                        <li> <Link to="/tecnology">Tecnología</Link></li>
                    </ul>
                </nav>
            </header>
            
           
            
        </div>
    );
};

export default Header;