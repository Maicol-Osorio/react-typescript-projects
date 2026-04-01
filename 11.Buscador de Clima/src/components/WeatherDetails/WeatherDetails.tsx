import { calculateWeather } from "../../helpers/calculateWeather"
import type { Weather } from "../../Hooks/useWeather"
import styles from "./WeatherDetails.module.css"

type WeatherDetailsProps = {
    weathers: Weather
}
export const WeatherDetails = ({weathers}: WeatherDetailsProps)=>{
    return(
       <div className={styles.container}>
            <h2 >clima actual en <span>{weathers.name}</span></h2>
            
            <p className={styles.temp}><span>{calculateWeather(weathers.main.temp_min)}°C</span></p>
            <div>
                <p>min <span>{calculateWeather(weathers.main.temp_min)}°c</span></p>
                <p>max <span>{calculateWeather(weathers.main.temp_max)}°c</span></p>
            </div>
            
       </div>
    )
}