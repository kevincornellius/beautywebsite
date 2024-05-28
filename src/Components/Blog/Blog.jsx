import React from 'react'
import './Blog.css'
import p1 from '../../assets/blg/Photo.png'
import p2 from '../../assets/blg/1.png'
import p3 from '../../assets/blg/2.png'
const Blog = () => {
    return (
        <div>
            <div className="blog">
                <p>OUR BLOG</p>
                <h1>Latest Updates</h1>
                <div className="blogs">

                    <div className="ca">
                        <img src={p1} alt="" className='im' />
                        <p>28TH MAY 2024 - BY KEVIN CORNELLIUS</p>
                        <h2 className='tita'>The energy efficiency of the hydrotherapy or swim</h2>
                        <h3>Discover the energy efficiency of our hydrotherapy and swim services. Enjoy effective, eco-friendly relaxation and exercise options.</h3>
                    </div>
                    <div className="ca">
                        <img src={p2} alt="" className='im' />
                        <p>28TH MAY 2024 - BY KEVIN CORNELLIUS</p>
                        <h2 className='tita'>Tips to improve your body via cleansing</h2>
                        <h3>Discover the energy efficiency of our hydrotherapy and swim services. Enjoy effective, eco-friendly relaxation and exercise options.</h3>
                    </div>
                    <div className="ca">
                        <img src={p3} alt="" className='im' />
                        <p>28TH MAY 2024 - BY KEVIN CORNELLIUS</p>
                        <h2 className='tita'>Experience the beauty at our beauty spa</h2>
                        <h3>Discover the energy efficiency of our hydrotherapy and swim services. Enjoy effective, eco-friendly relaxation and exercise options.</h3>
                    </div>

                </div>
                <button>VIEW MORE STORIES</button>
            </div>
        </div>
    )
}

export default Blog
