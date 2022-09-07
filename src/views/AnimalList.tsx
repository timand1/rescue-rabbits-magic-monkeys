import { Animal } from '../models/animal'
import { User } from '../models/user'
import DisplayAnimal from '../components/DisplayAnimal'
import Search from '../components/Search'
import '../styles/AnimalList.scss'

import animalList from '../animals.json'

interface AnimalListProps {
    animals: Animal[];
    setAnimals: (animal: Animal[]) => void;
    setChosenAnimal: (animal:Animal) => void;
    setUser: (user: User) => void;
}

function AnimalList(props: AnimalListProps) {
    const singleAnimal = props.animals.map((animal, index) => <DisplayAnimal setUser={props.setUser} animal={animal} key={index} setChosenAnimal={props.setChosenAnimal} />)

    const searchAnimals: (searchParam: any) => void = (searchParam: any) => {
        if(searchParam.length > 0) {
        const arrCopy = animalList.animals

        const searchArr:Animal | any = []
        const arrSearch:Animal | any = []
        arrCopy.forEach((animal:any) => {   
            
            Object.values(animal).forEach((animalInfo:any) => {
                if(searchParam.length > 5 && searchParam.includes(' ')) {
                    const searchSplit = searchParam.split(' ')
                    if(searchSplit.length > 2 && searchSplit.includes('år')) {
                        searchSplit.pop();
                    }
                    searchSplit.forEach((search: string) => {
                        if(search.match(/\d+/g) && animal.age == search) {
                            searchArr.push(animal) 
                        } else if(search == 'år') {
                            return
                        } else if(typeof search == 'string') {
                            search = search[0].toUpperCase()+ search.slice(1)
                        } 
                        else if(animal.age == search) {
                            searchArr.push(animal)
                        }
                        if(search === animalInfo) {
                            arrSearch.push(animal) 
                            if(searchSplit.length == arrSearch.length) {
                                searchArr.push(animal) 
                            } 
                        }
                    })
                } else if(searchParam.match(/\d+/g)) {        
                    if(searchParam.includes(' ')) {
                        const index = searchParam.indexOf(' ')
                        searchParam = searchParam.substring(0, index)                    }
                    if(animalInfo == searchParam) {
                        searchArr.push(animal)   
                    }
                } else {
                    if(typeof animalInfo === 'string') {
                        const searching:number = animalInfo.search((new RegExp(searchParam, "i")));
                        if(searching != -1) {
                            searchArr.push(animal)     
                        } 

                    }
                }       
            })
            
        })
        
        const filteredSearch:Array<Animal> = searchArr.filter(
            (search : any, index: number, searches: any) => 
            searches.findIndex((b:any) => b.name === search.name) === index);
        props.setAnimals(filteredSearch) 
        }   
    }

     const showAll: () => void = () => {
        props.setAnimals(animalList.animals) 
     }

    
    return (
        <section className='animal-container'>                      
<button onClick={showAll}>ALLA DJUR</button>
            <section className="animals">
                <Search searchAnimals={searchAnimals} /> 
                {singleAnimal}
            </section>

        </section>
    )
}

export default AnimalList