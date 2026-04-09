import { currencySchema, coinsSchema, dataCurrency, dataCriptoCurrency } from "../Schemas/currencySchema";
import z from "zod";

export type CurrencyT = z.infer<typeof currencySchema>
export type CoinsT = z.infer<typeof coinsSchema>
export type dataCurrencyT = z.infer<typeof dataCurrency>
export type criptoCurrency = z.infer<typeof dataCriptoCurrency>