

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

import type { Dispatch, SetStateAction } from "react"
type PropinasOrdenProps = {
    setPorpinas: Dispatch<SetStateAction<number>>
}

const PropinasOrden = ({setPorpinas}:PropinasOrdenProps)=>{
    return(
        <div className="capitalize font-bold underline text-xl">
            <h2>propinas</h2>
            <form action="">
                {tipOptions.map(item=>(
                    <div>
                        <label htmlFor={item.id} className="text-base mr-1 cursor-pointer">{item.label}</label>
                        <input type="radio" name="propinas" id={item.id} value={item.value} onChange={e=>setPorpinas(+e.target.value)} />

                    </div>
                ))}
            </form>
        </div>
    )
}

export default PropinasOrden