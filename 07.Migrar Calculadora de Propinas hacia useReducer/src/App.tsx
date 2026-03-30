import { menuItems } from "./data/db" 
import MenuItems from "./components/MenuItems"
import MenuOrder from "./components/MenuOrder"
import OrderTotals from "./components/OrderTotals"
import PropinasOrden from "./components/PropinasOrden"
import { useReducer } from "react"
import { initialState, orderReducer } from "./reducer/order-reducer"

function App() {


  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className="bg-blue-950 p-4 flex justify-center align-center">
        <h1 className="text-2xl capitalize font-bold text-white">calculadora de propinas</h1>
      </header>

      <main className="grid md:grid-cols-2 p-5">
        <div className="space-y-2 px-5">
          <p className="text-center p-2 text-2xl font-bold">Menu</p>

          {menuItems.map(item=>(
            <MenuItems
              key={item.id}
              item={item}
              dispatch={dispatch}
            />
          ))}
        </div>

        {state.orderItems.length !==0? (
          <div className="space-y-2">
             <h1 className="capitalize font-bold text-2xl text-center py-3">orden</h1>
      
          <MenuOrder
            orderItem={state.orderItems}
            dispatch={dispatch}
          />

          <PropinasOrden
            dispatch={dispatch}
          />

          <OrderTotals
            order={state.orderItems}
            propinas={state.propinas}
          />

          <button className="w-full bg-blue-900 text-white capitalize p-3 font-bold rounded-md disabled:bg-blue-300 disabled:cursor-pointer" disabled={state.orderItems.length == 0} onClick={()=>dispatch({type: "clear-order"})}>guardar orden</button>
        </div>
        ) : (<h1 className="capitalize font-bold text-2xl text-center py-3">la orden esta vacia</h1>)}

      </main>
    </>
  )
}

export default App
