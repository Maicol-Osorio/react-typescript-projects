import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { CoinsT, criptoCurrency, dataCurrencyT } from "./Types";
import { searchCoins, searchCryptoCurrency } from "./Services/searchCoinsService";


export type useCurrencyProps = {
    coins: CoinsT
    spiner: boolean
    criptoCurrency: criptoCurrency
    error: string
    fetchCurrency: () => Promise<void>
    fetchCryptoCurrency: (dataCurrency: dataCurrencyT) => Promise<void>
    loadSpiner: (spiner: boolean) => void
    setError: (error: string) => void
}

export const useCurrency = create<useCurrencyProps>()(devtools((set) => ({
    coins: [],
    spiner: false,
    criptoCurrency: {
        current_price: 0,
        high_24h: 0,
        image: "",
        last_updated: "",
        name: "",
        price_change_24h: 0
    } as criptoCurrency,

    fetchCurrency: async () => {
        const state = useCurrency.getState()

        if (state.coins.length > 0) return // 🔥 corta aquí

        set({ spiner: true })

        try {
            const resultCoins = await searchCoins()

            set({
                coins: resultCoins,
                spiner: false
            })
        } catch (error) {
            console.log(error)
            set({ spiner: false })
        }
    },

    fetchCryptoCurrency: async (dataCurrency) => {
        set({ spiner: true, error: "" })

        try {
            const result = await searchCryptoCurrency(dataCurrency)

            if (!result) {
                set({ spiner: false })
                return
            }

            set({
                criptoCurrency: result,
                spiner: false
            })
        } catch (error: any) {
            set({
                error: "Has alcanzado el límite de peticiones. Intenta en unos segundos ⏳",
                spiner: false
            })
        }
    },

    loadSpiner: (spiner: boolean) => {
        set(() => ({
            spiner
        }))
    },
    error: "",

    setError: (error: string) => {
        set({ error })
    },


})))