import { activityT } from "../types"


export type activityActions =
    { type: "save-activity", payload: { newActivity: activityT } } |
    { type: "save-activityId", payload: { id: activityT["id"] } } |
    { type: "delect-activity", payload: {id: activityT["id"]}} | 
    {type: "clear-app"}


export type activityState = {
    activities: activityT[],
    activityId: activityT["id"]
}


const getLocalStorage = ()=>{
    const activityLocal = localStorage.getItem("activity")
    return activityLocal? JSON.parse(activityLocal) : []
}

export const initialState: activityState = {
    activities: getLocalStorage(),
    activityId: ""
}


export const activityReducer = (
    state: activityState = initialState,
    action: activityActions
) => {
    if (action.type === "save-activity") {

        let updateState:activityT[] = []
        if(state.activityId){
            updateState = state.activities.map(item=> item.id === state.activityId? action.payload.newActivity : item)
        }else{
            updateState = [...state.activities, action.payload.newActivity]
        }

        return{
            ...state,
            activities: updateState,
            activityId: ""
        }
    }

    if(action.type === "save-activityId"){
        return{
            ...state,
            activityId: action.payload.id
        }
    }

    if(action.type == "delect-activity"){

        let activityDelet = state.activities.filter(item=>item.id !== action.payload.id)
        return{
            ...state,
            activities: activityDelet
        }
    }

    if(action.type == "clear-app"){
        return{
        activities: [],
        activityId: ""
        }

    }
    return state
}