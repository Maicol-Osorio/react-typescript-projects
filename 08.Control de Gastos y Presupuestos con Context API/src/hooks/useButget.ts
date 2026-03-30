import { useContext } from "react"
import { ButgetContext } from "../context/BudgetContext"

const useButget = ()=>{
    
    const butgetContext = useContext(ButgetContext)

    if(!butgetContext){
        throw new Error("No se encuentra ningun context Provider")
    }else{
        return butgetContext
    }
    
}

export default useButget