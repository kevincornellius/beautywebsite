import React from 'react'
import './Footer.css'
import Logo from '../../assets/Social/Logo.svg'
import i1 from '../../assets/Social/1.svg'
import i2 from '../../assets/Social/2.svg'
import i3 from '../../assets/Social/3.svg'
import i4 from '../../assets/Social/4.svg'
const Footer = () => {
    return (
        <div>
            <div className="fut">
                <div className="topf">
                    <img src={Logo} alt="" className='logof' />
                    <div className="socials">
                        <div className="boxes">
                            <img src={i1} alt="" />
                        </div>
                        <div className="boxes">
                            <img src={i2} alt="" />
                        </div>
                        <div className="boxes">
                            <img src={i3} alt="" />
                        </div>
                        <div className="boxes">
                            <img src={i4} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="a">
                        <h1>
                            Explore
                        </h1>
                        <ul className='clc'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Appointments</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="a">
                        <h1>
                            Keep In Touch
                        </h1>
                        <ul>
                            <li>Address: 24A Kingston St, Los Vegas NC 28202, USA.</li>
                            <li>Mail: kevincornelius1905@gmail.com</li>
                            <li>Phone: (+00) 123 4568 009</li>

                        </ul>
                    </div>
                    <div className="a">
                        <h1>
                            Working Hours
                        </h1>
                        <ul>
                            <li>Mon to Fri: 7am - 6pm</li>
                            <li>Sat: 9am - 7pm</li>
                            <li>Sun: 9am - 6pm</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="copy">
                <p>© Copyright 2024. Drafted by Victor Themes. Developed by Kevin Cornellius</p>
            </div>
        </div>
    )
}

export default Footer
