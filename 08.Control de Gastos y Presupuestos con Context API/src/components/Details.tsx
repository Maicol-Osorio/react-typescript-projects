import { formatCurrency } from "../helpers"

type detailsProps = {
    label?: string,
    amount: number
}

const Details = ({label, amount}: detailsProps)=>{
    return(
        <div className="">
            <p className="capitalize font-extrabold md:text-2xl text-lg text-purple-950"> {label && label} <span className="text-black">{formatCurrency(amount)}</span></p>
        </div>
    )
}

export default Details