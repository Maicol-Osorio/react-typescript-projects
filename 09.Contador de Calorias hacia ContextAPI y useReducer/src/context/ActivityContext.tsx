import { createContext, useReducer, Dispatch, ReactNode } from "react"
import { activityReducer, initialState, activityState, activityActions } from "../reducers/activity-reducer"

export type ActivityContextProps = {
    state: activityState,
    dispatch: Dispatch<activityActions>
}

export type ActivityProviderProps = {
    children: ReactNode
}

export const ActivityContext = createContext<ActivityContextProps>(null!)

export const ActivityProvider = ({children}: ActivityProviderProps)=>{

    const [state, dispatch] = useReducer(activityReducer, initialState)
    return(
        <ActivityContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </ActivityContext.Provider>
    )
}