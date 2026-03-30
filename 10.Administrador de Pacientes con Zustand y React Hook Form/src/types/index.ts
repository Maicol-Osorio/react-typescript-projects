export type finalPatient = {
    id: string,
    paciente: string,
    propietario: string,
    email: string,
    fecha: Date,
    sintomas: string
}

export type initialPatient = Omit<finalPatient, "id">