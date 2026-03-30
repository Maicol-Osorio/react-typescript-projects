export type menuItemsT = {
    id: number;
    name: string;
    price: number;
}

export type orderT = menuItemsT & {
    quantity: number
}