import { ReactNode } from "react"


export const FormErrors = ({children}: {children: ReactNode})=>{
    return(
        <>
            <p className="bg-red-400 text-white text-center capitalize p-1 mt-1 rounded-md text-sm">{children}</p>
        </>
    )
}