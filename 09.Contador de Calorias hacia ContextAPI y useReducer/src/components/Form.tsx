import { useState, ChangeEvent, FormEvent, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import categories from "../data/categories "
import type { activityT } from "../types"
import { useActivity } from "../hooks/useActivity"






const Form = () => {

    const {state, dispatch} = useActivity()

    const activityInitial: activityT = {
        id: uuidv4(),
        categorias: 1,
        actividad: "",
        calorias: 0
    }

    const [activity, setActivity] = useState<activityT>(activityInitial)

    //validar que el id ya este 
    useEffect(()=>{
        if(state.activityId){
            const updateForm = state.activities.filter(item=>item.id === state.activityId) [0]
            setActivity(updateForm)
        }
    }, [state.activityId])

    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>) => {

        const itemInclude = ["categorias", "calorias"].includes(e.target.id)
        setActivity({
            ...activity,
            [e.target.id]: itemInclude ? +e.target.value : e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({ type: "save-activity", payload: { newActivity: activity } })
        setActivity(activityInitial)
    }

    const activityEmpty = () => {
        const { actividad, calorias } = activity
        return actividad.trim() !== "" && calorias > 0
    }


    activityEmpty()
    return (
        <form className="border border-white p-3 md:p-5  w-full md:w-2/4 bg-white space-y-3" onSubmit={handleSubmit}>
            <div className="flex justify-center flex-col">
                <label htmlFor="categorias" className="capitalize font-bold md:text-xl text-lg mb-2">categorias</label>
                <select name="categorias" id="categorias" className="border border-black md:p-2 p-1" value={activity.categorias} onChange={handleChange}>
                    {categories.map(item => (
                        <option value={item.id} className="cursor-pointer" key={item.id}>{item.name}</option>
                    ))}
                </select >
            </div>

            <div className="flex justify-center flex-col">
                <label htmlFor="actividad" className="capitalize font-bold md:text-xl text-lg mb-2">actividad</label>
                <input type="text" name="actividad" id="actividad" className="border border-black md:p-1.5 p-1 capitalize" value={activity.actividad} onChange={handleChange} />
            </div>

            <div className="flex justify-center flex-col">
                <label htmlFor="calorias" className="capitalize font-bold md:text-xl text-lg mb-2">calorias</label>
                <input type="number" name="calorias" id="calorias" className="border border-black md:p-1.5 p-1 capitalize" value={activity.calorias} onChange={handleChange} />
            </div>

            <button type="submit" className="border border-2 w-full p-2 bg-blue-800 duration-700 text-white capitalize font-bold rounded-md hover:bg-blue-950 cursor-pointer disabled:opacity-45" disabled={!activityEmpty()}>{activity.categorias === 1 ? "guardar comidas" : "guardar ejercicio"}</button>

        </form>
    )
}


export default Form