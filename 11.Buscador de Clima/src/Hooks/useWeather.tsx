import axios from "axios"
import type { SearchT } from "../types"
import z, { number } from "zod"
import { useMemo, useState } from "react"



const WeatherSchema = z.object({
    name: z.string(),
    main: z.object({
        temp: number(),
        temp_max: number(),
        temp_min: number()
    })
})


export type Weather = z.infer<typeof WeatherSchema>

export const useWeather = () => {

    const dataInfo = {
        name: "",
        main: {
            temp: 0,
            temp_max: 0,
            temp_min: 0
        }
    }
    const [weathers, setWhathers] = useState<Weather>(dataInfo)
    const [spiner, setSpiner] = useState(false)
    const [notFound, setNotFound] = useState("")

    const isEmpty = useMemo(() => weathers.name !== "", [weathers])

    const fetchWeather = async (search: SearchT) => {
        try {
            setWhathers(dataInfo)
            setSpiner(true)

            const apiId = import.meta.env.VITE_API_KEY
            const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apiId}`

            const { data } = await axios(apiUrl)
            if (!data[0]) {
                setNotFound("ciudad no encontrada")
                return
            }
            const lat = data[0].lat
            const lon = data[0].lon


            const apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiId}`

            const { data: weather } = await axios<Weather>(apiUrlWeather)
            const result = WeatherSchema.safeParse(weather)
            if (result.success) {
                setWhathers(result.data)
                console.log(weathers)

            } else {
                console.log("respuesta mal formada")
            }

        } catch (error) {
            console.log(error)
            console.log("no hya ciudad para mostrar")
        } finally {
            setSpiner(false)
            setTimeout(() => {
                setNotFound("")
            }, 3000);
        }
    }


    return {
        weathers,
        notFound,
        fetchWeather,
        isEmpty,
        spiner
    }
}