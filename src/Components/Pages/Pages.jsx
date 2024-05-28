import React, { useRef } from 'react'
import './Pages.css'
import i1 from '../../assets/Page/1.jpg'
import i2 from '../../assets/Page/2.jpg'
import i3 from '../../assets/Page/3.jpg'
import i4 from '../../assets/Page/4.png'
import il from '../../assets/Page/ArrowL.svg'
import ir from '../../assets/Page/ArrowR.svg'

const Pages = () => {

    const slider = useRef();
    let tf = 0;
    const add = 52;
    const lw = () => {
        if (tf < 0) {
            tf += add;
        }
        slider.current.style.transform = `translateX(${tf}%)`
    }

    const rw = () => {
        if (tf > -152) {
            tf -= add;
        }
        slider.current.style.transform = `translateX(${tf}%)`
    }

    return (
        <div className='pagex'>
            <img src={il} alt="" className="lefb" onClick={lw} />

            <div className="thep">
                <ul ref={slider}>
                    <li className='slide'>
                        <img src={i1} alt="" />
                        <div className="info">
                            <h3>Spa & Massage</h3>
                            <p>Experience the power of relaxation. Let your beauty shine with our luxurious spa and massage treatments.</p>
                            <button> READ MORE </button>
                        </div>
                    </li>
                    <li className='slide'>
                        <img src={i2} alt="" />
                        <div className="info">
                            <h3>Hair & Beauty</h3>
                            <p>Experience the power of relaxation. Let your beauty shine with our luxurious spa and massage treatments.</p>
                            <button> READ MORE </button>
                        </div>
                    </li>
                    <li className='slide'>
                        <img src={i3} alt="" />
                        <div className="info">
                            <h3>Body Treatments</h3>
                            <p>Experience the power of relaxation. Let your beauty shine with our luxurious spa and massage treatments.</p>
                            <button> READ MORE </button>
                        </div>
                    </li>
                    <li className='slide'>
                        <img src={i4} alt="" />
                        <div className="info">
                            <h3>Energy Efficiency</h3>
                            <p>Experience the power of relaxation. Let your beauty shine with our luxurious spa and massage treatments.</p>
                            <button> READ MORE </button>
                        </div>
                    </li>
                </ul>
            </div>

            <img src={ir} alt="" className="rigb" onClick={rw} />

        </div>
    )
}

export default Pages
