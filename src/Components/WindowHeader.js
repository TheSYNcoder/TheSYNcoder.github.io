import React from 'react';


const getDayLiteral = (e) => {
    switch(e) {
        case 0: 
            return "SUN";
        case 1:
            return "MON";
        case 2:
            return "TEU";
        case 3:
            return "WED";
        case 4:
            return "THU";
        case 5:
            return "FRI";
        case 6:
            return "SAT";
        default:
            return "SUN";
    }
}

const getMonth = (e) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[e];
}

const WindowHeader = (props) => {

    return (
        <div className="overflow-hidden relative" style={{zIndex : 5, backgroundColor : "rgb(227, 226, 252, 0.3)"}}>
            <div className="float-left text-black flex flex-row ml-3" style={{zIndex : 10}}>
                <div className="text-center font-sans text-xl text-white m-1 mr-4 mt-0"></div>
                <div className="text-center font-sans text-md text-white m-1">Finder</div>
            </div>
            <div className="float-right text-white text-sm flex-row flex mr-3" style={{ zIndex: 10 }}>
                <div className="text-center font-sans text-md text-white m-1" >{getDayLiteral(new Date().getDay)} {' '} {new Date().getDate()} {' '} {getMonth(new Date().getMonth())}</div>
                <div className="text-center font-sans text-md text-white m-1" >{new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</div>
            </div>
        </div>
    )
};

export default WindowHeader;