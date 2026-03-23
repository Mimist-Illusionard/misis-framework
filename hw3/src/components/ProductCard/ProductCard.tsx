import type { Product } from '../../types/product'
import './ProductCard.css'

type ProductCardProps = {
    product: Product
    onBuy: (title: string) => void
}

function ProductCard({ product, onBuy }: ProductCardProps) {
    return (
        <div className="product-card">
            <h2 className="product-card__title">{product.title}</h2>

            <p className="product-card__category">{product.category}</p>

            <p className="product-card__price">Price: ${product.price}</p>

            {product.premium && (
                <p className="product-card__premium">⭐ Премиум</p>
            )}

            {product.rating > 4 && (
                <p className="product-card__top">Лучшый продукт</p>
            )}

            {product.price > 1000 && (
                <p className="product-card__luxury">Дорогой продукт</p>
            )}

            <p className="product-card__rating">Рейтинг: {product.rating}</p>

            <p className="product-card__status">
                {product.inStock ? 'Доступен' : 'Нет на складе'}
            </p>

            <button
                className="product-card__button"
                onClick={() => onBuy(product.title)}
                disabled={!product.inStock}
            >
                Купить
            </button>
        </div>
    )
}

export default ProductCard