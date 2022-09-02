import { Animal } from '../models/animal'
import { User } from '../models/user'
// import { useState } from 'react'
import Search from '../components/Search'
import animalList from '../animals.json'
import DisplayAnimal from '../components/DisplayAnimal'
import '../styles/AnimalList.scss'

interface AnimalListProps {
    animals: Animal[];
    setChosenAnimal: any;
    setUser: any;
}

function AnimalList(props: AnimalListProps) {
    // const [animals, setAnimals] = useState<Animal[]>(animalList.animals)

    // const singleAnimal = animals.map((animal, index) => <DisplayAnimal animal={animal} key={index} />)
    const singleAnimal = props.animals.map((animal, index) => <DisplayAnimal setUser={props.setUser} animal={animal} key={index} setChosenAnimal={props.setChosenAnimal} />)
    
    return (
        <section className='animal-container'>
            <Search/>
            

            <section className="animals">{singleAnimal}</section>

        </section>
    )
}

export default AnimalList