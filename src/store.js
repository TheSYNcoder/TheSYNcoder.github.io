import React , { createContext , useReducer } from 'react';
import Reducer from './Reducer/reducer';

const initialState = {
    error : null, 
    windowsOpen : [],
    focusedWindow : null,
    terminal : { 
        lastLogin  : localStorage.getItem('lastLogin') || new Date(),
        history : localStorage.getItem('history') || [], 
    },
    background_image : 'pic1'
}


const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer , initialState );
    return (
        <Context.Provider value={ [state, dispatch] }>
            {children}
        </Context.Provider>
    )
}


export const Context = createContext(initialState);
export default Store;
