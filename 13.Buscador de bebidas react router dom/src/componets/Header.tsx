import { NavLink, useLocation } from "react-router-dom"

export const Header = () => {
    const location = useLocation()
    const namePage = location.pathname
    return (
        <header className="w-full p-5 flex flex-col bg-blue-950 space-y-5 ">
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
                <form className=" w-1/2 p-5 space-y-2 ring-1 ring-white rounded-md m-5">
                    <legend className="text-white font-bold text-center capitalize border-b-2 text-2xl">buscador de bebidas</legend>
                    <div className="w-full flex flex-col">
                        <label htmlFor="ingredient" className="capitalize text-white text-xl cursor-pointer">ingrediente</label>
                        <input type="text" name="ingredient" id="ingredient" className="bg-white p-2 rounded-md outline border-none" placeholder="ej:vodka, whisky  "/>
                    </div>

                    <div className="w-full flex flex-col">
                        <label htmlFor="category" className="capitalize text-white text-xl cursor-pointer">categoria</label>
                        <select name="category" id="category" className="bg-white p-2 rounded-md outline border-none cursor-pointer">
                            <option value="">selecione</option>
                        </select>
                    </div>
                    <input type="submit" value="buscar" className="text-white bg-orange-500 capitalize p-3 w-full rounded-md font-bold cursor-pointer hover:bg-orange-600  duration-200 mt-5 text-xl "/>
                </form>
            )}
        </header>
    )
}