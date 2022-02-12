import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div className='Header'>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li> <Link to="/aboutus">About us</Link></li>
                    </ul>
                </nav>
            </header>
            
           
            
        </div>
    );
};

export default Header;