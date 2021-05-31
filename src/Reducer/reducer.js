

const Reducer = (state, action) => {
    switch (action.type) {
        case 'NEW_WINDOW': {
            const props = action.payload;
            var windows = state.windowsOpen.find( x => x.id === props.id) === undefined ?
                [...state.windowsOpen, { id: props.id, header : props.header, title : props.title } ] : state.windowsOpen;
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

        default:
            return state;
    }
};

export default Reducer;