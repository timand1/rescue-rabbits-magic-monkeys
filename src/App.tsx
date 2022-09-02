import { useState } from 'react'
import Nav from './components/Nav'
import Home from './views/Home'
import About from './views/About'
import Confirmed from './views/Confirmed'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import './App.scss'

import animalList from './animals.json'
import { Animal } from './models/animal'
import { User } from './models/user'



function App() {  
  const allAnimals = animalList.animals
  const [chosenAnimal, setChosenAnimal] = useState<Animal>()
  const [animals, setAnimals] = useState<Animal[]>(allAnimals)
  const [user, setUser] = useState<User>({fullName: '', email: '', adress: '', zipcode: 12345, about: '', extra: ''})

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={ <Home animals={animals} setUser={setUser} setChosenAnimal={setChosenAnimal} /> } />
        <Route path='/About' element={ <About /> } />
        <Route path='/Confirmed' element={ <Confirmed chosenAnimal={chosenAnimal} user={user} /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
