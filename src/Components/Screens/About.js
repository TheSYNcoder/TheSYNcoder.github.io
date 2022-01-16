import React from 'react';
import Photo from "../../Assets/photo.jpg";
import Insta from "../../Assets/insta.jpeg";
import Typewriter from 'typewriter-effect';


const About = () => {
    return (
        <div>
            <div className="items-center flex flex-col h-full w-full">
                <img src={Photo}  className=" h-3/5 w-2/5 overflow-hidden rounded-3xl mt-2 ring-4 ring-black"></img>
                <div className="text-black dark:text-white mt-4 font-black text-2xl">Shuvayan Ghosh Dastidar</div>
                <div className="text-black dark:text-white mt-4 font-semibold text-lg flex flex-row">Hey, I am a<Typewriter
                    options={{
                        strings: ['- Web Developer', '- Computer Vision Enthusiast', '- Competitive Programmer'],
                        autoStart: true,
                        loop: true,
                    }}

                /> </div>
                <div className="absolute bottom-0 mb-4 flex flex-row justify-center">
                    <a href="https://www.facebook.com/shuvayan.ghoshdastidar">
                        <ion-icon name="logo-facebook" style={{ fontSize: "30px", color: "blue", margin: "2px" }}></ion-icon></a>
                    <a href="https://www.instagram.com/chroma_mania/">
                        <img src={Insta} style={{width :"30px" , margin:"2px" }}/>
                    </a>
                    <a href="https://www.linkedin.com/in/shuvayan-ghosh-dastidar/">
                        <ion-icon name="logo-linkedin" style={{ fontSize: "30px", color: "#0077B5", margin :"2px" }}></ion-icon>
                    </a>
                    <a href="https://github.com/TheSYNcoder/">
                        <ion-icon name="logo-github" style={{ fontSize: "30px", color: "black", margin :"2px" }}></ion-icon>
                    </a>
                    <a href="https://twitter.com/TheSYNcoder">
                        <ion-icon name="logo-twitter" style={{ fontSize: "30px", color: "lightblue", margin: "2px" }}></ion-icon>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;