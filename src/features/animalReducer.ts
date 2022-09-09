import { createAction, createReducer } from '@reduxjs/toolkit'
import { Animal } from '../models/data'
import jsonData from '../data/data.json'

const initialState : Animal[] = jsonData.animals

const allAnimals = createAction('Get all animals');
const singleSearchAnimals = createAction<string>('One word search animals');
const multipleSearchAnimals = createAction<string>('Multiple word search animals');

const actions = { allAnimals, singleSearchAnimals, multipleSearchAnimals };

const reducer = createReducer(initialState, {
    [allAnimals.toString()]: () => {
        return initialState
    },
    [singleSearchAnimals.toString()]: (state, action) => {
        const arrCopy = [...initialState]
        const searchArr : Animal[] = [];
        let searchString = action.payload;

        arrCopy.forEach((animal:any) => {               
            Object.values(animal).forEach((animalInfo:any) => {
                if(searchString.match(/\d+/g)) {        
                    if(searchString.includes(' ')) {
                        const index = searchString.indexOf(' ');
                        searchString = searchString.substring(0, index);                
                    };
                    if(animalInfo == searchString) {
                        searchArr.push(animal)   
                    };
                } else {
                    if(typeof animalInfo === 'string') {
                        const searching:number = animalInfo.search((new RegExp(searchString, "i")));
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

        return filteredSearch;

    },
    [multipleSearchAnimals.toString()]: (state, action) => {
        const arrCopy = [...initialState];
        const searchArr : Animal[] = [];
        const arrSearch:Animal | any = [];
        let searchString = action.payload;
        
        arrCopy.forEach((animal:any) => {               
            Object.values(animal).forEach((animalInfo:any) => {
                const searchSplit = searchString.split(' ');
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

        return filteredSearch;

    }
 

})

export { reducer, actions }