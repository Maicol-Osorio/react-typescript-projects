import type { orderT } from "../types"
import { menuItemsT } from "../types"

type MenuOrderProps = {
    order: orderT[],
    removeItem: (id: menuItemsT["id"]) => void
}

const MenuOrder = ({ order, removeItem }: MenuOrderProps) => {

    return (
        <>

            {order.map(item => (
                <div key={item.id} className="bg-white shadow shadow-black p-3 px-6 flex justify-between items-center">
                    <div>
                        <p key={item.id}>{item.name} - <span className="font-bold">{item.price}</span></p>
                        <p className="underline capitalize">cantidad: <span className="font-black">{item.quantity} = {item.price * item.quantity}</span> </p>
                    </div>

                    <div className="bg-red-600 rounded-full text-white uppercase text-lg h-8 w-8 text-center cursor-pointer"
                    onClick={()=>removeItem(item.id)}>
                        x
                    </div>
                </div>

            ))}
        </>
    )
}

export default MenuOrder
