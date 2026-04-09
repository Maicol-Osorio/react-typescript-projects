import type React from "react"

export const Error = ({children}: {children: React.ReactNode})=>{
    return(
        <p className="error">{children}</p>
    )
}