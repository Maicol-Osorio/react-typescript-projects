import { useMemo } from "react"
import { useActivity } from "../hooks/useActivity"


const CalorisPanel = () => {

    const {state} = useActivity()
    const {activities} = state

    const caloriasConsumidas = useMemo(() => {
        return activities.reduce(
            (total, item) => item.categorias === 1 ? total + (item.calorias) : total, 0)
    }, [activities])

    const caloriasQuemadas = useMemo(()=>{
        return activities.reduce((total, item)=> item.categorias==2? total + item.calorias: total,0)
    }, [activities])

    const diferencia = useMemo(()=> caloriasConsumidas - caloriasQuemadas, [activities])

    return (
        <div className="flex items-center justify-between">
            <div className="text-center">
                <p className="font-black text-green-300 md:text-4xl text-xl">{caloriasConsumidas}</p>
                <span className="font-bold capitalize text-green-300 md:text-3xl text-base">consumidas</span>
            </div>

            <div className="text-center">
                <p className="font-black text-orange-300 md:text-4xl text-xl">{caloriasQuemadas}</p>
                <span className="font-bold capitalize text-orange-300 md:text-3xl text-base">quemadas</span>
            </div>

            <div className="text-center">
                <p className="font-black text-blue-300 md:text-4xl text-xl">{diferencia}</p>
                <span className="font-bold capitalize text-blue-300 md:text-3xl text-base">diferencia</span>
            </div>
        </div>
    )
}

export default CalorisPanel