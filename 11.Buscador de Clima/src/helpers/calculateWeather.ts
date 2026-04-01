export const calculateWeather = (weather:number):number=>{
    const kelvin = 273.15
    return parseInt((weather - kelvin).toString())
}