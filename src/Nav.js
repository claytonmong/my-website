import React, { useLayoutEffect } from 'react';
import {Link} from 'react-router-dom';


function Nav() {
    return(
        <ul>
            <li><Link to='/home'>Home Page</Link></li>
            <li><Link to='/about'>About Me</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
        </ul>
    );
}

export default Nav;