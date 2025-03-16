import React from 'react';
import { Context } from "../../lib/store";


const Dock = () => {
    const [ clicked , setClick ] =  React.useState(false);
    const [ window , setWindow ] = React.useState<string>('');
    const {state, dispatch} = React.useContext(Context) as AppStoreContextType;
    const [name, setName] = React.useState('');

    const getName = () => {
        if ( window === 'TERMINAL' ) {
            return 'Terminal';
        }
        if ( window === 'MAIL') {
            return 'Mail';
        }
        return 'Hello';
    }

    React.useEffect(() => {
        var timeout: NodeJS.Timeout;
        if ( clicked ){
                timeout = setTimeout(() => {
                    setClick(false);
                    if ( window){
                        dispatch({ type: "NEW_WINDOW", payload: { id: window, header: true, title: getName() } })
                    }                    
                }, 1500);
                
        }
        return () => clearTimeout(timeout);
    }, [clicked]);
    return (
        
        <div className="absolute bottom-0 w-full flex flex-row justify-center" > 
            <div className="flex flex-row rounded-tl-xl rounded-tr-xl pl-2 pr-2" style={{ backgroundColor: "rgb(227 , 230 , 252, 0.3)" }}>
                <img src='/assets/bigsur.png' onClick={ () => {
                    setClick(true); setWindow('PROFILE'); setName('finder'); } } 
                className={ "h-16 w-16 " + ( clicked &&  name === 'finder' ? "animate-bounce"  :"") } ></img>
                <img src='/assets/launchpad.png' onClick={() => {
                    setClick(true); setWindow(''); setName('launchpad')
                }}
                    className={"h-16 w-16 " + (clicked  && name === 'launchpad' ? "animate-bounce" : "")}></img>
                <img src='/assets/mail.png' onClick={() => {
                    setClick(true); setWindow('MAIL'); setName('mail');
                }}
                    className={"h-14 w-14 mt-1 " + (clicked  && name === 'mail' ? "animate-bounce" : "")}></img>
                <img src='/assets/terminal.png' onClick={() => {
                    setClick(true); setWindow('TERMINAL'); setName('terminal')
                }}
                    className={"h-16 w-16 " + (clicked && name === 'terminal' ? "animate-bounce" : "")} ></img>
                
            </div>
        </div>
    )
}

export default Dock;