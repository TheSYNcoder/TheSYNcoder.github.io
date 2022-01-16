import React from 'react';
import { Motion ,spring } from 'react-motion';


export const useContextHook = () => {
    const [xPos , setXPos ] = React.useState("0px"); 
    const [yPos , setYPos ] = React.useState("0px"); 
    const [ showMenu , setShowMenu ] = React.useState(false);    


    const handleContextMenu = (e) => {
        e.preventDefault();               
        setXPos(`${e.pageX}px`);
        setYPos(`${e.pageY}px`);
        setShowMenu(true);
    } 

    const handleClick = React.useCallback( (e) => {

        var popover = document.getElementById('popover'), targetEl = e.target;

        do {
            if (targetEl === popover) {
                return;
            }
            targetEl = targetEl.parentNode;
        } while (targetEl.parentNode && targetEl);

        // outside
        showMenu && setShowMenu(false);
    } , [showMenu]);

    

    React.useEffect(() => {
        
        document.addEventListener("click", handleClick);
        document.addEventListener("contextmenu", handleContextMenu );
        
        return () => {
            document.removeEventListener("click" , handleClick);
            document.removeEventListener("contextmenu" , handleContextMenu);
        }
    });

    return { xPos , yPos , showMenu };
} 


const ContextMenu = ({menu}) => {
    const { xPos , yPos , showMenu } = useContextHook();
    
    return (
        <Motion defaultStyle={{opacity : 0 }}
        style={{opacity :!showMenu ? spring(0) : spring(1) }}
        >
            {(interpolatedStyle) => (
                <div id="popover">
                    { showMenu ? <div className="absolute z-60"
                    style={{top : yPos , left : xPos, opacity : interpolatedStyle.opacity }}
                    >{menu}</div> : <div></div>}
                </div>
            )}
        </Motion>
    )

}


export default ContextMenu;
