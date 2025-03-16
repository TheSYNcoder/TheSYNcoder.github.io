import React from 'react';
import Image from 'next/image'
import Typewriter from 'typewriter-effect';


const About = () : any => {
    return (
        <div>
            <div className="items-center flex flex-col h-full w-full">
                <Image unoptimized src="/assets/photo.jpg" alt='A selfie of myself' height={70} width={60}  className="h-2/5 w-4/5 overflow-hidden rounded-3xl mt-2 ring-4 ring-black"></Image>
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
                        <ion-icon name="logo-facebook" style={{ fontSize: "30px", color: "blue", margin: "2px" }}/>
                    </a>
                    <a href="https://www.instagram.com/chroma_mania/">
                        <Image src="/assets/insta.jpeg" alt='Instagram icon' width={30} height={100} style={{ margin:"2px" }}/>
                    </a>
                    <a href="https://www.linkedin.com/in/shuvayan-ghosh-dastidar/">                    
                        <ion-icon name="logo-linkedin" style={{ fontSize: "30px", color: "#0077B5", margin: "2px" }}/>
                    </a>
                    <a href="https://github.com/TheSYNcoder/">
                        <ion-icon name="logo-github" style={{ fontSize: "30px", color: "black", margin :"2px" }} />
                    </a>
                    <a href="https://twitter.com/TheSYNcoder">
                        <ion-icon name="logo-twitter" style={{ fontSize: "30px", color: "lightblue", margin: "2px" }}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;