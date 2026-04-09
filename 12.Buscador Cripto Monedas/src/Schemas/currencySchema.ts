import z from "zod";

export const currencySchema = z.object({
    code: z.string(),
    name: z.string()
})

export const coinsSchema = z.array(
    z.object({
        id: z.string(),
        name: z.string()
    })
)

export const dataCurrency = z.object({
    currency: z.string(),
    cryptoCurrency: z.string()
})

export const dataCriptoCurrency = z.object({
    current_price: z.number(),
    high_24h: z.number(),
    image: z.string(),
    last_updated: z.string(),
    name: z.string(),
    price_change_24h: z.number()
})

