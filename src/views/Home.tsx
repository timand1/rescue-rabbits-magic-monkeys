import AnimalList from './AnimalList'
import '../App.scss';
import '../styles/Home.scss';
import Hero from '../components/Hero';
import { Animal } from '../models/animal'
import { User } from '../models/user'

interface HomeProps {
  animals: Animal[];
  setAnimals: (setAnimals: Animal[]) => void;
  setChosenAnimal: (chosenAnimal: Animal) => void;
  setUser: (user: User) => void;
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