import type { Product } from '../types/product'

export const products: Product[] = [
    {
        id: 1,
        title: 'Ноутбук',
        price: 1500,
        inStock: true,
        rating: 4.5,
        category: 'Электроника',
        premium: true,
    },
    {
        id: 2,
        title: 'Мышка',
        price: 45,
        inStock: true,
        rating: 4.2,
        category: 'Аксессуары',
        premium: false,
    },
    {
        id: 3,
        title: 'Клавиатура АА04',
        price: 80,
        inStock: false,
        rating: 3.8,
        category: 'Аксессуары',
        premium: false,
    },
    {
        id: 4,
        title: 'Смартфон Макс',
        price: 1200,
        inStock: true,
        rating: 4.9,
        category: 'Мобильное устройство',
        premium: true,
    },
]