import { menuItemsT } from "../types"

type MenuItemsProps = {
    item: menuItemsT
    addItem: (item: menuItemsT) => void
}

const MenuItems = ({item, addItem}: MenuItemsProps)=>{
    return(
        <button className="border border-blue-800 w-full flex justify-between px-5 py-3 capitalize font-semibold hover:bg-blue-900 hover:text-white duration-1000 rounded-lg"
        onClick={()=>addItem(item)}>
            <p>{item.name}</p>
            <p>${item.price}</p>
        </button>
    )
}

export default MenuItems