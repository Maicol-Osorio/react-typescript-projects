import { useMemo } from "react"
import useButget from "../hooks/useButget"
import SpentItem from "./SpentItem"


const SpentList = ()=>{

    const {state} = useButget()
    
    const isValidCategory = state.filterCategory? state.spent.filter(item=>item.categoria == state.filterCategory) : state.spent
    const isEmpty = useMemo(()=>isValidCategory.length === 0, [state.spent])
    
    return(
        <div className="">
            {isEmpty? <p className="text-3xl capitalize text-center underline font-bold mt-3 text-gray-500">Sin registros de gastos</p>:(
                <div className="flex items-center flex-col w-full md:px-10 space-y-3 md:py-10">
                   <p className="md:text-3xl text-xl capitalize text-center underline font-bold mt-3 text-gray-500">resumen de gastos</p>
                    {isValidCategory.map(item=>(
                        <SpentItem
                            key={item.id}
                            item={item}
                        />
                    ))}
               </div> 
            )}
        </div>
    )
}

export default SpentList