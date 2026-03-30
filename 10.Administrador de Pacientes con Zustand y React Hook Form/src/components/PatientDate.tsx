type patientDateProps = {
    label: string,
    date: string
}

export const PatientDate = ({label, date}: patientDateProps)=>{
    return(
        <>
            <p className="uppercase font-semibold text-xs md:text-base">{label}: <span className="font-medium">{date}</span></p>
        </>
    )
}