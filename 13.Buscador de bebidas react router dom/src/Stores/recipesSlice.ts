import type { StateCreator } from "zustand"
import { fecthRecipes, searchListRecipes, searchRecipeById } from "../Services/fetchRecipes"
import type { categoriesT, recipe, recipeByIdT, recipes, searchRecipes } from "../Types"


export type recipeSlicePropsT = {
    categories: categoriesT
    recipes: recipes,
    recipeById: recipeByIdT,
    modal: boolean,
    fetchRecipes: () => Promise<void>
    fetchListRecipes: (searchRecipe: searchRecipes) => Promise<void>
    getRecipeId: (id: recipe["idDrink"]) => Promise<void>
    showModal: () => void
    closeModal: () => void
}

export const recipeSlice: StateCreator<recipeSlicePropsT> = ((set) => ({
    categories: {
        drinks: [],
    },
    recipes: {
        drinks: []
    },
    recipeById: {} as recipeByIdT,
    fetchRecipes: async () => {
        const categories = await fecthRecipes()
        set({
            categories
        })
    },

    modal: false,
    fetchListRecipes: async (recipes) => {
        const result = await searchListRecipes(recipes)
        set({
            recipes: result
        })
    },

    getRecipeId: async( id: recipe["idDrink"])=>{
        const result = await searchRecipeById(id)
        set({
            recipeById: result
        })
    },
    showModal : ()=>{
        set({
            modal: true
        })
    },
    closeModal: ()=>{
        set({
            modal: false,
            recipeById: {} as recipeByIdT
        })
    }
}))