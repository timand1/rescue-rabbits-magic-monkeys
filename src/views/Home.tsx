import AnimalList from '../components/Animal-Grid/AnimalList';
import '../App.scss';
import '../styles/Home.scss';
import Hero from '../components/Hero';
import { Animal, User, Adopted } from '../models/data';

interface HomeProps {
  homeProps: {
    animals: Animal[];
    setAnimals: (setAnimals: Animal[]) => void;
    setChosenAnimal: (chosenAnimal: Animal) => void;
    setUser: (user: User) => void;
    user: User;
    handleAdopted: (animalId: number, userId: number) => void;
    adoptedList: Adopted[];
  }
};

function Home(props: HomeProps) { 
  
  return (
    <div className="home">
      <Hero/>
      <AnimalList animalListProps={props.homeProps} />
    </div>
  )
};

export default Home;