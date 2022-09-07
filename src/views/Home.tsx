import AnimalList from '../components/Animal-Grid/AnimalList'
import '../App.scss';
import '../styles/Home.scss';
import Hero from '../components/Hero';
import { Animal, User, Adopted } from '../models/data'

interface HomeProps {
  animals: Animal[];
  setAnimals: (setAnimals: Animal[]) => void;
  setChosenAnimal: (chosenAnimal: Animal) => void;
  setUser: (user: User) => void;
  user: User;
  handleAdopted: (animalId: number, userId: number) => void;
  adoptedList: Adopted[]
}

function Home(props: HomeProps) { 

  return (
    <div className="home">
      <Hero/>
      <AnimalList 
        animals={props.animals} setAnimals={props.setAnimals} setUser={props.setUser} 
        setChosenAnimal={props.setChosenAnimal} user={props.user} handleAdopted={props.handleAdopted} 
        adoptedList={props.adoptedList}
      />
    </div>
  )
}

export default Home