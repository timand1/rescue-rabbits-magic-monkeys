import { Animal } from '../models/animal'
import { useState } from 'react'
import animalList from '../animals.json'
import DisplayAnimal from '../components/DisplayAnimal'

function AnimalList() {
    const [animals, setAnimals] = useState<Animal[]>(animalList.animals)

    const singleAnimal = animals.map((animal, index) => <DisplayAnimal animal={animal} key={index} />)

    return (
        <section className='animals'>
            {singleAnimal}
        </section>
    )
}

export default AnimalList