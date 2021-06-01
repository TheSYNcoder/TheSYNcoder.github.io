import React from 'react';
import Finder from "../Assets/bigsur.png";
import LaunchPad from "../Assets/launchpad.png";
import Terminal from "../Assets/terminal.png";
import Mail from "../Assets/mail.png";
import { Context } from "../store";


const Dock = () => {
    const [ clicked , setClick ] =  React.useState(false);
    const [ window , setWindow ] = React.useState(null);
    const [ store, dispatch]  = React.useContext(Context);
    const [name, setName] = React.useState('');

    React.useEffect(() => {
        var timeo;
        if ( clicked ){
                timeo = setTimeout(() => {
                    setClick(false);
                    if ( window){
                        dispatch({ type: "NEW_WINDOW", payload: { id: window, header: true, title: (window === 'TERMINAL' ? 'Terminal' : 'Hello') } })
                    }                    
                }, 1500);
                
        }
        return () => clearTimeout(timeo);
    }, [clicked]);
    return (
        
        <div className="absolute bottom-0 w-full flex flex-row justify-center" > 
            <div className="flex flex-row rounded-tl-xl rounded-tr-xl pl-2 pr-2" style={{ backgroundColor: "rgb(227 , 230 , 252, 0.3)" }}>
                <img src={Finder} onClick={ () => {
                    setClick(true); setWindow('PROFILE'); setName('finder'); } } 
                className={ "h-16 w-16 " + ( clicked &&  name === 'finder' ? "animate-bounce"  :"") } ></img>
                <img src={LaunchPad} onClick={() => {
                    setClick(true); setWindow(null); setName('launchpad')
                }}
                    className={"h-16 w-16 " + (clicked  && name === 'launchpad' ? "animate-bounce" : "")}></img>
                <img src={Mail} onClick={() => {
                    setClick(true); setWindow(null); setName('mail');
                }}
                    className={"h-14 w-14 mt-1 " + (clicked  && name === 'mail' ? "animate-bounce" : "")}></img>
                <img src={Terminal} onClick={() => {
                    setClick(true); setWindow('TERMINAL'); setName('terminal')
                }}
                    className={"h-16 w-16 " + (clicked && name === 'terminal' ? "animate-bounce" : "")} ></img>
                
            </div>
        </div>
    )
}

export default Dock;