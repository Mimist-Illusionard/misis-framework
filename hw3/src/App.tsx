import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'
import { products } from './data/products'
import './App.css'

function App() {
    const totalProducts = products.length
    const availableProducts = products.filter((product) => product.inStock).length

    const handleBuy = (title: string) => {
        alert(`Вы купили: ${title}`)
    }

    return (
        <div className="app">
            <Header />

            <div className="app__info">
                <p className="app__text">Всего продуктов: {totalProducts}</p>
                <p className="app__text">Доступные продукты: {availableProducts}</p>
            </div>

            <ProductList products={products} onBuy={handleBuy} />
        </div>
    )
}

export default App