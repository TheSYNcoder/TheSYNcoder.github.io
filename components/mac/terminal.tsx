import React, { FunctionComponent } from 'react';
import { Context } from '../../lib/store';
import useLocalStorage from '../../hooks/useLocalStorage';
import { initialTerminalDirectoryStructure, initialTerminalFileState } from '../../lib/initState';

const Terminal : FunctionComponent<WindowSizeContext> = (props) => {

    const {state, dispatch} = React.useContext(Context) as AppStoreContextType;
    const [ currDir , setDir ] = React.useState('shuvayan');
    const currState = React.useRef(state);
    var context = props.context;

    var [directoryState, setDirectoryState] = useLocalStorage('localstructure', initialTerminalDirectoryStructure);    
    var [fileState, setFileState] = useLocalStorage('files', initialTerminalFileState);
    

    React.useEffect(() => {
        currState.current = state;        
    }, [state.terminal]);

    type HistoryState = {
        res? : string, 
        statement? : string
    }

    const [currHistory , setCurrHistory] = React.useState<HistoryState[]>([]);

    const [currValue, setValue] = React.useState("");

    // process 
    const processLs = (tokens : string[]) => {
        var contents = [];        
        var validDir = currDir === 'shuvayan' ? Object.keys(directoryState) : directoryState[currDir];        
        if ( tokens.length === 1 ){
            if ( currDir === 'shuvayan') {
                contents = Object.keys(directoryState['folders']);
                return contents.map(e => e.split('/').slice(-1)[0]).join(' ');
            }                                 
            
            return directoryState[currDir].map((e: string) => e.split('/').slice(-1)[0]).join(' ');
        }
        var dirs = tokens.slice(1);
        const ret : Record<string, any> = {};
        for ( var dir of dirs ){
            var tobes = currDir + '/' + dir;
            if ( validDir.indexOf(tobes) !== -1){
                ret[dir] = directoryState[tobes];
            }
            else {
                ret[dir] = ['ls: ' + dir + ': No such file or directory'];
            }
        }
        return ret;
        
    }


    const processCD = (tokens: string[]) => {

        var validDir = currDir === 'shuvayan' ? Object.keys(directoryState) : directoryState[currDir];
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


    const processTouch = (tokens: string[]) => {
        var ret : string[] = [];
        var filest = fileState;
        var dirStr = directoryState;
        if ( tokens.length === 1 ){
            return [ "touch: usage: touch <file1> <file2> .."];
        }
        var filenames = tokens.slice(1);
        var validfiles = Object.keys(filest);
        for ( var file of filenames ){
            var sysfile = currDir + '/' + file;
            if ( validfiles.indexOf(sysfile) !== -1 ){
                continue;
            }
            filest[sysfile] = "";
                        
            var filesinDir;
            if (currDir === 'shuvayan') {
                var fils = dirStr['folders'];
                console.log(dirStr , fils);
                fils[sysfile] = "";
                dirStr['folders'] = fils;
            } else {
                filesinDir = dirStr[currDir];
                filesinDir.push(file);
                dirStr[currDir] = filesinDir;
            }                                            
        }
        setFileState(filest);
        setDirectoryState(dirStr);                
        return ret;
    }


    const processCAT = (tokens: string[]) => {
        var ret : string[] = [];
        if ( tokens.length ===  1 ) {
            return ret;
        }
        const filenames = tokens.slice(1);
        
        for ( var file of filenames ){
            var content = fileState[currDir + '/' + file ];
            ret.push(content);
        }
        return ret;
    }


    const processOpen = (tokens: string[]) => {
        var ret : string[] = [];
        
        if ( tokens.length !== 2){
            return [ 'open: usage: open <app>'];
        }
        
        var validDir = currDir === 'shuvayan' ? Object.keys(directoryState) : directoryState[currDir];
        var filenames = Object.keys(fileState);
        // cannot open files
        const appname = tokens[1].toLowerCase();
        if ( filenames.indexOf( currDir + '/' + appname ) !== -1){
            return [ 'open: error: cannot open file : ' + appname];
        }
        // open finder on not app 

        // TODO fix implementation of finder and mail apps
        // var dirs = Object.keys(JSON.parse(localStorage.getItem('localstructure')));
        // if ( dirs.indexOf( currDir + '/' + appname ) !== -1){
        //     dispatch({ type: "NEW_WINDOW", payload: { id: 'RANDOM', header: true, title : appname } })
        //     return ret;
        // }
        var validApps = directoryState['shuvayan/applications'].map((e : string) => e.toLowerCase());
        if (currDir === 'shuvayan/applications' && validApps.indexOf(appname) !== -1){  
            if ( appname === 'terminal.app'){
                dispatch({ type: "NEW_WINDOW", payload: { id: 'TERMINAL', header: true, title: appname } })
            } else if ( appname === 'mail.app'){
                dispatch({ type: "NEW_WINDOW", payload: { id: 'MAIL', header: true, title: appname } });
            } else {
                dispatch({ type: "NEW_WINDOW", payload: { id: 'PROFILE', header: true, title: appname } });
            }
            
            return ret;
        }
        return ['open: error: cannot open ' + appname]        
    }
    

    const processStatement = () => {
        
        const validstatements = ['cd' , 'ls' , 'touch' , 'cat' , 'open', 'clear'];
        var curr = currHistory;
        if ( currValue === "") {
            curr.push({ statement: `Shuvayans-MacBook-Air:~ ${currDir.split('/').slice(-1)[0]}$` + currValue });
            return;
        }
        const tokens = currValue.split(' ').map( e => e.toLowerCase());
        const commmand = tokens[0];
        const error = "Wrong command : Supported Commands : cd , ls , touch , cat , open , clear";
        
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
                var touchRet = processTouch(tokens);
                for ( var r of touchRet) {
                    curr.push({ res : r});
                }
                setCurrHistory(curr);
                setValue('');
                return;
            }
            case 'cat' : {                
                var content = processCAT(tokens);
                for ( var con of content ){
                    curr.push({ res : con });                    
                }
                setCurrHistory(curr);
                setValue('');
                return;
            } 
            case 'open' : {
                var openRet = processOpen(tokens);
                for (var con of openRet) {
                    curr.push({ res: con });
                }
                setCurrHistory(curr);
                setValue('');
                return;
            }
            default : console.log('wrong command');
            
        }
        // setCurrHistory([...currHistory, { statement: `Shuvayans-MacBook-Air:~ ${currDir.split('/').slice(-1)[0]}$` + currValue }]);
        // setValue('');
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        
        if ( e.key === 'Enter') {
            // enter key            
            processStatement();            
        }
    }

    if (window.screen.width < 500) {
        context = {
            height: "30rem",
            width: (window.screen.width - 200) + "px"
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