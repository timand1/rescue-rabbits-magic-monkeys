// import { useState } from 'react'
import Nav from './components/Nav'
import AnimalList from './views/AnimalList'
import Home from './views/Home'
import About from './views/About'
import { Routes, Route } from 'react-router-dom'
import './App.scss'

function App() {
  

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/About' element={ <About /> } />
      </Routes>
    </div>
  )
}

export default App
