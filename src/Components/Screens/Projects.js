import React from 'react';
import HDD from "../../Assets/hdd.png";
const Projects = () => {

    const projectList = [
        {
            title : 'Jadavpur University Compiler Compiler',
            description : 'A LL(1) parser written in C++. It supports dynamic grammar files for parsing different languages and visualizes the abstract syntax tree using Treant.js', 
            link: 'https://github.com/TheSYNcoder/JuCC',
            featImage: 'https://user-images.githubusercontent.com/42897033/116920657-8acdf480-ac70-11eb-8d3f-46cf27fcb1a1.png' ,
        },
        {
            title : 'An Assembler',
            description: 'Implementation of a two-pass assembler involving tries for fast in-memory opcode fetch and has implementation of loader and linkers for linking the object file created to make an executable file.',
            link: 'https://github.com/TheSYNcoder/ProprietaryAssembler',
            featImage: 'https://images.unsplash.com/photo-1583109193439-1ebb113bceac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1237&q=80' ,
        },
        {
            title : 'Budgify',
            description: 'A personal savings app to maintain your day to day expenses and incomes. The app has many features such as tracking expenses and visualizing them',
            link: 'https://play.google.com/store/apps/details?id=com.budgify',
            featImage: 'https://play-lh.googleusercontent.com/WN77wvQymKgTcOBXt1o-C6hSQfTOcorhkYr6VpXAWf0bvm5tDHSAPPRNC7ev-nn3fPM=s180-rw',
        },
    ]

    return  (
        <div className="h-full w-full flex flex-col items-center ">
            <div className="text-black dark:text-white font-black text-xl mt-2 p-2">Featured Projects</div>
            <div className="flex w-11/12 flex-col">{
                projectList.map( proj => <div key={proj} className="border-2 border-blue-500 p-2 my-2 flex flex-col w-full shadow-xl">
                    <div className="flex flex-row">
                        <img className=" w-4/12 rounded-xl " src={proj.featImage}></img>
                        <div className="ml-2 w-8/12">
                            <div className="text-md dark:text-white text-black font-bold ">{proj.title}</div>
                            <div className="text-md dark:text-gray-200 text-gray-600 font-normal ">{proj.description}</div>
                            <a className="text-sm dark:text-white text-black font-medium hover:text-gray-800" href={proj.link}> <ion-icon name="link-outline" large ></ion-icon>View Project </a>
                        </div>
                    </div>
                </div>)
            }</div>
        </div>
    )
}

export default Projects;
