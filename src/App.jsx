import { useState } from 'react'
import { create } from 'zustand'
import './App.css'
import Navbar_top from './Navbar/Navbar_top'
import Navbar from './Navbar/Navbar'
import Navbar_bottom from './Navbar/Navbar_bottom'
import Corusel from './Main/Corusel'
import Catigoria from './Main/Catigoria'
import Cards from './Main/Cards'

function App() {

  return (
    <div>
      <Navbar_top/>
      <Navbar/>
      <Navbar_bottom/>
      {/* <Corusel/> */}
      <Catigoria/>
      <Cards/>
      
        
    </div>
  )
}

export default App
