import axios from "axios"
import { categorieSchema } from "../Schemas/recipes-schema"

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