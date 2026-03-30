import useButget from "../hooks/useButget"
import Details from "./Details"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';

const ButgetTraker = () => {

    const { state, dispatch, totalSpents, disponible } = useButget()
    const grafic = +((totalSpents / state.butget) * 100).toFixed(2)


    return (
        <div className="w-full shadow shadow-lg shadow-purple-950 p-5 grid grid-cols-1 md:grid-cols-2 border border-black/50">
            <div className=" md:w-3/5 w-4/5 pl-10 mb-5 ">
                <CircularProgressbar
                    value={grafic}
                    text={`${grafic}% gastado`}
                    styles={buildStyles({
                        textSize: "8px",
                        pathTransitionDuration: 1.5,
                        pathColor: "#800080",
                        textColor: "#800080",
                    })}
                />
            </div>
            <div className="space-y-2 flex flex-col justify-center items-center">
                <div className="md:p-3 p-1 md:w-2/3 w-full capitalize font-bold md:text-xl rounded-xl bg-purple-500 text-white hover:bg-purple-800 shadow-lg shadow hover:shadow-purple-800 duration-700 md:mb-3 text-center cursor-pointer" onClick={() => dispatch({ type: "clear-spent" })}>reiniciar</div>
                <Details
                    label="presupuesto"
                    amount={state.butget}
                />

                <Details
                    label="gastado"
                    amount={totalSpents}
                />

                <Details
                    label="disponible"
                    amount={disponible}
                />

            </div>
        </div>
    )
}

export default ButgetTraker