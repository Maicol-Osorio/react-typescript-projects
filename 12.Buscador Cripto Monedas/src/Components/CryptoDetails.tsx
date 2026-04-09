import { useCurrency } from "../store"

export const CryptoDetails = () => {
    const criptoCurrency = useCurrency((state) => state.criptoCurrency)
    return (
        <div className="crypto-card">
            <h2 className="crypto-title">
                {criptoCurrency.name}
            </h2>

            <img
                className="crypto-image"
                src={criptoCurrency.image}
                alt={criptoCurrency.name}
            />

            <p className="crypto-text">
                Precio actual: <span>{criptoCurrency.current_price}</span>
            </p>

            <p className="crypto-text">
                Alto 24h: <span>{criptoCurrency.high_24h}</span>
            </p>

            <p className="crypto-text">
                Cambio 24h: <span>{criptoCurrency.price_change_24h}</span>
            </p>

            <p className="crypto-date">
                Última actualización: {criptoCurrency.last_updated}
            </p>
        </div>
    )
}