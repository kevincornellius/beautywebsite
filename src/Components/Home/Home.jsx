import React from 'react'
import './Home.css'
import welicon from '../../assets/welcome.svg'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


const Home = () => {
    return (
        <div className='home'>
            <div className="el">
                <div className="top">
                    <img src={welicon} alt="" />
                    <p>WELCOME TO BEAUTYNESS!!!</p>
                </div>
                <h1>Beauty is power a smile is its sword.</h1>
                <p>Harness your beauty and let your smile be the sword that shapes your journey.</p>
                <Link to='rsrv' smooth={true} offset={0} duration={500}>
                    <button> MAKE A RESERVATION</button></Link>
            </div>

        </div>
    )
}

export default Home
