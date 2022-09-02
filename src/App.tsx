// import { useState } from 'react'
import Nav from './components/Nav'
import AnimalList from './views/AnimalList'
import Home from './views/Home'
import About from './views/About'
import Confirmation from './views/Confirmation'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import './App.scss'

function App() {  

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/confirmation' element={ <Confirmation /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
