import React from 'react'
import './Services.css'
import i1 from '../../assets/srvr/Image.png'
import i2 from '../../assets/srvr/Image2.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Services = () => {
    return (
        <div className='srv'>
            <p className="tit">OUR SERVICES</p>
            <h1>We are Experienced in making you very Beautiful</h1>
            <div className="card1">
                <img src={i1} alt="" />
                <ul>
                    <li>
                        <h3>Face masks   ....................................... from $48.00</h3>
                        <p>With years of expertise, we make you feel rejuvenated and radiant.</p>
                    </li>
                    <li>
                        <h3>Full body massage  ............................. from $54.00</h3>
                        <p>With years of expertise, we make you feel rejuvenated and radiant.</p>
                    </li>
                    <li>
                        <h3>Geothermal spa  ................................. from $54.00</h3>
                        <p>With years of expertise, we make you feel rejuvenated and radiant.</p>
                    </li>
                    <li>
                        <h3>Sauna relax  ....................................... from $73.00</h3>
                        <p>With years of expertise, we make you feel rejuvenated and radiant.</p>
                    </li>
                    <Link to='rsrv' smooth={true} offset={0} duration={500}>
                        <button>GET AN APPOINTMENT</button>
                    </Link>
                </ul>

            </div>
            <div className="card2">

                <ul>
                    <li>
                        <h3>Face masks   ....................................... from $48.00</h3>
                        <p>With years of expertise, we make you feel rejuvenated and radiant.</p>
                    </li>
                    <li>
                        <h3>Full body massage  ............................. from $54.00</h3>
                        <p>With years of expertise, we make you feel rejuvenated and radiant.</p>
                    </li>
                    <li>
                        <h3>Geothermal spa  ................................. from $54.00</h3>
                        <p>With years of expertise, we make you feel rejuvenated and radiant.</p>
                    </li>
                    <li>
                        <h3>Sauna relax  ....................................... from $73.00</h3>
                        <p>With years of expertise, we make you feel rejuvenated and radiant.</p>
                    </li>
                    <Link to='rsrv' smooth={true} offset={0} duration={500}>
                        <button>GET AN APPOINTMENT</button>
                    </Link>
                </ul>
                <img src={i2} alt="" />
            </div>
        </div>
    )
}

export default Services
