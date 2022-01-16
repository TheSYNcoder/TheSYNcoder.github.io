import React from 'react';
import { Context } from "../store";

const Banner = () => {


    
    
    const [show, setShow] = React.useState(true);

    


    return (
        <div id="banner" role='alert' className={"absolute top-1/4 left-1/4 z-10 w-6/12 flex flex-col h-30 rounded-xl bg-blue-100  border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md " + (show ? "" : "hidden")}  >
            <strong class="font-bold">Hey welcome!</strong>
            <span class="block sm:inline">This is my space. Use the terminal if you are a geek :). Click on About me to know about me. Right click anywhere for more fun. Use ctrl + space to open up spotlight to go to any application. Wanna contact me for some chat or projects, shoot a mail using the mail app! Have fun!!</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setShow(false)}>
                <svg class="fill-current h-6 w-6 text-blue-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
            </span>
        </div>
    )
}

export default Banner;