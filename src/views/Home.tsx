import AnimalList from './AnimalList'
import '../App.scss';
import '../styles/Home.scss';
import Hero from '../components/Hero';
import { Animal } from '../models/animal'

interface HomeProps {
  animals: Animal[];
  setChosenAnimal: any;
  setUser: any;
}

function Home(props: HomeProps) { 

  return (
    <div className="home">
      <Hero/>
      <AnimalList animals={props.animals} setUser={props.setUser} setChosenAnimal={props.setChosenAnimal} />
    </div>
  )
}

export default Home