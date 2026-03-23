import ProductCard from '../ProductCard/ProductCard'
import type { Product } from '../../types/product'
import './ProductList.css'

type ProductListProps = {
    products: Product[]
    onBuy: (title: string) => void
}

function ProductList({ products, onBuy }: ProductListProps) {
    if (products.length === 0) {
        return <p className="product-list__empty">No products available</p>
    }

    return (
        <section className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onBuy={onBuy} />
            ))}
        </section>
    )
}

export default ProductList