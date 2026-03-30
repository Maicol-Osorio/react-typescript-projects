import { menuItemsT, orderT } from "../types"

export type orderActions =
    { type: "add-item", payload: { item: menuItemsT } } |
    { type: "remove-item", payload: { id: menuItemsT["id"] } } |
    { type: "add-propinas", payload: { value: number } } |
    { type: "clear-order" }

export type orderStateT = {
    orderItems: orderT[],
    propinas: number
}

export const initialState: orderStateT = {
    orderItems: [],
    propinas: 0
}

export const orderReducer = (
    state: orderStateT = initialState,
    action: orderActions
) => {
    if (action.type === "add-item") {

        const orderExist = state.orderItems.find(orderItem => orderItem.id === action.payload.item.id)
        let orderUpdate: orderT[] = []
        if (orderExist) {
            orderUpdate = state.orderItems.map(orderItem => orderItem.id == action.payload.item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
        } else {
            const newOrder: orderT = { ...action.payload.item, quantity: 1 }
            orderUpdate = [...state.orderItems, newOrder]
        }

        return {
            ...state,
            orderItems: orderUpdate
        }
    }

    if (action.type === "remove-item") {

        const deletElement = state.orderItems.filter(item => item.id !== action.payload.id)
        return {
            ...state,
            orderItems: deletElement
        }
    }

    if(action.type === "add-propinas"){

        const selectPropina = action.payload.value
        return{
            ...state,
            propinas: selectPropina
        }
    }

    if (action.type === "clear-order") {

        return {
            orderItems: [],
            propinas: 0
        }
    }
    return state
}