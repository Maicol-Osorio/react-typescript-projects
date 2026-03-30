import {useForm} from "react-hook-form"
import { FormErrors } from "./FormErros"
import { initialPatient } from "../types"
import { usePatientStore } from "../store"
import { useEffect } from "react"
import { toast } from "react-toastify"

export const PatientForm = ()=>{
    const {register, handleSubmit, formState:{errors}, reset, setValue} = useForm<initialPatient>()
    const addPatient = usePatientStore(state=>state.addPatient)
    const userBiId = usePatientStore((state)=>state.userBiId)
    const patienets = usePatientStore((state)=>state.patienets)
    const updatePatient = usePatientStore((state)=>state.updatePatient)

    const registerPatient = (date: initialPatient)=>{
        if(userBiId){
            updatePatient(date)
            toast.info("paciente editado correctamente")
        }else{
            addPatient(date)
            toast.success("paciente agregado correctamente")
    }
        
        reset()
    }

    useEffect(()=>{
        if(userBiId){
            const userToUpdate = patienets.filter(item=>item.id === userBiId)[0]
            setValue("paciente", userToUpdate.paciente)
            setValue("propietario", userToUpdate.propietario)
            setValue("email", userToUpdate.email)
            setValue("fecha", userToUpdate.fecha)
            setValue("sintomas", userToUpdate.sintomas)
        }
    },[userBiId])
    return(
        <div className=" md:w-2/5 w-full md:p-5 p-2 mt-7 bg-white shadow shadow-xl rounded-lg  shadow-black h-full">
            <h2 className="font-extrabold md:text-2xl text-lg capitalize text-center">seguimiento de pacientes</h2>
            <p className="font-semibold capitalize text-center mb-2 text-sm md:text-base">añade pacientes y <span className="text-purple-500">administralos</span> </p>

            <form className="space-y-3">
                <div className="flex flex-col">
                    <label htmlFor="paciente" className="capitalize text-black md:text-lg font-semibold ">paciente</label>
                    <input type="text" id="paciente" className="border border-gray-400 rounded-lg p-2 capitalize" placeholder="ingresa el nombre del paciente"
                        {...register("paciente",{
                            required: "agrega el nombre del paciente"
                        })}
                    />

                    {errors.paciente && (
                        <FormErrors>{errors.paciente.message}</FormErrors>
                    )}
                
                </div>

                <div className="flex flex-col">
                    <label htmlFor="propietario" className="capitalize text-black md:text-lg font-semibold">propietario</label>
                    <input type="text" id="propietario" className="border border-gray-400 rounded-lg md:p-2 p-1 capitalize" placeholder="ingresa el nombre del propietario" 
                        {...register("propietario", {
                            required: "agrega el nombre del propietario"
                        })}
                    />
                    {errors.propietario && (
                        <FormErrors>{errors.propietario?.message}</FormErrors>
                    )}
                    
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="capitalize text-black md:text-lg font-semibold">email</label>
                    <input type="email" id="email" className="border border-gray-400 rounded-lg p-2 capitalize" placeholder="ingresa un correo electronino"
                        {...register("email", {
                            required: "el correo no puede ir vacio",
                            pattern:{
                                value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/, 
                                message: "el correo no es valido"
                            }
                        })}
                    />

                    {errors.email && (
                        <FormErrors>{errors.email.message}</FormErrors>
                    )}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="fecha" className="capitalize text-black md:text-lg font-semibold">fecha de alta</label>
                    <input type="date" id="fecha" className="border border-gray-400 rounded-lg p-2 capitalize"
                        {...register("fecha", {
                            required: "agrega una fecha de alta"
                        })}
                    />

                    {errors.fecha && (
                        <FormErrors>{errors.fecha.message}</FormErrors>
                    )}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="sintomas" className="capitalize text-black md:text-lg font-semibold">sintomas</label>
                    <textarea id="sintomas" className="border border-gray-400 rounded-lg p-2 capitalize" placeholder="ingresa los sintomas del paciente" 
                    {...register("sintomas", {
                        required: "el campo sintomas no puede ir vacio",
                        maxLength:{
                            value: 250,
                            message: "la descripcion es muy larga"
                        }
                    })}></textarea>
                    {errors.sintomas && (
                        <FormErrors>{errors.sintomas.message}</FormErrors>
                    )}
                </div>

                <button type="submit" className="bg-purple-600 text-white capitalize p-2 w-full rounded-lg md:text-xl font-bold" onClick={handleSubmit(registerPatient)}>agragar paciente</button>
                
            </form>
        </div>
    )
}