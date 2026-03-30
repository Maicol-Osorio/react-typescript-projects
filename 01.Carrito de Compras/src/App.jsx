import Header from "./Components/Header"
import Guitar from "./Components/Guitar"
import { db } from "./Data/db"
import { useState, useEffect } from "react"

function App() {

  const localStorageCart = ()=>{
    const localStorageGuitar = localStorage.getItem("cart")
    return localStorageGuitar? JSON.parse(localStorageGuitar): []
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

  const removeGuitar = (id)=>{
    setCart(cart.filter(item=> item.id !== id))
  }

  const incrementCart = (item)=>{
    const increment = cart.map(guitar=>{
      if(guitar.id === item.id && guitar.quantity <10){
        return{
          ...item,
          quantity: guitar.quantity +1
        }
      }
      return guitar
    })
    setCart(increment)
  }


  const decrementGuitar = (item)=>{
    const decrement = cart.map(guitar=>{
      if(guitar.id == item.id && guitar.quantity >1){
        return{
          ...item,
          quantity: guitar.quantity-1
        }
      }
      return guitar
    })

    setCart(decrement)
  }

  const clearCart = ()=>{
    setCart([])
  }

  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])
  
  return (
    <>
      <Header
        cart={cart}
        removeGuitar={removeGuitar}
        incrementCart={incrementCart}
        decrementGuitar={decrementGuitar}
        clearCart={clearCart}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map(item => (
            <Guitar
              key={item.id}
              item={item}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
