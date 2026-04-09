import { useState } from "react"
import { currencies } from "../Data"
import { useCurrency } from "../store"
import type { dataCurrencyT } from "../Types"
import { Error } from "./Error"


export const FormSearchCripto = () => {
    const coins = useCurrency((state) => state.coins)
    const fetchCryptoCurrency = useCurrency((state) => state.fetchCryptoCurrency)
    const spiner = useCurrency((state) => state.spiner)
    const apiError = useCurrency(state => state.error)

    const [dataCurrency, setDataCurrency] = useState<dataCurrencyT>({
        currency: "",
        cryptoCurrency: ""
    })

    const [error, setError] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
        setDataCurrency({
            ...dataCurrency,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (spiner) return

        if (Object.values(dataCurrency).includes("")) {
            setError("todos los campos son requeridos")
            setTimeout(() => {
                setError("")
            }, 3000)
            return
        }

        fetchCryptoCurrency(dataCurrency)
    }
    return (
        <form onSubmit={handleSubmit}>
            <legend>busqueda </legend>
            <div>
                <label htmlFor="currency">moneda</label>
                <select name="currency" id="currency" value={dataCurrency.currency} onChange={handleChange}>
                    <option value="">-selecione-</option>
                    {currencies.map(item => (
                        <option key={item.code} value={item.code}>{item.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="cryptoCurrency">criptomonedas</label>
                <select name="cryptoCurrency" id="cryptoCurrency" value={dataCurrency.cryptoCurrency} onChange={handleChange}>
                    <option value="">-selecione-</option>
                    {coins.map(item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>
            <input type="submit" value="buscar precio" />
            {error && (
                <Error>{error}</Error>
            )}
            {apiError && (
                <Error>{apiError}</Error>
            )}
        </form>


    )
}