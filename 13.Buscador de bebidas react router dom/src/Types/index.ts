import z from "zod";
import { categorieSchema } from "../Schemas/recipes-schema";

export type categoriesT = z.infer<typeof categorieSchema>