import z from "zod";

export const categorieSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})

export const searchRecipes = z.object({
    ingredient: z.string(),
    category: z.string()
})

export const listRecipes = z.object({
    drinks: z.array(
        z.object({
            idDrink: z.string(),
            strDrink: z.string(),
            strDrinkThumb: z.string()
        })
    )
})

export const recipeSchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string()
})