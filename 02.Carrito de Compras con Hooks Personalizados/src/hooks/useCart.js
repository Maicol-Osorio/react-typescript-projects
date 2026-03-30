import { db } from "../Data/db"
import { useState, useEffect, useMemo } from "react"

const useCart = () => {

    const localStorageCart = () => {
        const localStorageGuitar = localStorage.getItem("cart")
        return localStorageGuitar ? JSON.parse(localStorageGuitar) : []
    }

    const [data] = useState(db)
    const [cart, setCart] = useState(localStorageCart())

    const addToCart = (item) => {
        const existItem = cart.findIndex(guitar => guitar.id === item.id)

        if (existItem !== -1) {
            const updateQuantity = [...cart]
            updateQuantity[existItem].quantity++
            setCart(updateQuantity)
            return
        }
        item.quantity = 1
        setCart([...cart, item])
    }

    const removeGuitar = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const incrementCart = (item) => {
        const increment = cart.map(guitar => {
            if (guitar.id === item.id && guitar.quantity < 10) {
                return {
                    ...item,
                    quantity: guitar.quantity + 1
                }
            }
            return guitar
        })
        setCart(increment)
    }


    const decrementGuitar = (item) => {
        const decrement = cart.map(guitar => {
            if (guitar.id == item.id && guitar.quantity > 1) {
                return {
                    ...item,
                    quantity: guitar.quantity - 1
                }
            }
            return guitar
        })

        setCart(decrement)
    }

    const clearCart = () => {
        setCart([])
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])


    const isEmpty = useMemo(() => cart.length == 0, [cart])
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])

    return {
        cart,
        data,
        removeGuitar,
        incrementCart,
        decrementGuitar,
        clearCart,
        addToCart,
        isEmpty, 
        cartTotal
    }
}

export default useCart