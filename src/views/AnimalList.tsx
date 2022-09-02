import { Animal } from '../models/animal'
import { useState } from 'react'
import animalList from '../animals.json'
import DisplayAnimal from '../components/DisplayAnimal'
import '../styles/AnimalList.scss'

function AnimalList() {
    const [animals, setAnimals] = useState<Animal[]>(animalList.animals)

    const singleAnimal = animals.map((animal, index) => <DisplayAnimal animal={animal} key={index} />)

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