import { useState } from "react"
import type { orderT } from "../types"
import type { menuItemsT } from "../types"

const useOrder = ()=>{

   const [order, setOrder] = useState<orderT[]>([]) 
   const [propinas, setPorpinas] = useState(0)

   const addItem = (item: menuItemsT)=>{

    const orderExist = order.find(orderItem=> orderItem.id === item.id)
    if(orderExist){
        const orderUpdate = order.map(orderItem=> orderItem.id == item.id? {...orderItem, quantity: orderItem.quantity +1} : orderItem)
        setOrder(orderUpdate)
        return
    }
    const newOrder:orderT = {...item, quantity:1}
    setOrder([...order, newOrder])
   }

   const removeItem = (id: menuItemsT["id"])=>{
    setOrder(order.filter(item=>item.id !== id))
   }

   const clearOrder = ()=>{
    setOrder([])
    setPorpinas(0)
   }


    return{
        order,
        addItem,
        removeItem,
        propinas,
        setPorpinas,
        clearOrder
    }
}

export default useOrder