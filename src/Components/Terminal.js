import React from 'react';
import { Context } from "../store";
import "./terminal.css";

const Terminal = (props) => {

    const [ state, dispatch ] = React.useContext(Context);
    const [ currDir , setDir ] = React.useState('shuvayan');
    const currState = React.useRef(state);


    var context = props.context;


    React.useState(() => {
        var dirStructure = JSON.parse(localStorage.getItem('localstructure'));            
        if (dirStructure === null || dirStructure === undefined) {
            dirStructure = {
                'folders': {
                    'Applications': [
                        'Mail.app',
                        'Terminal.app',
                        'Finder.app',
                    ],
                    'Documents': [
                        'Welcome.txt'
                    ],
                    'Desktop': [
                        'Machintosh HD',
                        'About me'                                                                        
                    ]
                },
                'shuvayan/applications': [
                    'Mail.app',
                    'Terminal.app',
                    'Finder.app',
                ],
                'shuvayan/desktop' : [
                    'Machintosh HD',
                    'About me'
                ],
                'shuvayan/machintosh hd/applications': [
                    'Mail.app',
                    'Terminal.app',
                    'Finder.app',
                ],
                'shuvayan/documents': [
                    'Welcome.txt'
                ],
                'shuvayan/machintosh hd': [
                    'Applications',
                    'shuvayan'
                ]
            }
            localStorage.setItem('localstructure', JSON.stringify(dirStructure));
        }
    }, []);
    

    React.useEffect(() => {
        currState.current = state;        
    }, [state]);

    const [currHistory , setCurrHistory ] = React.useState([]);

    const [currValue, setValue ] = React.useState("");

    // process 
    const processLs = (tokens) => {
        var contents = [];
        var dirStr = JSON.parse(localStorage.getItem('localstructure'));
        var validDir = currDir === 'shuvayan' ? Object.keys(dirStr) : dirStr[currDir];        
        if ( tokens.length === 1 ){
            if ( currDir === 'shuvayan') {
                contents = Object.keys(dirStr['folders']);
                return contents.join(' ');            
            }                                 
            
            return dirStr[currDir].join(' ');
        }
        var dirs = tokens.slice(1);
        const ret = {};
        for ( var dir of dirs ){
            var tobes = currDir + '/' + dir;
            if ( validDir.indexOf(tobes) !== -1){
                ret[dir] = dirStr[tobes];
            }
            else {
                ret[dir] = ['ls: ' + dir + ': No such file or directory'];
            }
        }
        return ret;
        
    }


    const processCD = (tokens) => {

        var dirStr = JSON.parse(localStorage.getItem('localstructure'));
        var validDir = currDir === 'shuvayan' ? Object.keys(dirStr) : dirStr[currDir];
        if ( tokens.length === 1 ){
            return null;
        } else if ( tokens.length > 2 ){            
            return 'cd: string not in pwd: ' + tokens[1];
        } else {
            var tobes = currDir + '/' + tokens[1];
            if ( tokens[1] === '.'){
                return null;
            }
            if ( tokens[1] === '..'){
                if ( currDir === 'shuvayan') return null;
                setDir( currDir.split('/').slice(0,-1).join('/'));
                return null;
            }
            if ( validDir.indexOf(tobes) === -1 ){                
                return 'cd: string not in pwd: ' + tokens[1] ;
            } else {
                if ( tobes === 'shuvayan/machintosh hd/shuvayan'){
                    setDir('shuvayan');
                    return null;
                }
                setDir(tobes);
                
                return null;
            }
        }
    
    }
    

    const processStatement = () => {
        
        const validstatements = ['cd' , 'ls' , 'touch' , 'cat' , 'open', 'clear'];
        if ( currValue === "") return;
        const tokens = currValue.split(' ').map( e => e.toLowerCase());
        const commmand = tokens[0];
        const error = "Wrong command : Supported Commands : cd , ls , touch , cat , open , clear";
        var curr = currHistory;
        curr.push({ statement: `Shuvayans-MacBook-Air:~ ${currDir.split('/').slice(-1)[0]}$` + currValue });
        if ( validstatements.indexOf(commmand) === -1) {            
            curr.push({res : error });
            setCurrHistory(curr);
            setValue('');
            return;
        }

        switch( commmand ){
            case 'ls' :{
                if ( tokens.length === 1 ){
                    curr.push( { res : processLs(tokens)});
                } else {
                    var ret = processLs(tokens);
                    if ( Object.keys(ret).length === 1){
                        curr.push( { res : ret[Object.keys(ret)[0]].join(' ') })
                    } else {
                        var keys = Object.keys(ret);
                        for (var key of keys ){
                            curr.push( {res : key + ":"});
                            curr.push( {res : ret[key].join(' ')});
                        }
                    }
                }
                setCurrHistory(curr);
                setValue('');
                return;
            }
            case 'cd' : {
                var cdout = processCD(tokens);
                if ( cdout === null ){
                    setCurrHistory(curr);                    
                } else {
                    curr.push({ res : cdout });
                }
                setCurrHistory(curr);          
                setValue('');      
                return;
            }
            case 'clear' :{
                setCurrHistory([]);
                setValue('');                
                return;
            }
            case 'touch' : {
                // TODO
                return;
            }
            case 'cat' : {
                // TODO
                return;
            } 
            case 'open' : {
                // TODO
                return;
            }
            default : console.log('wrong command');
            
        }
        // setCurrHistory([...currHistory, { statement: `Shuvayans-MacBook-Air:~ ${currDir.split('/').slice(-1)[0]}$` + currValue }]);
        // setValue('');
    }

    const handleKeyDown = (e) => {
        
        if ( e.keyCode === 13) {
            // enter key            
            processStatement();            
        }
    }
    

    return (
        <div className={"flex flex-col dark:bg-gray-800 bg-white rounded-b-xl overflow-y-auto" } style={{height : context.height , width : context.width}}>
            <div className="text-sm mt-2">Last login : {currState.current.terminal.lastLogin.toString()}</div>
            <br/>            
            <div>{
                currHistory.map((el, index) => {
                    return ( (el.statement === undefined || el.statement === null ) ? <div className="text-sm">{el.res}</div>
                        : <div className="text-sm">{el.statement}</div>
                    )
                }) 
            }</div>
            <div className="flex flex-row">
                <div className="text-sm">{`Shuvayans-MacBook-Air:~ ${currDir.split('/').slice(-1)[0]}$`} </div>
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