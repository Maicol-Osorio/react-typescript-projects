import { ChangeEvent, useMemo, useState, FormEvent } from "react"
import useButget from "../hooks/useButget"

const Form = () => {

    const [butget, setButget] = useState(0)
    const { dispatch } = useButget()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setButget(e.target.valueAsNumber)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({ type: "add-butget", payload: { value: butget } })
    }

    const validationBudget = useMemo(() => butget <= 0 || isNaN(butget), [butget])

    return (
        <>
            <h2 className="md:text-2xl text-lg mb-3 capitalize font-bold underline">ingresa tu presupuesto</h2>
            <form className="shadow shadow-black shadow-xl border border-black md:p-2 p-1.5 md:p-3 w-full md:w-2/6 space-y-3 flex flex-col" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="budget" className="capitalize font-bold cursor-pointer hover:underline hover:text-purple-600 duration-500">presupueto</label>
                    <input type="number" name="budget" id="budget" className="border border-black md:p-2 p-1" onChange={handleChange} />
                </div>

                <button type="submit" className={`bg-purple-800 text-white font-bold p-2 rounded-md text-center w-full  disabled:bg-purple-400 disabled:duration-1000 text-sm`} disabled={validationBudget}>guardar Presupuest</button>

            </form>
        </>
    )
}

export default Form