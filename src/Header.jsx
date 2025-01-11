import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assert/logo.png';

function Header() {

    let location = useLocation()

    return (
    <header>
        <div className="logo"><Link to='/'><img src={logo} alt="logo-img" width="100px" /></Link></div>
        <div className="links">
            <div><Link to='/Portfolio' className={`link ${location.pathname === '/Portfolio' ? 'active' : ''}`}>HOME</Link></div>
            <div><Link to='/education' className={`link ${location.pathname === '/education' ? 'active' : ''}`}>EDUCATIOIN</Link></div>
            <div><Link to='/skill' className={`link ${location.pathname === '/skill' ? 'active' : ''}`}>SKILLS</Link></div>
            <div><Link to='/project' className={`link ${location.pathname === '/project' ? 'active' : ''}`}>PROJECTS</Link></div>
        </div>   
    </header>
    );
}

export default Header;