import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import { finalPatient } from "../types"
import { PatientDate } from "./PatientDate"

type PatientDetailsProps = {
    patients: finalPatient
}

export const PatientDetails = ({patients}:PatientDetailsProps)=>{
    const deletePatient = usePatientStore((state)=>state.deletePatient)
    const getUserById = usePatientStore(state=>state.getUserById)

    const handleClik = ()=>{
        deletePatient(patients.id)
        toast("paciente eliminado correctamente", {
            type: "error"
        })
    }
    return(
        <div className="bg-white md:p-2 p-1 rounded-md border border-1 border-purple-600 w-full">
            <PatientDate label={"ID"} date={patients.id}/>
            <PatientDate label={"paciente"} date={patients.paciente}/>
            <PatientDate label={"propietario"} date={patients.propietario}/>
            <PatientDate label={"email"} date={patients.email}/>
            <PatientDate label={"fecha de alta"} date={patients.fecha.toString()}/>
            <PatientDate label={"sintomas"} date={patients.sintomas}/>

            <div className="flex justify-between">
                <button onClick={()=>getUserById(patients.id)} className="w-2/5 border border-blue-700 md:p-2 p-1 rounded-md mt-2 hover:bg-blue-700 hover:text-white capitalize font-semibold duration-700 bg-blue-400">editar</button>

                <button onClick={handleClik} className="w-2/5 border border-red-700 md:p-2 p-1 rounded-md mt-2 hover:bg-red-700 hover:text-white capitalize font-semibold duration-700 bg-red-400" >eliminar</button>
            </div>
        </div>
    )
}