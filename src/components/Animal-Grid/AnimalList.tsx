import { Animal, User, Adopted } from '../../models/data';
import DisplayAnimal from './DisplayAnimal';
import Search from '../Search';
import '../../styles/AnimalList.scss';
import data from '../../data/data.json';

interface AnimalListProps {
    animalListProps: {
        animals: Animal[];
        setAnimals: (animal: Animal[]) => void;
        setChosenAnimal: (animal:Animal) => void;
        setUser: (user: User) => void;
        user: User;
        handleAdopted: (animalId: number, userId: number) => void;
        adoptedList: Adopted[];
    }
};

function AnimalList(props: AnimalListProps) {

    interface DisplayAnimalProps {
        setChosenAnimal: (chosenAnimal: Animal) => void;
        setUser: any;
        user: User;
        handleAdopted: (animalId: number, userId: number) => void;
        adoptedList: Adopted[];
    };

    const displayAnimalProps:DisplayAnimalProps = {
        setChosenAnimal: props.animalListProps.setChosenAnimal,
        setUser: props.animalListProps.setUser,
        user: props.animalListProps.user,
        handleAdopted: props.animalListProps.handleAdopted,
        adoptedList: props.animalListProps.adoptedList    
    }

    const singleAnimal = props.animalListProps.animals.map((animal) => 
            <DisplayAnimal key={animal.animalId} animal={animal} displayAnimalObj={displayAnimalProps} />);

    const searchAnimals: (searchParam: any) => void = (searchParam: any) => {
        const arrCopy = data.animals;
        const searchArr:Animal | any = [];

        arrCopy.forEach((animal:any) => {               
            Object.values(animal).forEach((animalInfo:any) => {
                if(searchParam.match(/\d+/g)) {        
                    if(searchParam.includes(' ')) {
                        const index = searchParam.indexOf(' ');
                        searchParam = searchParam.substring(0, index);                
                    };
                    if(animalInfo == searchParam) {
                        searchArr.push(animal)   
                    };
                } else {
                    if(typeof animalInfo === 'string') {
                        const searching:number = animalInfo.search((new RegExp(searchParam, "i")));
                        if(searching != -1) {
                            searchArr.push(animal);    
                        } 
                    };
                }       
            });
            
        });
        
        const filteredSearch:Array<Animal> = searchArr.filter(
            (search : any, index: number, searches: any) => 
            searches.findIndex((b:any) => b.name === search.name) === index);

        props.animalListProps.setAnimals(filteredSearch);          
    };

    const searchMultiple: (searchParam: any) => void = (searchParam) => {
        const arrCopy = data.animals
        const searchArr:Animal | any = [];
        const arrSearch:Animal | any = [];

        arrCopy.forEach((animal:any) => {               
            Object.values(animal).forEach((animalInfo:any) => {
                const searchSplit = searchParam.split(' ');
                if(searchSplit.length > 2 && searchSplit.includes('år')) {
                    const index = searchSplit.indexOf('år');
                    searchSplit.splice(index, 1);
                };
                searchSplit.forEach((search: string) => {
                    if(search.match(/\d+/g) && animal.age == search) {
                        searchArr.push(animal);
                    } else if(typeof search == 'string') {
                        search = search[0].toUpperCase()+ search.slice(1)
                    } else if(animal.age == search) {
                        searchArr.push(animal);
                    };

                    if(search === animalInfo) {
                        arrSearch.push(animal);
                        if(searchSplit.length == arrSearch.length) {
                            searchArr.push(animal);
                        };
                    };
                });
            });
        });

        const filteredSearch:Array<Animal> = searchArr.filter(
            (search : any, index: number, searches: any) => 
            searches.findIndex((b:any) => b.name === search.name) === index);

        props.animalListProps.setAnimals(filteredSearch);
    };
    
    return (
        <section className='animal-container'>                      
            <section className="animals">
                <Search 
                    searchAnimals={searchAnimals} searchMultiple={searchMultiple} 
                    setAnimals={props.animalListProps.setAnimals} animals={props.animalListProps.animals} 
                /> 
                {singleAnimal}
            </section>
        </section>
    )
};

export default AnimalList;