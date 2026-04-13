import axios from "axios"
import { categorieSchema, listRecipes } from "../Schemas/recipes-schema"
import type { searchRecipes } from "../Types"

export const fecthRecipes = async () => {
    try {
        const urlCategories = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
        const { data } = await axios(urlCategories)
        const result = categorieSchema.safeParse(data)
        if (result.success) {
            return result.data
        }
    } catch (error) {
        console.log("error de categorias", error)
        return { drinks: []}
    }
}

export const searchListRecipes = async(recipes: searchRecipes)=>{
    try {
        const urlListRecipes = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${recipes.category}&i=${recipes.ingredient}`
        const {data} = await axios(urlListRecipes)
        const result = listRecipes.safeParse(data)
        if(result.success){
            return result.data
        }
    } catch (error) {
        console.log(error)
    }
}