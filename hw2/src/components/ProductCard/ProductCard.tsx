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
            <p className="product-card__price">Цена: {product.price} ₽</p>
            <p className="product-card__status">
                Статус: {product.inStock ? 'В наличии' : 'Нет в наличии'}
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