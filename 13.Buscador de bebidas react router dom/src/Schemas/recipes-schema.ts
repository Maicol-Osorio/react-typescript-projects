import z from "zod";

export const categorieSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})