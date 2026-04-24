import type { StateCreator } from "zustand";
import type { recipeByIdT } from "../Types";


export type favoriteSliceT = {
    favorites: recipeByIdT[]
    handleClickFavorites: (recipe: recipeByIdT) => void
    favoriteExist: (id: recipeByIdT["idDrink"]) => boolean
}
export const favoriteSlice: StateCreator<favoriteSliceT> = (set, get) => ({
    favorites: [],
    handleClickFavorites: (recipe: recipeByIdT) => {
        if (get().favorites.some(item => item.idDrink == recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter((item) => item.idDrink !== recipe.idDrink)
            }))
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
        }
    },
    favoriteExist: (id: recipeByIdT["idDrink"])=>{
        return get().favorites.some(item=>item.idDrink === id)
    }
})