import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../Stores/useAppStore"
import type { searchRecipes } from "../Types"

export const Header = () => {
    const location = useLocation()
    const namePage = location.pathname

    const [searchRecipe, setSearchRecipe] = useState<searchRecipes>({
        ingredient: "",
        category: ""
    })

    const fetchRecipes = useAppStore((state) => state.fetchRecipes)
    const fetchListRecipes = useAppStore((state)=>state.fetchListRecipes)
    const categories = useAppStore((state) => state.categories)


    useEffect(() => {
        fetchRecipes()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement> | React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
        setSearchRecipe({
            ...searchRecipe,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(Object.values(searchRecipe).includes("")){
            console.log("todos los datos son requeridos")
            return
        }

        fetchListRecipes(searchRecipe)
    }

    return (
        <header className={`"w-full p-5 flex flex-col space-y-5 ${namePage == "/" ? "bg-[url(/bg.jpg)] min-h-2/3 bg-contain" : "bg-blue-950 bg-center"}`}>
            <div className="w-full flex justify-between items-center">
                <div className="w-1/2 flex justify-start">
                    <img src="/logo.svg" alt="" className="h-24" />
                </div>
                <nav className="text-white w-1/2 flex justify-center items-center gap-3 capitalize text-xl font-bold">
                    <NavLink to={"/"} className={({ isActive }) => (
                        isActive ? "bg-orange-600 px-2 py-1 rounded-md" : "text-white"
                    )}>recetas</NavLink>
                    <NavLink to={"/favorite"} className={({ isActive }) => (
                        isActive ? "bg-orange-600 px-2 py-1 rounded-md" : "text-white"
                    )}>favoritos</NavLink>
                </nav>
            </div>



            {namePage === "/" && (
                <form className=" w-1/2 p-5 space-y-2 ring-1 ring-white rounded-md m-5 backdrop-blur-3xl" onSubmit={handleSubmit}>
                    <legend className="text-white font-bold text-center capitalize border-b-2 text-2xl">buscador de bebidas</legend>
                    <div className="w-full flex flex-col">
                        <label htmlFor="ingredient" className="capitalize text-white text-xl cursor-pointer">ingrediente</label>
                        <input type="text" name="ingredient" id="ingredient" className="bg-white p-2 rounded-md outline border-none" placeholder="ej:vodka, whisky" value={searchRecipe.ingredient} onChange={handleChange} />
                    </div>

                    <div className="w-full flex flex-col">
                        <label htmlFor="category" className="capitalize text-white text-xl cursor-pointer">categoria</label>
                        <select name="category" id="category" className="bg-white p-2 rounded-md outline border-none cursor-pointer" onChange={handleChange}>
                            <option value="">selecione</option>nooo
                            {categories.drinks.map(item => (
                                <option value={item.strCategory} key={item.strCategory}>{item.strCategory}</option>
                            ))}
                        </select>
                    </div>
                    <input type="submit" value="buscar" className="text-white bg-orange-500 capitalize p-3 w-full rounded-md font-bold cursor-pointer hover:bg-orange-600  duration-200 mt-5 text-xl" />
                </form>
            )}
        </header>
    )
}