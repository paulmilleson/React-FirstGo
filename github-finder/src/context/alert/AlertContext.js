import {createContext, useReducer} from 'react'
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export function AlertProvider({ children }) {
    const initialState = null

    const [state, dispatch] = useReducer(alertReducer, initialState)
    function setAlert(msg, type) {
        dispatch({
            type: 'SET_ALERT',
            payload: { msg, type }
        })
        setTimeout(function () {
            return dispatch({ type: 'REMOVE_ALERT' })
        }, 3000)
    }

    return (
        <AlertContext.Provider value={{ alert: state, setAlert }}>{children}
        </AlertContext.Provider>
    )
}
    export default AlertContext;