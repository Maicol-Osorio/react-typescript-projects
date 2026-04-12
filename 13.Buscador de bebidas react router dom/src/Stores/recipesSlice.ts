import type { StateCreator } from "zustand"
import { fecthRecipes } from "../Services/fetchRecipes"
import type { categoriesT } from "../Types"


export type recipeSlicePropsT = {
    categories: categoriesT
    fetchRecipes: () => Promise<void>
}

export const recipeSlice : StateCreator<recipeSlicePropsT> = ((set)=>({
    categories: {
        drinks: []
    },
    fetchRecipes: async()=>{
        const categories = await fecthRecipes()
        set({
            categories
        })
    }
}))