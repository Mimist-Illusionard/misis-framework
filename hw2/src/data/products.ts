import type {Product} from "../types/product.ts";

export const products: Product[] = [
    {
        id: 1,
        title: 'Ноутбук',
        price: 59990,
        inStock: true,
    },
    {
        id: 2,
        title: 'Мышка',
        price: 1990,
        inStock: true,
    },
    {
        id: 3,
        title: 'Клавиатура',
        price: 3490,
        inStock: false,
    },
    {
        id: 4,
        title: 'Монитор',
        price: 15990,
        inStock: true,
    },
]