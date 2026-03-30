import { createContext, useReducer, Dispatch, ReactNode, useMemo} from "react"
import { butgetReducer, initialStete, butgetActions, butgetState } from "../reducers/butget-reducer"

export type butgetContextProps = {
    state: butgetState
    dispatch: Dispatch<butgetActions>
    totalSpents: number,
    disponible: number
}

export type butgetProviderProps = {
    children: ReactNode
}





export const ButgetContext = createContext<butgetContextProps>(null!)

export const ButgetProvider = ({children}: butgetProviderProps)=>{

    
    const [state, dispatch] = useReducer(butgetReducer, initialStete)

    const totalSpents = useMemo(()=> state.spent.reduce((total, item)=> item.cantidad + total, 0), [state.spent])
    const disponible = state.butget - totalSpents
    
    return(
        <ButgetContext.Provider value={{state, dispatch, totalSpents, disponible}}>
            {children}
        </ButgetContext.Provider>
    )
}