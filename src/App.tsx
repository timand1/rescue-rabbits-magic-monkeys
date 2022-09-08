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
  const [user, setUser] = useState<User>({fullName: '', email: '', adress: '', zipcode: 12345, about: '', extra: '', userId: 0});

  const [adoptedList, setAdoptedList] = useState<Adopted[]>([]);
  const handleAdopted = (animalId: number, userId: number) => {
        let adopted: Adopted = {
            userId: userId,
            animalId: animalId
        };

    let newAdoptedList = [ ...adoptedList, adopted ];
    setAdoptedList(newAdoptedList);
  };

  interface HomeProps {
    animals: Animal[];
    setAnimals: (setAnimals: Animal[]) => void;
    setChosenAnimal: (chosenAnimal: Animal) => void;
    setUser: (user: User) => void;
    user: User;
    handleAdopted: (animalId: number, userId: number) => void;
    adoptedList: Adopted[];
  };

  const homeProps:HomeProps = {
    animals: animals,
    setAnimals: setAnimals,
    setChosenAnimal: setChosenAnimal,
    setUser: setUser,
    user: user,
    handleAdopted: handleAdopted,
    adoptedList: adoptedList

  }

  return (
    <div className="App">
      <Nav setAnimals={setAnimals} />
      <Routes>
        <Route path='/' element={ <Home 
          homeProps={homeProps}
        /> } />
        <Route path='/About' element={ <About /> } />
        <Route path='/Confirmed' element={ <Confirmed chosenAnimal={chosenAnimal} user={user} /> } />
      </Routes>
      <Footer />
    </div>
  )
};

export default App;
