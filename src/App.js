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
import ReactGA from 'react-ga';
import Terminal from "./Components/Terminal";
import ChangeBackground from "./Components/ChangeBackground";
import Dock from "./Components/Dock";
import HDD from "./Assets/hdd.png";
import SpotLight from "./Components/Spotlight";
import Folder from "./Assets/folder.png";

import Head from 'next/head';
ReactGA.initialize('G-7NQQVYC6KN');
ReactGA.pageview(window.location.pathname + window.location.search);






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

  React.useEffect(() => {    
    setTheme('dark');    
  }, []);


  const getComponent = (id) => {

    switch(id){
      case 'PROFILE':
        return <Profile/>
      case 'TERMINAL':
        return <Terminal/>
      case 'CHANGE_BACKGROUND':
        return <ChangeBackground/>
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
        <img src={HDD} className="m-4 mb-0 h-12 w-12 md:h-16 md:w-16  shadow-xl" />
         <div className="text-xs text-white ml-1 font-black mt-2">Macintosh HD</div>
        <div className="cursor-pointer focus:bg-gray-400 z-10" 
        onClick={() => dispatch({ type: "NEW_WINDOW", payload: { id: 'PROFILE', header: true } })}>
          <img src={Folder} className="m-4 mb-0 h-12 w-12 md:h-16 md:w-16 shadow-xl" />
          <div className="text-xs text-white ml-4 font-black mt-2">About Me</div>
        </div>
       </div>
    )
}
 
const App = ()  => {  

  
  
  
  return (
    <Store>
      <ThemeProvider attribute="class">  
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>Shuvayan's website</title>
          <meta name="description" content={"This is the personal website of Shuvayan Ghosh Dastidar. The portfolio website is made using ReactJs and tailwindcss."} />
        </Head>
        <Header />          
        <Component />   
        <Stacks/>
        <Background />
        <ContextMenu menu={ <DefaultContextMenu />} />
        <SpotLight />
        <Dock/>
      </ThemeProvider>      
    </Store>
    
  );
}

export default App;
