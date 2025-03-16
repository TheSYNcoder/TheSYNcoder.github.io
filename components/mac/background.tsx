
import React from 'react';
import { Context } from '../../lib/store';
import { useContext } from 'react';


const Background = () => {

    const {state, dispatch} = useContext(Context) as AppStoreContextType;
    
    const currState = React.useRef(state);

    React.useEffect(() => {
        currState.current = state;
    }, [state]);

    const getPic = () => {
        if ( currState.current.backgroundImage === 'pic1') {
            return '/assets/pic1.jpg';
        } else if ( currState.current.backgroundImage === 'pic2'){
            return '/assets/pic2.jpg';
        } else {
            return '/assets/pic3.jpg';
        }
    }     

    return  <div className="fixed top-0 w-screen h-screen bg-cover z-0">
        <img src={getPic()} className="w-screen h-screen bg-no-repeat absolute md:top-0 md:right-0 md:left-0 md:bottom-0"></img>        
    </div>
}


export default Background;