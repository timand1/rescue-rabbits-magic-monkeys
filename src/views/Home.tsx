import AnimalList from './AnimalList'
import '../App.scss';
import '../styles/Home.scss';
import Hero from '../components/Hero';
import { Animal } from '../models/animal'
import { useState } from 'react';
interface HomeProps {
  animals: Animal[];
  setAnimals: any;
  setChosenAnimal: any;
  setUser: any;
}

function Home(props: HomeProps) { 

  return (
    <div className="home">
      <Hero/>
      <AnimalList animals={props.animals} setAnimals={props.setAnimals} setUser={props.setUser} setChosenAnimal={props.setChosenAnimal} />
    </div>
  )
}

export default Home