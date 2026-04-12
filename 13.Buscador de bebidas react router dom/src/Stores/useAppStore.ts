import { create } from "zustand";
import { recipeSlice, type recipeSlicePropsT } from "./recipesSlice";
import { devtools } from "zustand/middleware";


export const useAppStore = create<recipeSlicePropsT>()(devtools((...a)=>({
    ...recipeSlice(...a)
})))