import React from "react";
import Send from "../Assets/send.png";


const Mail = (props) => {
    var context = props.context;

    if (window.screen.width < 600) {
        context = {
            height: "30rem",
            width: window.screen.width - 100
        }
    }

    const [ cc, setCc ] = React.useState('');
    const [ subject , setSubject  ] = React.useState('');
    const [ from , setFrom ] = React.useState('');
    const [ body , setBody ] = React.useState('');

    return (
        <div className="flex relative bg-white dark:bg-gray-900 rounded-b-xl" style={{ height: context.height, width: context.width, minHeight: "30rem" }}>
            <div className="flex flex-col mx-1 h-full w-full">
                <div className="h-10 w-full p-1" style={{backgroundColor :"rgb(56,59,65)"}}>
                    <a href={`mailto:sgd030@gmail.com?subject=${encodeURI(subject)}&cc=${cc}&body=${encodeURI(body)}`}>
                    <img
                            className="ml-3 cursor-pointer" src={Send}></img></a>
                </div>
                <div className="flex flex-row w-full mt-3 ml-3">
                    <div className="text-xs mr-5 dark:text-gray-400 text-gray-800">To:</div>
                    <div className="text-xs mr-5 dark:text-white text-gray-900">sgd030@gmail.com</div>
                </div>
                <div className="border dark:border-gray-800 border-gray-800 border-b-1 my-3"></div>
                <div className="flex flex-row w-full mt-1 ml-3">
                    <div className="text-xs mr-5 dark:text-gray-400 text-gray-800">Cc:</div>
                    <input value={cc} onChange={(e) => setCc(e.target.value)}
                    className="text-xs mr-5 dark:text-white w-full text-gray-900 bg-transparent outline-none"></input>
                </div>
                <div className="border dark:border-gray-800 border-gray-800 border-b-1 my-3"></div>
                <div className="flex flex-row w-full mt-1 ml-3">
                    <div className="text-xs mr-5 dark:text-gray-400 text-gray-800">Subject:</div>
                    <input value={subject} onChange={(e) => setSubject(e.target.value)}
                    className="text-xs mr-5 dark:text-white w-full text-gray-900 bg-transparent outline-none"></input>
                </div>
                <div className="border dark:border-gray-800 border-gray-800 border-b-1 my-3"></div>
                <div className="flex flex-row w-full mt-1 ml-3">
                    <div className="text-xs mr-5 dark:text-gray-400 text-gray-800">From:</div>
                    <input value={from} onChange={(e) => setFrom(e.target.value)}
                    className="text-xs mr-5 w-full dark:text-white text-gray-900 bg-transparent outline-none"></input>
                </div>
                <div className="border dark:border-gray-800 border-gray-800 border-b-1 my-3"></div>
                <textarea value={body} onChange={e => setBody(e.target.value)}
                className="px-2 mt-3 h-full w-full dark:text-white text-black text-md outline-none bg-transparent"></textarea>
            </div>
        </div>
    );

}

export default Mail;