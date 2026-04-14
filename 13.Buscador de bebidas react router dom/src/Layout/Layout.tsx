import { Outlet } from "react-router-dom"
import { Header } from "../componets/Header"
import Modal from "../componets/Modal"

export const Layout = ()=>{
    return(
        <>
            <Header/>
            <main className="w-full h-screen p-5">
                <Outlet />
                <Modal/>
            </main>
        </>
    )
}