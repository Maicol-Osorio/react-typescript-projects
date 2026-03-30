export type categorisT = {
    id: string,
    nombre: string,
    icono: string
}

export type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type spentT = {
    id: string;
    nombre: string;
    cantidad: number;
    categoria: string;
    fecha: Value
}

export type mainExpense = Omit<spentT, "id">