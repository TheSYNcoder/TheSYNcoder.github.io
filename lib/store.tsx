import React , { createContext , useReducer } from 'react';
import Reducer from './reducer';


const createEmptyState = () : State =>  {
    return {
        error : null,
        windowsOpen: [],
        focusedWindow: null,
        terminal: {
            lastLogin: new Date(),
            history: []
        },
        backgroundImage: ''
    }
}

var initialState: State = createEmptyState();



const Store = ({children} : any) => {
    const [state, dispatch] = useReducer(Reducer , initialState);
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}


export const Context = createContext<AppStoreContextType | null>(null);
export default Store;
