import { useEffect } from "react"
import Form from "./components/Form"
import CalorisPanel from "./components/CalorisPanel"
import ActivityList from "./components/ActivityList"
import { useActivity } from "./hooks/useActivity"

function App() {

  const {state, dispatch} = useActivity()

  useEffect(() => {
    localStorage.setItem("activity", JSON.stringify(state.activities))
  }, [state.activities])

  return (
    <>
      <header className="p-2 md:p-5 bg-blue-950 flex items-center justify-center md:space-x-32 space-x-5">
        <h1 className="capitalize font-bold  md:text-2xl text-xs text-center text-white">Contador de Calorías y Ejercicios</h1>
        <button onClick={() => dispatch({ type: "clear-app" })} className={`border text-white capitalize font-bold md:p-3 p-1 md:text-xl text-sm rounded-md ${state.activities.length ? "hover:bg-blue-600 hover:shadow hover:shadow-white hover:shadow-md duration-500" : "text-blue-950 border-none"}`} disabled={state.activities.length == 0}>reiniciar app</button>
      </header>

      <main className="justify-center flex md:p-10  p-8 md:py-24 py-15 bg-blue-600">
        <Form/>
      </main>

      <section className="border border-2 border-black px-5 bg-blue-950 justify-center">
        <h2 className="text-white font-bold capitalize text-center md:text-3xl text-xl md:mb-5 mb-2">resumen de calorias</h2>
        <CalorisPanel/>
      </section>

      <section className="p-8">

        <h2 className="capitalize text-center font-bold md:text-3xl text-2xl p-5 underline">{state.activities.length === 0 ? "agrega una actividad o comida" : "tu consumos y actividades"}</h2>



        <div className="md:space-y-3 space-y-2">
          <ActivityList/>
        </div>
      </section>

    </>
  )
}

export default App
