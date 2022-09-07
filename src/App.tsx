import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Nav from './components/Nav'
import Home from './views/Home'
import About from './views/About'
import Confirmed from './views/Confirmed'
import Footer from './components/Footer'

import animalList from './animals.json'
import { Animal } from './models/animal'
import { User } from './models/user'



function App() {  
  const allAnimals:Array<Animal> = animalList.animals
  const [chosenAnimal, setChosenAnimal] = useState<Animal>(allAnimals[1])
  const [animals, setAnimals] = useState<Animal[]>(allAnimals)
  const [user, setUser] = useState<User>({fullName: '', email: '', adress: '', zipcode: 12345, about: '', extra: ''})

  return (
    <div className="App">
      <Nav setAnimals={setAnimals} />
      <Routes>
        <Route path='/' element={ <Home animals={animals} setAnimals={setAnimals} setUser={setUser} setChosenAnimal={setChosenAnimal} /> } />
        <Route path='/About' element={ <About /> } />
        <Route path='/Confirmed' element={ <Confirmed chosenAnimal={chosenAnimal} user={user} /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
