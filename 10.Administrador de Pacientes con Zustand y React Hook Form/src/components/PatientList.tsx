import { usePatientStore } from "../store"
import { PatientDetails } from "./PatientDetails"

export const PatientList = () => {

    const patient = usePatientStore((state) => state.patienets)
    return (
        <div className=" md:w-3/5 p-5 mt-7 overflow-auto  h-[80vh]">
            {patient.length ? (
                <>
                    <h2 className="font-extrabold md:text-2xl text-xl capitalize text-center">listado de pacientes</h2>
                    <p className="font-semibold capitalize text-center mb-2 text-sm md:text-base">administra tus<span className="text-purple-500"> pacientes y citas</span> </p>
                    <div className="space-y-2">
                        {patient.map(item => (
                            <PatientDetails
                                key={item.id}
                                patients={item}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <h2 className="font-extrabold md:text-2xl text-xl capitalize text-center">no hay pacientes</h2>
                    <p className="font-semibold capitalize text-center mb-2 text-sm md:text-base">comienza agregando pacientes<span className="text-purple-500"> y apareceran en este lugar</span> </p>
                </>
            )}
        </div>
    )
}