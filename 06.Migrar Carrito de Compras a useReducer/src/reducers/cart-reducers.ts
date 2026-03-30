import { db } from "../Data/db";
import { GuitarItemT, GuitarT } from "../type";

export type cartActions =
    { type: "add-to-cart", payload: { item: GuitarT } } |
    { type: "remove-cart", payload: { id: GuitarT["id"] } } |
    { type: "increment-cart", payload: { item: GuitarItemT } } |
    { type: "decrement-cart", payload: { item: GuitarItemT } } |
    { type: "clear-cart" }


export type cartStateT = {
    data: GuitarT[],
    cart: GuitarItemT[]
}

const cartLocal = (): GuitarItemT[]=>{
    const cartLocalstorage = localStorage.getItem("cart")
    return cartLocalstorage? JSON.parse(cartLocalstorage) : [] 
}

export const initialState: cartStateT = {
    data: db,
    cart: cartLocal()
}

export const cartReducer = (
    state: cartStateT = initialState,
    action: cartActions
) => {

    if (action.type == "add-to-cart") {

        const itemExist = state.cart.find(item => item.id === action.payload.item.id)
        let updateItem: GuitarItemT[] = []
        if (itemExist) {
            updateItem = state.cart.map(item => {
                if (item.id === action.payload.item.id) {
                    if (item.quantity < 10) {
                        return { ...item, quantity: item.quantity++ }
                    } else {
                        return item
                    }
                } else {
                    return item
                }
            })
        } else {
            const newItem: GuitarItemT = { ...action.payload.item, quantity: 1 }
            updateItem = [...state.cart, newItem]

        }

        return {
            ...state,
            cart: updateItem
        }
    }

    if (action.type == "remove-cart") {
        const deletItem = state.cart.filter(item=> item.id !== action.payload.id)
        return {
            ...state,
            cart:deletItem
        }
    }

    if (action.type == "increment-cart") {

        const increment = state.cart.map(guitar => {
            if (guitar.id === action.payload.item.id && guitar.quantity < 10) {
                return {
                    ...guitar,
                    quantity: guitar.quantity + 1
                }
            }
            return guitar
        })

        return {
            ...state,
            cart:increment
        }
    }

    if (action.type == "decrement-cart") {
        const decrement = state.cart.map(guitar => {
            if (guitar.id == action.payload.item.id && guitar.quantity > 1) {
                return {
                    ...guitar,
                    quantity: guitar.quantity - 1
                }
            }
            return guitar
        })

        return {
            ...state,
            cart:decrement
        }
    }

    if (action.type == "clear-cart") {

        return {
            ...state,
            cart: []
        }
    }

    return state
}