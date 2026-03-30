import { categorías } from "../data/categoris"
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css'
import "react-calendar/dist/Calendar.css"
import { useEffect, useState } from "react";
import { mainExpense, Value } from "../types";
import ErrorModals from "./ErrorModals";
import { ChangeEvent, FormEvent } from "react";
import useButget from "../hooks/useButget";



const FormModal = () => {

    const [spent, setSpent] = useState<mainExpense>({
        nombre: "",
        cantidad: 0,
        categoria: "",
        fecha: new Date()
    })

    const [error, setError] = useState("")
    const [totalPrevio, setTotalPrevio] = useState(0)
    const { state, dispatch, disponible } = useButget()

    useEffect(() => {
        if (state.spentUpdate) {
            const newUpdate = state.spent.filter(item => item.id === state.spentUpdate)[0]
            setSpent(newUpdate)
            setTotalPrevio(newUpdate.cantidad)
        }
    }, [state.spentUpdate])

    const handleChandeDate = (value: Value) => {
        setSpent({
            ...spent,
            fecha: value
        })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        const isValide = ["cantidad"].includes(name)
        setSpent({
            ...spent,
            [name]: isValide ? +value : value
        })
    }

    const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(spent).includes("") || Object.values(spent).includes(0)) {
            setError("todos los campos son requeridos")
            return
        }

        if ((spent.cantidad - totalPrevio) > disponible) {
            setError("no hay presupuesto suficiente")
            return
        }

        setError("")
        setTotalPrevio(0)

        if (state.spentUpdate) {
            dispatch({ type: "update-expense", payload: { spent: { id: state.spentUpdate, ...spent } } })
        } else {
            dispatch({ type: "add-spent", payload: { spent } })
        }


        setSpent({
            nombre: "",
            cantidad: 0,
            categoria: "",
            fecha: new Date()
        })
        state.showModal = false
    }

    return (
        <>
            <form className="space-y-3" onSubmit={handelSubmit}>
                <legend className="border border-b-4 border-b-purple-600 text-center capitalize font-extrabold md:text-2xl text-purple-700">{state.spentUpdate ? "guardar cambios" : "agregar gasto"}</legend>

                {error && <ErrorModals>{error}</ErrorModals>}
                <div className=" flex flex-col">
                    <label htmlFor="nombre" className="capitalize font-bold md:text-xl">nombre</label>
                    <input type="text" name="nombre" id="nombre" className="border border-1 border-purple-500 md:p-2 p-1 rounded-md placeholder:capitalize text-sm" placeholder="agregale un nombre a tu gasto" value={spent.nombre} onChange={handleChange} />
                </div>

                <div className=" flex flex-col">
                    <label htmlFor="cantidad" className="capitalize font-bold md:text-xl">cantidad</label>
                    <input type="number" name="cantidad" id="cantidad" className="border border-1 border-purple-500 md:p-2 p-1 rounded-md " placeholder="agrega la cantidad gastada" value={spent.cantidad} onChange={handleChange} />
                </div>

                <div className=" flex flex-col">
                    <label htmlFor="categoria" className="capitalize font-bold md:text-xl">categoria</label>
                    <select name="categoria" id="categoria" className="border border-1 border-purple-500 md:p-2 p-1 rounded-md capitalize" value={spent.categoria} onChange={handleChange}>
                        <option value="" disabled >-categorias-</option>
                        {categorías.map(item => (
                            <option key={item.id} value={item.id} className="capitalize">{item.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className=" flex flex-col">
                    <label htmlFor="cantidad" className="capitalize font-bold md:text-xl">fecha del gasto</label>
                    <DatePicker
                        value={spent.fecha}
                        onChange={handleChandeDate}
                    />
                </div>

                <button type="submit" className="bg-purple-600 text-white w-full md:p-2 p-1 rounded-md md:text-xl capitalize hover:bg-purple-800 duration-500 shadow hover:shadow-lg hover:shadow-black">{state.spentUpdate ? "guardar cambios" : "agregar gasto"}</button>
            </form>
        </>
    )
}

export default FormModal