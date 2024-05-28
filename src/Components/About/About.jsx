import React from 'react'
import "./About.css"
import i1 from '../../assets/abt/1.png'
import i2 from '../../assets/abt/2.png'
import i3 from '../../assets/abt/3.png'
import ii from '../../assets/abt/Image.png'

const About = () => {
    return (
        <div className='abt'>
            <div className="content">
                <div className="text">
                    <p className='top'>ABOUT US</p>
                    <h1>The Beauty is about
                        being Comfortable
                        in your own skin!</h1>
                    <p className='desc'>Embrace true beauty by feeling comfortable in your own skin. At our spa, we believe that beauty starts from within. Our luxurious spa and massage treatments are designed to help you relax, rejuvenate, and radiate confidence. Let us guid
                    </p>
                    <div className="cards">
                        <img src={i1} alt="" />
                        <img src={i2} alt="" />
                        <img src={i3} alt="" />
                    </div>
                </div>
                <img src={ii} alt="" className="att" />
            </div>
        </div>
    )
}

export default About
