import StackGrid, { transitions } from "react-stack-grid";
import React from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const { scaleDown } = transitions;
const images = [
    '/imgs/vasu/v0.png',
    '/imgs/vasu/v2.png',
    '/imgs/vasu/v8.png',  
    '/imgs/vasu/v3.png',
    '/imgs/vasu/v4.png',
    '/imgs/vasu/v5.png',
    '/imgs/vasu/v6.png',
    '/imgs/vasu/v1.png',
    '/imgs/vasu/v7.png',
]

const VasImgComp = (props) => {
    console.log(props);
    return (
        <div key={props.k}>
            <img src={props.img} alt="Vasu pic" className="object-cover" />
        </div>
    )
}

const Banner = (props) => {



    return (
        <div id="banner" role='alert' className={"absolute top-1/4 left-1/4 z-10 w-6/12 flex flex-col h-30 rounded-2xl bg-purple-400  border-t-4  rounded-b text-white px-4 py-3 shadow-md " + (props.show ? "" : "hidden")}  >
            <strong class="font-bold py-6 text-2xl">Happy Birthday!!! 🎂 🍰</strong>
            <span class="block sm:inline text-lg">Hi Vasundhara, the very less time I have spent with you till now has been amazing and I want you to enjoy your birthday to the fullest. It's okay if we cannot celebrate your birthday this time together but I really hope we can be together for all the next amazing birthdays you are going to have. That being said, always carry that beautiful smile of yours which brightens up my day and I am sure the people around you. So may you have the best birthday. You are the best! Meet Soon.</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => props.setShow(false)}>
                <svg class="fill-current h-6 w-6 text-blue-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
            </span>
        </div>
    )
}


const Vasundhara = () => {

    const [show, setShow] = React.useState(true);
    const { width, height } = useWindowSize()
    return (
        <div className="w-full h-screen bg-gradient-to-bl from-blue-400 to-pink-500">
            <Banner show={show} setShow={setShow} />
            <Confetti 
                width={width}
                height={height}
                run={show}
            />
            <div className={show ? "blur-md" : ""}>
                <div className="text-white font-bold text-7xl font-sans text-center py-10">Vasundhara Chatterjee</div>
                <div className="font-bold text-center text-lg text-gray-200 pb-5">I love you cause the entire universe helped me find you and you know how.🙃</div>
                <div className="grid grid-cols-10">
                    <StackGrid
                        columnWidth={150}
                        duration={1000}
                        appearDelay={100}
                        gutterHeight={50}
                        gutterWidth={30}
                        appear={scaleDown.appear}
                        appeared={scaleDown.appeared}
                        enter={scaleDown.enter}
                        entered={scaleDown.entered}
                        leaved={scaleDown.leaved}
                        className="col-start-2 col-span-8"
                    >
                        {
                            images.map( ( img, i) => <VasImgComp img={img} k={i} />)    
                        }
                        
                                                        
                    </StackGrid>
                </div>
            </div>
        </div>
    )
}

export default Vasundhara;