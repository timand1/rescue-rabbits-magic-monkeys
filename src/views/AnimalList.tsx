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
        if(searchParam.length > 1) {
        const arrCopy = animalList.animals
        searchParam = searchParam[0].toUpperCase() + searchParam.slice(1)

        if(searchParam.includes(' år')) {
           const index = searchParam.indexOf(' ')
           searchParam = searchParam.substring(0, index)

        } else if(searchParam.includes('år')) {
            const index = searchParam.indexOf('å')
            searchParam = searchParam.substring(0, index)
        }

        const searchArr:Animal | any = []
        // arrCopy.forEach(animal => {   
        //     Object.values(animal).forEach(animalInfo => {
        //          if(animalInfo.toString().includes(',')) {
        //             const splitInfo: Array<string> = animalInfo.toString().split(',');
        //             splitInfo.forEach(infoString => {
        //                 console.log(infoString)
        //                 if(Object.values(animal).includes(infoString)) {
        //                     searchArr.push(animal)
        //                 }
        //             })   
        //         }      
        //     })
        //     if(Object.values(animal).includes(searchParam)) {
        //         searchArr.push(animal)
        //     }
        // })

        arrCopy.forEach(animal => {   
            Object.values(animal).forEach(animalInfo => {
                if(typeof animalInfo === 'string') {
                    if(animalInfo.includes(',')) {
                        const splitInfo = animalInfo.split(',')
                        splitInfo.forEach(singleInfo => {
                            
                            if(singleInfo.includes(' ')) {
                                const searching = singleInfo.slice(1).search((new RegExp(searchParam, "i")))
                                
                                if(searching == 0) {
                                    searchArr.push(animal)
                                }
                            }
                        })
                    }
                    const searching:number = animalInfo.search((new RegExp(searchParam, "i")));
                    if(searching == 0) {
                        searchArr.push(animal)
                        
                        
                    }
                }
                
            })
            
        })
        const filteredSearch:Array<Animal> = searchArr.filter(
            (search : any, index: any, searches: any) => 
            searches.findIndex((b:any) => b.name === search.name) === index);

        props.setAnimals(filteredSearch) 
    }    

        
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