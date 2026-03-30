export const formatCurrency = (data: number)=>{
    return  new Intl.NumberFormat("en-US", {style: "currency", currency:"USD"}).format(data)
}

export const formatDate = (fecha: string) : string=>{
    const dateObject = new Date(fecha)
    const options : Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    return new Intl.DateTimeFormat("es-ES", options).format(dateObject)
}