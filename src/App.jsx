import React from 'react'
import Header from './Components/header/Header'
import ControlledCarousel from './Components/carousel/ControlledCarousel'
import Perfil from './Components/perfil/Perfil'
import Footer from './Components/footer/Footer'

function App() {
  
  return (
    <div className="app">
      <Header/>
      <ControlledCarousel />
      <Perfil />
      <Footer />
    </div>
  )
}

export default App
