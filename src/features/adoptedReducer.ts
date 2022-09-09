import { createAction, createReducer } from '@reduxjs/toolkit'
import { Adopted } from '../models/data'
import jsonData from '../data/data.json'

const initialState : Adopted[] = jsonData.adopted;

const addAdopted = createAction<Adopted>('Adopt an animal');

const actions = { addAdopted };

const reducer = createReducer(initialState, {
    [addAdopted.toString()]: (state, action) => {    
        let newAdoptedList = [...state, action.payload];      
        return newAdoptedList;
    }

})

export { reducer, actions }