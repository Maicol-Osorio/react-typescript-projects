export type GuitarT = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}
export type GuitarItemT = Pick<GuitarT, "id" | "description" | "image" | "name" | "price"> &{
    quantity: number
}