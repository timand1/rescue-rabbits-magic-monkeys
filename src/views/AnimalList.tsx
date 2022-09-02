import { Animal } from '../models/animal'
import { User } from '../models/user'
// import { useState } from 'react'
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
            <article className='search-bar'>
                <input type="text" placeholder='SÖK SORT, PLATS, ÅLDER ETC' />
            </article>

            <section className="animals">{singleAnimal}</section>

        </section>
    )
}

export default AnimalList