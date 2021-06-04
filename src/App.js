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
import ChangeBackground from "./Components/ChangeBackground";
import Dock from "./Components/Dock";
import HDD from "./Assets/hdd.png";
import SpotLight from "./Components/Spotlight";
import Folder from "./Assets/folder.png";
import Head from 'next/head';
import Mail from "./Components/Mail";



const Component = () => {
  const { theme, setTheme } = useTheme();
  const  [ state, dispatch ] = useContext(Context);

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
      case 'MAIL':
        return <Mail />
      default:
        return  <div>Some Content</div>
    }
  }

  return (
    <div className="relative bg-transparent" style={{zIndex :2}}>
      <div>
        {state.windowsOpen.map(w =>
          <Draggable key={w.id} id={w.id} header={w.header} title={w.title} >
            { getComponent(w.id) }
            </Draggable>
        )}
      </div>
    </div>
  );
} 


const Stacks = () => {
  const [state, dispatch] = useContext(Context);
    return (
       <div className="absolute right-0 mr-10 flex flex-col bg-transparent" style={{zIndex : 5}}>
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
