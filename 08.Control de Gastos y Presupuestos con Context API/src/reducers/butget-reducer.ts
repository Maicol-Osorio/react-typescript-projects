import type { mainExpense, spentT } from "../types"
import {  v4 as uuidv4 } from "uuid"

export type butgetActions =
    { type: "add-butget", payload: { value: number } } |
    { type: "show-modal" } |
    { type: "close-modal" } |
    { type: "add-spent", payload: { spent: mainExpense } } |
    { type: "remove-spent", payload: { id: spentT["id"] } } | 
    { type: "update-spent", payload: {id: spentT["id"]}} |
    { type: "update-expense", payload: {spent: spentT}} |
    { type: "clear-spent"} |
    { type: "filter-category", payload: {id: spentT["id"]}}


const newSpent = (spent: mainExpense): spentT => {
    return {
        ...spent,
        id: uuidv4()
    }
}


const localStorageButget = (): number=>{
    const butgetStorage = localStorage.getItem("butget");
    return butgetStorage? +butgetStorage: 0
}

const localSpens = () :spentT[]=>{
    const spentLocal = localStorage.getItem("Spent")
    return spentLocal? JSON.parse(spentLocal) : []
}

export type butgetState = {
    butget: number,
    showModal: boolean,
    spent: spentT[],
    spentUpdate: string,
    filterCategory: spentT["id"]
}



export const initialStete: butgetState = {
    butget: localStorageButget(),
    showModal: false,
    spent: localSpens(),
    spentUpdate: "",
    filterCategory: ""
}



export const butgetReducer = (
    state: butgetState = initialStete,
    actions: butgetActions
) => {

    if (actions.type === "add-butget") {
        console.log(`se disparo el action de butgetadd ${actions.payload.value}`)
        return {
            ...state,
            butget: actions.payload.value
        }
    }

    if (actions.type == "show-modal") {

        return {
            ...state,
            showModal: true
        }
    }

    if (actions.type == "close-modal") {
        return {
            ...state,
            showModal: false,
            spentUpdate: ""
        }
    }

    if (actions.type === "add-spent") {

        const spent = newSpent(actions.payload.spent)
        return {
            ...state,
            spent: [...state.spent, spent]
        }
    }

    if (actions.type === "remove-spent") {

        return {
            ...state,
            spent: state.spent.filter(item => item.id !== actions.payload.id)
        }
    }

    if(actions.type === "update-spent"){
        return{
            ...state,
            spentUpdate: actions.payload.id,
            showModal: true
        }
    }

    if(actions.type === "update-expense"){
        return{
            ...state,
            spent: state.spent.map(item=> item.id === actions.payload.spent.id? actions.payload.spent : item),
            showModal: false,
            spentUpdate: ""
        }
    }

    if(actions.type === "clear-spent"){
        return{
            ...state,
            butget: 0,
            spent: []
        }
    }

    if(actions.type === "filter-category"){
        return{
            ...state,
            filterCategory: actions.payload.id
        }
    }


    return {
        ...state
    }
}