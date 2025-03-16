
const Reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'NEW_WINDOW': {
            const props = action.payload;
            var windows = state.windowsOpen.find( x => x.id === props.id) === undefined ?
                [...state.windowsOpen, { id: props.id, header : props.header, title : props.title } ] as Array<AppWindow> : state.windowsOpen;
            return {
                ...state,
                focusedWindow: props.id,
                windowsOpen: windows
            }            
        }
        case 'FOCUSED_WINDOW':{
            return {
                ...state, 
                focusedWindow : action.payload
            }
        }
        case 'CLOSE_WINDOW':{            
            return {
                ...state, 
                focusedWindow : null ,
                windowsOpen: state.windowsOpen.filter(x => x.id !== action.payload)
            }
        }
        case 'CHANGE_BACKGROUND' : {
            return {
                ...state, 
                backgroundImage : action.payload
            }
        }
        

        default:
            return state;
    }
};

export default Reducer;