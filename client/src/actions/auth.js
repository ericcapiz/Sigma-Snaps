
import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, history) => async(dispacth) => {
    try {
        
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = () => async(dispacth) => {
    try {
        
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}