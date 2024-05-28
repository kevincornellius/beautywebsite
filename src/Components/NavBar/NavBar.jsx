import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import contactIcon from '../../assets/contact.svg'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './NavBar.css'
import barI from '../../assets/menu-fries.svg'

const NavBar = () => {

    const [mobMenu, setMobMenu] = useState(false);
    const ToogleMenu = () => {
        mobMenu ? setMobMenu(false) : setMobMenu(true);
    }
    return (
        <nav className='navbar'>
            <Link to='home' smooth={true} offset={-80} duration={500}> <img src={logo} alt="Logo" className='logo' /></Link>
            <ul className={mobMenu ? '' : 'hid'}>
                <li className={mobMenu ? 'menuLi' : 'barhidden'}><div className='barMenu' onClick={ToogleMenu}><img src={barI} alt="" /></div></li>
                <div className={mobMenu ? 'menu' : 'menuhidden'}> <li><Link to='home' smooth={true} offset={-80} duration={500}>Home</Link></li>
                    <li><Link to='pagex' smooth={true} offset={-80} duration={500}>Pages</Link></li>
                    <li><Link to='abt' smooth={true} offset={-40} duration={500}>About</Link></li>
                    <li><Link to='srv' smooth={true} offset={-40} duration={500}>Services</Link></li>
                    <li><Link to='blog' smooth={true} offset={-80} duration={500}>Blog</Link></li>
                    <li>
                        <Link to='rsrv' smooth={true} offset={0} duration={500}>
                            <button className='btn'> <img src={contactIcon} alt="" /> <p>RESERVATION</p></button></Link>
                    </li></div>

            </ul>
        </nav >
    )
}

export default NavBar
