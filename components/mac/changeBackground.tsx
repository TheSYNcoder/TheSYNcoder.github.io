import React from 'react';
import { Context } from '../../lib/store';

const ChangeBackground = (props: {context: {height: number, width: number}}) => {

    const {state, dispatch} = React.useContext(Context) as AppStoreContextType;

    var context = props.context;
    const currState = React.useRef(state);

    React.useEffect(() => {        
        currState.current = state;
    }, [state]);

    const getPic = () => {                        
        if (currState.current.backgroundImage === 'pic1') {
            return '/assets/pic1.jpg';;
        } else if (currState.current.backgroundImage === 'pic2') {
            return '/assets/pic2.jpg';;
        } else {
            return '/assets/pic3.jpg';;
        }
    }

    return  (   
        <div className="flex flex-col relative bg-white dark:bg-gray-900 rounded-bl-xl rounded-br-xl" style={{ height: context.height, width: context.width, minHeight: "35rem" }}>
            <div className="flex flex-row justify-around w-full h-1/4">
                <div className="w-1/4 text-black font-black dark:text-white text-2xl">Current Background :</div>
                <img className="w-1/2 rounded-xl overflow-hidden" src={getPic()}></img>
            </div>
            <div className="text-black dark:text-white font-black flex w-full items-center justify-center mt-3">Select your choice</div>
            <div className="grid grid-cols-2 gap-4 h-3/4 ml-8 mr-2 mt-5">
                <img onClick={() => dispatch({ type: "CHANGE_BACKGROUND", payload: "pic1" })}
                src='/assets/pic1.jpg' className="w-5/6 h-40 rounded-xl cursor-pointer"></img>
                <img onClick={() => dispatch({ type: "CHANGE_BACKGROUND", payload: "pic2" })}
                src='/assets/pic2.jpg' className="w-5/6 h-40 rounded-xl cursor-pointer"></img>
                <img onClick={() => dispatch({ type: "CHANGE_BACKGROUND", payload: "pic3" })}
                src='/assets/pic3.jpg' className="w-5/6 h-40 rounded-xl cursor-pointer"></img>
            </div>
        </div>
    )   
}

export default ChangeBackground;