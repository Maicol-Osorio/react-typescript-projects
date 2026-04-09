import axios from "axios"
import { coinsSchema, dataCriptoCurrency } from "../Schemas/currencySchema"
import type { dataCurrencyT } from "../Types"




export const searchCoins = async () => {
    try {
        const urlCoins = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1"
        const { data } = await axios(urlCoins)
        const result = coinsSchema.safeParse(data)
        if (result.success) {
            return result.data
        } else {
            return []
        }
    } catch (error) {
        console.log(error)
        return []
    }
}

export const searchCryptoCurrency = async (dataCurrency: dataCurrencyT) => {


    try {
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${dataCurrency.currency}&ids=${dataCurrency.cryptoCurrency}`

        const { data } = await axios(url)
        const result = dataCriptoCurrency.safeParse(data[0])

        if (result.success) {
            return result.data
        }
    } catch (error: any) {
        if (error.response?.status === 429) {
            throw new Error("RATE_LIMIT")
        }
        throw error
    }
}