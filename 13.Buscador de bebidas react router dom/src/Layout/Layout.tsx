import { Outlet } from "react-router-dom"
import { Header } from "../componets/Header"

export const Layout = ()=>{
    return(
        <>
            <Header/>
            <main className="w-full h-screen p-5">
                <Outlet />
            </main>
        </>
    )
}