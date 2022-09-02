import { Animal } from '../models/animal'
import DisplayAnimal from '../components/DisplayAnimal'
import Search from '../components/Search'
import '../styles/AnimalList.scss'

interface AnimalListProps {
    animals: Animal[];
    setChosenAnimal: any;
    setUser: any;
}

function AnimalList(props: AnimalListProps) {
    const singleAnimal = props.animals.map((animal, index) => <DisplayAnimal setUser={props.setUser} animal={animal} key={index} setChosenAnimal={props.setChosenAnimal} />)
    
    return (
        <section className='animal-container'>                      

            <section className="animals">
                <Search/> 
                {singleAnimal}
            </section>

        </section>
    )
}

export default AnimalList