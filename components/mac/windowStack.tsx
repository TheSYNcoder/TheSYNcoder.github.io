import { Context } from '../../lib/store';
import Draggable from '../../lib/draggable';
import { useContext } from 'react';
import {useTheme} from 'next-themes';
import ChangeBackground from './changeBackground';
import Mail from './mail';
import Terminal from './terminal';
import Profile from './profile';
import React from 'react';


export const WindowStacks = () => {
    const { theme, setTheme } = useTheme();
    const {state, dispatch} = useContext(Context) as AppStoreContextType;
  
    React.useEffect(() => {    
      setTheme('dark');    
    }, []);
  
  
    const getComponent = (id: string) => {
  
      switch(id){
        case 'PROFILE':
          return <Profile/>
        case 'TERMINAL':
          return <Terminal context={{
              height: '',
              width: ''
          }}/>
        case 'CHANGE_BACKGROUND':
          return <ChangeBackground context={{
              height: 0,
              width: 0
          }}/>
        case 'MAIL':
          return <Mail context={{
              height: '',
              width: ''
          }} />
        default:
          return  <div>Some Content</div>
      }
    }
  
    return (
      <div className="relative bg-transparent" style={{zIndex :2}}>
        <div>
          {state.windowsOpen.map(w =>
            <Draggable key={w.id} id={w.id} header={w.header} title={w.title} >
                {getComponent(w.id)}                
            </Draggable>                            
          )}
        </div>
      </div>
    );
  } 