import { useEffect, useMemo } from "react"
import { FormSearchCripto } from "./Components/FormSearchCripto"
import { useCurrency } from "./store"
import { CryptoDetails } from "./Components/CryptoDetails"
import { Spinner } from "./Components/Spinner"

function App() {
  const fetchCurrency = useCurrency(state => state.fetchCurrency)
  const criptoCurrency = useCurrency((state) => state.criptoCurrency)

  const isEmptyCurrency = useMemo(
    () => !criptoCurrency || Object.values(criptoCurrency).includes(""),
    [criptoCurrency]
  )
  const spiner = useCurrency((state) => state.spiner)


  useEffect(() => {
    fetchCurrency()
  }, [])

  return (
    <>
      <h1>buscador de criptomonedas</h1>
      <div className="container">
        <FormSearchCripto />
        <div>
          {spiner && (
            <Spinner />
          )}
          {!isEmptyCurrency && (
            <CryptoDetails />
          )}
        </div>
      </div>
    </>
  )
}

export default App
