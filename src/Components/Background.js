import React from 'react';
import Pic1 from "../Assets/pic1.jpg";
import Pic2 from "../Assets/pic2.jpg";
import Pic3 from "../Assets/pic3.jpg";

const Background = () => {
    
    const [ pic , setPic ] = React.useState(Pic1);

    return  <div className="fixed top-0 w-screen h-screen bg-cover z-0">
        <img src={pic} className="w-screen h-screen bg-no-repeat absolute md:top-0 md:right-0 md:left-0 md:bottom-0"></img>        
    </div>
}


export default Background;