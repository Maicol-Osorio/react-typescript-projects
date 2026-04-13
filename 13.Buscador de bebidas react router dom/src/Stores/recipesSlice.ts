import type { StateCreator } from "zustand"
import { fecthRecipes, searchListRecipes } from "../Services/fetchRecipes"
import type { categoriesT, recipes, searchRecipes } from "../Types"


export type recipeSlicePropsT = {
    categories: categoriesT
    recipes: recipes
    fetchRecipes: () => Promise<void>
    fetchListRecipes: (searchRecipe: searchRecipes) => Promise<void>
}

export const recipeSlice: StateCreator<recipeSlicePropsT> = ((set) => ({
    categories: {
        drinks: [],
    },
    recipes: {
        drinks: []
    },
    fetchRecipes: async () => {
        const categories = await fecthRecipes()
        set({
            categories
        })
    },

    fetchListRecipes: async (recipes) => {
        const result = await searchListRecipes(recipes)
        set({
            recipes: result
        })
    }
}))