import React from 'react';
import { Context } from "../store";

const SpotLight = () => {

    const [state, dispatch] = React.useContext(Context);    
    const currState = React.useRef(state);

    const [ show , setShow ] = React.useState(false);

    const [ keysPressed , setKeys ] = React.useState({});

    const onKeyDown = (e) => {
        var map = keysPressed;
        map[e.keyCode] = true;
        map[e.key] = true;
        // control and space together
        if ( ( map[17] || map['Meta']) && map[32] ){
            setShow(true);
        }
        setKeys(map);

    }

    const onKeyUp = (e) => {
        var map = keysPressed;
        delete map[e.keyCode];
        delete map[e.key];
        setKeys(map);        
    }


    const onClick = (e) => {
        var spot = document.getElementById('spotlight'), targetEl = e.target;

        do {
            if (targetEl === spot) {
                return;
            }
            targetEl = targetEl.parentNode;
        } while (targetEl.parentNode && targetEl);

        // outside
        show && setShow(false);
    }

    React.useEffect(() => {
        document.addEventListener('keydown', onKeyDown , false );
        document.addEventListener('keyup', onKeyUp , false );
        document.addEventListener('click' , onClick , false );
        return () => {
            document.removeEventListener('keydown' , onKeyDown , false );
            document.removeEventListener('keyup' , onKeyUp , false );
            document.removeEventListener('click' , onClick , false );
        }
    }, []);


    React.useEffect(() => {
        currState.current = state;
    }, [state]);

    const validOptions = [ 'terminal.app', 'mail.app' , 'finder.app' ];
    const [ value , setValue ] = React.useState('');

    const onClickSpot = (e) => {
        setValue(e);

    }

    const getSuggestions = () => {
        return validOptions.map( e =>{
            if ( e.indexOf(value) !== -1) 
                return  <div key={e} onClick={() => onClickSpot(e)} className="text-white text-md p-2 hover:bg-gray-100 rounded-xl hover:text-black">{e}</div>    
        })
        
    }

    const handleKeyDown = (e) => {
        if ( e.keyCode === 13 ){
            var index = validOptions.indexOf(value);
            if ( index === -1 ){
                setShow(false);
                return;
            }
            if ( index === 0) {
                dispatch({ type: "NEW_WINDOW", payload: { id: 'TERMINAL', header: true, title: "Terminal" } })            
            } else if ( index === 1 ){
                dispatch({ type: "NEW_WINDOW", payload: { id: 'RANDOM', header: true, title: "Mail" } })            
            } else if ( index ===  2 ){
                dispatch({ type: "NEW_WINDOW", payload: { id: 'RANDOM', header: true, title: "Finder" } })
            }
            setShow(false);

        }
    }

    return (
        <div id="spotlight" className={ "absolute top-1/4 left-1/4 z-10 w-6/12 flex flex-col h-30 rounded-xl " + ( show ? ""  : "hidden")} style={{backgroundColor : "rgb(224, 252, 242, 0.6)"}} >
            <input value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown}
            className="focus:outline-none border-b-2 border-gray-400 h-4 w-11/12  bg-transparent ml-4 p-5 pl-2 pr-1"></input>
            <div>{getSuggestions()}</div>
        </div>
    )
}

export default SpotLight;