import { Animal } from '../models/animal'
import DisplayAnimal from '../components/DisplayAnimal'
import Search from '../components/Search'
import '../styles/AnimalList.scss'

import animalList from '../animals.json'

interface AnimalListProps {
    animals: Animal[];
    setAnimals: any;
    setChosenAnimal: any;
    setUser: any;
}

function AnimalList(props: AnimalListProps) {
    const singleAnimal = props.animals.map((animal, index) => <DisplayAnimal setUser={props.setUser} animal={animal} key={index} setChosenAnimal={props.setChosenAnimal} />)

    const searchAnimals: (searchParam: any) => void = (searchParam: any) => {
        const arrCopy = animalList.animals
        searchParam = searchParam[0].toUpperCase() + searchParam.slice(1)
        if(searchParam.includes(' år')) {
           const index = searchParam.indexOf(' ')
           searchParam = searchParam.substring(0, index)
        } else if(searchParam.includes('år')) {
            const index = searchParam.indexOf('å')
            searchParam = searchParam.substring(0, index)
        }

        const testArr:Animal | any = []
        arrCopy.forEach(animal => {            
            if(Object.values(animal).includes(searchParam)) {
                testArr.push(animal)
            }
        })

        props.setAnimals(testArr)
        

        
    }
    
    return (
        <section className='animal-container'>                      

            <section className="animals">
                <Search searchAnimals={searchAnimals} /> 
                {singleAnimal}
            </section>

        </section>
    )
}

export default AnimalList