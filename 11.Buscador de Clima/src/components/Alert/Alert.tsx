import type { ReactNode } from "react"
import styles from "../Alert/Alert.module.css"

type AlertProps = {
    children: ReactNode
}

export const Alert = ({children}: AlertProps)=>{
    return(
        <p className={styles.alert}>{children}</p>
    )
}