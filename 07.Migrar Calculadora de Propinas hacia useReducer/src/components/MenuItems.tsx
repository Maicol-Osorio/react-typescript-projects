import { menuItemsT } from "../types"
import { Dispatch } from "react"
import { orderActions } from "../reducer/order-reducer"

type MenuItemsProps = {
    item: menuItemsT
    dispatch: Dispatch<orderActions>
}

const MenuItems = ({item, dispatch}: MenuItemsProps)=>{
    return(
        <button className="border border-blue-800 w-full flex justify-between px-5 py-3 capitalize font-semibold hover:bg-blue-900 hover:text-white duration-1000 rounded-lg"
        onClick={()=>dispatch({type: "add-item", payload: {item}})}>
            <p>{item.name}</p>
            <p>${item.price}</p>
        </button>
    )
}

export default MenuItems