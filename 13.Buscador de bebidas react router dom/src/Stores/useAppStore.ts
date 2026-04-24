import { create } from "zustand";
import { recipeSlice, type recipeSlicePropsT } from "./recipesSlice";
import { devtools } from "zustand/middleware";
import { favoriteSlice, type favoriteSliceT } from "./favoriteSlice";


export const useAppStore = create<recipeSlicePropsT & favoriteSliceT>()(devtools((...a)=>({
    ...recipeSlice(...a),
    ...favoriteSlice(...a)
})))