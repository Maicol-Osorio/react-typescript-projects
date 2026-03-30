import { useEffect, useMemo } from "react"
import Form from "./components/Form"
import useButget from "./hooks/useButget"
import ButgetTraker from "./components/ButgetTraker"
import ExpenseModal from "./components/ExpenseModal"
import SpentList from "./components/SpentList"
import { FilterCategori } from "./components/FilterCategori"


function App() {

  const { state } = useButget()

  useEffect(()=>{
    localStorage.setItem("butget", state.butget.toString())
    localStorage.setItem("Spent", JSON.stringify(state.spent))
  }, [state])

  const isValidButget = useMemo(() => state.butget > 0, [state.butget])
  

  return (
    <>
      <header className="p-5 text-center bg-purple-950 text-white font-bold">
        <h1 className="capitalize md:text-2xl">Control de Gastos y Presupuestos</h1>
      </header>

      <section className="items-center flex justify-center md:py-5 p-2 flex-col md:px-10">
        {isValidButget ?
          <ButgetTraker /> :
          <Form />}
      </section>

        {isValidButget && (
          <main>
            <FilterCategori/>
            <SpentList/>
            <ExpenseModal />
          </main>
        )}
    </>
  )
}

export default App
