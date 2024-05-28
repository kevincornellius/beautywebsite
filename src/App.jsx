import React, { useRef } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Pages from './Components/Pages/Pages'
import Reserve from './Components/Reserve/Reserve'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar />
      <div className='contents'>
        <Home />
        <Pages />
        <About />
        <Services />
        <Reserve />
        <Blog />
        <Footer />
      </div>

    </div>
  )
}


export default App
