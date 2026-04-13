import z from "zod";
import { categorieSchema, listRecipes, recipeSchema, searchRecipes } from "../Schemas/recipes-schema";

export type categoriesT = z.infer<typeof categorieSchema>
export type searchRecipes = z.infer<typeof searchRecipes>
export type recipes = z.infer<typeof listRecipes>
export type recipe = z.infer<typeof recipeSchema>