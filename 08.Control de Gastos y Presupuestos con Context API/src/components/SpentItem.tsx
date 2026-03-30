import { formatDate } from "../helpers"
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list"
import 'react-swipeable-list/dist/styles.css'
import { spentT } from "../types"
import Details from "./Details"
import { categorías } from "../data/categoris"
import { useMemo } from "react"
import useButget from "../hooks/useButget"

export type SpentItemProps = {
    item: spentT
}

const SpentItem = ({ item }: SpentItemProps) => {
    const { state, dispatch } = useButget()

    const categoria = useMemo(() => categorías.filter(categori => categori.id === item.categoria)[0], [state.spent, state.filterCategory])

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => dispatch({type: "update-spent", payload: {id: item.id}})}>
                actualizar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
                onClick={() => dispatch({type: "remove-spent", payload: {id: item.id}})}
                destructive={true}>
                elimina
            </SwipeAction>
        </TrailingActions>
    )

    return (

        <SwipeableList className="flex items-center  rounded-md py-2 px-5" >
            <SwipeableListItem
                className="rounded-lg"
                maxSwipe={1}
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="w-full flex p-2 flex items-center rounded-lg border border-black shadow shadow-md shadow-black">

                    <div className="w-1/6 flex justify-center items-center flex-col">

                        <img src={`/icono_${categoria.icono}.svg`} alt={`icono_${categoria.icono}`} className="w-full md:h-24" />
                    </div>

                    <div className="w-full flex justify-between items-center ml-2">
                        <div>
                            <p className="text-gray-600 capitalize font-bold md:text-xl text-xs">{categoria.nombre}</p>
                            <p className="capitalize md:text-xl text-sm font-bold ">{item.nombre}</p>
                            <p className="capitalize md:text-xl text-xs font-semibold text-gray-600">{formatDate(item.fecha!.toString())}</p>
                        </div>
                        <Details
                            amount={item.cantidad}
                        />


                    </div>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default SpentItem