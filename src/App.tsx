import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Nav from './components/Nav';
import Home from './views/Home';
import About from './views/About';
import Confirmed from './views/Confirmed';
import Footer from './components/Footer';

import data from './data/data.json';
import { Animal, User, Adopted } from './models/data';



function App() {  
  const allAnimals:Array<Animal> = data.animals;
  const [chosenAnimal, setChosenAnimal] = useState<Animal>();
  const [animals, setAnimals] = useState<Animal[]>(allAnimals);
  // Localstorage för alla djur lsitan
  const [user, setUser] = useState<User>({fullName: '', email: '', adress: '', zipcode: 12345, about: '', extra: '', userId: 0});

  const [adoptedList, setAdoptedList] = useState<Adopted[]>([]);
  // localstorage för adopt listan
  const handleAdopted = (animalId: number, userId: number) => {
        let adopted: Adopted = {
            userId: userId,
            animalId: animalId
        };

    let newAdoptedList = [ ...adoptedList, adopted ];
    setAdoptedList(newAdoptedList);
  };

  return (
    <div className="App">
      <Nav setAnimals={setAnimals} />
      <Routes>
        <Route path='/' element={ <Home 
          animals={animals} setAnimals={setAnimals} 
          setUser={setUser} setChosenAnimal={setChosenAnimal} user={user} 
          handleAdopted={handleAdopted} adoptedList={adoptedList}
        /> } />
        <Route path='/About' element={ <About /> } />
        <Route path='/Confirmed' element={ <Confirmed chosenAnimal={chosenAnimal} user={user} /> } />
      </Routes>
      <Footer />
    </div>
  )
};

export default App;
