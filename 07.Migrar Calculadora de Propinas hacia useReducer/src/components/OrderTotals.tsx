import { useMemo } from "react"
import type { orderT } from "../types"

type OrderTotalsProps = {
    order: orderT[],
    propinas: number
}

const OrderTotals = ({order, propinas}: OrderTotalsProps)=>{


    const totalOrden = useMemo(()=>order.reduce((total, item)=> total + (item.price * item.quantity), 0), [order])
    const totalPropinas = useMemo(()=> totalOrden * propinas,[propinas, order])
    const subTotal = useMemo(()=>totalOrden + totalPropinas, [propinas, order])
    return(
        <div className="shadow shadow-lg shadow-gray-600 p-3"> 
            <h2 className="font-extrabold capitalize text-xl text-center underline">totales y propinas</h2>
            <p>subtotal a pagar: <span className="underline font-bold">{totalOrden}</span></p>
            <p>propina: <span className="underline font-bold">${totalPropinas}</span></p>
            <p>total a pagar: <span className="underline font-bold text-xl">${subTotal}</span></p>
        </div>
    )
}

export default OrderTotals