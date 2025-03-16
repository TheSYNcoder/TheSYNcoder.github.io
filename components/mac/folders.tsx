import Image from 'next/image';
import { Context } from '../../lib/store';
import { useContext } from 'react';


export const Folders = () => {
    const {state, dispatch} = useContext(Context) as AppStoreContextType;
      return (
         <div className="absolute right-0 mr-10 flex flex-col bg-transparent" style={{zIndex : 5}}>
          <Image src='/assets/hdd.png' height={12} width={12} alt='HDD image as in mac OS' className="m-4 mb-0 h-12 w-12 md:h-16 md:w-16  shadow-xl" />
           <div className="text-xs text-white ml-1 font-black mt-2">Macintosh HD</div>
          <div className="cursor-pointer focus:bg-gray-400 z-10" 
          onClick={() => dispatch({ type: "NEW_WINDOW", payload: { id: 'PROFILE', header: true } })}>
            <Image src='/assets/folder.png' height={12} width={12} alt='folder image as in Mac OS' className="m-4 mb-0 h-12 w-12 md:h-16 md:w-16 shadow-xl" />
            <div className="text-xs text-white ml-4 font-black mt-2">About Me</div>
          </div>
         </div>
      )
  }