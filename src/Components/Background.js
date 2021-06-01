import React from 'react';
import Pic1 from "../Assets/pic1.jpg";
import Pic2 from "../Assets/pic2.jpg";
import Pic3 from "../Assets/pic3.jpg";
import {Context } from "../store";
const Background = () => {

    const [state, dispatch] = React.useContext(Context);
    
    const currState = React.useRef(state);

    React.useEffect(() => {

        currState.current = state;
    }, [state]);

    const getPic = () => {
        if ( currState.current.background_image === 'pic1') {
            return Pic1;
        } else if ( currState.current.background_image === 'pic2'){
            return Pic2;
        } else {
            return Pic3;
        }
    }     

    return  <div className="fixed top-0 w-screen h-screen bg-cover z-0">
        <img src={getPic()} className="w-screen h-screen bg-no-repeat absolute md:top-0 md:right-0 md:left-0 md:bottom-0"></img>        
    </div>
}


export default Background;