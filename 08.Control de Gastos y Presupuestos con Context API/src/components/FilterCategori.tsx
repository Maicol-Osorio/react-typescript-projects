import { categorías } from "../data/categoris"
import useButget from "../hooks/useButget"
import { ChangeEvent } from "react"

export const FilterCategori = () => {
  
  const {dispatch} = useButget()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>)=>{
      dispatch({type: "filter-category", payload: {id: e.target.value}})
  }

  return (
    <div className="flex justify-center">
      <form className=" px-5 pt-5 flex justify-center w-11/12 mt-2">
        <label htmlFor="filtro" className="capitalize font-bold md:text-xl text-xs">filtrar por categorias</label>
        <select name="filtro" id="filtro" className="border border-black py-2 md:px-5 md:ml-5 w-3/4 text-sm text-center" onChange={handleChange}>
          <option value="" className="text-sm">- seleciona -</option>
          {categorías.map(item=>(
            <option value={item.id} key={item.id} className="text-sm">{item.nombre}</option>
          ))}
        </select>
      </form>
    </div>
  )
}
