// import { useState } from 'react'
import Nav from './components/Nav'
import AnimalList from './views/AnimalList'

import './App.scss'

function App() {
  

  return (
    <div className="App">
      {/* router */}
      <Nav/>
      <AnimalList />
    </div>
  )
}

export default App
