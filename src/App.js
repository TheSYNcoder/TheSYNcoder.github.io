import React, { useContext} from 'react';
import {ThemeProvider} from 'next-themes';
import {useTheme} from 'next-themes';
import Store , { Context } from './store';
import Draggable from './draggable';
import Header from "./Components/WindowHeader";
import Background from "./Components/Background";
import ContextMenu from "./Components/useContextHook";
import DefaultContextMenu from "./Components/DefaultContextMenu";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Profile from "./Components/Profile";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


import Terminal from "./Components/Terminal";



import HDD from "./Assets/hdd.png";
import Folder from "./Assets/folder.png";

const Component = () => {
  const { theme, setTheme } = useTheme();
  const  [ state, dispatch ] = useContext(Context);
  const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
  };

  // const [file, setFile] = React.useState(pdfFile);
  // const [numPages, setNumPages] = React.useState(null);
  // const [pageNumber, setPageNumber] = React.useState(1);

  // function onDocumentLoadSuccess({ numPages: nextNumPages }) {
  //   console.log('doc loaded');
  //   setNumPages(nextNumPages);
  // }


  const getComponent = (id) => {

    switch(id){
      case 'PROFILE':
        return <Profile/>
      case 'TERMINAL':
        return <Terminal/>
      default:
        return  <div>Some Content</div>
    }
  }

  return (
    <div className="relative bg-transparent" style={{zIndex :2}}>
      {/* <div className="flex justify-items-center align-middle">
        <button className="rounded-xl h-6 w-12 bg-red-400 dark:bg-white text-black focus:outline-none"
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark'
            );
          }}
        >Toggle</button>
        <button className="rounded-xl h-6 w-12 bg-red-400 dark:bg-white text-black focus:outline-none"
        onClick = {() => dispatch({type : "NEW_WINDOW" , payload : { id : '123343', header : true }})}
        >Click to open</button>
        <button className="rounded-xl h-24 w-24 ml-5 bg-red-400 dark:bg-white text-black focus:outline-none"
        onClick = {() => dispatch({type : "NEW_WINDOW" , payload : { id : '1231ew43', header : true }})}
        >Click to open different</button>
        <button className="rounded-xl h-40 w-24 ml-5 bg-red-400 dark:bg-white text-black focus:outline-none"
        onClick = {() => dispatch({type : "NEW_WINDOW" , payload : { id : 'PROFILE', header : true }})}
        >Click to open Profile</button>
        <button className="rounded-xl h-40 w-24 ml-5 bg-red-400 dark:bg-white text-black focus:outline-none"
        onClick = {() => dispatch({type : "NEW_WINDOW" , payload : { id : 'TERMINAL', header : true, title :"Terminal" }})}
        >Click to open terminal</button>
      </div> */}
      <div>
        {state.windowsOpen.map(w =>
          <Draggable key={w.id} id={w.id} header={w.header} title={w.title} >
            { getComponent(w.id) }
            </Draggable>

        )}
      </div>
      {/* <div className="relative z-20 w-2/3">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          <Page pageNumber={pageNumber} width={600} />
        </Document>
      </div> */}
    </div>
  );
} 


const Stacks = () => {
  const [state, dispatch] = useContext(Context);
    return (
       <div className="absolute right-0 mr-10 flex flex-col bg-transparent z-10">
         <img src={HDD} style={{height:"70px", width:"70px"}} className="m-4 mb-0 shadow-xl" />
         <div className="text-xs text-white ml-1 font-black mt-2">Macintosh HD</div>
        <div className="cursor-pointer focus:bg-gray-400 z-30" 
        onClick={() => dispatch({ type: "NEW_WINDOW", payload: { id: 'PROFILE', header: true } })}>
          <img src={Folder} style={{ height: "70px", width: "70px" }} className="m-4 mb-0 shadow-xl" />
          <div className="text-xs text-white ml-4 font-black mt-2">About Me</div>
        </div>
       </div>
    )
}
 
const App = ()  => {  

  
  
  return (
    <Store>
      <ThemeProvider attribute="class" defaultTheme="dark" >  
      
        <Header />          
        <Component />   
        <Stacks/>
        <Background />
        <ContextMenu menu={ <DefaultContextMenu />} />
      
      </ThemeProvider>      
    </Store>
    
  );
}

export default App;
