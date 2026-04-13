import { useMemo } from "react"
import { CartRecipe } from "../componets/CartRecipe"
import { useAppStore } from "../Stores/useAppStore"

export const IndexPage = ()=>{
    const recipes = useAppStore((state)=>state.recipes)
    const isEmpty = useMemo(()=>recipes.drinks.length, [recipes])
    return(
        <div className="space-y-3.5">
            <h1 className="capitalize text-6xl font-extrabold text-orange-600 text-center">{isEmpty? "recetas" : "busca una receta"}</h1>
            <div className="w-full grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid gap-5">
                {recipes.drinks.map(item=>(
                    <CartRecipe
                        key={item.idDrink}
                        recipe={item}
                    />
                ))}
            </div>
        </div>
    )
}