import { Animal } from '../../models/data';
import DisplayAnimal from './DisplayAnimal';
import Search from '../Search';
import '../../styles/AnimalList.scss';

import { useSelector } from 'react-redux'
import { RootState } from '../../store'

function AnimalList() {
    const animals:Animal[] = useSelector((state: RootState) => state.animals);
 
    const singleAnimal = animals.map((animal) => <DisplayAnimal key={animal.animalId} animal={animal} />);
    
    return (
        <section className='animal-container'>                      
            <section className="animals">
                <Search /> 
                {animals.length == 0  && <h2>Tyvärr matchade inget djur ditt sök...</h2>}
                {singleAnimal}
            </section>
        </section>
    )
};

export default AnimalList;