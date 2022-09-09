import { createAction, createReducer } from '@reduxjs/toolkit';
import { User } from '../models/data';

const initialState : User = {fullName: '', email: '', adress: '', zipcode: 12345, about: '', extra: '', userId: 0};

const addUser = createAction<User>('Add user');

const actions = { addUser };

const reducer = createReducer(initialState, {
    [addUser.toString()]: ( state, action) => {
        state = action.payload;
        return state
    }
});

export { reducer, actions };