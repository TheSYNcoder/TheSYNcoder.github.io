import React from 'react';
import { act } from 'react-dom/test-utils';
import About from './Screens/About';
import Projects from './Screens/Projects';
import Research from './Screens/Research';
import Timeline from "./Timeline";

import AboutSVG from "../Assets/profile.svg"
import ProjectSVG from "../Assets/project.svg"
import ResearchSVG from "../Assets/research.svg"
import Clock from "../Assets/clock.png";

const Profile = (props) => {

    const [ activeScreen , setScreen ] = React.useState("about");
    const [ navbar , showNavbar] = React.useState(false);


    const screens = {
        'about' : <About/>,
        'projects' : <Projects/>,
        'research' : <Research/>,
        'timeline' : <Timeline/>
    }

    const changeScreen = (e) => {
        localStorage.setItem("profile" , e);
        setScreen(e);
        
    }

    React.useEffect(() => {
        var last = localStorage.getItem("profile");
        if ( last === null || last === undefined ){
            last = "about";
        }
        setScreen(last);
        changeScreen(last);
    }, []);

    
    const renderNavLinks = () => {
        return (
            <div>
                <div tabIndex="0" onFocus={() => changeScreen('about')} className={(activeScreen === "about" ? " bg-gray-300  bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full rounded-lg cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex items-center pl-2 md:pl-2.5"}>
                    <img className=" w-2 md:w-4 " alt="About" src={ AboutSVG } style={{color : "white"}} />
                    <span className=" ml-1 md:ml-2 text-black text-xs dark:text-white ">About Me</span>
                </div>
                <div tabIndex="0" onFocus={() => changeScreen('projects')} className={(activeScreen === "projects" ? " bg-gray-300  bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full rounded-lg cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex items-center pl-2 md:pl-2.5"}>
                    <img className=" w-2 md:w-4 " alt="Projects" src={ ProjectSVG }/>
                    <span className=" ml-1 md:ml-2 text-black text-xs dark:text-white">Projects</span>
                </div>
                <div tabIndex="0" onFocus={() => changeScreen('research')} className={(activeScreen === "research" ? " bg-gray-300  bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full  rounded-lg cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex items-center pl-2 md:pl-2.5"}>
                    <img className=" w-2 md:w-4 " alt="Research" src={ ResearchSVG }/>
                    <span className=" ml-1 md:ml-2 text-black text-xs dark:text-white">Research</span>
                </div>
                <div tabIndex="0" onFocus={() => changeScreen('timeline')} className={(activeScreen === "timeline" ? " bg-gray-300  bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full  rounded-lg cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex items-center pl-2 md:pl-2.5"}>
                    <img className=" w-2 md:w-4 " alt="Timeline" src={ Clock }/>
                    <span className=" ml-1 md:ml-2 text-black text-xs dark:text-white">Timeline</span>
                </div>
                
            </div>
        );
    
    }


    var context = props.context;

    if ( window.screen.width < 600 ){
        context = { 
            height : "30rem", 
            width : window.screen.width - 100
        }
    }

    


    return (
        <div className="flex relative" style={{height  : context.height , width : context.width, minHeight :"30rem"}}>
            <div className="md:flex hidden flex-col w-1/4 md:w-1/5 h-full bg-gray-200 dark:bg-gray-700 text-sm overflow-y-auto rounded-bl-xl" style={{height : context.height }}>
                {renderNavLinks()}
            </div>
            <div onClick={() => showNavbar(!navbar)} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                <div className=" w-3.5 border-t border-black"></div>
                <div className=" w-3.5 border-t border-black" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                <div className=" w-3.5 border-t border-black"></div>
                <div className={(navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                    {renderNavLinks()}
                </div>
            </div>
            <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center rounded-br-xl flex-grow bg-white dark:bg-gray-900  overflow-y-auto windowMainScreen font-sans">
                {screens[activeScreen]}
            </div>
        </div>
    );


}


export default Profile;