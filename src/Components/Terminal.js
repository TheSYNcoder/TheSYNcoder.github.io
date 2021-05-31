import React from 'react';

import { Context } from "../store";
import "./terminal.css";

const Terminal = (props) => {

    const [ state, dispatch ] = React.useContext(Context);
    const currState = React.useRef(state);

    // React.useEffect(() => {
    //     var terminal = document.getElementById("terminal");
    //     terminal.addEventListener("contextmenu" , (e) => {
    //         e.preventDefault();
    //     });
    //     return () => terminal.removeEventListener("contextmenu" , (e) => {
    //         e.preventDefault();
    //     })
    // },[]);

    var context = props.context;
    

    React.useEffect(() => {
        currState.current = state;
    }, [state]);

    const [currHistory , setCurrHistory ] = React.useState([]);

    const [currValue, setValue ] = React.useState("");

    const handleKeyDown = (e) => {
        
        if ( e.keyCode === 13) {
            // enter key
            setCurrHistory([...currHistory , currValue]);
            setValue('');
        }
    }

    return (
        <div className={"flex flex-col dark:bg-gray-800 bg-white rounded-b-xl overflow-y-auto" } style={{height : context.height , width : context.width}}>
            <div className="text-sm mt-2">Last login : {currState.current.terminal.lastLogin.toString()}</div>
            <br/>            
            <div>{
                currHistory.map((el, index) => {
                    return (<div className="text-sm">Shuvayans-MacBook-Air:~ shuvayan$ {el}</div>
                    )
                }) 
            }</div>
            <div className="flex flex-row">
                <div className="text-sm">Shuvayans-MacBook-Air:~ shuvayan$ </div>
                <input className="outline-none text-sm" value={currValue} 
                    onChange={(e) => setValue(e.target.value)} 
                    onKeyDown={(e) => handleKeyDown(e)}
                    style={{backgroundColor:"inherit"}}
                    autoComplete={"off"}
                />
            </div>
        </div>
    )
}


export default Terminal;