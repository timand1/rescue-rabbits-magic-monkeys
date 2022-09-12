import { createAction, createReducer } from '@reduxjs/toolkit';
import { Animal } from '../models/data';
import jsonData from '../data/data.json';

const initialState : Animal[] = jsonData.animals;

const allAnimals = createAction('Get all animals');
const singleSearchAnimals = createAction<string>('One word search animals');
const multipleSearchAnimals = createAction<string>('Multiple word search animals');

const actions = { allAnimals, singleSearchAnimals, multipleSearchAnimals };

const reducer = createReducer(initialState, {
    [allAnimals.toString()]: () => {
        return initialState;
    },
    [singleSearchAnimals.toString()]: (state, action) => {
        const arrCopy = [...initialState]
        const searchArr : Animal[] = [];

        arrCopy.forEach(animal => {
            if(animal.searchWords.includes(action.payload)) {
                searchArr.push(animal)
            }
        })
        return searchArr;
    },
    [multipleSearchAnimals.toString()]: (state, action) => {
        let arrCopy = [...initialState];
        const searchArr : Animal[] = [];

        const searchWordsArr = action.payload.split(' ')
        if(searchWordsArr.includes('år')) {
            const index = searchWordsArr.indexOf('år')
            searchWordsArr.splice(index, 1);
        };
        arrCopy.forEach(animal => {
            let searchHit: number = 0;
            searchWordsArr.forEach((word : string) => {
                if(animal.searchWords.includes(word)) {
                    searchHit = searchHit + 1;
                    if(searchHit == searchWordsArr.length) {
                        searchArr.push(animal);
                    }
                }
            })
        })
        return searchArr;

    }
});

export { reducer, actions };