import React from 'react';
import { Context } from "../store";
import { useTheme } from 'next-themes';

const DefaultContextMenu = () => {
    const { theme, setTheme } = useTheme();
    const [ store, dispatch ] = React.useContext(Context);
    return (
        <div className="relative h-auto w-auto flex flex-col rounded-lg p-2 ring-1 ring-gray-600 ring-inset" style={{minWidth :"13rem", zIndex : 10 , backgroundColor : "rgb(34, 35, 54, 0.3)"}}>
            <div className="text-xs text-white pl-5 pt-0.5  rounded-sm hover:bg-blue-500 mb-1 cursor-pointer">New Folder</div>
            <hr className="border border-gray-300 ml-2 mr-2 opacity-50"/>
            <div className="text-xs text-white pl-5 pt-1 pb-0.5 mt-1  rounded-sm hover:bg-blue-500 mb-1 cursor-pointer" 
            onClick={() => dispatch({ type: "NEW_WINDOW", payload: { id: 'PROFILE', header: true } }) }
            >Get Info</div>
            <div 
                onClick={() => dispatch({ type: "NEW_WINDOW", payload: { id: 'CHANGE_BACKGROUND', header: true, title : "change background image" } })}
            className="text-xs text-white pl-5 pt-1 pb-0.5 rounded-sm hover:bg-blue-500 mb-1 cursor-pointer">Change Desktop Background</div>
            <div 
                onClick={() => setTheme( theme === 'dark' ? 'light' :  'dark') }
            className="text-xs text-white pl-5 pt-1 pb-0.5 rounded-sm hover:bg-blue-500 mb-1 cursor-pointer">Change Theme</div>
            <hr className="border border-gray-300 ml-2 mr-2 opacity-50" />
            <div className="text-xs text-gray-300 pl-5 pt-1 mt-1  rounded-sm hover:bg-blue-500 mb-1 cursor-not-allowed">✓ Use Stacks</div>
        </div>
    )
};

export default DefaultContextMenu;