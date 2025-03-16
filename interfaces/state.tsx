
interface AppWindow {
    id : string, 
    header : string, 
    title : string
}

interface Action {
    type : string,
    payload: any
}

interface State {
    error: string | null, 
    windowsOpen: Array<AppWindow>,
    focusedWindow: string | null,
    terminal: {
        lastLogin: Date
        history: Array<string>
    },
    backgroundImage: string
}

interface AppStoreContextType {
    state : State,
    dispatch: (action: Action) => void
}

interface WindowSizeContext { 
    context: {
        height: number | string,
        width: number | string
    }
}
