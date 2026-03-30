import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { devtools, persist } from "zustand/middleware";
import { finalPatient, initialPatient } from "./types";

type patienetStore = {
    patienets: finalPatient[];
    userBiId: string;
    addPatient: (date: initialPatient) => void;
    deletePatient: (id: finalPatient["id"]) => void;
    getUserById: (id: finalPatient["id"]) => void;
    updatePatient: (date: initialPatient) => void;
};

const createPatient = (date: initialPatient): finalPatient => {
    return { ...date, id: uuidv4() };
};

export const usePatientStore = create<patienetStore>()(
    devtools(
    persist((set) => ({
        patienets: [],
        userBiId: "",
        addPatient: (date) => {
            const newPatient = createPatient(date);
            set((state) => ({
                patienets: [...state.patienets, newPatient],
            }));
        },
        deletePatient: (id) => {
            set((state) => ({
                patienets: state.patienets.filter((item) => item.id !== id),
                
            }));
        },
        getUserById: (id) => {
            set(() => ({
                userBiId: id,
            }));
        },
        updatePatient: (date) => {
            set((state) => ({
                patienets: state.patienets.map((item) =>
                    item.id === state.userBiId
                        ? { ...item, ...date } // Combina las propiedades existentes con las nuevas
                        : item
                ),
                userBiId: ""
            }));
        }
    }), {
        name: "patientsStrage"
    })
));
