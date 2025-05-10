import { produce } from 'immer';
import { initialState } from './State';
import axios from 'axios';

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload
            break;
        case 'ADD_USER':
            // אם נרצה לערוך בדיקות ...
            state.users.push(action.payload);
            break;
        case 'UPDATE_CAR':
            let c = state.cars.find(p => p.codeCar == action.payload);
            c = action.object
            break;
        case 'REMOVE_CAR':
            let index = state.cars.findIndex(p => p.codeCar == action.payload);
            state.cars.splice(index, 1)
            break;
        // case 'ADD_RENTAL':
        //     state.lends.push(action.payload)
        //     break;
        case 'SET_SELECTED_CAR':
            state.selectedCar = action.payload
            break;
        case 'SET_CURRENT_CARS':

            break;
        case 'SET_CURRENT_CARS_FIRST':
            state.currentCars = action.payload
            break;
        case 'SET_USERS':
            state.Users = action.payload
            break;
        case 'SET_LENDS':
            state.lends = action.payload
            break;
        case 'SET_RETURNS':
            state.returns = action.payload
            break;
        default:
            break;
    }
}, initialState)

export default reducer
