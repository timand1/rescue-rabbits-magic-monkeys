import { createAction, createReducer } from '@reduxjs/toolkit';
import { Animal } from '../models/data';
import jsonData from '../data/data.json';

const initialState : Animal = jsonData.animals[1];

const choseAnimal = createAction<Animal>('Chose an animal');
const actions = { choseAnimal };

const reducer = createReducer(initialState, {
    [choseAnimal.toString()]: (state, action) => {
        state = action.payload;
        return state;
    }
})

export { reducer, actions };