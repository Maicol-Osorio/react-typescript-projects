import { ReactNode } from "react"

export type ErrorModalsProps = {
  children: ReactNode
}

const ErrorModals = ({children}: ErrorModalsProps) => {
  return (
    <>
      <p className="bg-red-500 text-white capitalize text-center font-bold p-2 rounded-md">{children}</p>
    </>
  )
}
export default ErrorModals