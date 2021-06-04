import React from 'react';
import { width } from 'tailwindcss/defaultTheme';
import { Context } from './store';



const Draggable = (props) => {

    const [state, dispatch] = React.useContext(Context);


    const [ currHeight , setHeigth ] = React.useState("30rem");
    const [ currWidth , setWidth ] = React.useState( "40rem");
    

    const currState = React.useRef(state);
    
    
    


    React.useEffect(() => {
        // make element draggable
        dragElement(document.getElementById(props.id));  
        if ( window.screen.width > 600 ){
            initResize(document.getElementById(props.id));     
        }
        var element = document.getElementById(props.id);        
        element.addEventListener("click", onClick, false);        
        return () => element.removeEventListener("click",  onClick, false);
    },[]);

    React.useEffect(() => {
        currState.current = state;
    }, [state]);

    const dragElement = (element) => {
        var pos1 = 0, pos2 =0, pos3 = 0, pos4 =0; 
        const dragMouseDown = (e) => {
            e = e || window.event;
            e.preventDefault();

            // get the mouse cursor at the startup
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDrag;
            document.onmousemove = elementDrag;
        }
        if ( document.getElementById(props.id +"header")){
            // if header is present, then make it draggable
            document.getElementById(props.id + "header").onmousedown = dragMouseDown;
        }
    
    
        

        const closeDrag = (e) => {
            document.onmouseup = null;
            document.onmousemove = null;
        }

        const elementDrag = (e) => {
            e = e || window.event;
            e.preventDefault();

            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            element.style.top = (element.offsetTop - pos2) + "px";
            element.style.left = (element.offsetLeft - pos1) + "px";
        }

    }

    
        

    function onClick(e) {   
        
        var node = e.target;
        while ( node.id === "") {
            node = node.parentNode;
        }
        var id = node.id;

        
        if ( id.lastIndexOf("header") !== -1 ){
            id = id.substr( 0, id.lastIndexOf("header"));
        }         
        
        document.getElementById(id).classList.remove("z-20", "z-40");
        document.getElementById(id).classList.add("z-40");                

        currState.current.windowsOpen.filter( x => x.id !== id).forEach( el => {
            document.getElementById(el.id).classList.remove("z-20", "z-40");
            document.getElementById(el.id).classList.add("z-20");
        })
        dispatch({ type: "FOCUSED_WINDOW", payload: id });
    }
    

    const initResize = (element) => {
            var startX, startY, startWidth , startHeight ; 
            var elem = null;            
            // rigth 
            var right = document.createElement("div");            
            right.parent = element;
            right.type = "plus";
            element.appendChild(right);
            right.addEventListener("mousedown",  initDrag, false);
            right.style.setProperty("width" , "5px");
            right.style.setProperty("height" , "100%");
            right.style.setProperty("position" , "absolute");
            right.style.setProperty("background" , "transparent");
            right.style.setProperty("right" , 0);
            right.style.setProperty("bottom" , 0);        
            right.style.setProperty("cursor" , "ew-resize");
            right.style.setProperty("z-index", "60");


            // bottom
            var bottom = document.createElement("div");
            bottom.parent = element;
            bottom.type = "plus";
            element.appendChild(bottom);
            bottom.addEventListener("mousedown",  initDrag, false);
            bottom.style.setProperty("width" , "100%");
            bottom.style.setProperty("height" , "5px");
            bottom.style.setProperty("position" , "absolute");
            bottom.style.setProperty("background" , "transparent");
            bottom.style.setProperty("right" , 0);
            bottom.style.setProperty("bottom" , 0);
            bottom.style.setProperty("cursor" , "ns-resize");
            bottom.style.setProperty("z-index", "60");

            // se
            var se = document.createElement("div");
            se.parent = element;
            se.type = "plus";
            element.appendChild(se);
            se.addEventListener("mousedown",  initDrag, false);
            se.style.setProperty("width" , "5px");
            se.style.setProperty("height" , "5px");
            se.style.setProperty("position" , "absolute");
            se.style.setProperty("background" , "transparent");
            se.style.setProperty("right" , 0);
            se.style.setProperty("bottom" , 0);
            se.style.setProperty("cursor" , "nwse-resize");
            se.style.setProperty("z-index", "60");

            // left
            var left = document.createElement("div");
            left.parent = element;
            left.type = "minus";
            left.left = "yes";
            element.appendChild(left);
            left.addEventListener("mousedown",  initDrag, false);
            left.style.setProperty("width" , "5px");
            left.style.setProperty("height" , "100%");
            left.style.setProperty("position" , "absolute");
            left.style.setProperty("background" , "transparent");
            left.style.setProperty("left" , 0);
            left.style.setProperty("bottom" , 0);
            left.style.setProperty("cursor" , "ew-resize"); 
            left.style.setProperty("z-index", "60");

            // swel
            var swel = document.createElement("div");
            swel.parent = element;
            swel.type = "minus";            
            swel.left = "yes";
            element.appendChild(swel);
            swel.addEventListener("mousedown",  initDrag, false);
            swel.style.setProperty("width" , "5px");
            swel.style.setProperty("height" , "5px");
            swel.style.setProperty("position" , "absolute");
            swel.style.setProperty("background" , "transparent");
            swel.style.setProperty("left" , 0);
            swel.style.setProperty("bottom" , 0);
            swel.style.setProperty("cursor" , "nesw-resize");
            swel.style.setProperty("z-index", "60");

            // top-left
            var tleft = document.createElement("div");
            tleft.parent = element;
            tleft.type = "minus";
            tleft.top = "yes";
            tleft.left = "yes";
            element.appendChild(tleft);
            tleft.addEventListener("mousedown",  initDrag, false);
            tleft.style.setProperty("width" , "5px");
            tleft.style.setProperty("height" , "5px");            
            tleft.style.setProperty("position" , "absolute");
            tleft.style.setProperty("background" , "transparent");
            tleft.style.setProperty("top" , 0);
            tleft.style.setProperty("left" , 0);
            tleft.style.setProperty("cursor" , "nwse-resize");
            tleft.style.setProperty("z-index", "60");

            // top
            var topel = document.createElement("div");
            topel.parent = element;
            topel.type = "minus";
            topel.top = "yes";
            element.appendChild(topel);
            topel.addEventListener("mousedown",  initDrag, false);
            topel.style.setProperty("width" , "100%");
            topel.style.setProperty("height" , "5px");
            topel.style.setProperty("position" , "absolute");
            topel.style.setProperty("background" , "transparent");
            topel.style.setProperty("top" , 0);
            topel.style.setProperty("left" , 0);
            topel.style.setProperty("cursor" , "ns-resize");
            topel.style.setProperty("z-index", "60");
            
            // top-right
            var topright = document.createElement("div");
            topright.parent = element;
            topright.type = "plus";
            element.appendChild(topright);
            topright.addEventListener("mousedown",  initDrag, false);
            topright.style.setProperty("width" , "5px");
            topright.style.setProperty("height" , "5px");
            topright.style.setProperty("position" , "absolute");
            topright.style.setProperty("background" , "transparent");
            topright.style.setProperty("top" , 0);
            topright.style.setProperty("right" , 0);
            topright.style.setProperty("cursor" , "nesw-resize");
            topright.style.setProperty("z-index", "60");


            function initDrag(e){
                elem = this.parent;

                startX = e.clientX;
                startY = e.clientY;
                startWidth = parseInt(
                    document.defaultView.getComputedStyle(elem).width,
                    10
                );
                startHeight = parseInt(
                    document.defaultView.getComputedStyle(elem).height,
                    10
                );
                if ( this.type === "minus"){
                    if ( this.top === "yes" && this.left === "yes") {
                        document.documentElement.addEventListener("mousemove", doDragMinusBoth, false);
                    } else if ( this.top === "yes"){
                        document.documentElement.addEventListener("mousemove", doDragMinusTop, false);
                    } else {
                        document.documentElement.addEventListener("mousemove", doDragMinusLeft, false);
                    }                                        
                    document.documentElement.addEventListener("mouseup", stopDragMinus, false);
                } else {
                    document.documentElement.addEventListener("mousemove", doDrag, false);
                    document.documentElement.addEventListener("mouseup", stopDrag, false);
                }
            
            }

            function doDrag(e) {
                if (startWidth + e.clientX - startX  > 280 ){
                    elem.style.width = startWidth + e.clientX - startX  + "px";
                    setWidth(elem.style.width);
                }
                if (startWidth + e.clientX - startX > 640) {
                    elem.style.height = startHeight + e.clientY - startY + "px";
                    setHeigth(elem.style.height);
                }                                                
            }

            function doDragMinusBoth(e) {   
                if (startWidth + e.clientX - startX > 280) {
                    elem.style.width = startWidth - e.clientX + startX + "px";
                    setWidth(elem.style.width);
                }
                if (startWidth + e.clientX - startX > 640) {
                    elem.style.height = startHeight - e.clientY + startY + "px";
                    setHeigth(elem.style.height);
                }                
                elem.style.top = e.clientY + "px";
                elem.style.left = e.clientX + "px";
            }

            function doDragMinusLeft(e) {         
                if (startWidth - e.clientX + startX !==  elem.style.minWidth) {
                    elem.style.left = e.clientX + "px";
                }
                if (startWidth + e.clientX - startX > 280) {
                    elem.style.width = startWidth - e.clientX + startX + "px";
                    setWidth(elem.style.width);
                }
                if (startWidth + e.clientX - startX > 640) {
                    elem.style.height = startHeight - e.clientY + startY + "px";
                    setHeigth(elem.style.height);
                }                                
            }
            function doDragMinusTop(e) {  
                if (startWidth + e.clientX - startX > 280) {
                    elem.style.width = startWidth - e.clientX + startX + "px";
                    setWidth(elem.style.width);
                }
                if (startWidth + e.clientX - startX > 640) {
                    elem.style.height = startHeight - e.clientY + startY + "px";
                    setHeigth(elem.style.height);
                }                
                elem.style.top = e.clientY + "px";
            }

            function stopDrag() {
                document.documentElement.removeEventListener("mousemove", doDrag, false);
                document.documentElement.removeEventListener("mouseup", stopDrag, false);
            }

            function stopDragMinus() {
                document.documentElement.removeEventListener("mousemove", doDragMinusBoth, false);
                document.documentElement.removeEventListener("mousemove", doDragMinusLeft, false);
                document.documentElement.removeEventListener("mousemove", doDragMinusTop, false);
                document.documentElement.removeEventListener("mouseup", stopDragMinus, false);
            }


    }

    const handleClose = (e) => {
        
        var node = e.target;
        while (node.id === "") {
            node = node.parentNode;
        }
        var id = node.id;


        if (id.lastIndexOf("header") !== -1) {
            id = id.substr(0, id.lastIndexOf("header"));
        }
        localStorage.setItem('lastLogin' , new Date());
        dispatch({ type :"FOCUSED_WINDOW", payload : null });
        dispatch({ type :"CLOSE_WINDOW", payload : id });
    }

    var title = props.title || 'Hello';    

    var context = {
        height : currHeight,
        width : currWidth
    }
    
    return (
        <div id={props.id} className="absolute bg-gray-50 shadow-2xl rounded-xl min-h-1/4 min-w-1/4" >
            {
             props.header &&  <div id={`${props.id}header`} className="p-2 dark:bg-gray-900 rounded-t-xl bg-gray-100 cursor-move dark:text-white text-black">                 
                    
                    <div className="flex">
                        
                        <div className="flex justify-start flex-row">
                            <div onClick={e => handleClose(e)}
                            className={"h-3.5 w-3.5  rounded-2xl m-1 cursor-pointer table " + (state.focusedWindow === props.id ? "bg-red-600" : "bg-gray-300")}>
                                <ion-icon name="close-outline" style={{fontSize :"10px", display :"table-cell" , verticalAlign: "middle", textAlign :"center", opacity :"0.4" }}></ion-icon>
                            </div>
                            <div className={"h-3.5 w-3.5  rounded-2xl m-1 cursor-pointer table " + (state.focusedWindow === props.id ? "bg-yellow-500" : "bg-gray-300") }>
                                <ion-icon name="remove-outline" style={{ fontSize: "10px", display: "table-cell", verticalAlign: "middle", textAlign: "center", opacity: "0.4" }}></ion-icon>
                            </div>
                            <div className={"h-3.5 w-3.5  rounded-2xl m-1 cursor-pointer table " + (state.focusedWindow === props.id ? "bg-green-400" : "bg-gray-300" )}>
                                <ion-icon name="resize-outline" style={{ fontSize: "8px", display: "table-cell", verticalAlign: "middle", textAlign: "center", opacity: "0.4" }}></ion-icon>
                            </div>
                        </div>
                        <div className="flex flex-grow justify-center">
                            {title}
                        </div>
                        
                    </div>
             </div>
            }
            <div>
                {React.cloneElement(props.children , {context})}
            </div>
        </div>
    )
}

export default Draggable;