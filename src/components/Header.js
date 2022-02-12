import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div className='Header'>

            <Link to="/">Home</Link>
            <Link to="/aboutus">About us</Link>
            
        </div>
    );
};

export default Header;