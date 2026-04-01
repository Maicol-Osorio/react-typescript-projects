import { useState } from "react"
import { countries } from "../../data/countries"
import styles from "../Form/Form.module.css"
import type { SearchT } from "../../types"
import { Alert } from "../Alert/Alert"

export type FormProps = {
    fetchWeather: (search: SearchT) => Promise<void>
    notFound: string
}

export const Form = ({fetchWeather, notFound}: FormProps) => {
    const [search, setSearch] = useState<SearchT>({
        country: "",
        city: ""
    })

    const [alert, setAlert] =useState("")


    const handleChange = (e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement> | React.ChangeEvent<HTMLInputElement, HTMLInputElement>)=>{
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = ( e: React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(Object.values(search).includes("")){
            setAlert("todos los campos son requeridos")
            setTimeout(() => {
                setAlert("")
            }, 3000);
            return
        }

        fetchWeather(search)

    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>busca tu ciudad</h2>
            <select name="country" id="country" value={search.country} onChange={handleChange}>
                <option value="">-selecione-</option>
                {countries.map(item => (
                    <option key={item.code} value={item.code}>{item.name}</option>
                ))}
            </select>

            <div className={styles.form__group}>
                <label htmlFor="city">ciudad</label>
                <input type="text" name="city" id="city" placeholder="ej:Bogotá" value={search.city} onChange={handleChange}/>
            </div>

            <input type="submit" value="consultar clima" />
            {alert && (
                <Alert>{alert}</Alert>
            )}

             {notFound && (
                <Alert>{notFound}</Alert>
            )}
        </form>
    )
}