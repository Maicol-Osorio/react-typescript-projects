import type { recipe } from "../Types"

type CartRecipeprops = {
    recipe: recipe
}

export const CartRecipe = ({recipe} : CartRecipeprops )=>{

    

  
    return(
        <div className="ring-1 p-2 flex justify-center items-center flex-col rounded-md truncate hover:shadow-2xl hover:shadow-orange-900 duration-200 hover:ring-2 ">
            <h2 className="capitalize text-3xl font-bold m-2">{recipe.strDrink}</h2>
            <div className="w-full p-2">
                <img src={recipe.strDrinkThumb} alt={recipe.strDrink} className="rounded-md min-w-1.5 hover:scale-95 transition-transform hover:rotate-3"/>
            </div>
            <button className="text-white bg-orange-500 capitalize p-3 w-full rounded-md font-bold cursor-pointer hover:bg-orange-600  duration-200 mt-5 text-xl" >ver receta</button>
        </div>
    )
}